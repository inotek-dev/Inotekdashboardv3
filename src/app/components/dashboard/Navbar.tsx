import { useState } from 'react';
import {
  Home,
  FileText,
  Globe,
  Users,
  Database,
  Radio,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  BarChart3,
  Archive,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export interface NavLink {
  icon: React.ElementType;
  label: string;
  slug: string;
  group: 'main' | 'settings';
}

export const navigationLinks: NavLink[] = [
  { icon: Home, label: 'Dashboard', slug: '/dashboard', group: 'main' },
  { icon: FileText, label: 'Reports', slug: '/reports', group: 'main' },
  { icon: Globe, label: 'Countries', slug: '/countries', group: 'main' },
  { icon: Users, label: 'Customers', slug: '/customers', group: 'main' },
  { icon: Database, label: 'Projects', slug: '/projects', group: 'main' },
  { icon: Radio, label: 'Dron Company', slug: '/dron-company', group: 'main' },
  { icon: User, label: 'Users', slug: '/users', group: 'main' },
  { icon: BarChart3, label: 'Statistics', slug: '/statistics', group: 'settings' },
  { icon: Archive, label: 'Archive', slug: '/archive', group: 'settings' },
  { icon: Settings, label: 'Settings', slug: '/settings', group: 'settings' },
];

interface NavbarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileToggle: () => void;
  activeLink: string;
  onActiveLinkChange: (link: string) => void;
}

export function Navbar({
  isCollapsed,
  onToggle,
  isMobileOpen,
  onMobileToggle,
  activeLink,
  onActiveLinkChange,
}: NavbarProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleNavClick = (link: NavLink) => {
    onActiveLinkChange(link.slug);
    if (isMobileOpen) {
      onMobileToggle();
    }
  };

  const mainLinks = navigationLinks.filter((link) => link.group === 'main');
  const settingsLinks = navigationLinks.filter((link) => link.group === 'settings');

  const NavButton = ({ link }: { link: NavLink }) => {
    const Icon = link.icon;
    const isActive = activeLink === link.slug;

    const button = (
      <button
        onClick={() => handleNavClick(link)}
        onMouseEnter={() => setHoveredLink(link.label)}
        onMouseLeave={() => setHoveredLink(null)}
        className={`
          w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
          ${
            isActive
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          }
          ${isCollapsed ? 'justify-center' : ''}
        `}
      >
        <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
        {!isCollapsed && <span className="truncate">{link.label}</span>}
      </button>
    );

    if (isCollapsed) {
      return (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent side="right">
              <p>{link.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return button;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onMobileToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-full bg-[#232323] border-r border-[#383838] z-50 transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-[60px]' : 'w-[300px]'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo & Toggle Section */}
          <div className="h-[60px] flex items-center justify-between px-3 border-b border-[#383838]">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:bg-[#2a2a2a]"
              onClick={onMobileToggle}
            >
              <Menu className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex border-[#383838] hover:bg-[#2a2a2a] text-foreground"
              onClick={onToggle}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </Button>

            {!isCollapsed && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">I</span>
                </div>
                <span className="font-semibold text-foreground">INOTEK</span>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-between p-3 overflow-y-auto">
            {/* Main Navigation */}
            <nav className="space-y-1">
              {mainLinks.map((link) => (
                <NavButton key={link.slug} link={link} />
              ))}
            </nav>

            {/* Settings Navigation */}
            <nav className="space-y-1">
              {settingsLinks.map((link) => (
                <NavButton key={link.slug} link={link} />
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}