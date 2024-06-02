
import { HStack, Switch, useColorMode, Icon } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';


const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={4} align="center" m="15px 25px">
      <Icon as={colorMode === 'light' ? SunIcon : MoonIcon} />
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </HStack>
  );
};

export default ColorModeSwitcher;