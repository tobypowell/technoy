import Link from 'next/link';
import Footer from '@/components/Footer';
import { Abril_Fatface, Fira_Sans } from 'next/font/google';
import './globals.css';

const fira = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-fira',
});

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abril',
});

export const metadata = {
  title: 'Tech Blog',
  description: 'A blog on everything tech',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${abril.variable} ${fira.variable}`}>
        {/* <div id='watermark'>technoy</div> */}
        <header>
          <Link id='logo' href='/'>
            technoy.
          </Link>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
