const tabs = [
  { key: 'recos', label: 'Recos' },
  { key: 'menu', label: 'Menu' },
];

const AppNavigation = ({ activeTab, updateActiveTab }) => {
  return (
    <section className="flex py-2.5 justify-around bg-orange-100 items-center text-xl">
      {tabs.map((tab, index) => (
        <div
          key={tab.key}
          className={`w-1/2 text-center cursor-pointer ${
            activeTab === tab.key ? 'text-orange-600' : ''
          } ${index === 1 ? 'border-l border-black' : ''}`}
          onClick={() => updateActiveTab(tab.key)}
        >
          {tab.label}
        </div>
      ))}
    </section>
  );
};

export default AppNavigation;
