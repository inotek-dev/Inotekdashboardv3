import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Plus,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Users,
  MapPin,
  Plane,
  Database,
  Camera,
  FileWarning,
  Calendar,
  Building2,
  User,
  Edit,
} from 'lucide-react';
import { useState } from 'react';

interface Report {
  id: string;
  projectName: string;
  projectId: string;
  client: string;
  dronCompany: string;
  createdDate: string;
  lastModified: string;
  status: 'Completed' | 'In Progress' | 'Pending Review';
  completionPercentage: number;
  sections: {
    projectInfo: {
      completed: boolean;
      members: { name: string; role: string; email: string }[];
      location: string;
      coordinates: string;
      area: string;
      purpose: string;
      flightDate: string;
      duration: string;
      altitude: string;
      weather: string;
    };
    coreData: {
      completed: boolean;
      images: number;
      videos: number;
      totalSize: string;
      resolution: string;
      photos: { id: string; url: string; caption: string }[];
    };
    notes: {
      completed: boolean;
      content: string;
    };
  };
}

type TabType = 'projectInfo' | 'coreData' | 'notes';

export function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('projectInfo');

  const stats = [
    {
      label: 'Total Reports',
      value: '342',
      description: 'All time',
      icon: FileText,
      color: 'text-[#1e88e5]',
    },
    {
      label: 'In Progress',
      value: '28',
      description: 'Need completion',
      icon: Clock,
      color: 'text-[#f59e0b]',
    },
    {
      label: 'Completed',
      value: '298',
      description: 'This quarter',
      icon: CheckCircle2,
      color: 'text-[#10b981]',
    },
    {
      label: 'Pending Review',
      value: '16',
      description: 'Awaiting approval',
      icon: AlertCircle,
      color: 'text-[#8b5cf6]',
    },
  ];

  const reports: Report[] = [
    {
      id: 'RPT-2024-001',
      projectName: 'Downtown Infrastructure Survey',
      projectId: 'PRJ-2024-001',
      client: 'City Planning Department',
      dronCompany: 'AeroTech Solutions',
      createdDate: '2024-01-15',
      lastModified: '2 hours ago',
      status: 'In Progress',
      completionPercentage: 65,
      sections: {
        projectInfo: {
          completed: true,
          members: [
            { name: 'John Anderson', role: 'Pilot', email: 'j.anderson@aerotech.com' },
            { name: 'Michael Chen', role: 'Project Manager', email: 'm.chen@cityplanning.gov' },
            { name: 'Sarah Davis', role: 'Data Analyst', email: 's.davis@aerotech.com' },
          ],
          location: 'Downtown District, City Center',
          coordinates: '40.7128° N, 74.0060° W',
          area: '2.5 km²',
          purpose: 'Infrastructure assessment and urban planning',
          flightDate: '2024-01-20',
          duration: '2h 45min',
          altitude: '120m AGL',
          weather: 'Clear, 15°C, Wind: 8 km/h',
        },
        coreData: {
          completed: false,
          images: 1247,
          videos: 12,
          totalSize: '45.2 GB',
          resolution: '4K UHD',
          photos: [
            { id: 'ph-001', url: '', caption: 'Main Street Overview - North Section' },
            { id: 'ph-002', url: '', caption: 'Building Infrastructure Detail' },
            { id: 'ph-003', url: '', caption: 'Road Surface Analysis' },
            { id: 'ph-004', url: '', caption: 'Intersection Aerial View' },
            { id: 'ph-005', url: '', caption: 'Downtown District East Wing' },
            { id: 'ph-006', url: '', caption: 'Traffic Pattern Documentation' },
          ],
        },
        notes: {
          completed: true,
          content: 'Flight conducted within approved airspace. All safety protocols followed. Minor weather delay of 30 minutes due to morning fog.',
        },
      },
    },
    {
      id: 'RPT-2024-002',
      projectName: 'Solar Farm Inspection',
      projectId: 'PRJ-2024-002',
      client: 'GreenEnergy Corp',
      dronCompany: 'Global Drone Services',
      createdDate: '2024-01-20',
      lastModified: '1 day ago',
      status: 'Completed',
      completionPercentage: 100,
      sections: {
        projectInfo: {
          completed: true,
          members: [
            { name: 'Maria Garcia', role: 'Pilot', email: 'm.garcia@globaldrone.com' },
            { name: 'Sarah Williams', role: 'Client Representative', email: 's.williams@greenenergy.com' },
          ],
          location: 'West Solar Facility',
          coordinates: '34.0522° N, 118.2437° W',
          area: '5.8 km²',
          purpose: 'Solar panel efficiency inspection and thermal analysis',
          flightDate: '2024-01-22',
          duration: '3h 15min',
          altitude: '80m AGL',
          weather: 'Sunny, 22°C, Wind: 5 km/h',
        },
        coreData: {
          completed: true,
          images: 2145,
          videos: 8,
          totalSize: '67.8 GB',
          resolution: '4K UHD',
          photos: [
            { id: 'ph-101', url: '', caption: 'Solar Panel Array A - Thermal Scan' },
            { id: 'ph-102', url: '', caption: 'Panel Efficiency Heat Map' },
            { id: 'ph-103', url: '', caption: 'Section B Inspection Results' },
            { id: 'ph-104', url: '', caption: 'Maintenance Required Panels' },
          ],
        },
        notes: {
          completed: true,
          content: 'Thermal imaging completed successfully. Identified 12 panels requiring maintenance.',
        },
      },
    },
    {
      id: 'RPT-2024-003',
      projectName: 'Agricultural Land Mapping',
      projectId: 'PRJ-2024-003',
      client: 'FarmTech Industries',
      dronCompany: 'SkyView Innovations',
      createdDate: '2024-02-01',
      lastModified: '3 days ago',
      status: 'In Progress',
      completionPercentage: 45,
      sections: {
        projectInfo: {
          completed: true,
          members: [
            { name: 'Chen Wei', role: 'Pilot', email: 'c.wei@skyview.com' },
            { name: 'David Park', role: 'Farm Manager', email: 'd.park@farmtech.com' },
          ],
          location: 'Agricultural Center, West Valley',
          coordinates: '36.7783° N, 119.4179° W',
          area: '12.3 km²',
          purpose: 'Crop health monitoring and land surveying',
          flightDate: '',
          duration: '',
          altitude: '',
          weather: '',
        },
        coreData: {
          completed: false,
          images: 0,
          videos: 0,
          totalSize: '0 GB',
          resolution: '',
          photos: [],
        },
        notes: {
          completed: false,
          content: '',
        },
      },
    },
    {
      id: 'RPT-2024-004',
      projectName: 'Bridge Structure Analysis',
      projectId: 'PRJ-2024-004',
      client: 'Highway Authority',
      dronCompany: 'AeroTech Solutions',
      createdDate: '2024-01-10',
      lastModified: '5 hours ago',
      status: 'Pending Review',
      completionPercentage: 90,
      sections: {
        projectInfo: {
          completed: true,
          members: [
            { name: 'Sarah Johnson', role: 'Pilot', email: 's.johnson@aerotech.com' },
            { name: 'Emma Rodriguez', role: 'Project Supervisor', email: 'e.rodriguez@highways.gov' },
          ],
          location: 'Main Highway Bridge',
          coordinates: '40.7589° N, 73.9851° W',
          area: '0.8 km²',
          purpose: 'Structural integrity assessment',
          flightDate: '2024-01-12',
          duration: '1h 30min',
          altitude: '50m AGL',
          weather: 'Partly cloudy, 18°C, Wind: 12 km/h',
        },
        coreData: {
          completed: true,
          images: 856,
          videos: 15,
          totalSize: '38.5 GB',
          resolution: '4K UHD',
          photos: [],
        },
        notes: {
          completed: false,
          content: '',
        },
      },
    },
  ];

  // Set first report as selected by default
  if (!selectedReport && reports.length > 0) {
    setSelectedReport(reports[0]);
  }

  const tabs = [
    { id: 'projectInfo', label: 'Project Info', icon: Users },
    { id: 'coreData', label: 'Core Data', icon: Database },
    { id: 'notes', label: 'Notes', icon: FileWarning },
  ];

  const renderTabContent = () => {
    if (!selectedReport) return null;

    const section = selectedReport.sections[activeTab];

    switch (activeTab) {
      case 'projectInfo':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-foreground">Team Members</h4>
                {section.completed ? (
                  <Badge className="bg-[#10b981] text-white">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                ) : (
                  <Badge className="bg-[#f59e0b] text-white">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Incomplete
                  </Badge>
                )}
              </div>
              <Button size="sm" variant="outline" className="border-[#383838] hover:bg-[#383838]">
                <Plus className="w-3 h-3 mr-1" />
                Add Member
              </Button>
            </div>
            <div className="space-y-2">
              {section.members.map((member, index) => (
                <Card key={index} className="bg-[#232323] border-[#383838]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#383838] flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="font-medium text-foreground">Project Information</h4>
                {section.completed ? (
                  <Badge className="bg-[#10b981] text-white">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                ) : (
                  <Badge className="bg-[#f59e0b] text-white">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Incomplete
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Location</label>
                  <p className="text-sm text-foreground">{section.location}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Coordinates</label>
                  <p className="text-sm text-foreground">{section.coordinates}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Coverage Area</label>
                  <p className="text-sm text-foreground">{section.area}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Purpose</label>
                  <p className="text-sm text-foreground">{section.purpose}</p>
                </div>
              </div>
              <Card className="bg-[#232323] border-[#383838] mt-4">
                <CardContent className="p-4">
                  <div className="h-[200px] bg-[#1a1a1a] rounded flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="font-medium text-foreground">Flight Information</h4>
                {section.completed ? (
                  <Badge className="bg-[#10b981] text-white">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                ) : (
                  <Badge className="bg-[#f59e0b] text-white">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Incomplete
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Flight Date</label>
                  <p className="text-sm text-foreground">{section.flightDate || 'Not set'}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Duration</label>
                  <p className="text-sm text-foreground">{section.duration || 'Not set'}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Altitude</label>
                  <p className="text-sm text-foreground">{section.altitude || 'Not set'}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Weather Conditions</label>
                  <p className="text-sm text-foreground">{section.weather || 'Not set'}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'coreData':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-medium text-foreground">Data Collection</h4>
              {section.completed ? (
                <Badge className="bg-[#10b981] text-white">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Completed
                </Badge>
              ) : (
                <Badge className="bg-[#f59e0b] text-white">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Incomplete
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-[#232323] border-[#383838]">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">Images</p>
                  <p className="text-2xl font-bold text-foreground">{section.images}</p>
                </CardContent>
              </Card>
              <Card className="bg-[#232323] border-[#383838]">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">Videos</p>
                  <p className="text-2xl font-bold text-foreground">{section.videos}</p>
                </CardContent>
              </Card>
              <Card className="bg-[#232323] border-[#383838]">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">Total Size</p>
                  <p className="text-2xl font-bold text-foreground">{section.totalSize}</p>
                </CardContent>
              </Card>
              <Card className="bg-[#232323] border-[#383838]">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">Resolution</p>
                  <p className="text-xl font-bold text-foreground">{section.resolution || 'N/A'}</p>
                </CardContent>
              </Card>
            </div>

            {/* Site Photographs Section */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-foreground">Site Photographs</h4>
                <Button size="sm" variant="outline" className="border-[#383838] hover:bg-[#383838]">
                  <Plus className="w-3 h-3 mr-1" />
                  Upload Photos
                </Button>
              </div>
              {section.photos.length === 0 ? (
                <Card className="bg-[#232323] border-[#383838]">
                  <CardContent className="p-12 text-center">
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">No photographs uploaded yet</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {section.photos.map((photo) => (
                    <Card key={photo.id} className="bg-[#232323] border-[#383838]">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-[#1a1a1a] rounded-t" />
                        <div className="p-3">
                          <p className="text-xs text-muted-foreground">{photo.caption}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'notes':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-medium text-foreground">Additional Notes</h4>
              {section.completed ? (
                <Badge className="bg-[#10b981] text-white">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Completed
                </Badge>
              ) : (
                <Badge className="bg-[#f59e0b] text-white">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Incomplete
                </Badge>
              )}
            </div>
            {section.content ? (
              <Card className="bg-[#232323] border-[#383838]">
                <CardContent className="p-4">
                  <p className="text-sm text-foreground whitespace-pre-wrap">{section.content}</p>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-[#232323] border-[#383838]">
                <CardContent className="p-12 text-center">
                  <FileWarning className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">No notes added yet</p>
                </CardContent>
              </Card>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Reports</h2>
          <p className="text-muted-foreground">
            View and manage project reports and documentation
          </p>
        </div>
        <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Create Report
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
        {/* Left Column - Reports List */}
        <Card className="lg:col-span-1 bg-[#2a2a2a] border-[#383838]">
          <CardHeader className="border-b border-[#383838]">
            <CardTitle className="text-foreground">Project Reports</CardTitle>
            <CardDescription className="text-muted-foreground">
              Select a report to view details
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-[#383838]">
              {reports.map((report) => (
                <button
                  key={report.id}
                  onClick={() => {
                    setSelectedReport(report);
                    setActiveTab('projectInfo');
                  }}
                  className={`w-full text-left p-4 transition-colors hover:bg-[#232323] ${
                    selectedReport?.id === report.id
                      ? 'bg-[#232323] border-l-2 border-primary'
                      : ''
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-foreground line-clamp-1">
                        {report.projectName}
                      </p>
                      <Badge
                        variant="default"
                        className={
                          report.status === 'Completed'
                            ? 'bg-[#10b981] text-white'
                            : report.status === 'In Progress'
                              ? 'bg-[#f59e0b] text-white'
                              : 'bg-[#8b5cf6] text-white'
                        }
                      >
                        {report.status === 'Completed' ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : report.status === 'In Progress' ? (
                          <Clock className="w-3 h-3" />
                        ) : (
                          <AlertCircle className="w-3 h-3" />
                        )}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{report.id}</p>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3 h-3 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground truncate">{report.client}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground font-medium">
                          {report.completionPercentage}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            report.completionPercentage === 100
                              ? 'bg-[#10b981]'
                              : 'bg-[#f59e0b]'
                          }`}
                          style={{ width: `${report.completionPercentage}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>Modified: {report.lastModified}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Report Details with Tabs */}
        <Card className="lg:col-span-2 bg-[#2a2a2a] border-[#383838]">
          {selectedReport ? (
            <>
              <CardHeader className="border-b border-[#383838]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-foreground">{selectedReport.projectName}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      {selectedReport.projectId} • {selectedReport.dronCompany}
                    </CardDescription>
                    <Badge
                      variant="default"
                      className={
                        selectedReport.status === 'Completed'
                          ? 'bg-[#10b981] text-white mt-2'
                          : selectedReport.status === 'In Progress'
                            ? 'bg-[#f59e0b] text-white mt-2'
                            : 'bg-[#8b5cf6] text-white mt-2'
                      }
                    >
                      {selectedReport.status}
                    </Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="self-stretch bg-primary hover:bg-[#1976d2] text-primary-foreground px-3"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Report
                  </Button>
                </div>
              </CardHeader>

              {/* Tabs */}
              <div className="border-b border-[#383838] px-6 pt-4">
                <div className="flex gap-1 overflow-x-auto">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const section = selectedReport.sections[tab.id as TabType];
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as TabType)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors relative ${
                          activeTab === tab.id
                            ? 'text-primary'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                        {section && !section.completed && (
                          <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                        )}
                        {activeTab === tab.id && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content */}
              <CardContent className="p-6">{renderTabContent()}</CardContent>
            </>
          ) : (
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">Select a report to view details</p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}