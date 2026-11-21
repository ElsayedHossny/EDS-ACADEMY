import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AdminDashboardSidebarFooter() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg">
          <Avatar>
            <AvatarFallback>EH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col text-left">
            <span className="text-sm font-medium">Elsayed Hossny</span>
            <span className="text-xs text-muted-foreground">
              elsayed@example.com
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
