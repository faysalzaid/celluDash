import React from 'react';

function LoginComp() {
    return (
        <form action="">

            <div className="flex flex-col text-sm rounded-md">
                <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username or Email id" />
                <input className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" />
            </div>
            <button className="mt-5 w-full p-2 bg-blue-800 text-white rounded-[4px] hover:bg-orange-500 duration-300" type="submit">Login</button>
        </form>
    );
}

export default LoginComp;
