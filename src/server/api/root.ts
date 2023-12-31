import { moodRouter } from '@/server/api/routers/moods';
import { userRouter } from '@/server/api/routers/users';
import { createTRPCRouter } from '@/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mood: moodRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
