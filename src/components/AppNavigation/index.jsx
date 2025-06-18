import { useState } from 'react';
import { Home, Search, Utensils, Menu } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

const tabs = [
  { pageKey: 'home', label: 'Home', path: '', LucideIcon: Home },
  { pageKey: 'search', label: 'Search', path: 'search', LucideIcon: Search },
  { pageKey: 'meals', label: 'Meals', path: 'meals', LucideIcon: Utensils },
  { pageKey: 'more', label: 'More', path: 'more', LucideIcon: Menu },
];

const AppNavigation = () => {
  // const nav = useSelector(state => state);
  // const { activePage } = nav;
  // const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <section className='border-t border-gray-200'>
      <div className='flex justify-around items-center py-1.5'>
        {tabs.map(({ pageKey, label, path, LucideIcon }, idx) => (
          <div
            key={`${idx + pageKey}`}
            className='flex flex-col items-center space-y-0.5 cursor-pointer'
            onClick={() => {
              setActiveTab(label);
              navigate(`/dashboard/${path}`);
            }}
          >
            <LucideIcon className={`h-5 ${activeTab === label ? 'text-red-600 dark:text-red-300' : 'text-gray-400'}`} />
            <span
              className={`text-xs text-blue-600 ${
                activeTab === label ? 'text-red-600 dark:text-red-300' : 'text-gray-400'
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppNavigation;
