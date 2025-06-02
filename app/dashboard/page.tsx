import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
import {
  Building,
  Calendar,
  Link,
  Search,
  Settings,
  Table,
} from "lucide-react";

import SidebarHeaderCustom from "@/components/dashboard/sidebar/header";

const items = [
  {
    title: "Branches",
    url: "#",
    icon: Building,
  },
  {
    title: "Tables",
    url: "#",
    icon: Table,
  },
  {
    title: "Links",
    url: "#",
    icon: Link,
  },
];

const Dashboard = () => {
  return (
    <div>
      <Sidebar>
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
    </div>
  );
};

export default Dashboard;
