import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavBar from './components/nav/Nav';
import Footer from './components/pageSections/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Ernesto J Ballon',
  description: 'Portfolio website for Ernesto J',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/aev3bgg.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className=" flex flex-col ">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
