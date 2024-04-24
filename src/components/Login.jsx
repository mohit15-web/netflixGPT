import React, { useState } from "react";

function Login() {
    const [isSignIn ,setIsSignIn] = useState(true)
    const HandleToggle = () => {
        setIsSignIn(!isSignIn)
    }
  return (
    <div className="w-full absolute top-40">
      <form
        action=""
        className="w-3/12 m-auto flex flex-col gap-6 bg-black bg-opacity-80 p-14"
      >
        <h1 className="text-white text-4xl font-bold">{isSignIn ? "Sign In" : "Sign Up"} </h1>
        {!isSignIn && <input
          type="text"
          placeholder="Enter Full Name"
          className="w-full py-3 px-4 rounded-md text-gray-400 bg-transparent border border-gray-300"
        />}
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full py-3 px-4 rounded-md text-gray-400 bg-transparent border border-gray-300"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full py-3 px-4 rounded-md text-gray-400 bg-transparent border border-gray-300"
        />
        <button className="py-3 px-4 rounded-lg text-white bg-red-600">
        {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer text-white" onClick={HandleToggle}>
        {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered ? Sign In"}
            </p>
      </form>
    </div>
  );    
}

export default Login;
