import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import axiosInstance from '../../api/axios';
import { signin } from '../../store/slices/loginSlice';

const createNewUser = async data => {
  const response = await axiosInstance.post('/auth/signup', data);
  return response.data;
};

const RegisterNewUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password', '');

  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: createNewUser,
    onSuccess: () => {
      dispatch(signin());
    },
  });

  const onSubmit = data => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...rest } = data;
    mutation.mutate(rest);
  };

  return (
    <div className='h-screen bg-deep-navy flex flex-col'>
      <Link to='/' className='text-soft-cream ml-4 my-6 cursor-pointer hover:text-white'>
        {'< Back to Landing Page'}
      </Link>
      <div className='h-full flex justify-center items-center flex-wrap'>
        <form
          className='bg-[#D3C1B7] px-5 py-10 rounded-3xl shadow-md shadow-soft-cream'
          onSubmit={handleSubmit(onSubmit)}
        >
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
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                },
              })}
            />
            {errors.name && <p className='text-red-600 my-1 text-xs'>{errors.name.message}</p>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='mobileNumber' className='my-2 '>
              Mobile Number
            </label>
            <input
              type='text'
              id='mobileNumber'
              inputMode='numeric'
              className='border border-black p-2 w-[300px]  rounded-lg outline-none'
              // To prevents non-numeric input
              onInput={e => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
              {...register('mobileNumber', {
                required: 'Mobile number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Mobile number must be exactly 10 digits',
                },
              })}
            />
            {errors.mobileNumber && (
              <p className='text-red-600 my-1 text-xs'>{errors.mobileNumber.message}</p>
            )}
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
            {errors.email && <p className='text-red-600 my-1 text-xs'>{errors.email.message}</p>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='my-2 '>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='border border-black p-2 w-[300px]  rounded-lg outline-none'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
            />
            {errors.password && (
              <p className='text-red-600 my-1 text-xs'>{errors.password.message}</p>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='confirm-password' className='my-2 '>
              Confirm Password
            </label>
            <input
              type='password'
              id='confirm-password'
              className='border border-black p-2 w-[300px]  rounded-lg outline-none'
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: value => value === password || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && (
              <p className='text-red-600 my-1 text-xs'>{errors.confirmPassword.message}</p>
            )}
          </div>
          <button
            type='submit'
            className='mt-4 w-3/4 flex items-center justify-center mx-auto bg-rustic-tan text-white p-2 rounded-md hover:ring-2 hover:ring-deep-navy cursor-pointer'
          >
            Create an account
          </button>
          <div className='text-center mt-2 underline text-deep-navy'>
            <Link to='/login'>Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterNewUser;
