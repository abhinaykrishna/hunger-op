import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <div className='mt-5 text-2xl font-bold text-orange-300'>Calendar View</div>
      <DayPicker
        animate
        mode='single'
        selected={selectedDate}
        onSelect={setSelectedDate}
        footer={`Selected Date: ${selectedDate?.toLocaleDateString() || 'Pick a date'}`}
        classNames={{
          today: 'text-orange-300',
          selected: 'text-orange-300',
          chevron: 'fill-orange-300',
        }}
      />
      <div className='my-2'>
        <p className='text-sm'>Lunch - Bachelor's Chicken Curry + Methi Paratha</p>
        <p className='text-sm'>Dinner - Palak Paneer + Chapati</p>
      </div>
    </>
  );
}

export default Calendar;
