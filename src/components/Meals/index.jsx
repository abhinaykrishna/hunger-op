import Menu from '../Menu';

const Meals = () => {
  return (
    <div className='mx-4'>
      <h1 className='text-3xl my-2 font-bold'>Meals</h1>
      <ol className='border p-2 rounded-md list-decimal list-inside'>
        <li>Today's Recommendation - Available Stock + Recently Prepared {'!<=3'}</li>
        <li>Opted dishes</li>
        <li>Veg/Non-veg Filter</li>
        <li>Food Preferences Form (TBD - More Section?)</li>
      </ol>
      <Menu />
    </div>
  );
};

export default Meals;
