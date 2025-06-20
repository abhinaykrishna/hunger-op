import { useState } from 'react';

const MealCard = ({ mealTime, dishName, dishImg }) => {
  const [optedOut, setOptedOut] = useState(false);

  const handleOptOut = () => {
    setOptedOut(prev => !prev);
  };

  return (
    <section className='mb-1 w-1/2'>
      <h4 className='text-lg font-bold my-1'>{mealTime}</h4>
      <div className='border border-gray-300 rounded-xl'>
        <img src={dishImg} alt='meal-image' className='h-32 rounded-xl' />
        <div className='flex flex-col items-center py-2 mx-2'>
          <h5 className='font-bold text-sm'>{dishName}</h5>
          <button
            className='border border-gray-200 px-1 py-0.5 mt-0.5 rounded-xl font-bold cursor-pointer w-18 text-xs'
            onClick={handleOptOut}
          >
            {optedOut ? 'Undo' : 'Opt out'}
          </button>
          {optedOut && (
            <div className='mt-1 text-xs text-red-400 text-center'>
              <p>You've opted out.</p>
              <p>Tap Undo to opt back in! 😋</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MealCard;
