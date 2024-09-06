import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 60 * 60 * 24 }); // Cache for 24 hours

export const getCache = <T>(key: string): T | undefined => {
  return cache.get<T>(key);
};

export const setCache = <T>(key: string, value: T): boolean => {
  return cache.set(key, value);
};