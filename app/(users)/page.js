export const metadata = {
  title:{
    default: "Home Page / Vishal Rathod",
    template: "%s / Vishal Rathod",
  },
  description: "This is the home page of our website",
  keywords: ["home, nextjs, react", "vishal rathod", "web development"],
  icons: {
    icon: "vishalrathod.jpg",
  },
  author: {
    name: "Vishal Rathod",
    url: "https://vishalrathod.com",
  },
}
const Home = () => {
  return <h1 className="font-roboto">Hello, welcome to our website</h1>
}
export default Home