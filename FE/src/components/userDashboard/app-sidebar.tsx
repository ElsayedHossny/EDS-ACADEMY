import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import DashboardSidebarHeader from "./DashboardSidebarHeader";
import DashboardSidebarFooter from "./DashboardSidebarFooter";
import { DashboardSidebarContent } from "./DashboardSidebarContent";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <DashboardSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <DashboardSidebarContent />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DashboardSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
