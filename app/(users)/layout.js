import {Roboto} from "next/font/google";
import Navigation from "@/components/Navigation";
import "@/app/globals.css";

const font = Roboto({
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={font.className}>
        <Navigation />        
        {children}
      </body>
    </html>
  );
}