import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProject } from 'store/slices/projectsSlice'
import { FaRegEdit, FaTrash } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'

export default function ActionsMenu ({ id }) {
  const dispatch = useDispatch()
  const cancelRef = useRef()
  const [openDelete, setOpenDelete] = useState(false)

  const onOpenDelete = () => setOpenDelete(true)

  const onCloseDelete = () => setOpenDelete(false)

  const handleDelete = id => {
    dispatch(deleteProject(id))
    onCloseDelete()
  }

  return (
    <>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HiDotsVertical />}
          variant='ghost'
          size='lg'
        />
        <MenuList>
          <Link to={`project/edit/${id}`}>
            <MenuItem icon={<FaRegEdit />}>Edit</MenuItem>
          </Link>
          <MenuItem onClick={onOpenDelete} icon={<FaTrash />}>
            Delete
          </MenuItem>
        </MenuList>
        <AlertDialog
          isOpen={openDelete}
          leastDestructiveRef={cancelRef}
          onClose={onCloseDelete}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Project
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onCloseDelete}>
                  Cancel
                </Button>
                <Button
                  colorScheme='red'
                  onClick={() => handleDelete(id)}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Menu>
    </>
  )
}
