
import { Box, Container } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'

export default function ProjectsList () {
  const projects = useSelector(state => state.projects.projects)
  return (
    <div>
      <Container maxW='container.xl' px={{ base: 0, md: 4 }}>
        <Box display={{ md: 'none', base: 'block' }}>
          {projects.map(project => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </Box>
        {/* <ProjectsTable projects={filterProjects} /> */}
      </Container>
    </div>
  )
}
