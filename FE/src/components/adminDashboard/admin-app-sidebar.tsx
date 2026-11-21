import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import AdminDashboardSidebarHeader from "./AdminDashboardSidebarHeader";
import AdminDashboardSidebarContent from "./AdminDashboardSidebarContent";
import AdminDashboardSidebarFooter from "./AdminDashboardSidebarFooter";

export function AdminAppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <AdminDashboardSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AdminDashboardSidebarContent />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AdminDashboardSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
