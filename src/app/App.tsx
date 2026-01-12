import { useState } from 'react';
import { Navbar, navigationLinks } from './components/dashboard/Navbar';
import { Header } from './components/dashboard/Header';
import { DashboardContent } from './components/dashboard/DashboardContent';
import { PageContent } from './components/dashboard/PageContent';
import { UsersPage } from './components/dashboard/UsersPage';
import { DronCompanyPage } from './components/dashboard/DronCompanyPage';
import { ProjectsPage } from './components/dashboard/ProjectsPage';
import { CustomersPage } from './components/dashboard/CustomersPage';
import { CountriesPage } from './components/dashboard/CountriesPage';
import { ReportsPage } from './components/dashboard/ReportsPage';
import { StatisticsPage } from './components/dashboard/StatisticsPage';
import { ArchivePage } from './components/dashboard/ArchivePage';
import { SettingsPage } from './components/dashboard/SettingsPage';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/dashboard');

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Get active page information
  const activePage = navigationLinks.find((link) => link.slug === activeLink);
  const activePageTitle = activePage?.label || 'Dashboard';

  // Render page content based on active link
  const renderPageContent = () => {
    switch (activeLink) {
      case '/dashboard':
        return <DashboardContent />;
      case '/reports':
        return <ReportsPage />;
      case '/countries':
        return <CountriesPage />;
      case '/customers':
        return <CustomersPage />;
      case '/projects':
        return <ProjectsPage />;
      case '/dron-company':
        return <DronCompanyPage />;
      case '/users':
        return <UsersPage />;
      case '/archive':
        return <ArchivePage />;
      case '/settings':
        return <SettingsPage />;
      case '/statistics':
        return <StatisticsPage />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <Navbar
        isCollapsed={isSidebarCollapsed}
        onToggle={toggleSidebar}
        isMobileOpen={isMobileMenuOpen}
        onMobileToggle={toggleMobileMenu}
        activeLink={activeLink}
        onActiveLinkChange={setActiveLink}
      />

      {/* Main Content Area */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'md:ml-[60px]' : 'md:ml-[300px]'
        }`}
      >
        {/* Header */}
        <Header
          isMobileOpen={isMobileMenuOpen}
          onMobileToggle={toggleMobileMenu}
          activePageTitle={activePageTitle}
        />

        {/* Page Content */}
        <main className="p-6">{renderPageContent()}</main>
      </div>
    </div>
  );
}

export default App;