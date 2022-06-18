import React, { useState } from "react";
import { useAuth } from "../context/auth-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { signIn, signUp, user, logout } = useAuth();
  const [login, setLogin] = useState(true);

  const handleSubmit = (e, email, password, username) => {
    e.preventDefault();
    if (login) {
      signIn(email, password);
    } else {
      signUp(email, password, username);
    }
  };

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
            <form className="space-y-6 justify-center" action="#" method="POST">
              <div className="flex flex-col space-y-10 justify-center">
                {login ? (
                  ""
                ) : (
                  <input
                  className="rounded-md p-2 bg-gray-100"
                    size="lg"
                    width="360px"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  >
                    </input>
                )}
                <input
                className="rounded-md p-2 bg-gray-100"
                  size="lg"
                  type="text"
                  width="360px"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                 className="rounded-md p-2 bg-gray-100"
                  size="lg"
                  type="password"
                  width="360px"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
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

                <div className="text-sm">
                  <p
                    href="#"
                    className=" font-medium text-gray-600 hover:text-gray-500"
                  >
                    Forgot your password?
                  </p>
                </div>
              </div>
              <div className="text-sm">
                
                  <a
                    onClick={() => setLogin(!login)}
                    className="font-medium text-center underline text-gray-600 hover:text-gray-500"
                  >
                    {login
                      ? "Create a new Account"
                      : "Sign In to Exisitng Account"}
                  </a>
               
              </div>

              <div>
                {login ? (
                  <button
                    onClick={(e) => handleSubmit(e, email, password)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Sign in
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleSubmit(e, email, password, username)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Sign Up
                  </button>
                )}
                <button
                  onClick={(e) =>
                    handleSubmit(e, "guest@guest.com", "guest123")
                  }
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
