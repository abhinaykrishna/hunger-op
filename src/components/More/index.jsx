import { CalendarDays, House, HousePlus, LogOut, ScrollText, Sun, Moon, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';

const More = () => {
  const options = [
    { pageKey: 'userProfile', label: 'User Profile', path: 'userProfile', LucideComponent: User },
    { pageKey: 'createFlat', label: 'Create Flat', path: 'createFlat', LucideComponent: House },
    { pageKey: 'joinFlat', label: 'Join Flat', path: 'joinFlat', LucideComponent: HousePlus },
    { pageKey: 'groceriesList', label: 'Generate Groceries Flat', path: 'groceriesList', LucideComponent: ScrollText },
    { pageKey: 'mealCalendar', label: 'Meal Calendar', path: 'mealCalendar', LucideComponent: CalendarDays },
    { pageKey: 'inviteFriend', label: 'Invite Friend', path: 'inviteFriend', LucideComponent: House },
    { pageKey: 'logout', label: 'Logout', path: '', LucideComponent: LogOut },
  ];

  const appTheme = useSelector(state => state.theme.appTheme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(toggleTheme(appTheme === 'light' ? 'dark' : 'light'));
  };

  console.log(appTheme);

  return (
    <div className='mx-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl my-2 font-bold'>More</h1>
        {appTheme === 'light' ? (
          <Sun className='w-6 h-6 cursor-pointer' onClick={handleThemeChange} />
        ) : (
          <Moon className='w-6 h-6 cursor-pointer' onClick={handleThemeChange} />
        )}
      </div>
      <section>
        {options.map(({ label, LucideComponent }, idx) => (
          <div key={idx} className='flex py-3 items-center gap-2.5 cursor-pointer'>
            <LucideComponent className='w-6 h-6' />
            <span>{label}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default More;
