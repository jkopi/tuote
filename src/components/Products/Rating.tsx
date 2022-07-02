import { Box, Icon, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { Product } from '../../interfaces/Product';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

type RatingProps = {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  const roundedRating = Math.round(rating * 2) / 2;
  
  return (
    <Tooltip label={rating} placement="bottom-start">
      <Box alignItems="center">
        {Array(5).fill('').map((_, i) => (
          roundedRating - i >= 1
            ? <Icon key={i} as={BsStarFill} color="facebook.800" />
            : roundedRating - i === 0.5
            ? <Icon key={i} as={BsStarHalf} color="facebook.800"/>
            : <Icon key={i} as={BsStar} color="facebook.800" />
        ))}
      </Box>
    </Tooltip>
  )
}
