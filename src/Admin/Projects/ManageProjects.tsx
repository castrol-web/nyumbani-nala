import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProjectsStore from "../../zustand/UseProjectsStore";

const url = import.meta.env.VITE_SERVER_URL;

/* ---------------- TYPES (MATCH SCHEMA EXACTLY) ---------------- */

export interface Project {
    _id?: string;
    projectImage?: string;
    sponsors?: string;
    title: string;
    year: string;
    address: string;
    summary: string;
    goals: string[] | any;
    requirements: string[] | any;
    contact: { phone?: string; email?: string }[] | any;
    teamMembers: { name?: string; role?: string }[] | any;
}

/* ---------------- DEFAULT VALUES ---------------- */

const defaultValues: Project = {
    projectImage: "",
    sponsors: "",
    title: "",
    year: "",
    address: "",
    summary: "",
    goals: [],
    requirements: [],
    contact: [],
    teamMembers: [],
};

/* ---------------- COMPONENT ---------------- */

function ManageProjects() {
    const { projects, fetchProjects, loadingProjects } = useProjectsStore();

    const {
        register,
        handleSubmit,
        reset,
        control,
    } = useForm<Project>({ defaultValues });

    const [showModal, setShowModal] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    // Field arrays for dynamic inputs
    const goalsFA = useFieldArray({ control, name: "goals" });
    const requirementsFA = useFieldArray({ control, name: "requirements" });
    const contactFA = useFieldArray({ control, name: "contact" });
    const teamFA = useFieldArray({ control, name: "teamMembers" });

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    /* ---------------- ACTIONS ---------------- */

    const openAddModal = () => {
        reset(defaultValues);
        setEditingProject(null);
        setImageFile(null);
        setShowModal(true);
    };

    const handleEdit = (project: Project) => {
        const normalizedProject = {
            ...project,
            goals: Array.isArray(project.goals) ? (typeof project.goals[0] === 'string' ? project.goals : project.goals) : [],
            requirements: Array.isArray(project.requirements) ? (typeof project.requirements[0] === 'string' ? project.requirements : project.requirements) : [],
            contact: Array.isArray(project.contact) ? (typeof project.contact[0] === 'string' ? [] : project.contact) : [],
            teamMembers: Array.isArray(project.teamMembers) ? (typeof project.teamMembers[0] === 'string' ? [] : project.teamMembers) : [],
        };
        reset(normalizedProject);
        setEditingProject(normalizedProject);
        setShowModal(true);
    };

    const handleCancel = () => {
        reset(defaultValues);
        setEditingProject(null);
        setImageFile(null);
        setShowModal(false);
    };

    const handleDelete = async (id?: string) => {
        if (!id || !confirm("Are you sure you want to delete this project?")) return;
        try {
            const response = await axios.delete(`${url}/api/admin/delete/project/${id}`);
           if(response.status === 200){
            toast.success("Project deleted successfully");
           }
            fetchProjects();
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Delete failed");
        }
    };

    const onSubmit = async (data: Project) => {
        setLoading(true);
        try {
            const isEdit = Boolean(editingProject?._id);

            // Create FormData for the image
            const formData = new FormData();
            if (imageFile) {
                formData.append("projectImage", imageFile); // only the image
            }


            // Everything else as JSON
            const payload = {
                title: data.title,
                year: data.year,
                address: data.address,
                summary: data.summary,
                sponsors: data.sponsors || "",
                goals: data.goals,
                requirements: data.requirements,
                contact: data.contact,
                teamMembers: data.teamMembers,
            };

            // Append JSON as a string to FormData
            formData.append("data", JSON.stringify(payload));

            // Axios call
            if (isEdit) {
                const response = await axios.put(`${url}/api/admin/edit/project/${editingProject?._id}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                if(response.status === 200){
                    toast.success("Project updated successfully");
                }
            } else {
               const response= await axios.post(`${url}/api/admin/create/projects`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                if(response.status === 200){
                    toast.success("Project created successfully");
                }
            }

            handleCancel();
            fetchProjects();
        } catch (err: any) {
            toast.error(err?.response?.data?.message || "Operation failed");
        } finally {
            setLoading(false);
        }
    };

    /* ---------------- UI ---------------- */

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Projects Management</h1>

            <button className="btn btn-primary mb-4" onClick={openAddModal}>
                <AiOutlinePlus /> Add Project
            </button>

            {/* -------- TABLE -------- */}
            {loadingProjects ? (
                <div className="flex justify-center py-10">
                    <span className="loading loading-spinner loading-lg" />
                </div>
            ) : projects.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500">No projects available,add a project first!</p>
                </div>
            ) : (
                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="table">
                        <thead className="bg-gray-900 text-white">
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Actions</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((p) => (
                                <tr key={p._id}>
                                    <td>
                                        {p.projectImage && (
                                            <img
                                                src={p.projectImage}
                                                className="w-10 h-10 object-cover rounded"
                                            />
                                        )}
                                    </td>
                                    <td>{p.title}</td>
                                    <td>{p.year}</td>
                                    <td className="flex gap-2">
                                        <button
                                            className="btn btn-sm btn-info"
                                            onClick={() => handleEdit(p)}
                                        >
                                            <AiOutlineEdit />
                                        </button>
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDelete(p._id)}
                                        >
                                            <AiOutlineDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* -------- MODAL -------- */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-3xl p-6 rounded-xl overflow-y-auto max-h-[90vh]">
                        <h2 className="text-xl font-semibold mb-4">
                            {editingProject ? "Edit Project" : "Add Project"}
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <input  className="input  input-bordered w-full" placeholder="Title" {...register("title")} />
                            <input className="input input-bordered w-full" placeholder="Year" {...register("year")} />
                            <input className="input input-bordered w-full" placeholder="Sponsors" {...register("sponsors")} />
                            <input className="input input-bordered w-full" placeholder="Address" {...register("address")} />
                            <textarea className="textarea textarea-bordered w-full" placeholder="Write a short story about the project" {...register("summary")} />

                            {/* Goals */}
                            <ArrayField label="Goals" fa={goalsFA} register={register} name="goals" />

                            {/* Requirements */}
                            <ArrayField label="Requirements" fa={requirementsFA} register={register} name="requirements" />

                            {/* Contact */}
                            <div>
                                <h3 className="font-semibold mb-2">Contacts</h3>
                                {contactFA.fields.map((f, i) => (
                                    <div key={f.id} className="grid grid-cols-2 gap-2 mb-2">
                                        <input className="input input-bordered" placeholder="Phone" {...register(`contact.${i}.phone`)} />
                                        <input className="input input-bordered" placeholder="Email" {...register(`contact.${i}.email`)} />
                                        <button type="button" className="btn btn-xs btn-error col-span-2" onClick={() => contactFA.remove(i)}>Remove</button>
                                    </div>
                                ))}
                                <button type="button" className="btn btn-sm btn-outline" onClick={() => contactFA.append({})}>
                                    + Add Contact
                                </button>
                            </div>

                            {/* Team */}
                            <div>
                                <h3 className="font-semibold mb-2">Team Members</h3>
                                {teamFA.fields.map((f, i) => (
                                    <div key={f.id} className="grid grid-cols-2 gap-2 mb-2">
                                        <input className="input input-bordered" placeholder="Name" {...register(`teamMembers.${i}.name`)} />
                                        <input className="input input-bordered" placeholder="Role" {...register(`teamMembers.${i}.role`)} />
                                        <button type="button" className="btn btn-xs btn-error col-span-2" onClick={() => teamFA.remove(i)}>Remove</button>
                                    </div>
                                ))}
                                <button type="button" className="btn btn-sm btn-outline" onClick={() => teamFA.append({})}>
                                    + Add Team Member
                                </button>
                            </div>

                            <input type="file" className="file-input w-full" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />

                            <div className="flex justify-end gap-3">
                                <button className="btn btn-primary" disabled={loading}>
                                    {loading ? "Saving..." : "Save"}
                                </button>
                                <button type="button" className="btn btn-outline" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
}

/* ---------------- REUSABLE ARRAY INPUT ---------------- */

function ArrayField({ label, fa, register, name }: any) {
    return (
        <div>
            <h3 className="font-semibold mb-2">{label}</h3>
            {fa.fields.map((f: any, i: number) => (
                <div key={f.id} className="flex gap-2 mb-2">
                    <input className="input input-bordered w-full" {...register(`${name}.${i}`)} />
                    <button type="button" className="btn btn-error btn-sm" onClick={() => fa.remove(i)}>✕</button>
                </div>
            ))}
            <button type="button" className="btn btn-sm btn-outline" onClick={() => fa.append("")}>
                + Add {label}
            </button>
        </div>
    );
}

export default ManageProjects;
