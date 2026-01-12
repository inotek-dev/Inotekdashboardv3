import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Plus, Building2, Users, MapPin, Eye, BookOpen, Edit, Star } from 'lucide-react';
import { Badge } from '../ui/badge';

export function DronCompanyPage() {
  const stats = [
    {
      label: 'Total Companies',
      value: '45',
      description: 'Active partners',
      icon: Building2,
      color: 'text-[#1e88e5]',
    },
    {
      label: 'Total Pilots',
      value: '156',
      description: 'Certified operators',
      icon: Users,
      color: 'text-[#10b981]',
    },
    {
      label: 'Active Regions',
      value: '24',
      description: 'Countries covered',
      icon: MapPin,
      color: 'text-[#f59e0b]',
    },
  ];

  const companies = [
    {
      name: 'AeroTech Solutions',
      country: 'United States',
      pilots: 28,
      regions: ['North America', 'Europe'],
      rating: 4.8,
      projects: 142,
      status: 'Active',
      certified: true,
    },
    {
      name: 'Global Drone Services',
      country: 'Spain',
      pilots: 45,
      regions: ['Europe', 'South America', 'Africa'],
      rating: 4.6,
      projects: 98,
      status: 'Active',
      certified: true,
    },
    {
      name: 'SkyView Innovations',
      country: 'China',
      pilots: 32,
      regions: ['Asia', 'Australia'],
      rating: 4.9,
      projects: 76,
      status: 'Active',
      certified: true,
    },
    {
      name: 'Northern Air Systems',
      country: 'Canada',
      pilots: 18,
      regions: ['North America'],
      rating: 4.4,
      projects: 54,
      status: 'On Leave',
      certified: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Dron Companies</h2>
          <p className="text-muted-foreground">
            Manage drone service providers and their operations
          </p>
        </div>
        <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Company
        </Button>
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
                  <div className={`${stat.color}`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Companies Table */}
      <Card className="bg-[#2a2a2a] border-[#383838]">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#383838]">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Company
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Country
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Pilots
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Regions
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Rating
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                    Projects
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
                {companies.map((company, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#383838] hover:bg-[#232323] transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-[#383838] flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-sm font-medium text-foreground">{company.name}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{company.country}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-foreground">{company.pilots} active</span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {company.regions.slice(0, 2).map((region, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-[#383838] text-xs text-foreground bg-[#232323]"
                          >
                            {region}
                          </Badge>
                        ))}
                        {company.regions.length > 2 && (
                          <Badge
                            variant="outline"
                            className="border-[#383838] text-xs text-muted-foreground bg-[#232323]"
                          >
                            +{company.regions.length - 2}
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                        <span className="text-sm text-foreground">{company.rating}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-foreground">{company.projects}</span>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={company.status === 'Active' ? 'default' : 'secondary'}
                        className={
                          company.status === 'Active'
                            ? 'bg-[#10b981] text-white'
                            : 'bg-[#f59e0b] text-white'
                        }
                      >
                        {company.status}
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
