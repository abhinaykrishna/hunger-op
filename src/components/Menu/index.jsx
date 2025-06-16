import { useState } from 'react';
import { mainCourse, dals, breads, sides } from './data';

const filterMap = {
  all: [...mainCourse, ...dals, ...breads, ...sides],
  'main-course': mainCourse,
  dals: dals,
  breads: breads,
  sides: sides,
};

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilterKey, setActiveFilterKey] = useState('all');
  const [activeFilter, setActiveFilter] = useState(filterMap['all']);

  const handleSearchTermChange = e => {
    const term = e.target.value;
    setSearchTerm(term);
    const baseList = filterMap[activeFilterKey];
    const filteredList = term ? baseList.filter(item => item.toLowerCase().includes(term.toLowerCase())) : baseList;
    setActiveFilter(filteredList);
  };

  const handleFilterChange = e => {
    const key = e.target.value;
    setActiveFilterKey(key);
    const baseList = filterMap[key];
    const filteredList = searchTerm
      ? baseList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
      : baseList;
    setActiveFilter(filteredList);
  };

  return (
    <div className='my-1 flex flex-col h-full'>
      <div className='flex gap-2 flex-wrap my-1.5'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchTermChange}
          className='flex-1 min-w-[200px] bg-transparent placeholder:text-slate-700 dark:placeholder:text-slate-300 text-slate-700 dark:text-white text-sm border border-slate-200 rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
          placeholder='Search'
        />
      </div>
      <div className='flex mt-1'>
        <button className='flex items-center border border-slate-200 px-3 py-2 text-slate-700 dark:text-white text-sm rounded-lg cursor-pointer mr-2'>
          <div className='bg-green-500 rounded-full w-3 h-3'></div>
          <div className='border-l-2 h-3 mx-1' />
          <span className='text-sm'>Veg</span>
        </button>
        <button className='flex items-center border border-slate-200 px-3 py-2 text-slate-700 dark:text-white text-sm rounded-lg cursor-pointer mr-2'>
          <div className='bg-red-500 rounded-full w-3 h-3'></div>
          <div className='border-l-2 h-3 mx-1 ' />
          <span className='text-sm'>Non-veg</span>
        </button>
        <select
          value={activeFilterKey}
          onChange={handleFilterChange}
          className='flex-1/2 border border-slate-200 px-3 py-2 text-slate-700 dark:text-white text-sm rounded-lg focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow focus:outline-none'
        >
          {Object.keys(filterMap).map(key => (
            <option key={key} value={key}>
              {key
                ?.split('-')
                .map(w => w[0].toUpperCase() + w.slice(1))
                .join(' ')}
            </option>
          ))}
        </select>
      </div>
      {activeFilter.length > 0 && (
        <ol className='list-decimal list-inside'>
          {activeFilter.map((item, idx) => (
            <li key={idx} className='m-1 p-2'>
              {item}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Menu;
