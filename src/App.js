import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Account from './views/Account/Account'
import Cart from './views/Cart/Cart'
import Home from './views/Home/Home'
import Products from './views/Products/Products'
import Shop from './views/Shop/Shop'
import styled from 'styled-components'

const StyledApp = styled.div`
	.page-appear {
		opacity: 0;
	}
	.page-appear-active {
		opacity: 1;
		transition: all 800ms;
	}
	.page-enter {
		opacity: 0;
	}
	.page-enter-active {
		opacity: 1;
		transition: all 800ms;
	}
	.page-exit {
		opacity: 1;
	}
	.page-exit-active {
		opacity: 0;
		transition: all 800ms;
	}
`

const App = () => {
	return (
		<StyledApp>
			<Header />

			<main className="bg-white">
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/account" element={<Account />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<Products />} />
					<Route path="/store" element={<Shop />} />
				</Routes>
			</main>

			<Footer />
		</StyledApp>
	)
}

export default App
