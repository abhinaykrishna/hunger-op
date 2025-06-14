import { UsersRound, CirclePlay } from 'lucide-react';
import MealCard from '../MealCard';

const Home = () => {
  return (
    <div className='mx-4'>
      <h1 className='text-3xl my-2 font-bold'>Home</h1>
      <section className='flex flex-col items-center rounded-xl w-6/7 mx-auto py-4 bg-gray-100 dark:bg-slate-800'>
        <h3 className='text-xl text-center'>Skanda Sky</h3>
        <h4 className='text-lg text-center'>Kadubeesanahalli, Bengaluru</h4>
        <p className='border-b-1 my-1 w-3/4' />
        <div className='flex my-2 w-3/4 justify-around'>
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
      <h3 className='text-xl my-3 font-extrabold'>What's Cooking Today?</h3>
      <div>
        <MealCard mealTime='Lunch' />
        <MealCard mealTime='Dinner' />
      </div>
    </div>
  );
};

export default Home;
