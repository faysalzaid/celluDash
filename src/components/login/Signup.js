import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <form action="">
            <div className="grid grid-cols-1 text-sm md:grid-cols-2 gap-4">

                <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="First Name" />


                <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Last Name" />


                <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Phone" />


                <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="email" placeholder="Email" />


                <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="password" placeholder="Password" />


                <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="password" placeholder="Confirm Password" />

            </div>
            <button className="mt-5 w-full p-2 bg-blue-800 text-white rounded-[4px] hover:bg-orange-500 duration-300" type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;
