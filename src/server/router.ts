import { z } from "zod";
import { procedure, router } from "./trpc";

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const appRouter = router({
  hello: procedure.query(async () => {
    await sleep(5000); // Simulate slow external API call

    return {
      example: "Hey, i am JSON",
    };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
