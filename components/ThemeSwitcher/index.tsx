import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Container, IconButton, useColorMode, Switch } from '@chakra-ui/react'
import { NextComponentType } from 'next'

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container
      mt={3}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === 'light' ? true : false}
        colorScheme="teal"
        size="lg"
      />
      {/* {colorMode === 'light' ? (
        <IconButton
          my={1}
          isRound
          onClick={toggleColorMode}
          color="gray.800"
          icon={<MoonIcon />}
          variant="outline"
          aria-label="Modo Dark"
          size="sm"
        />
      ) : (
        <IconButton
          my={1}
          isRound
          onClick={toggleColorMode}
          color="yellow.300"
          icon={<SunIcon />}
          variant="solid"
          aria-label="Modo Light"
          size="sm"
        />
      )} */}
    </Container>
  )
}

export default ThemeSwitcher
