import { Home, Search, Utensils, Menu } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

const tabs = [
  { pageKey: 'home', label: 'Home', path: '', LucideComponent: Home },
  { pageKey: 'search', label: 'Search', path: 'search', LucideComponent: Search },
  { pageKey: 'meals', label: 'Meals', path: 'meals', LucideComponent: Utensils },
  { pageKey: 'more', label: 'More', path: 'more', LucideComponent: Menu },
];

const AppNavigation = () => {
  // const nav = useSelector(state => state);
  // const { activePage } = nav;
  // const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  return (
    <section className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200'>
      <div className='flex justify-around items-center py-3'>
        {tabs.map(({ pageKey, label, path, LucideComponent }, idx) => (
          <div
            key={`${idx + pageKey}`}
            className='flex flex-col items-center space-y-1 cursor-pointer'
            onClick={() => {
              navigate(`/dashboard/${path}`);
            }}
          >
            <LucideComponent
              className={`w-6 h-6 ${
                location.pathname === `/dashboard/${path}` ? 'text-blue-600' : 'text-gray-400'
              }`}
            />
            <span
              className={`text-xs text-blue-600 ${
                location.pathname === `/dashboard/${path}` ? 'text-blue-600' : 'text-gray-400'
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
