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
    const filteredList = term
      ? baseList.filter(item => item.toLowerCase().includes(term.toLowerCase()))
      : baseList;
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
    <div className='flex flex-col h-full'>
      <h3 className='text-2xl underline mt-2 p-2'>Menu Items</h3>
      <div className='flex gap-2 flex-wrap my-1.5 mx-2'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchTermChange}
          className='flex-1 min-w-[200px] bg-transparent placeholder:text-slate-700 text-slate-700 text-sm border border-slate-200 rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
          placeholder='Search here...'
        />
        <select
          value={activeFilterKey}
          onChange={handleFilterChange}
          className='min-w-[150px] border border-slate-200 px-3 py-2 text-slate-700 text-sm rounded-lg focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow focus:outline-none'
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
        <ol className='list-decimal list-inside overflow-y-auto'>
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
