import { format } from 'date-fns';
import { SendHorizontal } from 'lucide-react';

function ChatSection() {
  return (
    <section className='px-2 py-1 border border-gray-300 rounded-md mb-10'>
      {/* <p className='text-center text-xs'>Today - {format(new Date(), 'dd/MM/yyyy')}</p> */}
      <div className='flex flex-col border-gray-300 text-sm h-40 overflow-scroll'>
        <div className='w-4/5 bg-gray-100 px-2 py-1 rounded-lg my-1 dark:text-gray-900'>
          <span className='text-blue-500'>Gareth Bale</span>
          <p className='flex justify-between items-center'>
            <span>Bwoys! Khane mein kya banwana h?</span>
            <span className='text-xs'>{format(new Date(), 'h:mm a')}</span>
          </p>
        </div>
        <div className='w-4/5 bg-gray-100 px-2 py-1 rounded-lg my-1 dark:text-gray-900'>
          <span className='text-orange-500'>Karim Benzema</span>
          <p className='flex justify-between items-center'>
            <span>Poha? 😜</span>
            <span className='text-xs'>{format(new Date(), 'h:mm a')}</span>
          </p>
        </div>
        <div className='self-end w-4/5 bg-gray-100 px-2 py-1 rounded-lg my-1 dark:text-gray-900'>
          <span className='text-green-500'>Cristiano Ronaldo</span>
          <p className='flex justify-between items-center'>
            <span>Haha! Meghana se order kare kya? 😉</span>
            <span className='text-xs'>{format(new Date(), 'h:mm a')}</span>
          </p>
        </div>
        <div className='w-4/5 bg-gray-100 px-2 py-1 rounded-lg my-1 dark:text-gray-900'>
          <span className='text-blue-500'>Gareth Bale</span>
          <p className='flex justify-between items-center'>
            <span>Body kaise banega bhai? 😒</span>
            <span className='text-xs'>{format(new Date(), 'h:mm a')}</span>
          </p>
        </div>
        <div className='w-4/5 bg-gray-100 px-2 py-1 rounded-lg my-1 dark:text-gray-900'>
          <span className='text-orange-500'>Karim Benzema</span>
          <p className='flex justify-between items-center'>
            <span>Monday se starting karenge BBC! 💪🏻</span>
            <span className='text-xs'>{format(new Date(), 'h:mm a')}</span>
          </p>
        </div>
      </div>
      <form className='flex px-1 py-0.5 mt-2 border-t-1 border-gray-300'>
        <input type='text' placeholder='send a message' className='w-full outline-none text-sm' />
        <button type='submit'>
          <SendHorizontal />
        </button>
      </form>
    </section>
  );
}

export default ChatSection;
