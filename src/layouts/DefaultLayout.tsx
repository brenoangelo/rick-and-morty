import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div className="bg-gray-900 h-screen">
      <Outlet />
    </div>
  )
}