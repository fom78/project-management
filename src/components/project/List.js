
import { Box, Container } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Table from './Table'

export default function List () {
  const projects = useSelector(state => state.projects.projects)
  const searchText = useSelector(state => state.search.searchText)
  const filterProjects = projects.filter(project =>
    project.projectName.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div>
      <Container maxW='container.xl' px={{ base: 0, md: 4 }}>
        <Box display={{ md: 'none', base: 'block' }}>
          {filterProjects.map(project => (
            <Card {...project} key={project.id} />
          ))}
        </Box>
        <Table projects={filterProjects} />
      </Container>
    </div>
  )
}
