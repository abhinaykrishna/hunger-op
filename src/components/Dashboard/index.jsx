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
    <main className='relative'>
      <div className='fixed top-0 left-0 right-0 w-full z-50 h-16 bg-cyan-500'>
        <Header />
      </div>
      <div className='pt-16 pb-16 overflow-y-auto h-full'>
        <Outlet />
      </div>
      <AppNavigation />
    </main>
  );
};

export default Dashboard;
