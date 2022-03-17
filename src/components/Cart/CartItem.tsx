import { Flex, Box, Icon, Button, Text, Image, SimpleGrid, Stack, IconButton } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useContext } from 'react';
import { RiShareBoxLine, RiDeleteBinLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Product } from '../../interfaces';
import { originalPrice } from '../../utils/product';

type Props = {
  item: Product;
};

export const CartItem = ({ item }: Props) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  return (
    <SimpleGrid columns={[2, null, 5]} spacingX="20" borderBottom="1px" marginBottom="10" paddingBottom="2">
      <Box>
        <Image src={item.thumbnail} width="120px" />
      </Box>
      <Box>
        <Text fontSize="lg">{item.title}</Text>
      </Box>
      <Box>
        <IconButton
          py="2"
          aria-label="view-cart-item"
          size="md"
          icon={<RiShareBoxLine />}
          onClick={() => navigate(`/products/${item.id}`)}
        />
      </Box>
      <Box alignItems="flex-end">
        <IconButton
          py="2"
          aria-label="remove-cart-item"
          size="md"
          icon={<RiDeleteBinLine />}
          onClick={() => userContext?.removeCartItem(item.id)}
        />
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          {originalPrice(item.price, item.discountPercentage)} €
        </Text>
      </Box>
    </SimpleGrid>
  );
};
