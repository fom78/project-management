import { Box, Container, Text } from '@chakra-ui/react'

export default function Header ({ text, back = false, children }) {
  return (
    <Container maxW='container.xl' px={{ base: 0, md: 4 }}>
      <Box
        bgColor='white'
        py={{ base: 2 }}
        px={{ base: 4, md: 0 }}
        display='flex'
        flexDirection={back ? 'row-reverse' : 'row'}
        alignItems='center'
      >
        <Text fontSize='xl' fontWeight='bold' flex='1'>
          {text}
        </Text>
        {children}
      </Box>
    </Container>
  )
}
