'use client'

import { ContainerProps, Container } from '@mantine/core'

export interface AppContainerProps extends ContainerProps {
  children?: React.ReactNode
}

const AppContainer: React.FC<AppContainerProps> = ({ children, ...props }) => {
  return (
    <Container size={'xl'} {...props}>
      {children}
    </Container>
  )
}

export default AppContainer
