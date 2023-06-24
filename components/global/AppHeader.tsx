'use client'

import { useEffect, useState } from 'react'
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Container,
} from '@mantine/core'
import { useDisclosure, useWindowScroll } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import Logo from '@/public/assets/images/Logo1.png'
import Image from 'next/image'
import AppSpotlight from '../data-input/AppSpotlight'
import Link from 'next/link'
import { PiMosqueDuotone } from 'react-icons/pi'
import AppText from '../data-display/typography/AppText'

const useStyles = createStyles((theme) => ({
  header: {
    boxShadow: theme.shadows.xs,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

const mockdata = [
  {
    icon: PiMosqueDuotone,
    title: 'Haji',
    description: 'Temukan paket haji terbaru dan menarik dari arminareka',
    link: '/products/hajj',
  },
  {
    icon: PiMosqueDuotone,
    title: 'Umroh',
    description: 'Temukan paket umrah terbaru dan menarik dari arminareka',
    link: '/products/umrah',
  },
  {
    icon: PiMosqueDuotone,
    title: 'Wisata Halal',
    description:
      'Temukan paket wisata halal terbaru dan menarik dari arminareka',
    link: '/products/halal-tour',
  },
  {
    icon: PiMosqueDuotone,
    title: 'Badal',
    description:
      'Temukan paket badal haji & badal umroh terbaru dan menarik dari arminareka',
    link: '/products/badal',
  },
]

export default function AppHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const { classes, theme } = useStyles()
  const WA = `https://wa.me/6281284618241?text=Assalamu'alaikum%20admin%20Arminareka%20Perdana%20Travel,%20mohon%20informasinya%20untuk%20paket%20Haji%20dan%20umrah-nya%20`
  const [scroll] = useWindowScroll()
  const [isHidden, setIsHidden] = useState(false)

  // console.log('SCROLL Y :', scroll.y)
  useEffect(() => {
    setIsHidden(scroll.y > 280)
  }, [scroll.y])

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
        style={{ margin: '1rem 0' }}
      >
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </a>
    </UnstyledButton>
  ))

  return (
    <Box pb={70}>
      <Header
        height={70}
        pos="fixed"
        zIndex={2}
        className={classes.header}
        sx={{
          transform: `translateY(${isHidden ? '-100%' : 0})`,
          transition: `transform 0.3s ease-in-out`,
        }}
      >
        <Container size="xl">
          <Group position="apart" sx={{ height: '100%' }}>
            <Image alt="logo arminareka" src={Logo} width={120} />

            <Group
              sx={{ height: '100%' }}
              spacing={0}
              className={classes.hiddenMobile}
            >
              <Link href="/" className={classes.link}>
                <AppText>Beranda</AppText>
              </Link>
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <Link href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        <AppText>Layanan</AppText>
                      </Box>
                      <IconChevronDown
                        size={16}
                        color={theme.fn.primaryColor()}
                      />
                    </Center>
                  </Link>
                </HoverCard.Target>

                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                  <Group position="apart" px="md">
                    <Text fw={500}>Layanan</Text>
                    <Anchor href="/products" fz="xs">
                      Lihat Semua
                    </Anchor>
                  </Group>

                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group position="apart">
                      <div>
                        <Text fw={500} fz="sm">
                          Hubungi Admin
                        </Text>
                        <Text size="xs" color="dimmed">
                          Segera booking seat dan tanggal keberangkatan untuk
                          anda
                        </Text>
                      </div>
                      <Button variant="gradient" radius="xl">
                        <Link
                          href={WA}
                          target="_blank"
                          style={{ textDecoration: 'none', color: 'white' }}
                        >
                          Kontak kami
                        </Link>
                      </Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <Link href="/informations/about-us" className={classes.link}>
                <AppText>Tentang Kami</AppText>
              </Link>
              <Link href="/informations/gallery" className={classes.link}>
                <AppText>Galeri</AppText>
              </Link>
            </Group>

            <Group className={classes.hiddenMobile}>
              <AppSpotlight />
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
            />
          </Group>
        </Container>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Link href="#" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Layanan
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link href="/informations/about-us" className={classes.link}>
            <AppText>Tentang Kami</AppText>
          </Link>
          <Link href="/informations/gallery" className={classes.link}>
            <AppText>Galeri</AppText>
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position="center" grow pb="xl" px="md">
            <AppSpotlight />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
