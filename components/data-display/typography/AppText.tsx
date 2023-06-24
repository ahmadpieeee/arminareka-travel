'use client'

import { poppins } from '@/styles/fonts'
import { Text, TextProps } from '@mantine/core'

interface AppTextProps extends TextProps {
  children?: React.ReactNode
}

const AppText: React.FC<AppTextProps> = ({ children, ...props }) => {
  return (
    <Text className={poppins.className} {...props}>
      {children}
    </Text>
  )
}

export default AppText
