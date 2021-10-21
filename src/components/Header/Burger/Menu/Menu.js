import styled from 'styled-components'
import { AiFillCaretDown } from 'react-icons/ai'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { NavLink } from 'react-router-dom'

const StyledMenu = styled.div`
	position: absolute;
	z-index: 100;
	top: 64px;
	left: calc(-100vw - 4px);
	right: 0;
	max-width: 64rem;
	width: 100vw;
	background-color: #fff;
	transition: transform 600ms;
	transform: translate3d(100vw, 0, 0);
	transform: ${({ open }) => (open ? 'translate3d(100vw, 0, 0)' : 'translate3d(0, 0, 0)')};
	pointer-events: ${(props) => (props.open ? 'click' : 'none')};
	
	.my-node-enter {
		opacity: 0;
		max-height: 0;
	}
	.my-node-enter-active {
		opacity: 1;
		max-height: 1000px;
		transition: all 800ms;
	}
	.my-node-exit {
		opacity: 1;
		max-height: 10000px;
	}
	.my-node-exit-active {
		opacity: 0;
		max-height: 0;
		transition: all 400ms;
	}

	.active {
		background-color: red;
		color: white;
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
		<StyledMenu open={open} className="border-b">
			<ul className="flex flex-col gap-y-4 p-8 text-xl">
				{links.map((link, i) => (
					<div>
						{i !== 1 ? (
							<NavLink
								to={link.to || link.name}
								key={i}
								end
								onClick={closeMenu}
								className="capitalize flex items-center gap-2 font-medium  cursor-pointer    py-3 px-4 rounded-lg transition-colors duration-300  hover:bg-gray-400 hover:text-white"
							>
								{link.name}
							</NavLink>
						) : (
							<div className="relative transition-colors duration-300  hover:bg-gray-400 hover:text-white py-3 px-4 rounded-lg cursor-pointer">
								<div
									className="capitalize flex items-center justify-between font-medium   "
									onClick={handleShowProducts}
								>
									{link.name}
									<div
										ref={arrowRef}
										className="transform transition-transform duration-400"
									>
										<AiFillCaretDown />
									</div>
								</div>
								<CSSTransition
									unmountOnExit
									in={showProducts}
									timeout={400}
									classNames="my-node"
								>
									<div className="py-3 px-4 capitalize rounded flex flex-col gap-y-2 text-base">
										{link.links.map((link, i) => (
											<div className="hover:underline cursor-pointer">
												{link}
											</div>
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
