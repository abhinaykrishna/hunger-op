import { UsersRound, CirclePlay } from 'lucide-react';
import MealCard from '../MealCard';
import chickenBiryaniImg from '../../assets/biryani-img.webp';
import palakPaneerRotiImg from '../../assets/palak-panner-with-roti.jpeg';

const Home = () => {
  return (
    <div className='mx-4 mt-2'>
      <section className='flex flex-col items-center rounded-xl w-6/7 mx-auto py-3 bg-gray-100 dark:bg-slate-800'>
        <h3 className='text-xl text-center'>Skanda Sky</h3>
        <h4 className='text-lg text-center'>Kadubeesanahalli, Bengaluru.</h4>
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
      <h3 className='text-xl mt-2.5 font-extrabold'>What's Cooking Today?</h3>
      <div className='pb-4'>
        <MealCard mealTime='Lunch' dishName='Chicken Biryani' dishImg={chickenBiryaniImg} />
        <MealCard mealTime='Dinner' dishName='Palak Paneer with Roti' dishImg={palakPaneerRotiImg} />
      </div>
    </div>
  );
};

export default Home;
