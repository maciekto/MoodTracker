import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
} from '@/server/api/trpc';

export const moodRouter = createTRPCRouter({

  getMoods: protectedProcedure.query(({ ctx }) => ctx.db.mood.findMany({
    where: { createdBy: { id: ctx.session.user.id } },
  })),

  getSingleMood: protectedProcedure.input(z.object({ id: z.string().min(1) })).query(({ ctx, input }) => ctx.db.mood.findFirst({ where: { id: input.id, createdBy: { id: ctx.session.user.id } } })),
  
    
  createMood: protectedProcedure
    .input(z.object({ value: z.number().min(1).max(5), description: z.string().min(1).optional() }))
    .mutation(async ({ ctx, input }) => ctx.db.mood.create({
      data: {
        value: input.value,
        description: input.description,
        createdBy: { connect: { id: ctx.session.user.id } },
      },
    })),
    
  deleteMood: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => ctx.db.mood.delete({
      where: { id: input.id },
    })),
});
