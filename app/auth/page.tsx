'use client';

import supabase from "@/app/supabase";
import { useForm } from 'react-hook-form';


interface IEmailAuthFields {
  email: string,
  password: string
}

export default function Auth() {

  const authForm = useForm<IEmailAuthFields>();

  const handleLoginWithGoogle = async (formVals: IEmailAuthFields) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formVals.email,
      password: formVals.password
    });

    if (data) {
      console.log(data);
    }
  }


  return (
    <div>
      <section className="h-screen flex items-center justify-center bg-black">
        <div className="bg-[#131313] p-8 rounded-lg shadow-lg max-w-md w-full">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Sign In to CENTIFY</h2>

          {/* Email Sign In */}
          <form className="space-y-4 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                {...authForm.register('email', { required: true })}
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Password</label>
              <input
                {...authForm.register('password', { required: true })}
                type="password"
                placeholder="Enter your Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
              />
            </div>

            <button
              onClick={authForm.handleSubmit(handleLoginWithGoogle)}
              disabled={!authForm.formState.isValid}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 disabled:bg-gray-500"
            >
              Sign Up
            </button>
          </form>

          {/* Or Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative text-center">
              <span className="bg-white px-2 text-sm text-gray-500">OR</span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            onClick={authForm.handleSubmit(handleLoginWithGoogle)}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500"
          >
            Continue with Google
          </button>
        </div>
      </section>

    </div>
  )
}