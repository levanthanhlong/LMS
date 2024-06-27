
import NavbarRoutes from "@/components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"
import { SidebarRoutes } from "./sidebar-routes"


export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar/>
      <NavbarRoutes/>
    </div>
  )
}
