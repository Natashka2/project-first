import { JsonDataItem } from 'types';

type BaseQueryOption = {
  type?: 'GET' | 'POST' | 'PUT';
  body?: JsonDataItem;
};

export const baseQuery = async (url: string, options?: BaseQueryOption) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/${url}`, {
    method: `${options?.type ?? 'GET'}`,
    body: JSON.stringify(options?.body),
  });

  // enable react-query OnError action
  if (!response.ok) throw await response.json();

  return await response.json();
};
