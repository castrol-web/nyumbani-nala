import { create } from "zustand";
import axios from 'axios';
const url = import.meta.env.VITE_SERVER_URL;

interface Project {
    _id?: string,
    projectImage: string,
    requirements: string[],
    address: string,
    goals: string[],
    year: string,
    contact: string[],
    title: string,
    teamMembers: string[],
    summary: string
}


interface projectState {
    projects: Project[],
    loadingProjects: boolean,
    err: string,
    fetchProjects: () => Promise<void>
}

const useProjectsStore = create<projectState>((set) => ({
    projects: [],
    loadingProjects: false,
    err: '',
    fetchProjects: async () => {
        set({ loadingProjects: true })
        try {
            const response = await axios.get(`${url}/api/user/projects`);
            if (response.status === 200) {
                set({
                    projects: response.data
                })
            }
        } catch (error: any) {
            set({ err: error?.response?.data?.message || error.message || 'Unknown error' });
        } finally {
            set({
                loadingProjects: false
            })
        }
    }
}))


export default useProjectsStore;