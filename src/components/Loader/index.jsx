import SpinnerLoader from './SpinnerLoader';
import LoaderOverlay from './LoaderOverlay';

const Loader = () => {
  return (
    <LoaderOverlay isVisible={true} backdrop='root' blur={true}>
      <SpinnerLoader size='lg' />
      <p className='text-white text-lg font-medium mt-4'>Loading...</p>
      <p className='text-white/70 text-sm'>Bringing ease to your kitchen...</p>
    </LoaderOverlay>
  );
};

export default Loader;
