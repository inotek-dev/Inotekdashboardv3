import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Plus, Users, Globe, Building2, Shield, Eye, BookOpen, Edit } from 'lucide-react';
import { Badge } from '../ui/badge';
import { CardHeader, CardTitle, CardDescription } from '../ui/card';

export function UsersPage() {
  const stats = [
    {
      label: 'Total Countries',
      value: '24',
      description: 'Active regions',
      icon: Globe,
      color: 'text-[#10b981]',
    },
    {
      label: 'Total Pilots',
      value: '156',
      description: 'Certified operators',
      icon: Users,
      color: 'text-[#1e88e5]',
    },
    {
      label: 'Total Companies',
      value: '45',
      description: 'Partner organizations',
      icon: Building2,
      color: 'text-[#f59e0b]',
    },
    {
      label: 'Total Admins',
      value: '12',
      description: 'System administrators',
      icon: Shield,
      color: 'text-[#8b5cf6]',
    },
  ];

  const users = [
    {
      name: 'John Anderson',
      email: 'j.anderson@example.com',
      role: 'Pilot',
      company: 'AeroTech Solutions',
      country: 'United States',
      status: 'Active',
      projects: 45,
    },
    {
      name: 'Maria Garcia',
      email: 'm.garcia@example.com',
      role: 'Admin',
      company: 'Global Drone Services',
      country: 'Spain',
      status: 'Active',
      projects: 32,
    },
    {
      name: 'Chen Wei',
      email: 'c.wei@example.com',
      role: 'Company Manager',
      company: 'SkyView Innovations',
      country: 'China',
      status: 'Active',
      projects: 28,
    },
    {
      name: 'Sarah Johnson',
      email: 's.johnson@example.com',
      role: 'Pilot',
      company: 'AeroTech Solutions',
      country: 'Canada',
      status: 'On Leave',
      projects: 18,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Users</h2>
          <p className="text-muted-foreground">
            Manage users and permissions across your network
          </p>
        </div>
        <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="bg-[#2a2a2a] border-[#383838]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </div>
                  <div className={`${stat.color}`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Users Table */}
      <Card className="bg-[#2a2a2a] border-[#383838]">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#383838]">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Role</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Company</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Country</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Projects</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#383838] hover:bg-[#232323] transition-colors"
                  >
                    <td className="p-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className="border-[#383838] text-foreground bg-[#232323]"
                      >
                        {user.role}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-foreground">{user.company}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{user.country}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-foreground">{user.projects} active</span>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={user.status === 'Active' ? 'default' : 'secondary'}
                        className={
                          user.status === 'Active'
                            ? 'bg-[#10b981] text-white'
                            : 'bg-[#f59e0b] text-white'
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-[#383838]"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-[#383838]"
                        >
                          <BookOpen className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-[#383838]"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}