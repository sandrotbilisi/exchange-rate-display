import { ChevronDown } from "lucide-react"

import { SidebarMenuButton } from "@/components/ui/sidebar"

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"
import { BadgeCheck, Bell, ChevronsUpDown, LogOut, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const SidebarHeader = () => {
    return (
        <SidebarMenu>
      
    <DropdownMenu>


      <SidebarMenu>
          <SidebarMenuItem>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>

            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <User className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Alex</span>
                  <span className="truncate text-xs">Kobaladze 8a</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </a>
            </SidebarMenuButton>
            </DropdownMenuTrigger>



            <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={false ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={'alex'} alt={'alex'} />
                  <AvatarFallback className="rounded-lg">AT</AvatarFallback>
                </Avatar> 
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{"Alex"}</span>
                  <span className="truncate text-xs">{"alexandretsetskhladze"}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>

          </DropdownMenuContent>



            
            </DropdownMenu>

          </SidebarMenuItem>
        </SidebarMenu>




         
        </DropdownMenu>


      
    </SidebarMenu>
    )
}

export default SidebarHeader