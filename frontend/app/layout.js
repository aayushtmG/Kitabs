import "./globals.css";
import { Roboto } from 'next/font/google'
import Header from "../components/Header";
import Footer from '../components/Footer'



const roboto = Roboto({
  weight: ['400','500'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Ample Chair",
  description: "ample chair",
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
