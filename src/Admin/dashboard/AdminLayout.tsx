import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`grow p-4 flex flex-col min-h-screen transition-all duration-300 ${
          collapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <AdminHeader />
        <div className="grow">
          <Outlet />
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;