import styled from 'styled-components'
import Burger from './Burger/Burger'
import logo from '../../assets/logo.png'
import Icons from './Icons/Icons'
import { useState } from 'react'
import Links from './Links/Links'
import Headroom from 'react-headroom'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
	position: relative;
	z-index: 10;
	background-color: #fff;
`
const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handleToggle = () => {
		setIsOpen(!isOpen)
		document.body.classList.toggle('freeze-flow')
	}
	const handleClose= () => {
		setIsOpen(false)
		document.body.classList.remove('freeze-flow')
	}
	const links = [
		{name: 'home', to: "/"},
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
		{ name: 'shop', to:"store" },
		{ name: 'give' },
		{ name: 'rewards' },
		{ name: 'where to buy', to: 'where_to_buy' }
	]
	return (
		<Headroom>
			<StyledHeader className="h-20 shadow">
				<div className="max-w-7xl mx-auto px-5 flex items-center h-full justify-between relative xl:px-0">
					<Burger
						open={isOpen}
						close={handleClose}
						click={handleToggle}
						links={links}
					/>
					<div>
						<div className="absolute left-1/2 transform -translate-x-1/2 lg:left-10 top-1/2 -translate-y-1/2 xl:left-8 cursor-pointer">
							<Link to="/">
								<img src={logo} className="w-16" alt="" />
							</Link>
						</div>
						<Links links={links} />
					</div>
					<Icons />
				</div>
			</StyledHeader>
		</Headroom>
	)
}
export default Header
