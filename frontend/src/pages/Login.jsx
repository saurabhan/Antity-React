import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../firebase/firebase";

const schema = yup.object().shape({
  username: yup.string(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Login = () => {
  const [username, setUsername] = useState("");
  const { signIn, signUp, user, loading, logout, error } = useAuth();
  const [login, setLogin] = useState(true);


  const { register, handleSubmit, reset, setValue, formState:{ errors, touchedFields } } = useForm({
    resolver: yupResolver(schema)
  });



  
  const onSubmit =  (data) => {
    const {email, password} = data
    if (login) {
      signIn(email, password);
    } else {
      signUp(email, password, username);
    }
    reset()
  }




  if (user) {
    return (
      <div className="  min-h-full h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-2xl font-bold text-center mx-auto h-12 w-auto">
            ANTITY
          </h1>
          <div>
            <h1 className="font-bold text-2xl p-2">
              Welcome, {user.displayName}
            </h1>

            <button
              onClick={() => logout()}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
  
      <div className="  min-h-full h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-2xl font-bold text-center mx-auto h-12 w-auto">
            ANTITY
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign {login ? "in" : "Up"} to your account
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white  py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 justify-center" method="post">
              <div className="flex flex-col space-y-10 justify-center">
                {login ? (
                  ""
                ) : (
                  <>
                  <div>
                    <input
                {...register("username")}
                className="rounded-md  bg-gray-100 w-full"
                name="username"
            
                type="text"
              
                placeholder="Enter your Username"
                onChange={(e) => setUsername(e.target.value)}
                ></input>
                    <p className="text-red-500">{errors.username?.message && touchedFields.username ? errors.username.message : ""}</p>
                  </div>
                
                  </>
                )}
                <div className="w-full">

                <input
                {...register("email")}
                className="rounded-md  bg-gray-100 w-full"
                name="email"
                
                type="text"
              
                placeholder="Enter your email"
                ></input>
                <p className="text-red-500">{errors.email?.message && touchedFields.email ? errors.email.message : ""}</p>
                </div>
                <div>

                <input
                {...register("password")}
                 className="rounded-md p-2 bg-gray-100 w-full"
                  name="password"
                  
                  type="password"
                 
                  placeholder="Password"
                  ></input>
                <p className="text-red-500">{errors.password?.message && touchedFields.password ? errors.password.message : ""}</p>
                
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm  text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
 
              </div>
              <div className="text-sm">
                
                  <a
                    onClick={() => setLogin(!login)}
                    className="font-medium cursor-pointer text-center underline text-gray-600 hover:text-gray-500"
                  >
                    {login
                      ? "Create a new Account"
                      : "Sign In to Exisitng Account"}
                  </a>
               
              </div>

              <div>
                {login ? (
                  <button
                  type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Sign in
                  </button>
                ) : (
                  <button
                  type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Sign Up
                  </button>
                )}
                <button
                onClick={() => {
                  setValue("email", "guest@guest.com")
                  setValue("password", "guest123")
                }}
                  
                  className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                  Use Guest Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
