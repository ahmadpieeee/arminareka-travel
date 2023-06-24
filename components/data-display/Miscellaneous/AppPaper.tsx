'use client'

import { Paper, PaperProps } from '@mantine/core'

interface AppPaperProps extends PaperProps {
  children?: React.ReactNode
}

const AppPaper: React.FC<AppPaperProps> = ({ children, ...props }) => {
  return (
    <Paper shadow="md" p="xl" {...props}>
      {children}
    </Paper>
  )
}

export default AppPaper
