import { FaBars } from "react-icons/fa";

interface AdminHeaderProps {
  openMenu: () => void;
}

const AdminHeader = ({ openMenu }: AdminHeaderProps) => {
  const user = {
    name: "Admin",
  };

  return (
    <header className="navbar shadow-sm mb-4 rounded-lg px-4 relative z-30">
      <div className="flex items-center gap-3 flex-1">

        {/* Mobile hamburger */}
        <button
          onClick={openMenu}
          className="md:hidden p-2 rounded-lg bg-gray-500"
        >
          <FaBars size={18} />
        </button>

        <h1 className="text-xl font-bold text-primary">
          Admin Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">{user.name}</span>

        <div className="avatar avatar-online">
          <div className="rounded-full w-10">
            <img
              alt="admin profile"
              src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;