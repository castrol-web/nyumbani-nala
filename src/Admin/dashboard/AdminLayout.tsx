import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          collapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <AdminHeader openMenu={() => setMobileOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;