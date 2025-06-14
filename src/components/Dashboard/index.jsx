import { Outlet } from 'react-router';
import Header from '../Header';
import AppNavigation from '../AppNavigation';

const Dashboard = () => {
  return (
    <main className='relative' style={{ height: '100dvh' }}>
      <div className='fixed top-0 left-0 right-0 w-full z-50 h-16 bg-yellow-300'>
        <Header />
      </div>
      <div className='pt-16 pb-16 overflow-auto h-full'>
        <Outlet />
      </div>
      <AppNavigation />
    </main>
  );
};

export default Dashboard;
