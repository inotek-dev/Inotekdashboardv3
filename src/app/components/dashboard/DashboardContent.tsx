import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Activity,
  TrendingUp,
  Users,
  FileText,
  Globe,
  Building2,
  Plane,
  AlertCircle,
  Clock,
  CheckCircle2,
  TrendingDown,
  MapPin,
  ChevronRight,
  User,
  Briefcase,
} from 'lucide-react';
import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts';

export function DashboardContent() {
  // Data for the last 12 months of new projects
  const projectsMonthlyData = [
    { month: 'Feb', projects: 8 },
    { month: 'Mar', projects: 12 },
    { month: 'Apr', projects: 10 },
    { month: 'May', projects: 15 },
    { month: 'Jun', projects: 13 },
    { month: 'Jul', projects: 16 },
    { month: 'Aug', projects: 14 },
    { month: 'Sep', projects: 11 },
    { month: 'Oct', projects: 17 },
    { month: 'Nov', projects: 19 },
    { month: 'Dec', projects: 14 },
    { month: 'Jan', projects: 17 },
  ];

  // Calculate linear regression trend line
  const calculateTrendLine = (data: typeof projectsMonthlyData) => {
    const n = data.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    
    data.forEach((point, index) => {
      const x = index;
      const y = point.projects;
      sumX += x;
      sumY += y;
      sumXY += x * y;
      sumX2 += x * x;
    });
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    return data.map((point, index) => ({
      ...point,
      trend: slope * index + intercept
    }));
  };

  const projectsDataWithTrend = calculateTrendLine(projectsMonthlyData);

  const stats = [
    {
      title: 'Total Projects',
      value: '156',
      change: '+12.3%',
      icon: Briefcase,
      trend: 'up',
      color: 'text-[#1e88e5]',
    },
    {
      title: 'Active Reports',
      value: '44',
      change: '28 Incomplete',
      icon: FileText,
      trend: 'warning',
      color: 'text-[#f59e0b]',
    },
    {
      title: 'Total Customers',
      value: '284',
      change: '+8 this month',
      icon: Building2,
      trend: 'up',
      color: 'text-[#10b981]',
    },
    {
      title: 'Countries',
      value: '24',
      change: '48 Managers',
      icon: Globe,
      trend: 'up',
      color: 'text-[#8b5cf6]',
    },
  ];

  const incompleteReports = [
    {
      id: 'RPT-2024-001',
      projectName: 'Downtown Infrastructure Survey',
      client: 'City Planning Department',
      dronCompany: 'AeroTech Solutions',
      country: 'United States',
      arrivalDateTime: 'Jan 8, 2026 14:30',
      completion: 65,
      status: 'In Progress',
      lastModified: '2 hours ago',
    },
    {
      id: 'RPT-2024-003',
      projectName: 'Agricultural Land Mapping',
      client: 'FarmTech Industries',
      dronCompany: 'Global Drone Services',
      country: 'Canada',
      arrivalDateTime: 'Jan 7, 2026 09:15',
      completion: 45,
      status: 'In Progress',
      lastModified: '3 days ago',
    },
    {
      id: 'RPT-2024-004',
      projectName: 'Bridge Structure Analysis',
      client: 'Highway Authority',
      dronCompany: 'AeroTech Solutions',
      country: 'United Kingdom',
      arrivalDateTime: 'Jan 10, 2026 11:00',
      completion: 90,
      status: 'Pending Review',
      lastModified: '5 hours ago',
    },
    {
      id: 'RPT-2024-007',
      projectName: 'Coastal Erosion Assessment',
      client: 'Environmental Services',
      dronCompany: 'SkyView Innovations',
      country: 'Australia',
      arrivalDateTime: 'Jan 12, 2026 08:00',
      completion: 30,
      status: 'On Hold',
      lastModified: '1 day ago',
    },
    {
      id: 'RPT-2024-008',
      projectName: 'Railway Track Inspection',
      client: 'National Railways',
      dronCompany: 'AeroTech Solutions',
      country: 'Germany',
      arrivalDateTime: 'Jan 9, 2026 16:45',
      completion: 55,
      status: 'In Progress',
      lastModified: '6 hours ago',
    },
    {
      id: 'RPT-2024-010',
      projectName: 'Mining Site Survey',
      client: 'MineralCo Ltd',
      dronCompany: 'Global Drone Services',
      country: 'South Africa',
      arrivalDateTime: 'Jan 15, 2026 10:30',
      completion: 20,
      status: 'Delayed',
      lastModified: '4 days ago',
    },
    {
      id: 'RPT-2024-012',
      projectName: 'Urban Development Planning',
      client: 'Metropolitan Council',
      dronCompany: 'AeroTech Solutions',
      country: 'United States',
      arrivalDateTime: 'Jan 11, 2026 13:00',
      completion: 75,
      status: 'Needs Approval',
      lastModified: '8 hours ago',
    },
    {
      id: 'RPT-2024-014',
      projectName: 'Forest Conservation Study',
      client: 'Wildlife Department',
      dronCompany: 'SkyView Innovations',
      country: 'Brazil',
      arrivalDateTime: 'Jan 13, 2026 07:30',
      completion: 40,
      status: 'In Progress',
      lastModified: '2 days ago',
    },
    {
      id: 'RPT-2024-015',
      projectName: 'Power Line Maintenance',
      client: 'Energy Grid Corp',
      dronCompany: 'Global Drone Services',
      country: 'France',
      arrivalDateTime: 'Jan 14, 2026 12:15',
      completion: 85,
      status: 'Pending Review',
      lastModified: '10 hours ago',
    },
    {
      id: 'RPT-2024-016',
      projectName: 'Disaster Recovery Assessment',
      client: 'Emergency Services',
      dronCompany: 'AeroTech Solutions',
      country: 'Japan',
      arrivalDateTime: 'Jan 16, 2026 06:00',
      completion: 15,
      status: 'Urgent',
      lastModified: '30 minutes ago',
    },
  ];

  const recentProjects = [
    {
      id: 'PRJ-2024-012',
      name: 'Solar Farm Inspection',
      client: 'GreenEnergy Corp',
      dronCompany: 'Global Drone Services',
      status: 'Completed',
      date: '1 day ago',
    },
    {
      id: 'PRJ-2024-011',
      name: 'Downtown Infrastructure Survey',
      client: 'City Planning Department',
      dronCompany: 'AeroTech Solutions',
      status: 'In Progress',
      date: '2 hours ago',
    },
    {
      id: 'PRJ-2024-010',
      name: 'Highway Bridge Assessment',
      client: 'Highway Authority',
      dronCompany: 'AeroTech Solutions',
      status: 'In Progress',
      date: '5 hours ago',
    },
    {
      id: 'PRJ-2024-009',
      name: 'Wind Farm Maintenance',
      client: 'WindPower Inc',
      dronCompany: 'Global Drone Services',
      status: 'Completed',
      date: '2 days ago',
    },
  ];

  const regionalPerformance = [
    {
      region: 'North America',
      countries: 2,
      projects: 199,
      revenue: '$1.65M',
      trend: 'up',
    },
    {
      region: 'Asia Pacific',
      countries: 2,
      projects: 98,
      revenue: '$890K',
      trend: 'up',
    },
    {
      region: 'Europe',
      countries: 3,
      projects: 225,
      revenue: '$1.94M',
      trend: 'up',
    },
  ];

  const dronCompanies = [
    {
      name: 'AeroTech Solutions',
      pilots: 24,
      activeProjects: 18,
      region: 'North America',
      status: 'Active',
    },
    {
      name: 'Global Drone Services',
      pilots: 18,
      activeProjects: 12,
      region: 'Multiple',
      status: 'Active',
    },
    {
      name: 'SkyView Innovations',
      pilots: 15,
      activeProjects: 8,
      region: 'Asia Pacific',
      status: 'Active',
    },
  ];

  const userStats = [
    { category: 'System Admins', count: 8, color: 'bg-[#1e88e5]' },
    { category: 'Project Managers', count: 34, color: 'bg-[#10b981]' },
    { category: 'Pilots', count: 57, color: 'bg-[#f59e0b]' },
    { category: 'Clients', count: 284, color: 'bg-[#8b5cf6]' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Monitor your operations, projects, and team performance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const isProjectsCard = stat.title === 'Total Projects';
          
          return (
            <Card key={stat.title} className="bg-[#2a2a2a] border-[#383838]">
              <CardContent className="p-6">
                {isProjectsCard ? (
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1 flex-shrink-0">
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-[#10b981]">{stat.change}</span>
                      </p>
                    </div>
                    <div className="flex-1 h-[80px] min-w-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                          data={projectsDataWithTrend}
                          margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
                        >
                          <XAxis 
                            dataKey="month" 
                            stroke="#666" 
                            style={{ fontSize: '8px' }}
                            tick={{ fill: '#666' }}
                            tickLine={false}
                            axisLine={false}
                            interval={2}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#2a2a2a', 
                              border: '1px solid #383838',
                              borderRadius: '6px',
                              fontSize: '11px'
                            }}
                            formatter={(value: number) => Math.round(value)}
                          />
                          <Bar dataKey="projects" fill="#1e88e5" radius={[2, 2, 0, 0]} />
                          <Line 
                            type="monotone" 
                            dataKey="trend" 
                            stroke="#10b981" 
                            strokeWidth={2}
                            dot={false}
                            strokeDasharray="3 3"
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">
                        {stat.trend === 'up' && <span className="text-[#10b981]">{stat.change}</span>}
                        {stat.trend === 'warning' && (
                          <span className="text-[#f59e0b]">{stat.change}</span>
                        )}
                        {stat.trend === 'down' && (
                          <span className="text-[#ef4444]">{stat.change}</span>
                        )}
                      </p>
                    </div>
                    <div className={stat.color}>
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Incomplete Reports - Priority */}
        <Card className="col-span-7 bg-[#2a2a2a] border-[#383838]">
          <CardHeader className="border-b border-[#383838]">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#f59e0b]" />
                  Reports Requiring Attention
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Incomplete or pending review reports
                </CardDescription>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-[#383838] hover:bg-[#383838]"
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 max-h-[600px] overflow-y-auto">
            <div className="space-y-4">
              {incompleteReports.map((report) => {
                // Determine badge color based on status
                let badgeColor = 'bg-[#8b5cf6] text-white'; // default
                if (report.status === 'In Progress') {
                  badgeColor = 'bg-[#f59e0b] text-white';
                } else if (report.status === 'Pending Review') {
                  badgeColor = 'bg-[#8b5cf6] text-white';
                } else if (report.status === 'On Hold') {
                  badgeColor = 'bg-[#6b7280] text-white';
                } else if (report.status === 'Delayed') {
                  badgeColor = 'bg-[#ef4444] text-white';
                } else if (report.status === 'Needs Approval') {
                  badgeColor = 'bg-[#3b82f6] text-white';
                } else if (report.status === 'Urgent') {
                  badgeColor = 'bg-[#dc2626] text-white';
                }
                
                return (
                  <div
                    key={report.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#232323] border border-[#383838] hover:border-[#4a4a4a] transition-colors"
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground">{report.projectName}</p>
                        <Badge
                          variant="default"
                          className={badgeColor}
                        >
                          {report.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{report.id} • Customer: {report.client} • {report.dronCompany}</p>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Completion</span>
                          <span className="text-foreground font-medium">{report.completion}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#f59e0b]"
                            style={{ width: `${report.completion}%` }}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Modified: {report.lastModified} • <Globe className="w-3 h-3 inline mx-1" />
                        {report.country} • Arrival: {report.arrivalDateTime}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects & Regional Performance */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Projects */}
        <Card className="bg-[#2a2a2a] border-[#383838]">
          <CardHeader className="border-b border-[#383838]">
            <CardTitle className="text-foreground">Recent Projects</CardTitle>
            <CardDescription className="text-muted-foreground">
              Latest project activities and updates
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-[#232323] border border-[#383838]"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      project.status === 'Completed' ? 'bg-[#10b981]' : 'bg-[#f59e0b]'
                    }`}
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">{project.name}</p>
                      <Badge
                        variant="default"
                        className={
                          project.status === 'Completed'
                            ? 'bg-[#10b981] text-white'
                            : 'bg-[#f59e0b] text-white'
                        }
                      >
                        {project.status === 'Completed' ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {project.id} • {project.client} • {project.dronCompany}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">{project.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Dron Companies */}
        <Card className="bg-[#2a2a2a] border-[#383838]">
          <CardHeader className="border-b border-[#383838]">
            <CardTitle className="text-foreground">Active Dron Companies</CardTitle>
            <CardDescription className="text-muted-foreground">
              Operational drone service providers
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {dronCompanies.map((company) => (
                <Card key={company.name} className="bg-[#232323] border-[#383838]">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#383838] flex items-center justify-center flex-shrink-0">
                          <Plane className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{company.name}</p>
                          <p className="text-xs text-muted-foreground">{company.region}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Pilots</p>
                          <p className="text-lg font-bold text-foreground">{company.pilots}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Active Projects</p>
                          <p className="text-lg font-bold text-foreground">
                            {company.activeProjects}
                          </p>
                        </div>
                        <Badge className="bg-[#10b981] text-white">{company.status}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}