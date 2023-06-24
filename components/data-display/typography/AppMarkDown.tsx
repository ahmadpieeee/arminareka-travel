'use client'

import { TypographyStylesProvider } from '@mantine/core'

export interface AppMarkdownProps {
  markdown: TrustedHTML | string
}

const AppMarkDown: React.FC<AppMarkdownProps> = ({ markdown }) => {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </TypographyStylesProvider>
  )
}

export default AppMarkDown
