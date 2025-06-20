import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router';
import { ChevronLeft, Copy } from 'lucide-react';
import whatsappLogo from '../../assets/whatsapp-logo.webp';
import instagramLogo from '../../assets/instagram-logo.webp';
import referralLogo from '../../assets/referral-logo.png';

const APP_URL = 'https://hunger-op.vercel.app';

const InviteFriend = () => {
  const handleCopyClick = async () => {
    const copiedText = `Simplify cooking and stay organized with HungerOP app! Sign up now: ${APP_URL}`;
    await navigator.clipboard.writeText(copiedText);
    toast.dismiss();
    toast('Copied to clipboard', {
      icon: '📋',
      position: 'bottom-center',
      style: {
        marginBottom: '60px',
      },
      // className: '!bg-green-300',
    });
  };

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
        <span className='px-1'>{APP_URL}</span>
        <div className='flex items-center'>
          <Copy className='mr-1 w-5 cursor-pointer' onClick={handleCopyClick} />
          <img src={whatsappLogo} className='h-7 mx-1.5 cursor-pointer' />
          <img src={instagramLogo} className='h-5.5 mx-1.5 cursor-pointer' />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default InviteFriend;
