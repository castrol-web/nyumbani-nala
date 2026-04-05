import { create } from "zustand";
import axios from 'axios';
const url = import.meta.env.VITE_SERVER_URL;

export interface ProjectSection {
    _id: string
    title: string
    content: string
}

export interface VolunteerOpportunity {
    _id: string
    title: string
    description: string
}

interface Project {
    _id: string
    name: string
    subtitle: string
    description: string
    leader: string
    leaderRole: string
    location: string
    coverImage: string
    status: "active" | "paused" | "completed"
    beneficiaries: number
    establishedYear: number
    sections: ProjectSection[]
    volunteerOpportunities: VolunteerOpportunity[]
    tags: string[]
    contactEmail?: string
    website?: string
    createdAt: string
    updatedAt: string
}


interface projectState {
    Allprojects: Project[],
    loadingProjects: boolean,
    err: string,
    fetchProjects: () => Promise<void>
}

const useProjectsStore = create<projectState>((set) => ({
    Allprojects: [],
    loadingProjects: false,
    err: '',
    fetchProjects: async () => {
        set({ loadingProjects: true })
        try {
            const response = await axios.get(`${url}/api/user/projects`);
            if (response.status === 200) {
                set({
                    Allprojects: response.data
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