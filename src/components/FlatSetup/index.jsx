import { useNavigate, Link } from 'react-router';

const FlatSetup = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-deep-navy h-screen flex flex-col items-center justify-center'>
      <Link
        to='/dashboard'
        className='text-soft-cream absolute top-0 left-0 ml-4 mt-6 hover:text-white'
      >
        {'< Back to Dashboard'}
      </Link>
      <button
        className='bg-soft-cream px-3 py-2 my-2.5 w-1/2 rounded-lg'
        onClick={() => navigate('/createFlat')}
      >
        Create a flat
      </button>
      <button
        className='bg-soft-cream px-3 py-2 my-2.5 w-1/2 rounded-lg'
        onClick={() => navigate('/joinFlat')}
      >
        Join a flat
      </button>
    </div>
  );
};

export default FlatSetup;
