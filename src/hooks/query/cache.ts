import { QueryCache } from 'react-query';

export const queryCache = new QueryCache({
  onError: error => {
    console.error(error)
  },
  onSuccess: data => {
    return data;
  }
})
