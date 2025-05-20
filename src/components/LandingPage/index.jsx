import { Link } from 'react-router';

const LandingPage = () => {
  return (
    <div className='bg-deep-navy text-soft-cream h-screen flex flex-col justify-center'>
      <header className='p-4'>
        <h1 className='font-bold text-center'>
          <span className='text-5xl'>Hunger</span>
          <span className='text-2xl relative -top-4'> OP</span>
        </h1>
      </header>
      <div className='text-center text-2xl p-2'>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
