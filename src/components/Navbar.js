import { Box, Container, Image } from '@chakra-ui/react'
// import logo from 'assets/images/logo.png'
import logo from 'assets/images/estoes10anos.gif'

import React from 'react'

export default function Navbar () {
  return (
    <Box borderBottom='1px solid' borderColor='#D9D9D9' maxH='56px'>
      <Container maxW='container.xl' py={4}>
        <Image height='35px' src={logo} />
      </Container>
    </Box>
  )
}
