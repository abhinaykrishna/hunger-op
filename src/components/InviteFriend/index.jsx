import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import whatsappLogo from '../../assets/whatsapp-logo.webp';
import instagramLogo from '../../assets/instagram-logo.webp';
import referralLogo from '../../assets/referral-logo.png';

const InviteFriend = () => {
  return (
    <div className='mx-4 flex flex-col flex-wrap'>
      <Link to='/dashboard/more' className='my-3 flex items-center'>
        <ChevronLeft />
        <span>More</span>
      </Link>
      <div className='my-2 text-xl text-center'>Invite Friends</div>
      <p className='text-center'>Earn rewards by inviting your friends!</p>
      <img src={referralLogo} className='my-4 rounded-lg' />
      <form className='flex flex-col items-center'>
        <input
          type='email'
          placeholder='Enter email/mobile number'
          className='w-full border border-slate-300 rounded-md px-2.5 py-1.5 m-1 outline-none'
        />
        <button type='submit' className='bg-amber-300 dark:bg-amber-600 py-1.5 rounded-lg w-2/5 my-2.5 cursor-pointer'>
          Invite
        </button>
      </form>
      <div className='text-sm text-center mb-2'>or share invite link</div>
      <div className='flex border border-slate-300 p-1.5 rounded-lg justify-between items-center'>
        <span className='px-1'>https://hunger-op.vercel.app</span>
        <div className='flex items-center'>
          <img src={whatsappLogo} className='h-7 mx-1.5 cursor-pointer' />
          <img src={instagramLogo} className='h-5 mx-1.5 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default InviteFriend;
