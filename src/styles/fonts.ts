import { Montserrat } from 'next/font/google';
import { League_Spartan } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.scss'

const InterFont = localFont({
    src: './typefaces/Inter-VariableFont_slnt,wght.ttf',
    display: 'swap',
    variable: '--font-inter',
});

export { InterFont }