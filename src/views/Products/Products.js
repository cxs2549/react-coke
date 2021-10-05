import styled from 'styled-components'
import coke1 from '../../assets/cards/coca-cola-original-20oz.png'
const StyledProducts = styled.div``
const Products = () => {
	return (
		<StyledProducts className=" py-8">
			<div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-8">
				<img src={coke1} alt="" />
				<h1 className="text-2xl font-bold text-center mb-2">Coca-Cola</h1>
				<p className="text-center">Enjoy the crisp and refreshing taste of Coca-Cola Original.</p>
			</div>
		</StyledProducts>
	)
}
export default Products
