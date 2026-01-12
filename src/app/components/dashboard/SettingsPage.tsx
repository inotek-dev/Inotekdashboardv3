import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Shield,
  Sparkles,
  BarChart3,
  User,
  Palette,
  Lock,
  Bell,
  ChevronRight,
  Save,
  Users,
  Plus,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';

type SettingSection =
  | 'permission-groups'
  | 'ai-prompts'
  | 'statistics-config'
  | 'user-data'
  | 'theme'
  | 'password'
  | 'notifications';

interface SettingNavItem {
  id: SettingSection;
  label: string;
  icon: typeof Shield;
  category: 'application' | 'user';
}

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SettingSection>('permission-groups');

  const settingNavItems: SettingNavItem[] = [
    {
      id: 'permission-groups',
      label: 'Permission Groups',
      icon: Shield,
      category: 'application',
    },
    {
      id: 'ai-prompts',
      label: 'AI Prompts',
      icon: Sparkles,
      category: 'application',
    },
    {
      id: 'statistics-config',
      label: 'Statistics Configuration',
      icon: BarChart3,
      category: 'application',
    },
    {
      id: 'user-data',
      label: 'User Data',
      icon: User,
      category: 'user',
    },
    {
      id: 'theme',
      label: 'Theme',
      icon: Palette,
      category: 'user',
    },
    {
      id: 'password',
      label: 'Change Password',
      icon: Lock,
      category: 'user',
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      category: 'user',
    },
  ];

  const applicationSettings = settingNavItems.filter((item) => item.category === 'application');
  const userSettings = settingNavItems.filter((item) => item.category === 'user');

  const renderSettingContent = () => {
    switch (activeSection) {
      case 'permission-groups':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Permission Groups</h3>
              <p className="text-sm text-muted-foreground">
                Define and manage permission groups for different user roles in your application.
              </p>
            </div>

            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                Create Group
              </Button>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Administrator', users: 3, permissions: 'Full Access', color: 'bg-[#ef4444]' },
                { name: 'Project Manager', users: 12, permissions: 'Read, Write, Delete Projects', color: 'bg-[#1e88e5]' },
                { name: 'Pilot', users: 24, permissions: 'Read, Write Reports', color: 'bg-[#10b981]' },
                { name: 'Client', users: 45, permissions: 'Read Only', color: 'bg-[#f59e0b]' },
                { name: 'Reporter', users: 8, permissions: 'Read Dashboard, Statistics', color: 'bg-[#8b5cf6]' },
              ].map((group, index) => (
                <Card key={index} className="bg-[#232323] border-[#383838]">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-10 h-10 rounded-lg ${group.color} flex items-center justify-center`}>
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-foreground">{group.name}</p>
                            <Badge variant="outline" className="border-[#383838] text-muted-foreground">
                              <Users className="w-3 h-3 mr-1" />
                              {group.users} users
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{group.permissions}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" className="border-[#383838] hover:bg-[#383838]">
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#383838] hover:bg-[#383838] text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'ai-prompts':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI Prompts Configuration</h3>
              <p className="text-sm text-muted-foreground">
                Configure AI prompts and templates used throughout the application.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-[#232323] border-[#383838]">
                <CardHeader>
                  <CardTitle className="text-foreground text-base">Report Generation Prompt</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Prompt used for generating automated report summaries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full h-32 bg-[#1a1a1a] border border-[#383838] rounded-lg p-3 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter AI prompt template..."
                    defaultValue="Analyze the drone survey data and generate a comprehensive report including key findings, anomalies, and recommendations."
                  />
                </CardContent>
              </Card>

              <Card className="bg-[#232323] border-[#383838]">
                <CardHeader>
                  <CardTitle className="text-foreground text-base">Data Analysis Prompt</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Prompt used for automated data analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full h-32 bg-[#1a1a1a] border border-[#383838] rounded-lg p-3 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter AI prompt template..."
                    defaultValue="Review the collected images and sensor data to identify patterns, trends, and potential issues requiring attention."
                  />
                </CardContent>
              </Card>

              <Card className="bg-[#232323] border-[#383838]">
                <CardHeader>
                  <CardTitle className="text-foreground text-base">Customer Insights Prompt</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Prompt used for generating customer insights and recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full h-32 bg-[#1a1a1a] border border-[#383838] rounded-lg p-3 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter AI prompt template..."
                    defaultValue="Analyze customer project history and preferences to provide personalized recommendations for future services."
                  />
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        );

      case 'statistics-config':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Statistics Configuration</h3>
              <p className="text-sm text-muted-foreground">
                Configure how statistics are calculated and displayed across the application.
              </p>
            </div>

            <Card className="bg-[#232323] border-[#383838]">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Dashboard Metrics</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Select which metrics to display on the main dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: 'Total Projects', enabled: true },
                    { label: 'Active Projects', enabled: true },
                    { label: 'Completed Reports', enabled: true },
                    { label: 'Revenue This Month', enabled: true },
                    { label: 'Flight Hours', enabled: false },
                    { label: 'Customer Satisfaction', enabled: false },
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#1a1a1a] border border-[#383838]">
                      <span className="text-sm text-foreground">{metric.label}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={metric.enabled} />
                        <div className="w-11 h-6 bg-[#383838] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#232323] border-[#383838]">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Report Settings</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Configure report generation and export settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Default Date Range
                    </label>
                    <select className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>This Year</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Export Format
                    </label>
                    <select className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>PDF</option>
                      <option>Excel (XLSX)</option>
                      <option>CSV</option>
                      <option>JSON</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        );

      case 'user-data':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">User Data</h3>
              <p className="text-sm text-muted-foreground">
                Manage your personal information and profile settings.
              </p>
            </div>

            <Card className="bg-[#232323] border-[#383838]">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Profile Information</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Update your personal details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        defaultValue="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        defaultValue="Anderson"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="j.anderson@aerotech.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="Senior Drone Pilot"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="AeroTech Solutions"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        );

      case 'theme':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Theme Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Customize the appearance of your application interface.
              </p>
            </div>

            <Card className="bg-[#232323] border-[#383838]">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Color Scheme</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Select your preferred color theme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Dark', active: true, bg: 'bg-[#1a1a1a]', border: 'border-primary' },
                    { name: 'Light', active: false, bg: 'bg-white', border: 'border-[#383838]' },
                    { name: 'Auto', active: false, bg: 'bg-gradient-to-r from-[#1a1a1a] to-white', border: 'border-[#383838]' },
                  ].map((theme, index) => (
                    <button
                      key={index}
                      className={`p-4 rounded-lg border-2 ${theme.border} bg-[#1a1a1a] hover:border-primary transition-colors`}
                    >
                      <div className={`w-full h-24 rounded ${theme.bg} mb-3 border border-[#383838]`}></div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{theme.name}</span>
                        {theme.active && (
                          <Badge className="bg-primary text-primary-foreground">Active</Badge>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#232323] border-[#383838]">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Accent Color</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Choose your preferred accent color
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-3">
                  {[
                    { color: '#1e88e5', active: true },
                    { color: '#10b981', active: false },
                    { color: '#f59e0b', active: false },
                    { color: '#8b5cf6', active: false },
                    { color: '#ef4444', active: false },
                  ].map((accent, index) => (
                    <button
                      key={index}
                      className={`w-full aspect-square rounded-lg border-2 ${
                        accent.active ? 'border-white' : 'border-[#383838]'
                      } hover:border-white transition-colors relative`}
                      style={{ backgroundColor: accent.color }}
                    >
                      {accent.active && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-[#1a1a1a] rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        );

      case 'password':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Change Password</h3>
              <p className="text-sm text-muted-foreground">
                Update your password to keep your account secure.
              </p>
            </div>

            <Card className="bg-[#232323] border-[#383838]">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Password Requirements</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Your password must meet the following criteria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
                    At least 8 characters long
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
                    Contains at least one uppercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
                    Contains at least one number
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
                    Contains at least one special character
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#232323] border-[#383838]">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Update Password</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-[#1a1a1a] border border-[#383838] rounded-lg p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
                <Lock className="w-4 h-4 mr-2" />
                Update Password
              </Button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Notification Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Configure how and when you receive notifications.
              </p>
            </div>

            <Card className="bg-[#232323] border-[#383838]">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Email Notifications</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Receive updates via email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: 'Project Updates', description: 'Get notified about project status changes', enabled: true },
                    { label: 'New Reports', description: 'Receive alerts when new reports are created', enabled: true },
                    { label: 'Team Mentions', description: 'Get notified when someone mentions you', enabled: true },
                    { label: 'Weekly Summary', description: 'Receive a weekly summary of your activity', enabled: false },
                    { label: 'Marketing Emails', description: 'Receive news and product updates', enabled: false },
                  ].map((notification, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#1a1a1a] border border-[#383838]">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{notification.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{notification.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer ml-4">
                        <input type="checkbox" className="sr-only peer" defaultChecked={notification.enabled} />
                        <div className="w-11 h-6 bg-[#383838] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#232323] border-[#383838]">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Push Notifications</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Receive notifications in your browser
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: 'Desktop Notifications', description: 'Show notifications on your desktop', enabled: true },
                    { label: 'Sound Alerts', description: 'Play a sound for notifications', enabled: false },
                  ].map((notification, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#1a1a1a] border border-[#383838]">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{notification.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{notification.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer ml-4">
                        <input type="checkbox" className="sr-only peer" defaultChecked={notification.enabled} />
                        <div className="w-11 h-6 bg-[#383838] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-[#1976d2] text-primary-foreground">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
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
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Settings</h2>
        <p className="text-muted-foreground">
          Manage your application and account settings
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {/* Application Settings */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
                Application Settings
              </h4>
              <nav className="space-y-1">
                {applicationSettings.map((item) => {
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

            {/* User Settings */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
                User Settings
              </h4>
              <nav className="space-y-1">
                {userSettings.map((item) => {
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
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3">
          <Card className="bg-[#2a2a2a] border-[#383838]">
            <CardContent className="p-6">
              {renderSettingContent()}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}