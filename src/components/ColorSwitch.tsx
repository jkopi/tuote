import { Button, IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="color mode toggle button"
      colorScheme="facebook"
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <RiSunLine /> : <RiMoonLine />}
      py="2"
      size="lg"
    />
  );
};

export default ColorSwitch;
