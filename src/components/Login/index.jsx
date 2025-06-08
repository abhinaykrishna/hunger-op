import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router';
import Loader from '../Loader';
import axiosInstance from '../../api/axios';
import { signin } from '../../store/slices/loginSlice';
import googleLogo from '../../assets/google-logo.png';

const loginUser = async data => {
  const response = await axiosInstance.post('/auth/login', data);
  return response.data;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      dispatch(signin());
      navigate('/flatSetup');
    },
  });

  const onSubmit = data => {
    mutation.mutate(data);
  };

  if (mutation.isPending) {
    return <Loader />;
  }

  return (
    <div className='h-screen bg-deep-navy flex justify-center items-center flex-wrap'>
      <Link to='/' className='text-soft-cream absolute top-0 left-0 ml-4 mt-6 hover:text-white'>
        {'< Back to Landing Page'}
      </Link>
      <form
        className='bg-[#D3C1B7] px-5 py-10 rounded-3xl shadow-md shadow-soft-cream'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='text-center text-3xl mb-2'>
          Login to Hunger<span className='text-2xl relative -top-2'>OP</span>
        </h3>
        <div className='flex flex-col'>
          <label htmlFor='email' className='my-2 '>
            Email
          </label>
          <input
            type='text'
            id='email'
            className='border border-black p-2 w-[300px] rounded-lg outline-none'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email format',
              },
            })}
          />
          {errors.email && <p className='text-red-500 my-1 text-xs'>{errors.email.message}</p>}{' '}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className='my-2 '>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='border border-black p-2 w-[300px]  rounded-lg outline-none'
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && (
            <p className='text-red-500 my-1 text-xs'>{errors.password.message}</p>
          )}
        </div>
        <div className='text-right p-2'>
          <Link to='/forgotPassword'>Forgot Password?</Link>
        </div>
        <div className='bg-deep-navy text-white p-2 rounded-lg cursor-pointer w-full flex justify-center items-center gap-3'>
          <img src={googleLogo} alt='google-logo' className='h-5' />
          <span>Continue with Google</span>
        </div>
        <p className='border-t mt-4' />
        {mutation.error && (
          <p className='text-red-500 mt-2.5 text-xs text-center'>{mutation.error.message}</p>
        )}
        <button
          type='submit'
          className='mt-4 w-32 flex items-center justify-center mx-auto bg-rustic-tan text-white p-2 rounded-md hover:ring-2 hover:ring-deep-navy cursor-pointer'
        >
          Login
        </button>
        <div className='text-center mt-2 underline text-deep-navy'>
          <Link to='/register'>New User Signup?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
