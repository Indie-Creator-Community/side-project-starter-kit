import type { PrismaClient } from '@prisma/client';
import type { Session } from 'next-auth';

export type Ctx = {
  prisma: PrismaClient;
  session: Session | null;
};

export type Params<T> = {
  ctx: Ctx;
  input: T;
};
