import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import Header from '../Header';
import AppNavigation from '../AppNavigation';

const Dashboard = () => {
  const theme = useSelector(state => state.theme.appTheme);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main className='h-screen flex flex-col max-w-md mx-auto' style={{ height: '100vh', height: '100dvh' }}>
      <Header />
      <div className='flex-1 overflow-y-auto h-full'>
        <Outlet />
      </div>
      <AppNavigation />
    </main>
  );
};

export default Dashboard;
