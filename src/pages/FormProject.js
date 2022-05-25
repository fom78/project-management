import { Box, Container, useToast, VStack } from '@chakra-ui/react'
import Btn from 'components/Btn'
import Header from 'components/Header'
import { InputField, SelectField } from 'components/utils/FormField'
import { projects, status, users } from 'data/fakeData'
import { validationSchema } from 'data/validationSchema'
import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addProject, editProject } from 'store/slices/projectsSlice'

const FormFields = ({ edit = false, errors, touched }) => {
  return (
    <VStack
      spacing={5}
      boxShadow='lg'
      px={4}
      py={8}
      mb={24}
      borderRadius='xl'
      bg='white'
      alignItems='start'
    >
      <InputField
        name='projectName'
        type='text'
        placeholder='Nombre de Proyecto'
        isInvalid={!!errors.projectName && touched.projectName}
        error={errors.projectName}
      />
      <InputField
        name='description'
        type='text'
        placeholder='Descripcion del Proyecto'
        isInvalid={!!errors.description && touched.description}
        error={errors.description}
      />
      <SelectField
        name='projectManager'
        type='text'
        placeholder='Select a person'
        isInvalid={!!errors.projectManager && touched.projectManager}
        error={errors.projectManager}
        values={users}
      />
      <SelectField
        name='assignedTo'
        type='text'
        placeholder='Select a person'
        isInvalid={!!errors.assignedTo && touched.assignedTo}
        error={errors.assignedTo}
        values={users}
      />
      <SelectField
        name='status'
        type='text'
        placeholder='Status'
        values={status}
        isInvalid={!!errors.status && touched.status}
        error={errors.status}
      />
      <Btn type='submit'>{edit ? 'Save changes' : 'Create project'}</Btn>
    </VStack>
  )
}

const ProjectForm = ({
  projectName,
  description,
  projectManager,
  assignedTo,
  status,
  id,
  creationDate
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  console.log('para ', params, id)
  const toast = useToast()

  const initialFormValues = {
    projectName: projectName || '',
    description: description || '',
    projectManager: projectManager || '',
    assignedTo: assignedTo || '',
    status: status || 'enabled'
  }

  const successToast = (text) =>
    toast({
      title: text,
      status: 'success',
      duration: 5000,
      isClosable: true
    })

  const handleAddProject = values => {
    dispatch(
      addProject({
        id: projects.length + 1,
        ...values,
        creationDate: Date.now()
      })
    )
  }

  const handleEditProject = values => {
    dispatch(
      editProject({
        id,
        creationDate,
        ...values
      })
    )
  }

  const handleSubmit = values => {
    if (id) {
      handleEditProject(values)
      successToast('Proyecto modificado correctamente.')
    } else {
      handleAddProject(values)
      successToast('Proyecto agregado correctamente.')
    }
    navigate('/')
  }

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ handleSubmit, errors, touched }) => (

        <form onSubmit={handleSubmit}>
          <FormFields edit errors={errors} touched={touched} />
        </form>

      )}
    </Formik>
  )
}

export default function FormProject () {
  const { id } = useParams()
  const [projectData, setProjectData] = useState()
  const projects = useSelector(state => state.projects.projects)

  useEffect(() => {
    if (id) {
      setProjectData(() => {
        const filterProject = projects.filter(project => {
          return project.id.toString() === id.toString()
        })
        const thisProject = filterProject[0]
        return thisProject
      })
    }
  }, [projects])

  console.log({ projectData })

  return (
    <Box>
      <Header text='Add project'>
        {/* <HeaderBackButton /> */}
        volver
      </Header>
      <Box bgColor='gray.100'>
        <Container
          maxW='container.md'
          minH='100vh'
          px={{ base: 0, md: 4 }}
          py={{ base: 4, md: 8 }}
        >
          {(id && projectData) && <ProjectForm {...projectData} />}
          {(!id) && <ProjectForm />}
        </Container>
      </Box>
    </Box>
  )
}
