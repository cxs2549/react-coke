import styled from 'styled-components'
import { AiFillCaretDown } from 'react-icons/ai'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

const StyledMenu = styled.div`
	position: absolute;
	z-index: 100;
	top: 64px;
	left: -4px;
	width: 100vw;
	background-color: #fff;
	opacity: ${(props) => (props.open ? 1 : 0)};
	transition: opacity 200ms;
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
`
const Menu = ({ open, links }) => {
	const [ showProducts, setShowProducts ] = useState(false)
	const handleShowProducts = () => {
		setShowProducts(!showProducts)
		arrowRef.current.classList.toggle('rotate-180')
	}

	const arrowRef = useRef()
	return (
		<StyledMenu open={open}>
			<ul className="flex flex-col">
				{links.map((link, i) => (
					<li
						key={i}
						className="capitalize font-semibold text-lg cursor-pointer opacity-75 hover:opacity-100  px-8 py-2 hover:text-white hover:bg-red-500 transition-all duration-200"
						onClick={handleShowProducts}
					>
						<div className="flex items-center justify-between">
							<span className="py-2 block">{link.name}</span>
							{i === 0 && (
								<div
									ref={arrowRef}
									className="transform transition-transform duration-200"
								>
									<AiFillCaretDown />
								</div>
							)}
						</div>
						{/* {i === 0 &&
						showProducts && (
							<ul className="ml-4 pt-2 pb-4 flex flex-col gap-y-4 text-base capitalize">
								{link.links.map((link, i) => <li key={i}>{link}</li>)}
							</ul>
						)} */}
						{i === 0 && (
							<CSSTransition unmountOnExit in={showProducts} timeout={200} classNames="my-node">
								<ul className="ml-4 pt-2 pb-4 flex flex-col gap-y-4 text-base capitalize">
									{link.links.map((link, i) => <li key={i} className="hover:underline">{link}</li>)}
								</ul>
							</CSSTransition>
						)}
					</li>
				))}
			</ul>
		</StyledMenu>
	)
}
export default Menu
