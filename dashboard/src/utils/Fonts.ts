import {
  Poppins,
  Roboto,
  Inter,
  Playfair_Display,
  Lato,
  Nunito,
  Oswald,
  Ubuntu,
  Open_Sans,
  Montserrat,
  Raleway,
  Merriweather,
  Source_Sans_3,
  Rubik,
  Quicksand,
  Josefin_Sans,
  Fira_Sans,
  Cabin
} from "next/font/google";

export const poppins = Poppins({ subsets: ['latin'], weight: ['400'], variable: '--font-poppins' });
export const inter = Inter({ subsets: ['latin'], weight: ['400'] });
export const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });
export const playfair_Display = Playfair_Display({ subsets: ['latin'], weight: ['400'] });
export const lato = Lato({ subsets: ['latin'], weight: ['400'] });
export const nunito = Nunito({ subsets: ['latin'], weight: ['400'] });
export const oswald = Oswald({ subsets: ['latin'], weight: ['400'] });
export const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'] });

export const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'] });
export const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'] });
export const raleway = Raleway({ subsets: ['latin'], weight: ['400'] });
export const merriwether = Merriweather({ subsets: ['latin'], weight: ['400'] });
export const sourceSans3 = Source_Sans_3({ subsets: ['latin'], weight: ['400'] });
export const rubik = Rubik({ subsets: ['latin'], weight: ['400'] });
export const quicksand = Quicksand({ subsets: ['latin'], weight: ['400'] });
export const josefinSans = Josefin_Sans({ subsets: ['latin'], weight: ['400'] });
export const firaSans = Fira_Sans({ subsets: ['latin'], weight: ['400'] });
export const cabin = Cabin({ subsets: ['latin'], weight: ['400'] });


export const fontList = [
  { id: 'Poppins', font: poppins },
  { id: 'Inter', font: inter },
  { id: 'Roboto', font: roboto },
  { id: 'Playfair Display', font: playfair_Display },
  { id: 'Lato', font: lato },
  { id: 'Nunito', font: nunito },
  { id: 'Oswald', font: oswald },
  { id: 'Ubuntu', font: ubuntu },

  { id: 'Open Sans', font: openSans },
  { id: 'Montserrat', font: montserrat },
  { id: 'Raleway', font: raleway },
  { id: 'Merriweather', font: merriwether },
  { id: 'Source Sans 3', font: sourceSans3 },
  { id: 'Rubik', font: rubik },
  { id: 'Quicksand', font: quicksand },
  { id: 'Josefin Sans', font: josefinSans },
  { id: 'Fira Sans', font: firaSans },
  { id: 'Cabin', font: cabin },
];
