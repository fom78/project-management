import { Box, Table as TableChakra, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import ProjectRow from './Row'

const tableHeads = [
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
            {tableHeads.map((head, index) => (
              <Th key={index} textTransform='capitalize' fontSize='md'>
                {head}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project) => (
            <ProjectRow {...project} key={project.id} />
          ))}
        </Tbody>
      </TableChakra>
    </Box>
  )
}
