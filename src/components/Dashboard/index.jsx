import { useState } from 'react';
import Header from '../Header';
import Body from '../Body';
import AppNavigation from '../AppNavigation';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const updateActiveTab = tab => {
    setActiveTab(tab);
  };

  return (
    <main className='relative' style={{ height: '100dvh' }}>
      <div className='fixed top-0 left-0 w-full z-50'>
        <Header />
      </div>
      <div className='pt-16 pb-16 overflow-auto h-full'>
        <Body activeTab={activeTab} />
      </div>
      <div className='fixed bottom-0 left-0 w-full z-50'>
        <AppNavigation activeTab={activeTab} updateActiveTab={updateActiveTab} />
      </div>
    </main>
  );
};

export default Dashboard;
