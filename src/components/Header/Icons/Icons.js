import styled from 'styled-components'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const StyledIcons = styled.div`
	svg {
		font-size: 1.5rem;
		cursor: pointer;
		@media (min-width: 1280px) {
			font-size: 1.55rem;
		}
	}
	.active {
		color: red;
	}
`
const Icons = () => {
	return (
		<StyledIcons className="flex items-center gap-6 xl:gap-10">
			<NavLink to="account">
				<AiOutlineUser className="opacity-75 hover:opacity-100 transition-opacity duration-300" />
			</NavLink>
			<NavLink to="cart">
				<AiOutlineShoppingCart className="opacity-75 hover:opacity-100 transition-opacity duration-300" />
			</NavLink>
		</StyledIcons>
	)
}
export default Icons
