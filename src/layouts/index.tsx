import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function DefaultLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}