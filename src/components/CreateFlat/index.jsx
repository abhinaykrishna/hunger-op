import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import axiosInstance from '../../api/axios';

const registerNewFlat = async data => {
  const response = await axiosInstance.post('/flat/create', data);
  return response.data;
};

const CreateFlat = () => {
  const {
    register,
    handleSubmit,
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
    mutation.mutate(data);
  };

  return (
    <div className='h-screen bg-deep-navy flex justify-center items-center flex-wrap'>
      <Link
        to='/flatSetup'
        className='text-soft-cream absolute top-0 left-0 ml-4 mt-6 hover:text-white'
      >
        {'< Back to Flat Setup'}
      </Link>
      <form
        className='bg-[#D3C1B7] px-5 py-10 rounded-3xl shadow-md shadow-soft-cream'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='text-center text-3xl mb-2'>Create Flat</h3>
        <div className='flex flex-col'>
          <label htmlFor='flat-name' className='my-2 '>
            Flat Name
          </label>
          <input
            type='text'
            id='flat-name'
            className='border border-black p-2 w-[300px] rounded-lg outline-none'
            {...register('flatName', {
              required: 'Flat name is required',
              minLength: {
                value: 8,
                message: 'Flat name must be atleast 8 characters',
              },
            })}
          />
          {errors.flatName && (
            <p className='text-red-600 my-1 text-xs'>{errors.flatName.message}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='address' className='my-2 '>
            Address
          </label>
          <input
            type='text'
            id='flat-name'
            className='border border-black p-2 w-[300px] rounded-lg outline-none'
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
          <label htmlFor='cookMobileNumber' className='my-2'>
            Cook's Mobile Number <span className='text-xs'>(Whatsapp)</span>
          </label>
          <input
            type='text'
            id='cookMobileNumber'
            inputMode='numeric'
            className='border border-black p-2 w-[300px]  rounded-lg outline-none'
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
          {errors.cookMobileNumber && (
            <p className='text-red-600 my-1 text-xs'>{errors.cookMobileNumber.message}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='cookingTime' className='my-2'>
            Cooking Time
          </label>
        </div>
        <button
          type='submit'
          className='mt-4 w-3/4 flex items-center justify-center mx-auto bg-rustic-tan text-white p-2 rounded-md hover:ring-2 hover:ring-deep-navy cursor-pointer'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateFlat;
