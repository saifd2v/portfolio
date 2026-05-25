import { Sora, Inter } from 'next/font/google';
import "./globals.css";

export const metadata = {
  title: 'Saif - Full-Stack Developer',
  description: 'Saif Mahmoud, Full-Stack Developer',
  keywords: ['Full-Stack', 'Portfolio', 'Next.js', 'React', 'Developer', 'FullStack', 'Full-Stack Developer'],
  authors: [{ name: 'Saif Mahmoud', url: 'https://saifx.xyz' }],
  openGraph: {
    title: 'Saif - Full-Stack Developer',
    description: 'Saif Mahmoud – Full-Stack Developer - MERN Stack - Building Modern Web Apps',
    url: 'https://saifx.xyz',
    siteName: 'Saif Portfolio',
    images: [
      {
        url: '/images/saif.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Saif - Full-Stack Developer',
    description: 'Saif Mahmoud – Full-Stack Developer | MERN Stack | Building Modern Web Apps',
    images: ['/images/saif.png'],
  },
};

const sora = Sora({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800'],
  variable: '--font-sora',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}