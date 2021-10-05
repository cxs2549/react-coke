import styled from 'styled-components'
import Hero from './Hero/Hero'
import COVID from './COVID/COVID'
const StyledShop = styled.div``
const Shop = () => {
	return (
		<StyledShop>
			<COVID />
			<Hero />
		</StyledShop>
	)
}
export default Shop
