import FlatCard from '../FlatCard';
import MealCard from '../MealCard';
import ChatSection from '../ChatSection';
import chickenBiryaniImg from '../../assets/biryani-img.webp';
import palakPaneerRotiImg from '../../assets/palak-panner-with-roti.jpeg';

const Home = () => {
  return (
    <div className='mx-4 mt-2'>
      <FlatCard />
      <h3 className='text-xl mt-1.5 font-extrabold'>What's Cooking Today?</h3>
      <div className='pb-1 flex gap-2'>
        <MealCard mealTime='Lunch' dishName='Chicken Biryani' dishImg={chickenBiryaniImg} />
        <MealCard mealTime='Dinner' dishName='Palak Paneer' dishImg={palakPaneerRotiImg} />
      </div>
      <h3 className='text-xl mt-0.5 mb-1.5 font-extrabold'>Flat Space</h3>
      <ChatSection />
    </div>
  );
};

export default Home;
