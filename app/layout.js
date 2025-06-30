import "@/app/globals.css";
import {Roboto, Work_Sans} from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Home Page / Vishal Rathod",
    template: "%s / Vishal Rathod",
  },
  description: "This is the home page of our website",
  keywords: ["home, nextjs, react", "vishal rathod", "web development"],
  icons: {
    icon: "/vishalrathod.jpg", // Correct way to reference the icon
  },
}

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