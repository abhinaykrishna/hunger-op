import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { signin } from '../../store/slices/loginSlice';

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(signin());
  };

  return (
    <div className='h-screen bg-deep-navy flex justify-center items-center flex-wrap'>
      <form className='bg-[#D3C1B7] px-5 py-10 rounded-3xl' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='text-center text-3xl mb-2'>
          SignUp to Hunger<span className='text-2xl relative -top-2'>OP</span>
        </h3>
        <div className='flex flex-col'>
          <label htmlFor='name' className='my-2 '>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='border border-black p-2 w-[300px]  rounded-lg outline-none'
            {...register('name', { required: 'Name is required' })}
          />
          <p className='text-red-500 my-1 text-sm'>{errors.name?.message}</p>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='mobileNumber' className='my-2 '>
            Mobile Number
          </label>
          <input
            type='text'
            id='mobileNumber'
            className='border border-black p-2 w-[300px]  rounded-lg outline-none'
            {...register('mobileNumber', { required: 'Mobile Number is required' })}
          />
          <p className='text-red-500 my-1 text-sm'>{errors.mobileNumber?.message}</p>
        </div>
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
        <div className='flex flex-col'>
          <label htmlFor='confirm-password' className='my-2 '>
            Confirm Password
          </label>
          <input
            type='password'
            id='confirm-password'
            className='border border-black p-2 w-[300px]  rounded-lg outline-none'
            {...register('confirm-password', { required: 'Password is required' })}
          />
          <p className='text-red-500 my-1 text-sm'>{errors['confirm-password']?.message}</p>
        </div>
        <button className='mt-4 w-3/4 flex items-center justify-center mx-auto bg-rustic-tan text-white p-2 rounded-md hover:ring-2 hover:ring-orange-500 cursor-pointer'>
          Create an account
        </button>
        <div className='text-center mt-2 underline text-deep-navy'>
          <Link to='/login'>Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
