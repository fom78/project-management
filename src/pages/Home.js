import { Box } from '@chakra-ui/react'
import Btn from 'components/Btn'
import Header from 'components/Header'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import ProjectsList from 'components/ProjectsList'
import SearchBar from 'components/SearchBar'

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

      <Box bgColor='gray.100' minH='100vh' py={{ base: 4, md: 8 }}>
        <SearchBar />
        <ProjectsList />
      </Box>
    </Box>
  )
}
