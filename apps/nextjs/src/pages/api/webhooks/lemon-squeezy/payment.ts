import { type NextApiRequest, type NextApiResponse } from 'next';
import { TRPCError } from '@trpc/server';
import { TRPCErrorCode, appRouter, createTRPCContext } from '@acme/api';
import { type LemonSqueezyResponse } from '~/utils/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Create context and caller
  const ctx = await createTRPCContext({ req, res });
  const caller = appRouter.createCaller(ctx);

  try {
    const { data } = req.body as LemonSqueezyResponse;
    const response = await caller.payment.subscriptionCreated({
      productId: data.attributes.product_id.toString(),
      variantId: data.attributes.variant_id.toString(),
      userEmail: data.attributes.user_email,
      renewsAt: data.attributes.renews_at,
    });
    res.status(200).json(response);
  } catch (error: unknown) {
    if (error instanceof TRPCError) {
      throw new TRPCError({
        code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }

    console.error(error);

    throw new TRPCError({
      code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
      message: 'Unknown error',
    });
  }
};

export default handler;

/* To invoke:

curl --location --request POST 'https://e52f-181-58-39-217.ngrok-free.app/api/webhooks/lemon-squeezy/payment' \
--header 'Cookie: next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; next-auth.csrf-token=76488924cff60229b4fbd6a414f6c995afdfbeae926469853bd9d482f50f25c1%7C38b9aa641aa99ecb2e05e26de18836a6e019305b15754fc82dc2a44e322f28dd'

PRD Endpoint: https://twon.app/api/webhooks/lemon-squeezy/payment
@reference https://docs.lemonsqueezy.com/api/webhooks
*/
