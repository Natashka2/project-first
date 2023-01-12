import { baseQuery } from './baseQuery';

export const getUser = async () => {
  const { data } = await baseQuery('customer');

  return data;
};
