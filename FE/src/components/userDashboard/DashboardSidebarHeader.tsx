"use client";

import { usePathname, useRouter } from "next/navigation";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

export default function DashboardSidebarHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const selectedWorkspace = pathname.startsWith("/dashboard/design")
    ? "Design"
    : "Academy";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              {selectedWorkspace}
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => router.push("/dashboard/academy")}>
              Academy
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => router.push("/dashboard/design")}>
              Design
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
