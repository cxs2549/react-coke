import styled from 'styled-components'
import coke1 from '../../../assets/cards/coca-cola-original-20oz.png'
import coke2 from '../../../assets/cards/coca-cola-13.2oz_NEW.png'
import coke3 from '../../../assets/cards/coca-cola-with-coffee-dark-blend-12oz.png'
import coke4 from '../../../assets/cards/coke-zero-sugar-2-liter-bottle.png'
import { Link } from 'react-router-dom'

const StyledFlavors = styled.div``
const Flavors = () => {
	const bottles = [
		{ image: coke1, title: 'coca-Cola', to: 'original' },
		{ image: coke2, title: 'Mini Coke' },
		{ image: coke3, title: 'Coke Coffee' },
		{ image: coke4, title: 'Coke Zero' }
	]
	return (
		<StyledFlavors className="py-12 px-4">
			<h1 className="text-center text-4xl font-semibold text-black">
				We've got a Coca‑Cola® for you.
			</h1>
			<div className="grid md:grid-cols-4 gap-4 mt-10">
				{bottles.map((bottle, i) => (
					<Link to={`products/${bottle.to}`} key={i}>
						<div className=" cursor-pointer  rounded-lg  py-8 px-3 flex flex-col items-center justify-center">
							<img
								src={bottle.image}
								className="w-24 mb-2 opacity-80 hover:opacity-100 transition-opacity duration-200"
								alt=""
							/>
							<h4 className="font-semibold capitalize">{bottle.title}</h4>
							<button className="text-white font-semibold bg-black px-8 rounded-full mt-4 py-2 ">
								Explore
							</button>
						</div>
					</Link>
				))}
			</div>
		</StyledFlavors>
	)
}
export default Flavors
