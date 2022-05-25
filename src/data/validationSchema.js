import * as yup from 'yup'

export const validationSchema = yup.object({
  projectName: yup.string().required('Campo obligatorio'),
  description: yup.string().required('Campo obligatorio'),
  projectManager: yup.string().required('Campo obligatorio'),
  assignedTo: yup.string().required('Campo obligatorio'),
  status: yup.string().required('Campo obligatorio')
})
