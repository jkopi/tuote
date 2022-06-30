import { Box, Flex } from '@chakra-ui/react';

type FallBackProps = {
  error: any;
};

export const FallBack = ({ error }: FallBackProps) => {
  return (
    <Flex m="5">
      <Box padding="5">
        <p>Something went wrong:</p>
        <Box py="2" px="2" mt="4" backgroundColor="gray.100">
          <pre>{error.message}</pre>
        </Box>
      </Box>
    </Flex>
  );
};
