import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import {
  Plus,
  FolderOpen,
  Clock,
  CheckCircle2,
  TrendingUp,
  Eye,
  BookOpen,
  Edit,
  Calendar,
  DollarSign,
} from 'lucide-react';
import { Badge } from '../ui/badge';

export function ProjectsPage() {
  const stats = [
    {
      label: 'Total Projects',
      value: '2,450',
      description: 'All time',
      icon: FolderOpen,
      color: 'text-[#1e88e5]',
    },
    {
      label: 'In Progress',
      value: '89',
      description: 'Active projects',
      icon: Clock,
      color: 'text-[#f59e0b]',
    },
    {
      label: 'Completed',
      value: '2,315',
      description: 'Finished successfully',
      icon: CheckCircle2,
      color: 'text-[#10b981]',
    },
    {
      label: 'Success Rate',
      value: '94.5%',
      description: 'Project completion',
      icon: TrendingUp,
      color: 'text-[#8b5cf6]',
    },
  ];

  const projects = [
    {
      id: 'PRJ-2024-001',
      name: 'Downtown Infrastructure Survey',
      client: 'City Planning Department',
      type: 'Site Survey',
      company: 'AeroTech Solutions',
      pilot: 'John Anderson',
      startDate: '2024-01-15',
      deadline: '2024-02-28',
      progress: 75,
      budget: '$45,000',
      status: 'In Progress',
    },
    {
      id: 'PRJ-2024-002',
      name: 'Solar Farm Inspection',
      client: 'GreenEnergy Corp',
      type: 'Inspection',
      company: 'Global Drone Services',
      pilot: 'Maria Garcia',
      startDate: '2024-01-20',
      deadline: '2024-02-15',
      progress: 100,
      budget: '$32,000',
      status: 'Completed',
    },
    {
      id: 'PRJ-2024-003',
      name: 'Agricultural Land Mapping',
      client: 'FarmTech Industries',
      type: 'Mapping',
      company: 'SkyView Innovations',
      pilot: 'Chen Wei',
      startDate: '2024-02-01',
      deadline: '2024-03-15',
      progress: 45,
      budget: '$28,500',
      status: 'In Progress',
    },
    {
      id: 'PRJ-2024-004',
      name: 'Bridge Structure Analysis',
      client: 'Highway Authority',
      type: 'Inspection',
      company: 'AeroTech Solutions',
      pilot: 'Sarah Johnson',
      startDate: '2024-01-10',
      deadline: '2024-02-10',
      progress: 20,
      budget: '$52,000',
      status: 'Delayed',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Projects</h2>
          <p className="text-muted-foreground">
            Track and manage all drone service projects
          </p>
        </div>
        <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
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

      {/* Projects Table */}
      <Card className="bg-[#2a2a2a] border-[#383838]">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#383838]">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Project
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Company
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Pilot
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Timeline
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Progress
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Budget
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#383838] hover:bg-[#232323] transition-colors"
                  >
                    <td className="p-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">{project.name}</p>
                        <p className="text-xs text-muted-foreground">{project.id}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className="border-[#383838] text-foreground bg-[#232323]"
                      >
                        {project.type}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-foreground">{project.company}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-foreground">{project.pilot}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{project.deadline}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-[#383838] rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              project.progress === 100
                                ? 'bg-[#10b981]'
                                : project.progress >= 50
                                  ? 'bg-[#1e88e5]'
                                  : 'bg-[#f59e0b]'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-foreground">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-muted-foreground" />
                        <span className="text-sm text-foreground">{project.budget}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="default"
                        className={
                          project.status === 'Completed'
                            ? 'bg-[#10b981] text-white'
                            : project.status === 'In Progress'
                              ? 'bg-[#1e88e5] text-white'
                              : 'bg-[#ef4444] text-white'
                        }
                      >
                        {project.status}
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
