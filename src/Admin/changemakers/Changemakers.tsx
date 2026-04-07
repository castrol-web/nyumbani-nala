import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "lucide-react";
import { Socket } from "../../socket/Socket";
const url = import.meta.env.VITE_SERVER_URL || "http://localhost:8050";
import { useEffect, useState } from "react";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";

interface Volunteer {
  _id?: string;
  name: string;
  email: string;
  country: string;
  gender: string;
  phone: string;
  status: "pending" | "approved" | "rejected"
}

function Changemakers() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [volunteerToDelete, setVolunteerToDelete] = useState<Volunteer | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [approving, setApproving] = useState(false);

  useEffect(() => {

    fetchVolunteers()

    Socket.on("new volunteer", (volunteers:Volunteer) => {
      console.log("New volunteer:", volunteers)

      fetchVolunteers()

      toast.info("New volunteer application received")
    })

    return () => {
      Socket.off("new volunteer")
    }

  }, [])

  //fetching volunteers 
  async function fetchVolunteers() {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/api/admin/volunteers`);
      setVolunteers(response.data);
    } catch (err) {
      console.error("Error fetching volunteers:", err);
    } finally {
      setLoading(false);
    }
  }

  //handle view
  function handleView(volunteer: any) {
    console.log("View volunteer:", volunteer);
    // Implement view functionality here (e.g., open a modal with volunteer details)
  }

  //handle delete click
  function handleDeleteClick(volunteer: Volunteer) {
    setVolunteerToDelete(volunteer);
    setDeleteDialogOpen(true);
  }


  //confirm delete
  async function confirmDelete() {
    if (!volunteerToDelete) return;
    const id = volunteerToDelete._id
    //handle delete
    try {
      setDeleting(true)
      const response = await axios.delete(`${url}/api/admin/volunteers/${id}`);
      if (response.status === 200) {
        toast.success("Volunteer deleted successfully");
      }
      fetchVolunteers(); // Refresh the list after deletion
      setDeleteDialogOpen(false);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(`Error deleting volunteer: ${err.response.data.message || err.message}`);
      } else {
        toast.error(`Error deleting volunteer: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }
    } finally {
      setDeleting(false);
    }
  }

  //approve volunteer 
  async function ApproveVolunteer(volunteer: Volunteer) {
    const id = volunteer._id;
    try {
      setApproving(true);
      const response = await axios.put(`${url}/api/admin/volunteer/${id}/approve`)
      if (response.status === 200) {
        toast.success("Successfully approved volunteer")
        fetchVolunteers()
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(`Error approving volunteer:${error.response.data.message || error.message}`)
      }
    } finally {
      setApproving(false)
    }
  }

  return (
    <div>
      {/* header */}
      <div className="mx-auto">
        <h1 className="text-center text-xl font-bold">Volunteers Management</h1>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-md">
        {loading ? (
          <div className="flex justify-center items-center h-16">
            <span className="loading loading-spinner"></span>
          </div>
        ) : volunteers.length === 0 ? (
          <div className="text-center text-gray-400 text-lg py-48">No volunteers available.</div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-800 text-gray-300">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Gender</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!approving && volunteers.map((volunteer, idx) =>
                <tr key={volunteer._id} className={`${idx % 2 === 0 ? " bg-gray-700 text-gray-300" : "bg-black text-white"} hover:bg-gray-700 transition-colors`}>
                  <td className="px-4 py-3">{volunteer.name}</td>
                  <td className="px-4 py-3">{volunteer.email}</td>
                  <td className="px-4 py-3">{volunteer.country}</td>
                  <td className="px-4 py-3">{volunteer.gender}</td>
                  <td className="px-4 py-3">{volunteer.phone}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`font-medium ${volunteer.status === "approved" ? "text-green-500" : volunteer.status === "pending" ? "text-yellow-400" : ""}`}>
                      {volunteer.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="btn btn-sm btn-outline btn-info" onClick={() => handleView(volunteer)}><AiFillEye /></button>
                      <button className="btn btn-sm btn-error text-white" onClick={() => handleDeleteClick(volunteer)}><AiOutlineDelete /></button>
                      {volunteer.status === "pending" ? <button className="btn btn-sm btn-success text-white" onClick={() => ApproveVolunteer(volunteer)}>{approving ? "approving..." : "Approve"}</button> : ""}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {!deleting && deleteDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setDeleteDialogOpen(false)}
          />

          <div className="relative bg-card border border-border rounded-xl p-6 w-full max-w-md mx-4 shadow-xl">
            <button
              onClick={() => setDeleteDialogOpen(false)}
              className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold">Delete Project</h2>

            <p className="text-muted-foreground mt-2">
              Are you sure you want to delete ?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setDeleteDialogOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button
                disabled={deleting}
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                {deleting ? "Deleting..." : "Delete Project"}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </div>
  )
}


export default Changemakers