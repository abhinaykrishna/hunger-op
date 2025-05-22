import Calendar from '../Calendar';

const Recos = () => {
  return (
    <div className='p-2'>
      <div className='border my-2 px-2 rounded-md'>
        <div className='my-5 text-lg'>
          Today's Recommendation - Available Stock + Recently Prepared {'!<=3'}
        </div>
        <div className='my-5 text-lg'>Opt Out Lunch/Dinner</div>
      </div>
      <Calendar />
    </div>
  );
};

export default Recos;
