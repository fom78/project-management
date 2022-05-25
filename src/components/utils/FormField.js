import { FormControl, FormErrorMessage, FormLabel, Input, Select } from '@chakra-ui/react'
import { Field } from 'formik'

export const InputField = ({ name, type, placeholder, isInvalid, error }) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{placeholder}</FormLabel>
      <Field
        as={Input}
        id={name}
        name={name}
        type={type}
        // variant="filled"
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}

export const SelectField = ({ name, type, placeholder, isInvalid, error, values }) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{placeholder}</FormLabel>
      <Field
        as={Select}
        id={name}
        name={name}
        type={type}
        // variant="filled"
      >
        {name !== 'status' && <option key={-1} value='' disabled>Select a person</option>}

        {values?.map((value, index) => <option key={index} value={value.name}>{value.name}</option>)}
      </Field>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}
