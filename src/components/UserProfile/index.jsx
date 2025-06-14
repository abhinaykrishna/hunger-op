import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

const UserProfile = () => {
  return (
    <div className='mx-4 flex flex-col flex-wrap'>
      <Link to='/dashboard/more' className='my-3 flex items-center'>
        <ChevronLeft />
        <span>More</span>
      </Link>
      <h3 className='text-center text-xl mb-2'>My Profile</h3>
    </div>
  );
};

export default UserProfile;
