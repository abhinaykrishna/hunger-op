import { UsersRound, CirclePlay } from 'lucide-react';

const FlatCard = () => {
  return (
    <section
      className='flex flex-col items-center rounded-xl w-6/7 mx-auto py-3
       bg-gradient-to-br from-gray-50 via-gray-200 to-gray-300
       dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'
    >
      <h3 className='text-xl text-center'>Prestige Grand Oak</h3>
      <h4 className='text-center'>#265, 1st Cross, 7th Main, Indiranagar, Bengaluru.</h4>
      <p className='border-b-1 my-1 w-3/4' />
      <div className='flex my-1.5 w-3/4 justify-around'>
        <div className='flex items-center'>
          <UsersRound className='h-5 mr-1' />
          <span>3 Members</span>
        </div>
        <div className='flex items-center'>
          <CirclePlay className='h-5 mr-1' />
          <span>Week 5</span>
        </div>
      </div>
    </section>
  );
};

export default FlatCard;
