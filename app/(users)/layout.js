import Navigation from "@/components/Navigation";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />        
        {children}
      </body>
    </html>
  );
}