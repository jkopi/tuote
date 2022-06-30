import { Box, Text, Image, SimpleGrid, IconButton, Button, Link } from '@chakra-ui/react';
import { useContext } from 'react';
import { RiShareBoxLine, RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Product } from '../../interfaces';
import { originalPrice } from '../../utils';

type Props = {
  item: Product;
};

export const CartItem = ({ item }: Props) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const goTo = (route: string) => {

    navigate(route);
  };

  return (
    <SimpleGrid columns={[2, null, 5]} spacingX="20" borderBottom="1px" marginBottom="10" paddingBottom="2">
      <Box>
        <Image src={item.thumbnail} width="120px" />
      </Box>
      <Box>
        <Link as={RouterLink} to={`/products/${item.id}`}>{item.title}</Link>
      </Box>
      {/* <Box>
        <IconButton
          py="2"
          aria-label="view-cart-item"
          size="md"
          icon={<RiShareBoxLine />}
          onClick={() => navigate(`/products/${item.id}`)}
        />
      </Box> */}
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
