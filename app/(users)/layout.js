import Navigation from "@/components/Navigation";

export default function UserRootLayout({ children }) {
  return (<>
    <Navigation />
    {children}
  </>
  );
}