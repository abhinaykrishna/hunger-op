import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';

const GroceriesList = () => {
  return (
    <div className='mx-4 flex flex-col flex-wrap'>
      <Link to='/dashboard/more' className='my-3 flex items-center'>
        <ChevronLeft />
        <span>More</span>
      </Link>
      <div className='my-2 text-xl text-center'>Groceries List</div>
    </div>
  );
};

export default GroceriesList;
