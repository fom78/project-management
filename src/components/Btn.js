import { Button } from '@chakra-ui/react'

export default function Btn ({ children, Icon, ...rest }) {
  return (
    <Button
      leftIcon={Icon && <Icon />}
      colorScheme='red'
      color='white'
      {...rest}
    >
      {children}
    </Button>
  )
}
