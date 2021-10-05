import { Button, Flex, Heading, Text, Box, ButtonGroup } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

function Home() {
  const [cardTheme, setCardTheme] = useState('')

  const themes = [
    '2º guerra mundial',
    'Tratado de Tordesilhas',
    'Revolta da vacina',
    'Peste negra',
    'Efeito Dunning-Kruger',
    'Déjà-vu',
    'Efeito Barnum',
    'Efeito ancoragem',
    'Teoria das cordas',
    'Efeito de laplace',
    'Efeito Mandela',
    'Teorias atômicas',
    'Revolução industrial',
  ]

  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [time, setTime] = useState(60)

  useEffect(() => {
    let interval = null as any

    if (isActive && isPaused === false) {
      interval = time > 0 && setTimeout(() => setTime(time - 1), 1000)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, isPaused, time])

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
  }

  const handlePauseResume = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsActive(false)
    setTime(60)
  }

  function randomizeTheme() {
    const random = Math.floor(Math.random() * themes.length)
    const theme = themes[random]
    handleReset()
    return theme
  }

  return (
    <>
      <Head>
        <title>Quem sabe mais?</title>
      </Head>

      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW={{ xl: '1200px' }}
        height="100vh"
        m="0 auto"
      >
        <Flex left="0" top="0" position="absolute">
          <Navbar />
        </Flex>
        {!cardTheme ? (
          <>
            <Heading as="h1" size="2xl" lineHeight="1" mb="8">
              Quem sabe mais?
            </Heading>
            <Text mb="8" fontSize="xl" align="center" lineHeight="1">
              Clique no botão abaixo para iniciar o jogo!
            </Text>
          </>
        ) : (
          ''
        )}

        {cardTheme ? (
          <Box
            bg="teal.600"
            w="80%"
            p="6"
            m="8"
            color="white"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Text align="center" fontSize="2xl">
              {cardTheme}
            </Text>

            <Text mt="2" align="center" fontSize="xl">
              {time}
            </Text>
          </Box>
        ) : (
          ''
        )}

        {cardTheme ? (
          <ButtonGroup mt={!cardTheme ? '4' : ''} spacing="2">
            {isActive ? (
              <>
                <Button
                  colorScheme="teal"
                  size="md"
                  onClick={handlePauseResume}
                >
                  {isPaused ? 'Iniciar' : 'Pausar'}
                </Button>
                <Button colorScheme="teal" size="md" onClick={handleReset}>
                  Reset
                </Button>{' '}
              </>
            ) : (
              <Button colorScheme="teal" size="md" onClick={handleStart}>
                Iniciar tempo
              </Button>
            )}
          </ButtonGroup>
        ) : (
          ''
        )}

        <Button
          mt="4"
          colorScheme="teal"
          size="lg"
          onClick={() => setCardTheme(randomizeTheme)}
        >
          {!cardTheme ? 'Jogar' : 'Novo tema'}
        </Button>
      </Flex>
    </>
  )
}

export default Home
