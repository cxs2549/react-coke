import Header from "./components/Header/Header"
import Home from "./views/Home/Home"

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-green-400 h-screen">
        <Home />
      </main>
    </>
  )
}

export default App
