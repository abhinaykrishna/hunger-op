import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Body from './components/Body';
import AppNavigation from './components/AppNavigation';
import Login from './components/Login';

function App() {
  const [activeTab, setActiveTab] = useState('menu');
  const updateActiveTab = tab => {
    setActiveTab(tab);
  };

  const isAuthenticated = useSelector(state => state.login.isAuthenticated);

  return (
    <>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default App;
