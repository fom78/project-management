
import { Box, Container } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'

export default function ProjectsList () {
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
            <ProjectCard {...project} key={project.id} />
          ))}
        </Box>
        {/* <ProjectsTable projects={filterProjects} /> */}
      </Container>
    </div>
  )
}
