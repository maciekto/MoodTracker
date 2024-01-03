import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
} from '@/server/api/trpc';

export const userRouter = createTRPCRouter({

  getUser: protectedProcedure.query(({ ctx }) => ctx.db.user.findFirst({
    where: { id: ctx.session.user.id  },
  })),

  updateUserNotification: protectedProcedure
    .input(z.object({ notifications: z.boolean() }))
    .mutation(async ({ ctx, input }) => ctx.db.user.update({
      where: { id: ctx.session.user.id },
      data: { notifications: input.notifications },
    })),

});
