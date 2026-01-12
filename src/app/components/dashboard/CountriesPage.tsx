import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Plus,
  Globe,
  Users,
  Building2,
  TrendingUp,
  User,
  ChevronRight,
  Mail,
  Phone,
} from 'lucide-react';
import { useState } from 'react';

interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  activeProjects: number;
}

interface Manager {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  customersManaged: number;
  customers: Customer[];
}

interface Country {
  id: string;
  name: string;
  region: string;
  code: string;
  managers: number;
  customers: number;
  projects: number;
  revenue: string;
  icon: string;
  managersData: Manager[];
}

export function CountriesPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [expandedManagers, setExpandedManagers] = useState<string[]>([]);

  const stats = [
    {
      label: 'Total Countries',
      value: '24',
      description: 'Active regions',
      icon: Globe,
      color: 'text-[#1e88e5]',
    },
    {
      label: 'Regional Managers',
      value: '48',
      description: 'Across all regions',
      icon: Users,
      color: 'text-[#10b981]',
    },
    {
      label: 'Total Customers',
      value: '284',
      description: 'Global client base',
      icon: Building2,
      color: 'text-[#f59e0b]',
    },
    {
      label: 'Global Revenue',
      value: '$4.2M',
      description: 'This quarter',
      icon: TrendingUp,
      color: 'text-[#8b5cf6]',
    },
  ];

  const countries: Country[] = [
    {
      id: 'us',
      name: 'United States',
      region: 'North America',
      code: 'US',
      managers: 8,
      customers: 82,
      projects: 145,
      revenue: '$1.2M',
      icon: '🇺🇸',
      managersData: [
        {
          id: 'mgr-us-001',
          name: 'Robert Chen',
          email: 'r.chen@company.com',
          phone: '+1 (555) 100-0001',
          role: 'Regional Manager - East Coast',
          customersManaged: 18,
          customers: [
            {
              id: 'clt-001',
              name: 'Michael Chen',
              company: 'City Planning Department',
              email: 'm.chen@cityplanning.gov',
              activeProjects: 3,
            },
            {
              id: 'clt-004',
              name: 'Emma Rodriguez',
              company: 'Highway Authority',
              email: 'e.rodriguez@highways.gov',
              activeProjects: 4,
            },
            {
              id: 'clt-007',
              name: 'James Wilson',
              company: 'Metropolitan Transit',
              email: 'j.wilson@transit.gov',
              activeProjects: 2,
            },
          ],
        },
        {
          id: 'mgr-us-002',
          name: 'Amanda Foster',
          email: 'a.foster@company.com',
          phone: '+1 (555) 100-0002',
          role: 'Regional Manager - West Coast',
          customersManaged: 22,
          customers: [
            {
              id: 'clt-002',
              name: 'Sarah Williams',
              company: 'GreenEnergy Corp',
              email: 's.williams@greenenergy.com',
              activeProjects: 2,
            },
            {
              id: 'clt-005',
              name: 'Jennifer Park',
              company: 'Pacific Utilities',
              email: 'j.park@pacific.com',
              activeProjects: 5,
            },
          ],
        },
      ],
    },
    {
      id: 'cn',
      name: 'China',
      region: 'Asia Pacific',
      code: 'CN',
      managers: 6,
      customers: 45,
      projects: 98,
      revenue: '$890K',
      icon: '🇨🇳',
      managersData: [
        {
          id: 'mgr-cn-001',
          name: 'Li Wei',
          email: 'l.wei@company.com',
          phone: '+86 138-0000-0001',
          role: 'Regional Manager - Beijing',
          customersManaged: 15,
          customers: [
            {
              id: 'clt-cn-001',
              name: 'Zhang Ming',
              company: 'Beijing Infrastructure',
              email: 'z.ming@beijing.cn',
              activeProjects: 6,
            },
            {
              id: 'clt-cn-002',
              name: 'Wang Fang',
              company: 'China Energy Group',
              email: 'w.fang@energy.cn',
              activeProjects: 3,
            },
          ],
        },
        {
          id: 'mgr-cn-002',
          name: 'Chen Xiaoming',
          email: 'c.xiaoming@company.com',
          phone: '+86 138-0000-0002',
          role: 'Regional Manager - Shanghai',
          customersManaged: 20,
          customers: [
            {
              id: 'clt-cn-003',
              name: 'Liu Ying',
              company: 'Shanghai Development',
              email: 'l.ying@shanghai.cn',
              activeProjects: 4,
            },
          ],
        },
      ],
    },
    {
      id: 'es',
      name: 'Spain',
      region: 'Europe',
      code: 'ES',
      managers: 4,
      customers: 32,
      projects: 67,
      revenue: '$540K',
      icon: '🇪🇸',
      managersData: [
        {
          id: 'mgr-es-001',
          name: 'Carlos Martinez',
          email: 'c.martinez@company.com',
          phone: '+34 600-000-001',
          role: 'Regional Manager - Madrid',
          customersManaged: 14,
          customers: [
            {
              id: 'clt-es-001',
              name: 'Isabel Garcia',
              company: 'Madrid City Council',
              email: 'i.garcia@madrid.es',
              activeProjects: 3,
            },
            {
              id: 'clt-es-002',
              name: 'Antonio Lopez',
              company: 'Iberdrola Energy',
              email: 'a.lopez@iberdrola.es',
              activeProjects: 5,
            },
          ],
        },
      ],
    },
    {
      id: 'de',
      name: 'Germany',
      region: 'Europe',
      code: 'DE',
      managers: 5,
      customers: 38,
      projects: 82,
      revenue: '$720K',
      icon: '🇩🇪',
      managersData: [
        {
          id: 'mgr-de-001',
          name: 'Klaus Schmidt',
          email: 'k.schmidt@company.com',
          phone: '+49 170-000-0001',
          role: 'Regional Manager - Berlin',
          customersManaged: 16,
          customers: [
            {
              id: 'clt-de-001',
              name: 'Hans Mueller',
              company: 'Berlin Infrastructure',
              email: 'h.mueller@berlin.de',
              activeProjects: 4,
            },
          ],
        },
      ],
    },
    {
      id: 'gb',
      name: 'United Kingdom',
      region: 'Europe',
      code: 'GB',
      managers: 5,
      customers: 41,
      projects: 76,
      revenue: '$680K',
      icon: '🇬🇧',
      managersData: [
        {
          id: 'mgr-gb-001',
          name: 'Oliver Thompson',
          email: 'o.thompson@company.com',
          phone: '+44 7700-000001',
          role: 'Regional Manager - London',
          customersManaged: 18,
          customers: [
            {
              id: 'clt-gb-001',
              name: 'Sophie Brown',
              company: 'London Transport Authority',
              email: 's.brown@tfl.gov.uk',
              activeProjects: 6,
            },
          ],
        },
      ],
    },
    {
      id: 'ca',
      name: 'Canada',
      region: 'North America',
      code: 'CA',
      managers: 4,
      customers: 28,
      projects: 54,
      revenue: '$450K',
      icon: '🇨🇦',
      managersData: [
        {
          id: 'mgr-ca-001',
          name: 'David Kim',
          email: 'd.kim@company.com',
          phone: '+1 (416) 000-0001',
          role: 'Regional Manager - Toronto',
          customersManaged: 12,
          customers: [
            {
              id: 'clt-ca-001',
              name: 'Sarah Johnson',
              company: 'Northern Air Systems',
              email: 's.johnson@northern.ca',
              activeProjects: 2,
            },
          ],
        },
      ],
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

  // Set first country as selected by default
  if (!selectedCountry && countries.length > 0) {
    setSelectedCountry(countries[0]);
  }

  const toggleManager = (managerId: string) => {
    setExpandedManagers((prev) =>
      prev.includes(managerId)
        ? prev.filter((id) => id !== managerId)
        : [...prev, managerId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Countries</h2>
          <p className="text-muted-foreground">
            Manage regional operations and team assignments
          </p>
        </div>
        <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Country
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

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Countries List */}
        <Card className="lg:col-span-1 bg-[#2a2a2a] border-[#383838]">
          <CardHeader className="border-b border-[#383838]">
            <CardTitle className="text-foreground">Countries & Regions</CardTitle>
            <CardDescription className="text-muted-foreground">
              Select a country to view details
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-[#383838]">
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country)}
                  className={`w-full text-left p-4 transition-colors hover:bg-[#232323] ${
                    selectedCountry?.id === country.id
                      ? 'bg-[#232323] border-l-2 border-primary'
                      : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#383838] flex items-center justify-center text-xl flex-shrink-0">
                      {country.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">{country.name}</p>
                        <Badge
                          variant="outline"
                          className="border-[#383838] text-xs text-muted-foreground bg-[#1a1a1a]"
                        >
                          {country.code}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{country.region}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{country.managers} managers</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          <span>{country.customers} customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Country Details with Managers and Customers */}
        <Card className="lg:col-span-2 bg-[#2a2a2a] border-[#383838]">
          {selectedCountry ? (
            <>
              <CardHeader className="border-b border-[#383838]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#383838] flex items-center justify-center text-2xl">
                      {selectedCountry.icon}
                    </div>
                    <div>
                      <CardTitle className="text-foreground">{selectedCountry.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {selectedCountry.region}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-[#1976d2] text-primary-foreground"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Manager
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Country Overview */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Regional Overview</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="bg-[#232323] border-[#383838]">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground">Managers</p>
                        <p className="text-xl font-bold text-foreground">
                          {selectedCountry.managers}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#232323] border-[#383838]">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground">Customers</p>
                        <p className="text-xl font-bold text-foreground">
                          {selectedCountry.customers}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#232323] border-[#383838]">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground">Projects</p>
                        <p className="text-xl font-bold text-foreground">
                          {selectedCountry.projects}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#232323] border-[#383838]">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground">Revenue</p>
                        <p className="text-xl font-bold text-foreground">
                          {selectedCountry.revenue}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Managers and Their Customers */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">
                    Regional Managers & Customers
                  </h3>
                  <div className="space-y-3">
                    {selectedCountry.managersData.map((manager) => (
                      <Card key={manager.id} className="bg-[#232323] border-[#383838]">
                        <CardContent className="p-0">
                          {/* Manager Header */}
                          <button
                            onClick={() => toggleManager(manager.id)}
                            className="w-full p-4 text-left hover:bg-[#1a1a1a] transition-colors"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="w-10 h-10 rounded-full bg-[#383838] flex items-center justify-center flex-shrink-0">
                                  <User className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-foreground">
                                    {manager.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    {manager.role}
                                  </p>
                                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                      <Mail className="w-3 h-3" />
                                      <span>{manager.email}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Phone className="w-3 h-3" />
                                      <span>{manager.phone}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant="outline"
                                  className="border-[#383838] text-foreground bg-[#1a1a1a]"
                                >
                                  {manager.customersManaged} customers
                                </Badge>
                                <ChevronRight
                                  className={`w-4 h-4 text-muted-foreground transition-transform ${
                                    expandedManagers.includes(manager.id) ? 'rotate-90' : ''
                                  }`}
                                />
                              </div>
                            </div>
                          </button>

                          {/* Customers List */}
                          {expandedManagers.includes(manager.id) && (
                            <div className="border-t border-[#383838] bg-[#1a1a1a]">
                              <div className="p-4 space-y-2">
                                <p className="text-xs font-medium text-muted-foreground mb-3">
                                  MANAGED CUSTOMERS
                                </p>
                                {manager.customers.map((customer) => (
                                  <div
                                    key={customer.id}
                                    className="flex items-center justify-between p-3 rounded-lg bg-[#232323] border border-[#383838] hover:border-[#4a4a4a] transition-colors"
                                  >
                                    <div className="flex items-center gap-3 flex-1">
                                      <div className="w-8 h-8 rounded-full bg-[#383838] flex items-center justify-center">
                                        <Building2 className="w-4 h-4 text-primary" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-foreground">
                                          {customer.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground truncate">
                                          {customer.company}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <div className="text-xs text-muted-foreground">
                                        <Mail className="w-3 h-3 inline mr-1" />
                                        {customer.email}
                                      </div>
                                      <Badge
                                        variant="outline"
                                        className="border-[#383838] text-xs bg-[#2a2a2a]"
                                      >
                                        {customer.activeProjects} projects
                                      </Badge>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">Select a country to view details</p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}