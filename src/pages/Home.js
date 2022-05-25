import { Box } from '@chakra-ui/react'
import Btn from 'components/Btn'
import Header from 'components/Header'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

export default function Home () {
  return (
    <Box>
      <Header text='My projects'>
        <Link to='/project/add'>
          <Btn Icon={FaPlus} size='sm'>
            Add project
          </Btn>
        </Link>
      </Header>
    </Box>
  )
}
