import { CircleHelp, ChevronLeft, ChevronRight, SquareUserRound, Settings } from 'lucide-react';
import { Link } from 'react-router';
import ronaldoImg from '../../assets/cr7.jpg';

const UserProfile = () => {
  const options = [
    {
      pageKey: 'account',
      label: 'Account',
      path: 'account',
      LucideIcon: SquareUserRound,
      clickHandler: () => {},
    },
    {
      pageKey: 'settings',
      label: 'Settings',
      path: 'settings',
      LucideIcon: Settings,
      clickHandler: () => {},
    },
    {
      pageKey: 'help',
      label: 'Help',
      path: 'help',
      LucideIcon: CircleHelp,
      clickHandler: () => {},
    },
  ];

  return (
    <div className='mx-4 flex flex-col flex-wrap'>
      <Link to='/dashboard/more' className='my-3 flex items-center'>
        <ChevronLeft />
        <span>More</span>
      </Link>
      <div className='mx-4'>
        <h3 className='text-center text-xl mb-2'>My Profile</h3>
        <section className='flex flex-col items-center my-2'>
          <img src={ronaldoImg} alt='user-image' className='h-28 w-28 border rounded-4xl' />
          <div className='p-1 mt-1 font-extrabold text-2xl'>Cristiano Ronaldo</div>
          <div>ronaldo7@manchesterunited.com</div>
        </section>
        <section className='mt-4'>
          {options.map(({ label, LucideIcon, pageKey }, idx) => (
            <div key={idx} className='border-t-2 border-gray-200 flex items-center justify-between'>
              <div className='flex py-3'>
                <LucideIcon />
                <span className='ml-2'>{label}</span>
              </div>
              <div className='flex'>
                {pageKey === 'account' && <button className='text-sm'>Edit Profile</button>}
                <ChevronRight color='gray' />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
