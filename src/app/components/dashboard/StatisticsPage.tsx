import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, BarChart3, Activity, MapPin, TrendingDown } from 'lucide-react';

export function StatisticsPage() {
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

  // User distribution data
  const userStats = [
    { category: 'System Admins', count: 8, color: 'bg-[#1e88e5]' },
    { category: 'Project Managers', count: 34, color: 'bg-[#10b981]' },
    { category: 'Pilots', count: 57, color: 'bg-[#f59e0b]' },
    { category: 'Clients', count: 284, color: 'bg-[#8b5cf6]' },
  ];

  // Calculate statistics
  const totalProjects = projectsMonthlyData.reduce((sum, item) => sum + item.projects, 0);
  const averagePerMonth = (totalProjects / projectsMonthlyData.length).toFixed(1);
  const maxMonth = projectsMonthlyData.reduce((max, item) => 
    item.projects > max.projects ? item : max
  );

  const stats = [
    {
      label: 'Total Projects (12 months)',
      value: totalProjects.toString(),
      description: 'Cumulative count',
      icon: BarChart3,
      color: 'text-[#1e88e5]',
    },
    {
      label: 'Average per Month',
      value: averagePerMonth,
      description: 'Monthly average',
      icon: Activity,
      color: 'text-[#10b981]',
    },
    {
      label: 'Peak Month',
      value: maxMonth.projects.toString(),
      description: maxMonth.month,
      icon: TrendingUp,
      color: 'text-[#f59e0b]',
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Statistics</h2>
        <p className="text-muted-foreground">
          Detailed analytics and performance metrics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
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
                  <div className={stat.color}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Projects Monthly Chart */}
      <Card className="bg-[#2a2a2a] border-[#383838]">
        <CardHeader className="border-b border-[#383838]">
          <CardTitle className="text-foreground">Projects Monthly</CardTitle>
          <CardDescription className="text-muted-foreground">
            New projects added each month
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={projectsMonthlyData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="projects" fill="#1e88e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Regional Performance Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {regionalPerformance.map((region) => {
          const Icon = region.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={region.region} className="bg-[#2a2a2a] border-[#383838]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{region.region}</p>
                    <p className="text-2xl font-bold text-foreground">{region.projects}</p>
                    <p className="text-xs text-muted-foreground">{region.revenue}</p>
                  </div>
                  <div className={region.trend === 'up' ? 'text-[#f59e0b]' : 'text-[#f43f5e]'}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* User Distribution Card */}
      <Card className="bg-[#2a2a2a] border-[#383838]">
        <CardHeader className="border-b border-[#383838]">
          <CardTitle className="text-foreground">User Distribution</CardTitle>
          <CardDescription className="text-muted-foreground">
            Platform users by category
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {userStats.map((stat) => (
              <div key={stat.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">{stat.category}</span>
                  <span className="text-sm font-semibold text-foreground">{stat.count}</span>
                </div>
                <div className="w-full h-2 bg-[#383838] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${stat.color}`}
                    style={{ width: `${(stat.count / 383) * 100}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-[#383838]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Total Users</span>
                <span className="text-xl font-bold text-foreground">383</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}