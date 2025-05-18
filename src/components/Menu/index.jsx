import { useState } from "react";
import { mainCourse, dals, breads, sides } from "./data";

const filterMap = {
  "main-course": mainCourse,
  dals: dals,
  breads: breads,
  sides: sides,
};

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilterKey, setActiveFilterKey] = useState("main-course");
  const [activeFilter, setActiveFilter] = useState(filterMap["main-course"]);

  const handleSearchTermChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const baseList = filterMap[activeFilterKey];
    const filteredList = term
      ? baseList.filter((item) =>
          item.toLowerCase().includes(term.toLowerCase())
        )
      : baseList;

    setActiveFilter(filteredList);
  };

  const handleFilterChange = (e) => {
    const key = e.target.value;
    setActiveFilterKey(key);

    const baseList = filterMap[key];
    const filteredList = searchTerm
      ? baseList.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : baseList;

    setActiveFilter(filteredList);
  };

  return (
    <div className="overflow-hidden">
      <h3 className="text-2xl underline mt-2 p-2">Menu Items</h3>

      <div className="flex gap-2 flex-wrap mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="flex-1 min-w-[200px] bg-transparent placeholder:text-slate-700 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search here..."
        />

        <select
          value={activeFilterKey}
          onChange={handleFilterChange}
          className="min-w-[150px] border border-slate-200 px-3 py-2 text-slate-700 text-sm rounded-lg focus:border-slate-400 hover:border-slate-300"
        >
          {Object.keys(filterMap).map((key) => (
            <option key={key} value={key}>
              {key.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
            </option>
          ))}
        </select>
      </div>

      {activeFilter.length > 0 && (
        <ol className="list-decimal list-inside">
          {activeFilter.map((item, idx) => (
            <li key={idx} className="m-1 p-2">
              {item}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Menu;
