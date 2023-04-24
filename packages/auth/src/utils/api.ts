import type { Account } from 'next-auth';
import { prisma } from '@acme/db';

export const getUserByEmailHandler = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserByProviderHandler = async (providerAccountId: string, provider: string) => {
  return await prisma.user.findFirst({
    where: {
      accounts: {
        some: {
          providerAccountId,
          provider,
        },
      },
    },
    select: {
      id: true,
    },
  });
};

export const createUserHandler = async (
  name: string,
  providerUsername: string,
  email: string | null,
  image: string,
  account: Account,
) => {
  return prisma.user.create({
    data: {
      name,
      email,
      image,
      accounts: {
        create: {
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          providerUsername,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      },
    },
  });
};

export const getAccountByProviderHandler = async (providerAccountId: string, provider: string) => {
  return await prisma.account.findFirst({
    where: {
      providerAccountId,
      provider,
    },
  });
};

export const getAccountByUserAndProviderHandler = async (
  userId: string,
  providerAccountId: string,
  provider: string,
) => {
  return await prisma.account.findFirst({
    where: {
      userId,
      providerAccountId,
      provider,
    },
  });
};

export const createAccountHandler = async (userId: string, providerUsername: string, account: Account) => {
  return await prisma.account.create({
    data: {
      type: account.type,
      provider: account.provider,
      providerAccountId: account.providerAccountId,
      providerUsername,
      refresh_token: account.refresh_token,
      access_token: account.access_token,
      expires_at: account.expires_at,
      token_type: account.token_type,
      scope: account.scope,
      id_token: account.id_token,
      session_state: account.session_state,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
};

export const updateProviderUsernameAccountHandler = async (accountId: string, providerUsername: string) => {
  return await prisma.account.update({
    where: {
      id: accountId,
    },
    data: {
      providerUsername,
    },
  });
};

export const updateAccountHandler = async (accountId: string, providerUsername: string, account: Account) => {
  return await prisma.account.update({
    where: {
      id: accountId,
    },
    data: {
      type: account.type,
      providerUsername,
      refresh_token: account.refresh_token,
      access_token: account.access_token,
      expires_at: account.expires_at,
      token_type: account.token_type,
      scope: account.scope,
      id_token: account.id_token,
      session_state: account.session_state,
    },
  });
};
