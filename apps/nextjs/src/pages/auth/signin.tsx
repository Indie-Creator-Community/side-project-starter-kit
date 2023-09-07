import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

const Signin: NextPage = () => {
  return (
    <div className="mx-auto mt-16 max-w-sm">
      <div className="relative flex flex-col items-center justify-center rounded-lg bg-slate-800 p-10">
        <button
          className="relative flex min-w-fit items-center justify-center overflow-hidden whitespace-nowrap rounded-lg bg-primary-200/20 px-4 py-2 text-center text-sm font-semibold text-primary-50 transition duration-100 ease-out hover:bg-primary-200/30"
          onClick={() => signIn('twitter')}
        >
          Log in with Twitter
        </button>
      </div>
    </div>
  );
};

export default Signin;
