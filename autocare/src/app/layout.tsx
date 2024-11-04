import "./globals.css";
import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'Autocare',
  icons: {
    icon: { url: './Favicon.svg', type: 'image/svg+xml' },
  },
};
const poppins = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--fonte', 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
