import Recos from '../Recos';
import Menu from '../Menu';

const Body = ({ activeTab }) => {
  return (
    <>
      {activeTab === 'recos' && <Recos />}
      {activeTab === 'menu' && <Menu />}
    </>
  );
};

export default Body;
