import styled from 'styled-components'
import Burger from './Burger/Burger'
import logo from '../../assets/logo.png'
import Icons from './Icons/Icons'
import { useState } from 'react'
import Links from './Links/Links'

const StyledHeader = styled.header`
	position: relative;
	z-index: 10;
`
const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const links = [
		{
			name: 'our products',
			links: [
				'coca-Cola',
				'coke zero sugar',
				'flavors',
				'coke with coffee',
				'coke energy',
				'coca-Cola local tastes',
				'all products'
			]
		},
		{ name: 'shop' },
		{ name: 'give' },
		{ name: 'rewards' },
		{ name: 'where to buy' }
	]
	return (
		<StyledHeader className="h-20 border-b">
			<div className="max-w-5xl mx-auto px-5 flex items-center h-full justify-between relative xl:px-0">
				<Burger open={isOpen} close={() => setIsOpen(false)} click={() => setIsOpen(!isOpen)} links={links} />
				<div>
					<div className="absolute left-1/2 transform -translate-x-1/2 lg:left-10 top-1/2 -translate-y-1/2 xl:left-8 cursor-pointer">
						<img src={logo} className="w-16" alt="" />
					</div>
					<Links links={links} />
				</div>
				<Icons />
			</div>
		</StyledHeader>
	)
}
export default Header
