import { useRoutes } from "react-router"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./views/Home/Home"
import Shop from "./views/Shop/Shop"

const routes = [
  {path: "/", element: <Home />},
  {path: "shop", element: <Shop />}
]

const App = () => {
  const element = useRoutes(routes)
  return (
    <>
      <Header />
      <main className="bg-white h-screen max-w-7xl mx-auto">
        {element}
      </main>
      <Footer />
    </>
  )
}

export default App
