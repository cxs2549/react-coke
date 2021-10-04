import styled from 'styled-components'
import { AiFillCaretDown } from 'react-icons/ai'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { NavLink } from 'react-router-dom'

const StyledMenu = styled.div`
	position: absolute;
	z-index: 100;
	top: 64px;
	left: -4px;
	right: 0;
	max-width: 64rem;
	width: 100vw;
	background-color: #fff;
	opacity: ${(props) => (props.open ? 1 : 0)};
	transition: opacity 200ms;
	transition-delay: 200ms;
	pointer-events: ${(props) => (props.open ? 'click' : 'none')};

	.my-node-enter {
		opacity: 0;
	}
	.my-node-enter-active {
		opacity: 1;
		transition: opacity 200ms;
	}
	.my-node-exit {
		opacity: 1;
	}
	.my-node-exit-active {
		opacity: 0;
		transition: opacity 600ms;
	}

	.active {
		background-color: red;
		color: white;
	}
	a {
		transition-delay: 200ms;
	}
`
const Menu = ({ open, close, links }) => {
	const [ showProducts, setShowProducts ] = useState(false)
	const handleShowProducts = () => {
		setShowProducts(!showProducts)
		arrowRef.current.classList.toggle('rotate-180')
	}

	const arrowRef = useRef()
	const closeMenu = () => {
		setTimeout(() => close(), 250)
	
	}
	return (
		<StyledMenu open={open}>
			<ul className="flex flex-col gap-y-4 p-8 text-xl">
			{links.map((link, i) => (
				<div>
					{i !== 1 ? (
						<NavLink
							to={link.to || link.name}
							key={i}
							end
							onClick={closeMenu}
							className="capitalize flex items-center gap-2 font-medium  cursor-pointer   hover:bg-gray-400 hover:opacity-80 hover:text-white py-3 px-4 rounded-lg"
						>
							{link.name}
						</NavLink>
					) : (
						<div className="relative  hover:bg-gray-400 hover:text-white py-3 px-4 rounded-lg" >
							<div className="capitalize flex items-center justify-between font-medium  cursor-pointer " onClick={handleShowProducts}>
								{link.name}
								<div
									ref={arrowRef}
									className="transform transition-transform duration-200"
								>
									<AiFillCaretDown />
								</div>
							</div>
							<CSSTransition unmountOnExit in={showProducts} timeout={200} classNames="my-node">
								<div className="py-3 px-4 capitalize rounded flex flex-col gap-y-2 text-base">
									{link.links.map((link, i) => (
										<div className="hover:underline cursor-pointer">{link}</div>
									))}
								</div>
							</CSSTransition>
						</div>
					)}
				</div>
			))}
			</ul>
		</StyledMenu>
	)
}
export default Menu
