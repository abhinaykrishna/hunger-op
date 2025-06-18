import { useState } from 'react';

const MealCard = ({ mealTime, dishName, dishImg }) => {
  const [optedOut, setOptedOut] = useState(false);

  const handleOptOut = () => {
    setOptedOut(prev => !prev);
  };

  return (
    <section className='mb-2.5'>
      <h4 className='text-lg font-bold my-1.5'>{mealTime}</h4>
      <div className='border border-gray-300 rounded-xl'>
        <img src={dishImg} alt='meal-image' className='h-32 rounded-xl w-full' />
        <div className='flex justify-between py-2 items-center w-6/7 mx-auto'>
          <h5 className='font-bold'>{dishName}</h5>
          <div className={`flex flex-col items-center ${optedOut ? 'w-40' : ''}`}>
            <button
              className='border border-gray-200 px-2 py-1 rounded-xl font-bold cursor-pointer w-18 text-sm'
              onClick={handleOptOut}
            >
              {optedOut ? 'Undo' : 'Opt out'}
            </button>
            {optedOut && (
              <div className='my-0.5 text-xs text-red-400'>You've opted out. Tap Undo to opt back in! 😋</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealCard;
