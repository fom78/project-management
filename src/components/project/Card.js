import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import profile from 'assets/images/avatar02.png'
import ActionsMenu from './ActionsMenu'

export default function Card ({ id, projectName, assignedTo, creationDate }) {
  const customDate = new Date(creationDate)
  return (
    <>
      <Box
        display={{ md: 'none' }}
        p={4}
        bgColor='white'
        borderBottom={{ base: '1px solid' }}
        borderBottomColor={{ base: 'gray.300' }}
      >
        <HStack>
          <Box flex={1}>
            <Text fontSize='lg' color='gray.600'>
              {projectName}
            </Text>
            <Text fontSize='sm' color='gray.400' mb={2}>
              {`Creation date: ${customDate.toLocaleString('en-US')}`}
            </Text>
            <HStack alignItems='center'>
              <Avatar
                size='sm'
                name='ignacio truffa'
                src={profile}
                mr={1}
              />
              <Text fontSize='sm' color='gray.600'>
                {assignedTo}
              </Text>
            </HStack>
          </Box>
          <ActionsMenu id={id} />
        </HStack>
      </Box>
    </>
  )
}
