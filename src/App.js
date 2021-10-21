// import { useRoutes } from "react-router"
import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
	const location = useLocation()
	return (
		<StyledApp>
			<Header />

			<main className="bg-white  max-w-7xl mx-auto">
				<TransitionGroup>
					<CSSTransition
						appear
						key={location.key}
						classNames="page"
						timeout={800}
						unmountOnExit
					>
						<Routes>
							<Route path="/" element={<Home />} exact />
							<Route path="/account" element={<Account />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/products" element={<Products />} />
							<Route path="/shop" element={<Shop />} />
						</Routes>
					</CSSTransition>
				</TransitionGroup>
			</main>

			<Footer />
		</StyledApp>
	)
}

export default App
