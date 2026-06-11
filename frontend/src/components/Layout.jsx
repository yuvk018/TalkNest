import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Mobile Overlay */}
        {showSidebar && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        {showSidebar && (
          <div
            className={`
              fixed lg:static z-50 h-screen
              transform transition-transform duration-300
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              lg:translate-x-0
            `}
          >
            <Sidebar />
          </div>
        )}

        <div className="flex-1 flex flex-col">
          {/* Mobile Hamburger */}
          {showSidebar && (
            <div className="lg:hidden p-3 border-b border-base-300">
              <button
                className="btn btn-ghost btn-square"
                onClick={() => setIsSidebarOpen(true)}
              >
                <MenuIcon className="size-6" />
              </button>
            </div>
          )}

          <Navbar />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
