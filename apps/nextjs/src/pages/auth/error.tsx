import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { AuthError } from '../../common';

const Error: NextPage = () => {
  const router = useRouter();
  const { error } = router.query;
  const { data: session } = useSession();

  const handleGoBackClick = () => router.back();

  return (
    <div className="mx-auto mt-16 max-w-sm">
      <div className="relative flex flex-col items-center justify-center rounded-lg bg-slate-800 p-10">
        <p className="mb-6 text-center text-xl font-semibold">{AuthError(error as string)}</p>

        <span className="mb-10 text-xl text-primary-500">{session?.user.email}</span>

        <button
          className="relative flex min-w-fit items-center justify-center overflow-hidden whitespace-nowrap rounded-lg bg-primary-200/20 px-4 py-2 text-center text-sm font-semibold text-primary-50 transition duration-100 ease-out hover:bg-primary-200/30"
          onClick={handleGoBackClick}
        >
          actions.back
        </button>
      </div>
    </div>
  );
};

export default Error;
