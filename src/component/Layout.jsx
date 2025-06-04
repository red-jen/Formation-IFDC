import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Main content with proper spacing */}
      <main className="pt-16">
        <div className="min-h-screen">
          <Outlet />
        </div>
      </main>
    </div>
  );
}