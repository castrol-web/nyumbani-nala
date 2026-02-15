import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProjectsStore from "../../zustand/UseProjectsStore";

const url = import.meta.env.VITE_SERVER_URL;

/* ---------------- TYPES ---------------- */

export interface Project {
  _id?: string;
  projectImage?: string;
  title: string;
  summary: string;
}

/* ---------------- DEFAULT VALUES ---------------- */

const defaultValues: Project = {
  projectImage: "",
  title: "",
  summary: "",
};

/* ---------------- COMPONENT ---------------- */

function ManageProjects() {
  const { projects, fetchProjects, loadingProjects } = useProjectsStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Project>({ defaultValues });

  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  /* ---------------- EFFECTS ---------------- */

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  /* ---------------- ACTIONS ---------------- */

  const openAddModal = () => {
    reset(defaultValues);
    setEditingProject(null);
    setImageFile(null);
    setPreviewImage(null);
    setShowModal(true);
  };

  const handleEdit = (project: Project) => {
    reset(project);
    setEditingProject(project);
    setPreviewImage(project.projectImage || null);
    setImageFile(null);
    setShowModal(true);
  };

  const handleCancel = () => {
    reset(defaultValues);
    setEditingProject(null);
    setImageFile(null);
    setPreviewImage(null);
    setShowModal(false);
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!window.confirm("This action cannot be undone. Delete project?")) return;

    try {
      await axios.delete(`${url}/api/admin/delete/project/${id}`);
      toast.success("Project deleted successfully");
      fetchProjects();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Delete failed");
    }
  };

  const handleImageChange = (file: File | null) => {
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(editingProject?.projectImage || null);
    }
  };

  const onSubmit = async (data: Project) => {
    setLoading(true);

    try {
      const isEdit = Boolean(editingProject?._id);

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("summary", data.summary);

      if (imageFile) {
        formData.append("projectImage", imageFile);
      }

      if (isEdit) {
        await axios.put(
          `${url}/api/admin/edit/project/${editingProject?._id}`,
          formData
        );
        toast.success("Project updated successfully");
      } else {
        await axios.post(`${url}/api/admin/create/projects`, formData);
        toast.success("Project created successfully");
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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects Management</h1>

      <button className="btn btn-primary mb-6" onClick={openAddModal}>
        <AiOutlinePlus /> Add Project
      </button>

      {/* -------- TABLE -------- */}

      {loadingProjects ? (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg" />
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No projects available. Add one to get started!
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="table">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p._id}>
                  <td>
                    {p.projectImage && (
                      <img
                        src={p.projectImage}
                        alt={p.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="font-medium text-gray-600">{p.title}</td>
                  <td className="flex gap-2 justify-center">
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative">

            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              {editingProject ? "Edit Project" : "Add New Project"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Title */}
              <div>
                <input
                  className="input input-bordered w-full"
                  placeholder="Project Title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Summary */}
              <div>
                <textarea
                  className="textarea textarea-bordered w-full min-h-[120px]"
                  placeholder="Write a short story about the project"
                  {...register("summary", {
                    required: "Summary is required",
                  })}
                />
                {errors.summary && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.summary.message}
                  </p>
                )}
              </div>

              {/* Image Preview */}
              {previewImage && (
                <div>
                  <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-lg shadow"
                  />
                </div>
              )}

              {/* File Input */}
              <input
                type="file"
                className="file-input w-full"
                accept="image/*"
                onChange={(e) =>
                  handleImageChange(e.target.files?.[0] || null)
                }
              />

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

                <button className="btn btn-primary" disabled={loading}>
                  {loading ? (
                    <span className="loading loading-spinner loading-sm" />
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" />
    </div>
  );
}

export default ManageProjects;
