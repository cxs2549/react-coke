import { useRoutes } from "react-router"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Account from "./views/Account/Account"
import Cart from "./views/Cart/Cart"
import Home from "./views/Home/Home"
import Products from "./views/Products/Products"
import Shop from "./views/Shop/Shop"

const routes = [
  {path: "/", element: <Home />},
  {path: "cart", element: <Cart />},
  {path: "store", element: <Shop />},
  {path: "products/*", element: <Products />},
  {path: "account", element: <Account />},
]

const App = () => {
  const element = useRoutes(routes)
  return (
    <>
      <Header />
     
        <main className="bg-white  max-w-7xl mx-auto">
          {element}
        </main>
    
      <Footer />
    </>
  )
}

export default App
