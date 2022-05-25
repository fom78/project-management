import { Box, Table as TableChakra, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import ProjectRow from './Row'

const thTitles = [
  'Project info',
  'Project Manager',
  'Assigned to',
  'Status',
  'Action'
]

export default function Table ({ projects }) {
  return (
    <Box display={{ md: 'block', base: 'none' }}>
      <TableChakra>
        <Thead bgColor='gray.50' py={4}>
          <Tr>
            {thTitles.map((title, index) => (
              // eslint-disable-next-line
              <Th key={index} textTransform='capitalize' fontSize='md' >
                {title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project) => (
            // eslint-disable-next-line
            <ProjectRow {...project} key={project.id} />
          ))}
        </Tbody>
      </TableChakra>
    </Box>
  )
}
