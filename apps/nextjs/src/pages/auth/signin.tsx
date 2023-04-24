import type { GetServerSideProps, NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type SigninProps = {};

const Signin: NextPage = () => {
  const { t } = useTranslation(['nextjs']);
  return (
    <div className="mx-auto mt-16 max-w-sm">
      <div className="relative flex flex-col items-center justify-center rounded-lg bg-slate-800 p-10">
        <button
          className="bg-primary-200/20 text-primary-50 hover:bg-primary-200/30 relative flex min-w-fit items-center justify-center overflow-hidden whitespace-nowrap rounded-lg px-4 py-2 text-center text-sm font-semibold transition duration-100 ease-out"
          onClick={() => signIn('discord')}
        >
          {t('nextjs:component.button.logInWithDiscord')}
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SigninProps> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['nextjs'])),
  },
});

export default Signin;
