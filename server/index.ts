import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import prisma from "@/db";

export const appRouter = router({
  getPokemon: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      return prisma.pokemon.findUnique({
        where: { name: input },
      });
    }),
  getPokemonArray: publicProcedure
    .input(z.object({
      names: z.array(z.string()),
      skip: z.number().optional(),
      take: z.number().optional(),
    }))
    .query(async ({ input }) => {
      const { names, skip = 0, take = 10 } = input;
      const [pokemon, total] = await prisma.$transaction([
        prisma.pokemon.findMany({
          where: { name: { in: names } },
          skip,
          take,
        }),
        prisma.pokemon.count({
          where: { name: { in: names } },
        }),
      ]);
      return { pokemon, total };

    }),
  getPokemonByType: publicProcedure
    .input(z.object({
      type: z.string(),
      skip: z.number().optional(),
      take: z.number().optional(),
    }))
    .query( async ( {input})=>{
      const { type, skip = 0, take = 10 } = input;
      const [pokemon, total] = await prisma.$transaction([
        prisma.pokemon.findMany({
          where: { types: { has: type } },
          skip,
          take,
        }),
        prisma.pokemon.count({
          where: { types: { has: type } },
        }),
      ]);
      return { pokemon, total };
    })
});

export type AppRouter = typeof appRouter;