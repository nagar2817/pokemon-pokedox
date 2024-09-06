import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import prisma from "@/db";
import { getCache, setCache } from "@/utils/cache";

export const appRouter = router({
  getPokemon: publicProcedure.input(z.string()).query(async ({ input }) => {
    const cacheKey = `pokemon_${input}`;
    const cachedData = getCache<any>(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    const pokemon = await prisma.pokemon.findUnique({
      where: { name: input },
    });

    if (pokemon) {
      setCache(cacheKey, pokemon);
    }

    return pokemon;
  }),

  getPokemonArray: publicProcedure
    .input(
      z.object({
        names: z.array(z.string()),
        skip: z.number().optional(),
        take: z.number().optional(),
      })
    )
    .query(async ({ input }) => {
      const { names, skip = 0, take = 10 } = input;
      const cacheKey = `pokemonArray_${names.join('_')}_${skip}_${take}`;
      const cachedData = getCache<{ pokemon: any[], total: number }>(cacheKey);

      if (cachedData) {
        return cachedData;
      }

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

      const result = { pokemon, total };
      setCache(cacheKey, result);

      return result;
    }),
    
  getPokemonByType: publicProcedure
    .input(
      z.object({
        type: z.string(),
        skip: z.number().optional(),
        take: z.number().optional(),
      })
    )
    .query(async ({ input }) => {
      const { type, skip = 0, take = 10 } = input;
      const cacheKey = `pokemonByType_${type}_${skip}_${take}`;
      const cachedData = getCache<{ pokemon: any[], total: number }>(cacheKey);

      if (cachedData) {
        return cachedData;
      }

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

      const result = { pokemon, total };
      setCache(cacheKey, result);

      return result;
    }),
});

export type AppRouter = typeof appRouter;