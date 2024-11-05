import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen py-20 px-20 my-24">
      {/* Left Image Container */}
      <div className="w-1/2">
        <img src="/images/loginImg.png" alt="Login image" />
      </div>
      
      {/* Right Text Container */}
      <div className="w-1/2 h-3/4 flex flex-col items-start ">
        <div className="flex flex-col justify-between items-start text-left font-inter space-y-4">
          <button className="border  border-gray-300  rounded-lg py-2 px-8">
            Shop Smart, Live Better!
          </button>
          <h1 className="text-3xl font-bold text-black py-5">Your One-Stop E-Commerce Destination</h1>
          <p className=" text-lg leading-[28px]">
            Sign in to discover exclusive offers tailored to your interests. Start enjoying a personalized shopping experience now!
          </p>
          <div className='flex flex-row gap-3 py-5'>
            <button className='border border-gray-300 rounded-lg p px-8 y-2'>Sign in with your email address</button>
            <button className='border border-gray-300 rounded-lg bg-[#EF2A82] px-8 py-2'>Log In Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
