import { Link } from 'react-router';

const Header = () => {
  return (
    <header className='p-4'>
      <h1 className='font-bold text-center'>
        <Link to='/'>
          <span className='text-4xl'>Hunger</span>
          <span className='text-2xl relative -top-2'> OP</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
