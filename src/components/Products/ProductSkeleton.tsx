import { Box, Divider, Flex, Skeleton, SkeletonText } from '@chakra-ui/react';

export const ProductSkeleton = () => {
  return (
    <Box>
      <Flex pt="10" gap="2" flexDirection={{ lg: 'row', md: 'column', sm: 'column' }}>
        <Skeleton width="500px" height="500px" marginRight={{ lg: '4' }} />
        <Box>
          <SkeletonText mt="4" noOfLines={4} spacing="4" width="300px" />
          <Skeleton width="300px" height="40px" mt="4"/>
          <Divider py="2"/>
          <SkeletonText width="300px" noOfLines={3}/>
        </Box>
      </Flex>
    </Box>
  );
};
