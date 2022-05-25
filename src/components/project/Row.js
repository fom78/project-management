import { Avatar, HStack, Td, Text, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import profile from 'assets/images/avatar01.png'
import profile2 from 'assets/images/avatar02.png'
import ActionsMenu from './ActionsMenu'

export default function Row ({
  creationDate,
  projectName,
  projectManager,
  assignedTo,
  status,
  id
}) {
  const customDate = new Date(creationDate)

  return (
    <Tr bgColor='white'>
      <Td>
        <VStack alignItems='start'>
          <Text fontSize='lg' color='gray.600'>
            {projectName}
          </Text>
          <Text fontSize='sm' color='gray.400'>
            {customDate.toLocaleString('en-US')}
          </Text>
        </VStack>
      </Td>
      <Td>
        <HStack alignItems='center'>
          <Avatar size='sm' name='profile image' src={profile2} mr={1} />
          <Text> {projectManager}</Text>
        </HStack>
      </Td>
      <Td>
        <HStack alignItems='center'>
          <Avatar size='sm' name='profile image' src={profile} mr={1} />
          <Text>{assignedTo}</Text>
        </HStack>
      </Td>
      <Td>
        <Text
          bgColor='gray.50'
          display='block'
          width='min-content'
          textTransform='capitalize'
          color='gray.600'
          borderRadius='md'
          py={1}
          px={2}
        >
          {status}
        </Text>
      </Td>
      <Td>
        <ActionsMenu id={id} />
      </Td>
    </Tr>
  )
}
