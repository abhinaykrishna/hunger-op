import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import Loader from '../Loader';
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

  if (mutation.isPending) {
    return <Loader />;
  }

  return (
    <div className='mx-4 flex flex-col flex-wrap'>
      <Link to='/dashboard/more' className='my-3 flex items-center'>
        <ChevronLeft />
        <span>More</span>
      </Link>
      <form
        className='mt-2 px-5 py-10 rounded-3xl border shadow-md dark:shadow-cyan-300'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='text-center text-2xl mb-2'>Join Flat</h3>
        <p className='my-1 text-center'>Ask your flatmates to share the flat code</p>
        <p className='border-b mb-2.5' />
        <div className='flex flex-col'>
          <label htmlFor='flat-code' className='my-2'>
            Flat Code
          </label>
          <input
            type='text'
            id='flat-code'
            className='border border-black p-2 w-full rounded-lg outline-none dark:border-white'
            {...register('flatCode', {
              required: 'Flat code is required',
              minLength: {
                value: 16,
                message: 'Flat code must be 16 characters',
              },
            })}
          />
          {errors.flatCode && <p className='text-red-600 my-1 text-xs'>{errors.flatCode.message}</p>}
        </div>
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

export default JoinFlat;
