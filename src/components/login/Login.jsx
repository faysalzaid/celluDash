import React, {useState } from 'react';
import LoginComp from './LoginComp';
import Signup from './Signup';

function Login() {
  const [count, setCount] = useState(true);
  function handleClick() {
    setCount(!count);
  }

  return (
    <section className=' normal-text w-full h-ful py-3 flex items-center justify-center text-2xl'>
      <div className="w-[500px] flex-col border border-orange-500 px-6 py-7 shadow-md rounded-[4px] mx-2">
        <div className="mb-8 flex justify-center">
          <p className=' text-[24px] font-bold cursor-pointer text-blue-800'>Cellu<span className=' text-orange-500'>Tech</span></p>
        </div>
        {
          count ? <LoginComp /> : <Signup />
        }

        <div className="mt-5 flex justify-end text-sm">
        {
          count ?  <p className='cursor-pointer'>Forgot password?</p> : null
        }
         
        </div>

        {
          count
            ? <div className="mt-5 flex justify-start text-sm">
              <p>Doesn't have an account? Sign up
                <span className='cursor-pointer text-md' onClick={handleClick}> HERE </span>
              </p>
            </div>
            : <div className="mt-5 flex justify-start text-sm">
              <p>Already Have an account? Login
                <span className='cursor-pointer text-md' onClick={handleClick}> HERE </span>
              </p>
            </div>
        }

        <div className="flex justify-center mt-5 text-sm">

        </div>
        <div className="mt-5 flex justify-center gap-3    ">

        </div>
        <div className="mt-5 flex text-center text-sm text-gray-400">
          <p>

          </p>
        </div>
      </div>

    </section>
  );
}

export default Login;
