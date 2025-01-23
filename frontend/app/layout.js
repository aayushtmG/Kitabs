import "./globals.css";
import { Roboto } from 'next/font/google'



const roboto = Roboto({
  weight: ['400','500'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Kitabs",
  description: "Kitabs online bookstore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
