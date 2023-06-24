import { Button } from '@mantine/core'
import { SpotlightProvider, useSpotlight } from '@mantine/spotlight'
import type { SpotlightAction } from '@mantine/spotlight'
import {
  IconHome,
  IconShoppingCart,
  IconFileText,
  IconSearch,
} from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import AppText from '../data-display/typography/AppText'

function SpotlightControl() {
  const spotlight = useSpotlight()
  return (
    <Button
      variant="gradient"
      radius="xl"
      onClick={() => spotlight.openSpotlight()}
    >
      <IconSearch size={17} style={{ marginRight: 4 }} />
      <AppText>Pencarian</AppText>
    </Button>
  )
}

export default function AppSpotlight() {
  const router = useRouter()
  const actions: SpotlightAction[] = [
    {
      group: 'Menu',
      title: 'Beranda',
      description: 'Navigasi ke beranda',
      onTrigger: () => router.push('/'),
      icon: <IconHome size="1.5rem" />,
    },
    {
      title: 'Daftar Produk',
      description: 'Arahkan saya ke halaman daftar produk',
      onTrigger: () => router.push('/products'),
      icon: <IconShoppingCart size="1.5rem" />,
    },
    {
      title: 'Documentation',
      description: 'Visit documentation to lean more about all features',
      onTrigger: () => console.log('Documentation'),
      icon: <IconFileText size="1.2rem" />,
    },
  ]
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut={['ctrl + shift + f', 'mod + k']}
      nothingFoundMessage="Tidak ditemukan."
      transitionProps={{ duration: 300, transition: 'slide-down' }}
      highlightQuery
      zIndex={99999999}
    >
      <SpotlightControl />
    </SpotlightProvider>
  )
}
