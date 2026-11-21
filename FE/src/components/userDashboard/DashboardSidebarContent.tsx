"use client";

import { usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { dashboardNavigation } from "./DashboardNavigation";

export function DashboardSidebarContent() {
  const pathname = usePathname();

  const isDesign = pathname.startsWith("/dashboard/design");

  const navigation = isDesign
    ? dashboardNavigation.design
    : dashboardNavigation.academy;

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navigation.map((item) => (
          <SidebarMenuItem key={item.url}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>{item.title}</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
