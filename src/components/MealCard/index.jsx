import biryaniImg from '../../assets/biryani-img.webp';

const MealCard = ({ mealTime }) => {
  return (
    <section>
      <h4 className='text-lg font-bold my-3'>{mealTime}</h4>
      <div className='border border-gray-300 rounded-xl'>
        <img src={biryaniImg} alt='meal-image' className='h-32 rounded-xl w-full' />
        <div className='flex justify-between py-2 items-center w-6/7 mx-auto'>
          <h5 className='font-bold'>Chicken Biryani</h5>
          <button
            className='border border-gray-200 text-sm px-2 py-1 rounded-xl font-bold cursor-pointer'
            onClick={() => {}}
          >
            Opt out
          </button>
        </div>
      </div>
    </section>
  );
};

export default MealCard;
