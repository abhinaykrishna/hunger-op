import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [resetViaEmail, setResetViaEmail] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleRadioChange = e => {
    setResetViaEmail(e.target.value === 'email');
    setInputValue('');
  };

  const onSubmit = data => {
    console.log('Submitted data:', data);
    // mutation.mutate(data);
  };

  return (
    <div className='h-screen bg-deep-navy flex flex-col'>
      <Link to='/' className='text-soft-cream ml-4 my-6 cursor-pointer hover:text-white'>
        {'< Back to Landing Page'}
      </Link>
      <div className='h-full flex justify-center items-center flex-wrap'>
        <form
          className='bg-[#D3C1B7] p-10 rounded-3xl shadow-md shadow-soft-cream'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className='text-center text-3xl mb-2'>Forgot Password?</h3>
          <p>How would you like to reset your password?</p>
          <div className='flex flex-col my-2'>
            <div>
              <input
                type='radio'
                id='email'
                name='reset-option'
                value='email'
                checked={resetViaEmail}
                onChange={handleRadioChange}
              />
              <label htmlFor='email' className='ml-2'>
                Email
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='sms'
                name='reset-option'
                value='sms'
                checked={!resetViaEmail}
                onChange={handleRadioChange}
              />
              <label htmlFor='sms' className='ml-2'>
                Text Message (SMS)
              </label>
            </div>
          </div>
          <p className='mt-2'>
            {resetViaEmail
              ? 'We will email you a verification link to reset your password.'
              : 'We will text you a verification code to reset your password.'}
          </p>
          <div className='flex flex-col mt-2'>
            <input
              type={resetViaEmail ? 'email' : 'text'}
              value={inputValue}
              className='border border-black p-2 my-2 rounded-lg outline-none w-full'
              placeholder={resetViaEmail ? 'Email' : 'Mobile Number'}
              {...register(resetViaEmail ? 'email' : 'mobileNumber', {
                required: `${resetViaEmail ? 'Email' : 'Mobile number'} is required`,
                pattern: resetViaEmail
                  ? {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Please enter a valid email address.',
                    }
                  : {
                      value: /^[0-9]{10}$/,
                      message: 'Mobile number must be exactly 10 digits.',
                    },
              })}
              onInput={e => {
                if (!resetViaEmail) {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }
              }}
              maxLength={resetViaEmail ? undefined : 10}
              onChange={e => {
                const val = resetViaEmail ? e.target.value : e.target.value.replace(/[^0-9]/g, '');
                setInputValue(val);
              }}
            />
            {errors.email && resetViaEmail && (
              <p className='text-red-600 text-sm'>{errors.email.message}</p>
            )}
            {errors.mobileNumber && !resetViaEmail && (
              <p className='text-red-600 text-sm'>{errors.mobileNumber.message}</p>
            )}
          </div>
          <button
            type='submit'
            className='mt-4 w-full bg-rustic-tan text-white p-2 rounded-md hover:ring-2 hover:ring-deep-navy cursor-pointer'
          >
            {resetViaEmail ? 'Email Me' : 'Message Me'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
