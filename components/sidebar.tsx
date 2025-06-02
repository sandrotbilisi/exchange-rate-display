import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Building, Home, Link, Table } from "lucide-react";

import SidebarHeaderCustom from "@/components/dashboard/sidebar/header";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Branches",
    url: "/branches",
    icon: Building,
  },
  {
    title: "Tables",
    url: "/tables",
    icon: Table,
  },
  {
    title: "Links",
    url: "/dashboard/links",
    icon: Link,
  },
];

const SidebarComponent = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarHeaderCustom />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarComponent;
