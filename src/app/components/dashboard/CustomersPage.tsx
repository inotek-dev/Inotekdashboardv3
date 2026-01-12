import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Plus,
  Users,
  FolderOpen,
  DollarSign,
  TrendingUp,
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { useState } from 'react';

interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  country: string;
  activeProjects: number;
  totalProjects: number;
  contractValue: string;
  status: 'Active' | 'Inactive' | 'Pending';
  joinDate: string;
  lastContact: string;
  rating: number;
  projects: {
    id: string;
    name: string;
    status: 'In Progress' | 'Completed' | 'Upcoming';
    deadline: string;
    progress: number;
  }[];
}

export function CustomersPage() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const stats = [
    {
      label: 'Total Clients',
      value: '284',
      description: '12 new this month',
      icon: Users,
      color: 'text-[#1e88e5]',
    },
    {
      label: 'Active Projects',
      value: '142',
      description: 'From all clients',
      icon: FolderOpen,
      color: 'text-[#10b981]',
    },
    {
      label: 'Total Revenue',
      value: '$1.2M',
      description: 'This quarter',
      icon: DollarSign,
      color: 'text-[#f59e0b]',
    },
    {
      label: 'Satisfaction',
      value: '96%',
      description: 'Average rating',
      icon: TrendingUp,
      color: 'text-[#8b5cf6]',
    },
  ];

  const clients: Client[] = [
    {
      id: 'CLT-001',
      name: 'Michael Chen',
      company: 'City Planning Department',
      email: 'm.chen@cityplanning.gov',
      phone: '+1 (555) 123-4567',
      location: 'Downtown Office',
      country: 'United States',
      activeProjects: 3,
      totalProjects: 12,
      contractValue: '$145,000',
      status: 'Active',
      joinDate: '2023-03-15',
      lastContact: '2 days ago',
      rating: 4.8,
      projects: [
        {
          id: 'PRJ-2024-001',
          name: 'Downtown Infrastructure Survey',
          status: 'In Progress',
          deadline: '2024-02-28',
          progress: 75,
        },
        {
          id: 'PRJ-2024-015',
          name: 'Park Area Mapping',
          status: 'In Progress',
          deadline: '2024-03-15',
          progress: 40,
        },
        {
          id: 'PRJ-2024-022',
          name: 'Bridge Inspection',
          status: 'Upcoming',
          deadline: '2024-04-10',
          progress: 0,
        },
      ],
    },
    {
      id: 'CLT-002',
      name: 'Sarah Williams',
      company: 'GreenEnergy Corp',
      email: 's.williams@greenenergy.com',
      phone: '+1 (555) 234-5678',
      location: 'West Facility',
      country: 'United States',
      activeProjects: 2,
      totalProjects: 8,
      contractValue: '$98,500',
      status: 'Active',
      joinDate: '2023-06-20',
      lastContact: '1 week ago',
      rating: 4.9,
      projects: [
        {
          id: 'PRJ-2024-002',
          name: 'Solar Farm Inspection',
          status: 'Completed',
          deadline: '2024-02-15',
          progress: 100,
        },
        {
          id: 'PRJ-2024-018',
          name: 'Wind Turbine Survey',
          status: 'In Progress',
          deadline: '2024-03-20',
          progress: 55,
        },
      ],
    },
    {
      id: 'CLT-003',
      name: 'David Park',
      company: 'FarmTech Industries',
      email: 'd.park@farmtech.com',
      phone: '+1 (555) 345-6789',
      location: 'Agricultural Center',
      country: 'United States',
      activeProjects: 1,
      totalProjects: 15,
      contractValue: '$182,000',
      status: 'Active',
      joinDate: '2022-11-10',
      lastContact: '3 days ago',
      rating: 4.7,
      projects: [
        {
          id: 'PRJ-2024-003',
          name: 'Agricultural Land Mapping',
          status: 'In Progress',
          deadline: '2024-03-15',
          progress: 45,
        },
      ],
    },
    {
      id: 'CLT-004',
      name: 'Emma Rodriguez',
      company: 'Highway Authority',
      email: 'e.rodriguez@highways.gov',
      phone: '+1 (555) 456-7890',
      location: 'Regional Office',
      country: 'United States',
      activeProjects: 4,
      totalProjects: 20,
      contractValue: '$265,000',
      status: 'Active',
      joinDate: '2022-08-05',
      lastContact: 'Today',
      rating: 4.6,
      projects: [
        {
          id: 'PRJ-2024-004',
          name: 'Bridge Structure Analysis',
          status: 'In Progress',
          deadline: '2024-02-10',
          progress: 20,
        },
        {
          id: 'PRJ-2024-019',
          name: 'Highway Expansion Survey',
          status: 'In Progress',
          deadline: '2024-03-30',
          progress: 65,
        },
        {
          id: 'PRJ-2024-025',
          name: 'Tunnel Inspection',
          status: 'Upcoming',
          deadline: '2024-04-15',
          progress: 0,
        },
      ],
    },
  ];

  // Set first client as selected by default
  if (!selectedClient && clients.length > 0) {
    setSelectedClient(clients[0]);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Customers</h2>
          <p className="text-muted-foreground">
            Manage client relationships and project assignments
          </p>
        </div>
        <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Customer
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
        {/* Left Column - Client List */}
        <Card className="lg:col-span-1 bg-[#2a2a2a] border-[#383838]">
          <CardHeader className="border-b border-[#383838]">
            <CardTitle className="text-foreground">Client List</CardTitle>
            <CardDescription className="text-muted-foreground">
              Select a client to view details
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-[#383838]">
              {clients.map((client) => (
                <button
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className={`w-full text-left p-4 transition-colors hover:bg-[#232323] ${
                    selectedClient?.id === client.id ? 'bg-[#232323] border-l-2 border-primary' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-[#383838] flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {client.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {client.company}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            variant="outline"
                            className="border-[#383838] text-xs text-foreground bg-[#1a1a1a]"
                          >
                            {client.activeProjects} active
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={client.status === 'Active' ? 'default' : 'secondary'}
                      className={
                        client.status === 'Active'
                          ? 'bg-[#10b981] text-white'
                          : 'bg-[#6b7280] text-white'
                      }
                    >
                      {client.status}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Client Details */}
        <Card className="lg:col-span-2 bg-[#2a2a2a] border-[#383838]">
          {selectedClient ? (
            <>
              <CardHeader className="border-b border-[#383838]">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-foreground">{selectedClient.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {selectedClient.company}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#383838] text-foreground hover:bg-[#383838]"
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-[#1976d2] text-primary-foreground"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      New Project
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{selectedClient.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{selectedClient.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{selectedClient.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{selectedClient.country}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Client Overview</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="bg-[#232323] border-[#383838]">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground">Active Projects</p>
                        <p className="text-xl font-bold text-foreground">
                          {selectedClient.activeProjects}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#232323] border-[#383838]">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground">Total Projects</p>
                        <p className="text-xl font-bold text-foreground">
                          {selectedClient.totalProjects}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#232323] border-[#383838]">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground">Contract Value</p>
                        <p className="text-xl font-bold text-foreground">
                          {selectedClient.contractValue}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#232323] border-[#383838]">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground">Rating</p>
                        <p className="text-xl font-bold text-foreground">
                          {selectedClient.rating}/5.0
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Active Projects */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Active Projects</h3>
                  <div className="space-y-3">
                    {selectedClient.projects.map((project) => (
                      <Card key={project.id} className="bg-[#232323] border-[#383838]">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-sm font-medium text-foreground">
                                  {project.name}
                                </p>
                                <Badge
                                  variant="default"
                                  className={
                                    project.status === 'Completed'
                                      ? 'bg-[#10b981] text-white'
                                      : project.status === 'In Progress'
                                        ? 'bg-[#1e88e5] text-white'
                                        : 'bg-[#6b7280] text-white'
                                  }
                                >
                                  {project.status}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground mb-2">{project.id}</p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>Due: {project.deadline}</span>
                                </div>
                                {project.status !== 'Upcoming' && (
                                  <div className="flex items-center gap-2 flex-1">
                                    <div className="w-full max-w-[120px] h-1.5 bg-[#383838] rounded-full overflow-hidden">
                                      <div
                                        className={`h-full ${
                                          project.progress === 100
                                            ? 'bg-[#10b981]'
                                            : 'bg-[#1e88e5]'
                                        }`}
                                        style={{ width: `${project.progress}%` }}
                                      />
                                    </div>
                                    <span>{project.progress}%</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex items-center justify-between text-sm pt-4 border-t border-[#383838]">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Client since {selectedClient.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Last contact: {selectedClient.lastContact}</span>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">Select a client to view details</p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
