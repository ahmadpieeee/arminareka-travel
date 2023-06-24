'use client'

import 'aos/dist/aos.css'
import * as React from 'react'
import Aos from 'aos'
import { Analytics } from '@vercel/analytics/react'
import RootStyleRegistry from './emotion-mantine'
import { Provider } from 'react-redux'
import { store } from '@/store'

type IProviders = {
  children: React.ReactNode
}

const Providers = ({ children }: IProviders) => {
  if (typeof window === 'object') {
    Aos.init()
  }
  return (
    <Provider store={store}>
      <Analytics />
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </Provider>
  )
}

export default Providers
