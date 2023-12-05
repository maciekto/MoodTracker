import { moodRouter } from '@/server/api/routers/moods';
import { createTRPCRouter } from '@/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mood: moodRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
