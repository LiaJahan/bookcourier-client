import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-2xl font-bold p-5">
        Dashboard
      </h2>

      <Outlet />
    </div>
  );
};

export default DashboardLayout;