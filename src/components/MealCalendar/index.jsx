import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';
import 'react-day-picker/style.css';

function MealCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className='mx-4 flex flex-col flex-wrap'>
      <Link to='/dashboard/more' className='my-3 flex items-center'>
        <ChevronLeft />
        <span>More</span>
      </Link>
      <div className='mx-4'>
        <div className='my-3 text-xl text-center'>Calendar View</div>
        <DayPicker
          animate
          mode='single'
          selected={selectedDate}
          onSelect={setSelectedDate}
          footer={`Selected Date: ${selectedDate?.toLocaleDateString() || 'Pick a date'}`}
          classNames={{
            today: 'text-blue-400',
            selected: 'text-blue-400',
            chevron: 'fill-blue-400',
          }}
        />
        <div className='my-2'>
          <p className='text-sm'>Lunch - Bachelor's Chicken Curry + Methi Paratha</p>
          <p className='text-sm'>Dinner - Palak Paneer + Chapati</p>
        </div>
      </div>
    </div>
  );
}

export default MealCalendar;
