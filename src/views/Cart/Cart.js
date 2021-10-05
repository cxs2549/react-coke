import { Link } from 'react-router-dom'
import styled from 'styled-components'
const StyledCart = styled.div`
	h1 {
		text-transform: capitalize;
		font-size: 200%;
		font-weight: bold;
	}
`
const Cart = () => {
	return (
		<StyledCart className="py-8">
			<div className="max-w-7xl mx-auto px-5">
				<h1 className="text-2xl mb-5">Shopping Cart (0)</h1>
				<div className="text-sm">
					<p>You have no items in your shopping cart.</p>
					<p>
						Click{' '}
						<Link to="/store" className="text-red-500 font-medium">
							here
						</Link>{' '}
						to continue shopping.
					</p>
				</div>
			</div>
		</StyledCart>
	)
}
export default Cart
