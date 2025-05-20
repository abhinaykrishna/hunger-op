import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router';
import { signin } from '../../store/slices/loginSlice';
import googleLogo from '../../assets/google-logo.png';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = data => {
    setInvalidPassword(false);
    const { email, password } = data;
    if (email === 'admin@hungerop.com' && password === 'admin@123') {
      dispatch(signin());
      navigate('/');
    } else {
      setInvalidPassword(true);
    }
  };

  const [invalidPassword, setInvalidPassword] = useState(false);

  return (
    <div className='h-screen bg-deep-navy flex justify-center items-center flex-wrap'>
      <form className='bg-[#D3C1B7] px-5 py-10 rounded-3xl' onSubmit={handleSubmit(onSubmit)}>
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
          <p className='text-red-500 my-1 text-sm'>{errors.email?.message}</p>
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
          <p className='text-red-500 my-1 text-sm'>{errors.password?.message}</p>
        </div>
        <div className='text-right'>
          <p className='p-2 cursor-pointer'>Forgot Password?</p>
        </div>
        <button className='bg-deep-navy text-white p-2 rounded-lg cursor-pointer w-full flex justify-center items-center gap-3'>
          <img src={googleLogo} alt='google-logo' className='h-5' />
          <span>Continue with Google</span>
        </button>
        <p className='border-t mt-4' />
        {invalidPassword && (
          <p className='text-red-500 my-1 text-sm text-center'>Incorrect Password</p>
        )}
        <button className='mt-4 w-32 flex items-center justify-center mx-auto bg-rustic-tan text-white p-2 rounded-md hover:ring-2 hover:ring-orange-500 cursor-pointer'>
          Login
        </button>
        <div className='text-center mt-2 underline'>
          <Link to='/register'>New User Signup?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
