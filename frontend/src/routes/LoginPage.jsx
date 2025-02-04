import { useContext } from 'react'
import AuthContext from "../context/AuthContext";

const LoginPage = () => {

    let {loginUser} = useContext(AuthContext);

    return (
<div class="flex min-h-[80vh] flex-col justify-start px-6 py-12 lg:px-8">

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit={loginUser}>
      <div>
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div class="mt-2">
          <input id="username" name="username" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          {/* <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div> */}
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <button type="submit"
      class="flex w-full justify-center
         max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-black border-gray-700 hover:bg-gray-700
        flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
      ">
        Sign in
    </button>
    </form>

    {/* <p class="mt-10 text-center text-sm text-black">
      Not a member? 
      <span> </span>
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:border-gray-200 ">Create Account</a>
    </p> */}
  </div>
</div>
    )
}

export default LoginPage