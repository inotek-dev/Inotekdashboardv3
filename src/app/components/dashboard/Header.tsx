import { Menu, Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface HeaderProps {
  isMobileOpen: boolean;
  onMobileToggle: () => void;
  activePageTitle: string;
}

export function Header({ isMobileOpen, onMobileToggle, activePageTitle }: HeaderProps) {
  return (
    <header className="h-[60px] border-b border-[#383838] bg-[#2a2a2a] sticky top-0 z-30">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-[#383838]"
            onClick={onMobileToggle}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="font-semibold text-lg text-foreground">{activePageTitle}</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* New Badge with Notification */}
          <div className="relative">
            <Badge variant="default" className="bg-[#1e88e5] text-white hover:bg-[#1976d2]">
              NEW
            </Badge>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative text-foreground hover:bg-[#383838]">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#1e88e5] rounded-full" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative h-9 w-9 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1e88e5] focus:ring-offset-2 focus:ring-offset-[#2a2a2a]">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-[#383838] text-foreground">U</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-[#2a2a2a] border-[#383838]">
              <DropdownMenuLabel className="text-foreground">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#383838]" />
              <DropdownMenuItem className="text-foreground hover:bg-[#383838] focus:bg-[#383838]">Profile</DropdownMenuItem>
              <DropdownMenuItem className="text-foreground hover:bg-[#383838] focus:bg-[#383838]">Settings</DropdownMenuItem>
              <DropdownMenuItem className="text-foreground hover:bg-[#383838] focus:bg-[#383838]">Team</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#383838]" />
              <DropdownMenuItem className="text-foreground hover:bg-[#383838] focus:bg-[#383838]">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}