import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { CalendarDays, House, Handshake, HousePlus, LogOut, ScrollText, Sun, Moon, User } from 'lucide-react';
import { toggleTheme } from '../../store/slices/themeSlice';
import { logout } from '../../store/slices/authSlice';

const More = () => {
  const appTheme = useSelector(state => state.theme.appTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleThemeChange = () => {
    dispatch(toggleTheme(appTheme === 'light' ? 'dark' : 'light'));
  };

  const handleUserProfile = () => {
    navigate('/dashboard/userProfile');
  };

  const handleCreateFlat = () => {
    navigate('/dashboard/createFlat');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleJoinFlat = () => {
    navigate('/dashboard/joinFlat');
  };

  const handleMealCalendar = () => {
    navigate('/dashboard/mealCalendar');
  };

  const handleInviteFriend = () => {
    navigate('/dashboard/inviteFriend');
  };

  const options = [
    {
      pageKey: 'userProfile',
      label: 'User Profile',
      path: 'userProfile',
      LucideIcon: User,
      clickHandler: handleUserProfile,
    },
    {
      pageKey: 'createFlat',
      label: 'Create Flat',
      path: 'createFlat',
      LucideIcon: House,
      clickHandler: handleCreateFlat,
    },
    { pageKey: 'joinFlat', label: 'Join Flat', path: 'joinFlat', LucideIcon: HousePlus, clickHandler: handleJoinFlat },
    {
      pageKey: 'groceriesList',
      label: 'Generate Groceries List',
      path: 'groceriesList',
      LucideIcon: ScrollText,
      clickHandler: () => {},
    },
    {
      pageKey: 'mealCalendar',
      label: 'Meal Calendar',
      path: 'mealCalendar',
      LucideIcon: CalendarDays,
      clickHandler: handleMealCalendar,
    },
    {
      pageKey: 'inviteFriend',
      label: 'Invite Friend',
      path: 'inviteFriend',
      LucideIcon: Handshake,
      clickHandler: handleInviteFriend,
    },
    { pageKey: 'logout', label: 'Logout', path: '', LucideIcon: LogOut, clickHandler: handleLogout },
  ];

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
        {options.map(({ label, LucideIcon, clickHandler }, idx) => (
          <div key={idx} className='flex py-3 items-center gap-2.5 cursor-pointer' onClick={clickHandler}>
            <LucideIcon className='w-6 h-6' />
            <span>{label}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default More;
