import * as yup from 'yup'

export const validationSchema = yup.object({
  projectName: yup.string()
    .required('Obligatory field')
    .min(5, 'The minimum of characters is 5'),
  description: yup.string()
    .required('Obligatory field')
    .min(10, 'The minimum of characters is 10'),
  projectManager: yup.string().required('Obligatory field'),
  assignedTo: yup.string().required('Obligatory field'),
  status: yup.string().required('Obligatory field')
})
