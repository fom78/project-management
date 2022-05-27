import { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'

import {
  Table as TableChakra,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  // chakra,
  VStack,
  HStack,
  Avatar,
  Tfoot
} from '@chakra-ui/react'

import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight
  // FaAngleDown,
  // FaAngleUp
} from 'react-icons/fa'
import ActionsMenu from './ActionsMenu'
import { users } from 'data/fakeData'

function CustomTable ({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 4 }
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <TableChakra {...getTableProps()}>
        <Thead bgColor='gray.50' py={4}>
          {headerGroups.map((headerGroup, i) => (
            <Tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <Th key={i} {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>

        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <Tr key={i} bgColor='white' {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <Td key={i} {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
        <Tfoot bgColor='gray.50'>
          <Tr>
            <Td colSpan={5}>
              <Flex bgColor='gray.50' justifyContent='space-between' alignItems='center'>
                <Flex>
                  <Tooltip label='First Page'>
                    <IconButton
                      onClick={() => gotoPage(0)}
                      isDisabled={!canPreviousPage}
                      icon={<FaAngleLeft h={3} w={3} />}
                      mr={4}
                    />
                  </Tooltip>
                  <Tooltip label='Previous Page'>
                    <IconButton
                      onClick={previousPage}
                      isDisabled={!canPreviousPage}
                      icon={<FaAngleDoubleLeft h={6} w={6} />}
                    />
                  </Tooltip>
                </Flex>

                <Flex alignItems='center'>
                  <Text flexShrink='0' mr={8}>
                    Page{' '}
                    <Text fontWeight='bold' as='span'>
                      {pageIndex + 1}
                    </Text>{' '}
                    of{' '}
                    <Text fontWeight='bold' as='span'>
                      {pageOptions.length}
                    </Text>
                  </Text>
                  <Text flexShrink='0'>Go to page:</Text>{' '}
                  <NumberInput
                    ml={2}
                    mr={8}
                    w={28}
                    min={1}
                    max={pageOptions.length}
                    onChange={(value) => {
                      const page = value ? value - 1 : 0
                      gotoPage(page)
                    }}
                    defaultValue={pageIndex + 1}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Select
                    w={32}
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value))
                    }}
                  >
                    {[4, 6, 10].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </Select>
                </Flex>

                <Flex>
                  <Tooltip label='Next Page'>
                    <IconButton
                      onClick={nextPage}
                      isDisabled={!canNextPage}
                      icon={<FaAngleRight h={6} w={6} />}
                    />
                  </Tooltip>
                  <Tooltip label='Last Page'>
                    <IconButton
                      onClick={() => gotoPage(pageCount - 1)}
                      isDisabled={!canNextPage}
                      icon={<FaAngleDoubleRight h={3} w={3} />}
                      ml={4}
                    />
                  </Tooltip>
                </Flex>
              </Flex>
            </Td>
          </Tr>
        </Tfoot>
      </TableChakra>

    </>
  )
}

function Table ({ projects }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Project info',
        accessor: 'projectInfo'
      },
      {
        Header: 'Project Manager',
        accessor: 'projectManager'
      },

      {
        Header: 'Assigned to',
        accessor: 'assignedTo'
      },
      {
        Header: 'Status',
        accessor: 'status'
      },
      {
        Header: 'Action',
        accessor: 'action'
      }
    ],
    []
  )

  const data = useMemo(
    () => projects.map(p => {
      const customDate = new Date(p.creationDate)

      return ({
        projectInfo: (
          <VStack alignItems='start'>
            <Text fontSize='lg' color='gray.600'>
              {p.projectName}
            </Text>
            <Text fontSize='sm' color='gray.400'>
              {customDate.toLocaleString('en-US')}
            </Text>
          </VStack>
        ),
        projectManager: (
          <HStack alignItems='center'>
            <Avatar size='sm' name='profile image' src={`/assets/images/${users.filter((user) => user.name === p.projectManager)[0].photo}`} mr={1} />
            <Text> {p.projectManager}</Text>
          </HStack>
        ),
        assignedTo: (
          <HStack alignItems='center'>
            <Avatar size='sm' name='profile image' src={`/assets/images/${users.filter((user) => user.name === p.assignedTo)[0].photo}`} mr={1} />
            <Text>{p.assignedTo}</Text>
          </HStack>
        ),
        status: (
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
            {p.status}
          </Text>
        ),
        action: (
          <ActionsMenu id={p.id} />
        )
      })
    }
    ),
    [projects]
  )
  return <CustomTable columns={columns} data={data} />
}

export default Table
