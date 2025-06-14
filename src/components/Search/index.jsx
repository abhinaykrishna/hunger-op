import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className='mx-4'>
      <h1 className='text-3xl my-2 font-bold'>Search</h1>
      <section>
        <div className='border border-gray-300 flex rounded-md p-1.5 items-center'>
          <SearchIcon className='h-5 w-5 mr-2' color='gray' />
          <input placeholder='Search for dishes...' className='text-sm outline-none w-full' />
        </div>
      </section>
    </div>
  );
};

export default Search;
