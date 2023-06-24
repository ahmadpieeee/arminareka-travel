import { Poppins, Inter } from 'next/font/google'

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-inter',
  preload: true,
})
