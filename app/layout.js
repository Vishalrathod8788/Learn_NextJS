import {Roboto, Work_Sans} from "next/font/google";
import { Work_Sans } from "next/font/google";
import "@/app/globals.css";

const font = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
})
const myFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${font.variable} ${myFont.variable}`}>
        {children}
      </body>
    </html>
  );
}