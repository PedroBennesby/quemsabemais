import {
  Flex,
  Button,
  IconButton,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import ThemeSwitcher from '../ThemeSwitcher'
import theme from '../theme'

function Navbar() {
  const [display, changeDisplay] = useState('none')
  const { colorMode, setColorMode } = useColorMode()
  return (
    <Flex justifyContent={['flex-start', 'flex-start', 'center', 'center']}>
      <Flex display={['none', 'none', 'flex', 'flex']}>
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            Home
          </Button>
        </NextLink>
        <NextLink href="/regras" passHref>
          <Button as="a" variant="ghost" aria-label="Regras" my={5} w="100%">
            Regras
          </Button>
        </NextLink>
        <Flex ml="auto">
          <ThemeSwitcher />
        </Flex>
      </Flex>

      <IconButton
        aria-label="Abrir Menu"
        size="lg"
        mt={2}
        ml={2}
        icon={<HamburgerIcon />}
        display={['flex', 'flex', 'none', 'none']}
        onClick={() => changeDisplay('flex')}
      />

      <Flex
        w="100vw"
        bgColor={colorMode === 'light' ? 'white' : 'gray.800'}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex>
          <IconButton
            mt={2}
            ml={2}
            aria-label="Fechar Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
            position="absolute"
            top="0"
            left="0"
          />
        </Flex>
        <Flex
          flexDir="column"
          align="center"
          justifyContent="center"
          margin="auto 0"
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={2}
              w="90%"
              size="lg"
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/regras" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Regras"
              mb={2}
              w="90%"
              size="lg"
            >
              Regras
            </Button>
          </NextLink>
          <ThemeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
