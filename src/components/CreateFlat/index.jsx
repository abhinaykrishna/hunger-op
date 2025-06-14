import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import Loader from '../Loader';
import axiosInstance from '../../api/axios';
import whatsappLogo from '../../assets/whatsapp-logo.webp';

const registerNewFlat = async data => {
  const response = await axiosInstance.post('/flat/create', data);
  return response.data;
};

const CreateFlat = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerNewFlat,
    onSuccess: () => {
      navigate('/dashboard');
    },
  });

  const onSubmit = data => {
    const { cookPreparesLunch, cookPreparesDinner } = data;
    if (!cookPreparesLunch && !cookPreparesDinner) {
      setError('cookingOptionsError', {
        type: 'manual',
        message: 'Select atleast one cooking time',
      });
      return;
    }
    clearErrors('cookingOptionsError');
    mutation.mutate(data);
    // console.log(data);
  };

  if (mutation.isPending) {
    return <Loader />;
  }

  const cookPreparesLunch = watch('cookPreparesLunch');
  const cookPreparesDinner = watch('cookPreparesDinner');

  return (
    <div className='mx-4 flex flex-col flex-wrap'>
      <Link to='/dashboard/more' className='my-3 flex items-center'>
        <ChevronLeft />
        <span>More</span>
      </Link>
      <form className='px-5 py-10 rounded-3xl border shadow-md dark:shadow-cyan-300' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='text-center text-2xl mb-2'>Create Flat</h3>
        <div className='flex flex-col'>
          <label htmlFor='flat-name' className='my-2 '>
            Flat Name
          </label>
          <input
            type='text'
            id='flat-name'
            className='border border-black p-2 w-full rounded-lg outline-none dark:border-white'
            {...register('flatName', {
              required: 'Flat name is required',
              minLength: {
                value: 8,
                message: 'Flat name must be atleast 8 characters',
              },
            })}
          />
          {errors.flatName && <p className='text-red-600 my-1 text-xs'>{errors.flatName.message}</p>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='address' className='my-2 '>
            Address
          </label>
          <input
            type='text'
            id='flat-name'
            className='border border-black p-2 w-full rounded-lg outline-none dark:border-white'
            {...register('address', {
              required: 'Address is required',
              minLength: {
                value: 8,
                message: 'Address must be atleast 8 characters',
              },
            })}
          />
          {errors.address && <p className='text-red-600 my-1 text-xs'>{errors.address.message}</p>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='cookName' className='my-2'>
            Cook's Name
          </label>
          <input
            type='text'
            id='cookName'
            className='border border-black p-2 w-full rounded-lg outline-none dark:border-white'
            {...register('cookName', {
              required: 'Cook name is required',
              minLength: {
                value: 3,
                message: 'Cook name must be atleast 3 characters',
              },
            })}
          />
          {errors.cookName && <p className='text-red-600 my-1 text-xs'>{errors.cookName.message}</p>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='cookMobileNumber' className='my-2'>
            <div className='flex'>
              Cook's
              <img src={whatsappLogo} alt='whatsapp-logo' className='w-6 mx-1' />
              Whatsapp Number
            </div>
          </label>
          <input
            type='text'
            id='cookMobileNumber'
            inputMode='numeric'
            className='border border-black p-2 w-full rounded-lg outline-none dark:border-white'
            // To prevents non-numeric input
            onInput={e => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '');
            }}
            {...register('cookMobileNumber', {
              required: "Cook's mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Cook's mobile number must be exactly 10 digits",
              },
            })}
          />
          {errors.cookMobileNumber && <p className='text-red-600 my-1 text-xs'>{errors.cookMobileNumber.message}</p>}
        </div>
        <h4 className='my-2'>Cooking Time</h4>
        <div className='flex items-center'>
          <div className='w-20 flex items-center'>
            <input
              id='lunch-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              {...register('cookPreparesLunch')}
            />
            <label htmlFor='lunch-checkbox' className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Lunch
            </label>
          </div>
          {cookPreparesLunch && (
            <input
              type='time'
              className='ml-4 border px-2 my-1 rounded-md text-sm'
              // 15 minutes in seconds
              step='900'
              {...register('lunchCookingTime')}
            />
          )}
        </div>
        <div className='flex my-1 items-center'>
          <div className='w-20 flex items-center'>
            <input
              id='dinner-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              {...register('cookPreparesDinner')}
            />
            <label htmlFor='dinner-checkbox' className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Dinner
            </label>
          </div>
          {cookPreparesDinner && (
            <input
              type='time'
              className='ml-4 border px-2 rounded-md text-sm'
              step='900'
              {...register('dinnerCookingTime')}
            />
          )}
        </div>
        {errors.cookingOptionsError && (
          <p className='text-red-600 my-1 text-xs'>{errors.cookingOptionsError.message}</p>
        )}
        <button
          type='submit'
          className='mt-4 w-3/4 flex items-center justify-center mx-auto bg-blue-300 dark:bg-blue-600 p-2 rounded-md hover:ring-2 hover:ring-deep-navy cursor-pointer'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateFlat;
