import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import AppNavigation from './components/AppNavigation';

function App() {
  const [activeTab, setActiveTab] = useState('menu');
  const updateActiveTab = tab => {
    setActiveTab(tab);
  };

  return (
    <main className='flex flex-col h-screen'>
      <div className='shrink-0'>
        <Header />
      </div>
      <div className='flex-1 overflow-auto'>
        <Body activeTab={activeTab} />
      </div>
      <div className='shrink-0'>
        <AppNavigation
          activeTab={activeTab}
          updateActiveTab={updateActiveTab}
        />
      </div>
    </main>
  );
}

export default App;
