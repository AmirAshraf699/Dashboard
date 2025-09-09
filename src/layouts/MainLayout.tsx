import Sidebar from '../components/Sidebar';
import MainHeader from '../components/MainHeader';
import DashboardCards from '../components/DashboardCards';

interface MainLayoutTypes {
  children : React.ReactNode;
}

function MainLayout({ children }: MainLayoutTypes) {
  return (
    <div style={{ display: 'flex', width: '100vw', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ flex: 1, minWidth: 0, width: '100%' }}>
          <MainHeader />
          <DashboardCards />
          {children}
      </div>
    </div>
  );
};

export default MainLayout;