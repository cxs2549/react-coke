import styled from 'styled-components'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
const StyledIcons = styled.div`
    svg {
        font-size: 1.5rem;
        cursor: pointer;
    }
`
const Icons = () => {
	return (
		<StyledIcons className="flex items-center gap-6 ">
			<AiOutlineUser className="opacity-75 hover:opacity-100 transition-opacity duration-300" />
			<AiOutlineShoppingCart className="opacity-75 hover:opacity-100 transition-opacity duration-300" />
		</StyledIcons>
	)
}
export default Icons
