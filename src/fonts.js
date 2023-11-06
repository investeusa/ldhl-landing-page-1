import { Poppins, Roboto } from 'next/font/google'
 
export const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto = Roboto({
  weight: ['700', '900'],
  subsets: ['latin'],
  display: 'swap',
})