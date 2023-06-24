import { CacheProvider } from '@emotion/react'
import { useEmotionCache, MantineProvider } from '@mantine/core'
import { useServerInsertedHTML } from 'next/navigation'

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const cache = useEmotionCache()
  cache.compat = true

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            primary: [
              '#9cbcff',
              '#75a0fa',
              '#5a83db',
              '#4570cc',
              '#2f5ab5',
              '#1c4399',
              '#062F87',
              '#04297a',
              '#032161',
              '#01194d',
            ],
            secondary: [
              '#F5FFFA',
              '#C5FDE2',
              '#98F9CA',
              '#70F2B3',
              '#50E99F',
              '#38DD8D',
              '#27CD7D',
              '#1BB86C',
              '#13A05C',
              '#0E874C',
            ],
          },
          primaryColor: 'primary',
          primaryShade: 6,
          defaultGradient: {
            from: 'cyan',
            to: '#062F87',
            deg: 45,
          },
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  )
}
