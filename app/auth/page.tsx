'use client';

import supabase from "@/lib/supabase";
import { useForm } from 'react-hook-form';


interface IEmailAuthFields {
  email: string,
  password: string
}

export default function Auth() {

  const authForm = useForm<IEmailAuthFields>();
  const handleLoginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth(
      {
        provider: 'google',
      }
    );
    if (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <section className="h-screen flex items-center justify-center bg-black">
        <div className="bg-[#131313] p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-white ">Sign In to CENTIFY</h2>
          <button
            onClick={handleLoginWithGoogle}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500"
          >
            Continue with Google
          </button>
        </div>
      </section>

    </div>
  )
}