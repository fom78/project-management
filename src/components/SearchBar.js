import { Container, IconButton, Input } from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchText } from 'store/slices/searchSlice'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar () {
  const dispatch = useDispatch()
  const searchText = useSelector(state => state.search.searchText)

  const initialValues = {
    searchText: searchText || ''
  }

  const handleSubmit = values => {
    const text = values.searchText
    dispatch(setSearchText(text))
  }

  const handleEnterEvent = event => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Container display='flex' mb={{ base: 4, md: 8 }}>
            <Field
              as={Input}
              bgColor='white'
              type='text'
              name='searchText'
              placeholder={searchText}
              id='searchText'
              onKeyDown={handleEnterEvent}
            />
            <IconButton
              colorScheme='blue'
              type='submit'
              aria-label='Search project'
              icon={<FaSearch />}
            />
          </Container>
        </form>
      )}
    </Formik>

  )
}
