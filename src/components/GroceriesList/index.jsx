import { Link } from 'react-router';
import { ChevronLeft, PlusCircle, Filter } from 'lucide-react';

const GroceriesList = () => {
  return (
    <div className='mx-4'>
      <div className='flex items-center justify-between'>
        <Link to='/dashboard/more' className='my-3 flex items-center'>
          <ChevronLeft />
          <span>More</span>
        </Link>
        <PlusCircle className='' />
      </div>
      <div className='my-2 text-xl'>Groceries List</div>
      <div className='flex items-center gap-1 bg-gray-100 p-1 rounded-md'>
        <Filter className='h-4' />
        <span>Filter</span>
      </div>
      <div>Checkbox - Item name</div>
    </div>
  );
};

export default GroceriesList;
