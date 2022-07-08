import { useMediaQuery } from '@chakra-ui/react';
import { breakpoints } from '../config/chakra';

export function useAppMediaQuery() {
  // create css media queries from breakpoints object
  const mediaQueries = Object.values(breakpoints).map((breakpoint) => `(min-width: ${breakpoint})`);
  // use media queries in chakra hook
  const [largerThanSm, largerThanMd, largerThanLg, largerThanXl, largerThan2xl] = useMediaQuery(mediaQueries);

  return {
    largerThanSm,
    largerThanMd,
    largerThanLg,
    largerThanXl,
    largerThan2xl,
  };
}
