import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router';
import axiosInstance from '../../api/axios';

const joinFlatWithCode = async data => {
  const response = await axiosInstance.post(`/flat/join/${data.flatCode}`);
  return response.data;
};

const JoinFlat = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: joinFlatWithCode,
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
        <h3 className='text-center text-3xl mb-2'>Join Flat</h3>
        <p className='my-1 text-center'>Ask your flatmates to share the flat code</p>
        <p className='border-b mb-2.5' />
        <div className='flex flex-col'>
          <label htmlFor='flat-code' className='my-2'>
            Flat Code
          </label>
          <input
            type='text'
            id='flat-code'
            className='border border-black p-2 w-[300px]  rounded-lg outline-none'
            {...register('flatCode', {
              required: 'Flat code is required',
              minLength: {
                value: 16,
                message: 'Flat code must be 16 characters',
              },
            })}
          />
          {errors.flatCode && (
            <p className='text-red-600 my-1 text-xs'>{errors.flatCode.message}</p>
          )}
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

export default JoinFlat;
