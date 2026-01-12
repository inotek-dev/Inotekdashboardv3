import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  FileText,
  Globe,
  Users,
  FolderOpen,
  Plane,
  User,
  ChevronRight,
  RotateCcw,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';

type ArchiveSection = 'reports' | 'countries' | 'customers' | 'projects' | 'dron-company' | 'users';

interface ArchiveNavItem {
  id: ArchiveSection;
  label: string;
  icon: typeof FileText;
}

export function ArchivePage() {
  const [activeSection, setActiveSection] = useState<ArchiveSection>('reports');

  const archiveNavItems: ArchiveNavItem[] = [
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'countries', label: 'Countries', icon: Globe },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'dron-company', label: 'Dron Company', icon: Plane },
    { id: 'users', label: 'Users', icon: User },
  ];

  const renderArchiveContent = () => {
    switch (activeSection) {
      case 'reports':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Archived Reports</h3>
              <p className="text-sm text-muted-foreground">
                View and restore reports that have been deleted from the system.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#383838]">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Report ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Project</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Deleted Date</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: 'RPT-2024-089',
                      project: 'Solar Farm Inspection - Phase 2',
                      customer: 'GreenEnergy Corp',
                      status: 'Completed',
                      deletedDate: '2025-12-28',
                    },
                    {
                      id: 'RPT-2024-067',
                      project: 'Bridge Assessment',
                      customer: 'City Infrastructure Dept',
                      status: 'Draft',
                      deletedDate: '2025-12-15',
                    },
                    {
                      id: 'RPT-2024-045',
                      project: 'Warehouse Roof Survey',
                      customer: 'LogiTech Warehousing',
                      status: 'Completed',
                      deletedDate: '2025-11-30',
                    },
                    {
                      id: 'RPT-2024-023',
                      project: 'Agricultural Field Analysis',
                      customer: 'FarmCo Industries',
                      status: 'In Progress',
                      deletedDate: '2025-11-18',
                    },
                  ].map((report, index) => (
                    <tr key={index} className="border-b border-[#383838] hover:bg-[#232323] transition-colors">
                      <td className="py-3 px-4">
                        <span className="text-sm font-medium text-foreground">{report.id}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-foreground">{report.project}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{report.customer}</span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant="outline"
                          className={`border-[#383838] ${
                            report.status === 'Completed'
                              ? 'text-[#10b981]'
                              : report.status === 'In Progress'
                              ? 'text-[#f59e0b]'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {report.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{report.deletedDate}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-primary"
                          >
                            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                            Restore
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-destructive"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'countries':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Archived Countries</h3>
              <p className="text-sm text-muted-foreground">
                View and restore country regions that have been deleted from the system.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#383838]">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Country</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Region</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Managers</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customers</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Deleted Date</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      country: 'United States',
                      region: 'Southwest Region',
                      managers: 2,
                      customers: 8,
                      deletedDate: '2025-12-20',
                    },
                    {
                      country: 'Canada',
                      region: 'Ontario',
                      managers: 1,
                      customers: 5,
                      deletedDate: '2025-12-10',
                    },
                    {
                      country: 'United Kingdom',
                      region: 'Scotland',
                      managers: 1,
                      customers: 3,
                      deletedDate: '2025-11-25',
                    },
                  ].map((country, index) => (
                    <tr key={index} className="border-b border-[#383838] hover:bg-[#232323] transition-colors">
                      <td className="py-3 px-4">
                        <span className="text-sm font-medium text-foreground">{country.country}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-foreground">{country.region}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{country.managers}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{country.customers}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{country.deletedDate}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-primary"
                          >
                            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                            Restore
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-destructive"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'customers':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Archived Customers</h3>
              <p className="text-sm text-muted-foreground">
                View and restore customer accounts that have been deleted from the system.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#383838]">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Contact</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Region</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Projects</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Deleted Date</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: 'TechVision Solutions',
                      contact: 'mike.roberts@techvision.com',
                      region: 'West Coast',
                      projects: 12,
                      deletedDate: '2025-12-22',
                    },
                    {
                      name: 'Metro Construction Ltd',
                      contact: 'sarah.chen@metroconstruct.com',
                      region: 'Midwest',
                      projects: 8,
                      deletedDate: '2025-12-18',
                    },
                    {
                      name: 'AgriTech Farms',
                      contact: 'john.williams@agritech.com',
                      region: 'South',
                      projects: 15,
                      deletedDate: '2025-11-28',
                    },
                    {
                      name: 'Coastal Realty Group',
                      contact: 'emma.davis@coastalrealty.com',
                      region: 'East Coast',
                      projects: 6,
                      deletedDate: '2025-11-15',
                    },
                  ].map((customer, index) => (
                    <tr key={index} className="border-b border-[#383838] hover:bg-[#232323] transition-colors">
                      <td className="py-3 px-4">
                        <span className="text-sm font-medium text-foreground">{customer.name}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{customer.contact}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-foreground">{customer.region}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{customer.projects}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{customer.deletedDate}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-primary"
                          >
                            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                            Restore
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-destructive"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Archived Projects</h3>
              <p className="text-sm text-muted-foreground">
                View and restore projects that have been deleted from the system.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#383838]">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Project Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Completion</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Deleted Date</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: 'Highway 101 Bridge Inspection',
                      customer: 'State DOT',
                      status: 'Completed',
                      completion: '95%',
                      deletedDate: '2025-12-25',
                    },
                    {
                      name: 'Downtown Rooftop Survey',
                      customer: 'UrbanDev Corp',
                      status: 'In Progress',
                      completion: '60%',
                      deletedDate: '2025-12-12',
                    },
                    {
                      name: 'Power Line Corridor Mapping',
                      customer: 'Energy Solutions Inc',
                      status: 'Completed',
                      completion: '100%',
                      deletedDate: '2025-11-22',
                    },
                    {
                      name: 'Wind Farm Site Assessment',
                      customer: 'GreenEnergy Corp',
                      status: 'On Hold',
                      completion: '40%',
                      deletedDate: '2025-11-08',
                    },
                  ].map((project, index) => (
                    <tr key={index} className="border-b border-[#383838] hover:bg-[#232323] transition-colors">
                      <td className="py-3 px-4">
                        <span className="text-sm font-medium text-foreground">{project.name}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{project.customer}</span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant="outline"
                          className={`border-[#383838] ${
                            project.status === 'Completed'
                              ? 'text-[#10b981]'
                              : project.status === 'In Progress'
                              ? 'text-[#f59e0b]'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{project.completion}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{project.deletedDate}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-primary"
                          >
                            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                            Restore
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-destructive"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'dron-company':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Archived Dron Companies</h3>
              <p className="text-sm text-muted-foreground">
                View and restore drone operator companies that have been deleted from the system.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#383838]">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Company Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Contact Person</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Pilots</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Fleet Size</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Deleted Date</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: 'SkyView Aerial Services',
                      contact: 'David Martinez',
                      pilots: 8,
                      fleet: 12,
                      deletedDate: '2025-12-19',
                    },
                    {
                      name: 'Precision Drone Works',
                      contact: 'Lisa Thompson',
                      pilots: 5,
                      fleet: 7,
                      deletedDate: '2025-12-05',
                    },
                    {
                      name: 'Aerial Insights Co',
                      contact: 'Robert Lee',
                      pilots: 12,
                      fleet: 18,
                      deletedDate: '2025-11-20',
                    },
                  ].map((company, index) => (
                    <tr key={index} className="border-b border-[#383838] hover:bg-[#232323] transition-colors">
                      <td className="py-3 px-4">
                        <span className="text-sm font-medium text-foreground">{company.name}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{company.contact}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-foreground">{company.pilots}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{company.fleet}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{company.deletedDate}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-primary"
                          >
                            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                            Restore
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-destructive"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Archived Users</h3>
              <p className="text-sm text-muted-foreground">
                View and restore user accounts that have been deleted from the system.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#383838]">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Role</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Last Active</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Deleted Date</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: 'Michael Chen',
                      email: 'm.chen@example.com',
                      role: 'Pilot',
                      lastActive: '2025-12-15',
                      deletedDate: '2025-12-20',
                    },
                    {
                      name: 'Jessica Brown',
                      email: 'j.brown@example.com',
                      role: 'Project Manager',
                      lastActive: '2025-12-01',
                      deletedDate: '2025-12-10',
                    },
                    {
                      name: 'Daniel Wilson',
                      email: 'd.wilson@example.com',
                      role: 'Client',
                      lastActive: '2025-11-20',
                      deletedDate: '2025-11-28',
                    },
                    {
                      name: 'Amanda Garcia',
                      email: 'a.garcia@example.com',
                      role: 'Reporter',
                      lastActive: '2025-11-10',
                      deletedDate: '2025-11-18',
                    },
                  ].map((user, index) => (
                    <tr key={index} className="border-b border-[#383838] hover:bg-[#232323] transition-colors">
                      <td className="py-3 px-4">
                        <span className="text-sm font-medium text-foreground">{user.name}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{user.email}</span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className="border-[#383838] text-foreground">
                          {user.role}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{user.lastActive}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{user.deletedDate}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-primary"
                          >
                            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                            Restore
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#383838] hover:bg-[#383838] text-destructive"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Archive</h2>
        <p className="text-muted-foreground">
          View and restore data that has been deleted from the system
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="space-y-1">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
              Archived Data
            </h4>
            <nav className="space-y-1">
              {archiveNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-[#2a2a2a] text-foreground border-l-2 border-primary'
                        : 'text-muted-foreground hover:bg-[#2a2a2a] hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-sm">{item.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3">
          <Card className="bg-[#2a2a2a] border-[#383838]">
            <CardContent className="p-6">{renderArchiveContent()}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
