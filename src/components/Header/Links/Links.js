import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillCaretDown } from 'react-icons/ai'
import Dropdown from './Dropdown/Dropdown'
import useOnClickOutside from 'use-onclickoutside'

const StyledLinks = styled.div`
	a {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: -1.65rem;
			left: 0;
			width: 10%;
			height: 4px;
			opacity: 0;
			background-color: red;
			transition: all 400ms;
		}
		&.active::after {
			opacity: 1;
			width: 100%;
		}
		&:active::after {
			opacity: 1;

		}
	}

	svg {
		font-size: .95rem;
	}
`
const Links = ({ links }) => {
    const [isProductsOpen, setIsProductsOpen] = useState(false)
	const arrowRef = useRef()
    const productsRef = useRef()
    useOnClickOutside(productsRef, () => setIsProductsOpen(false))
	return (
		<StyledLinks className="hidden lg:flex ml-20 gap-8 xl:ml-24 xl:text-lg">
			{links.map((link, i) => (
				<div>
					{i !== 1 ? (
						<NavLink
							to={link.to || link.name}
							key={i}
							end
							className="capitalize flex items-center gap-2 font-medium opacity-90 cursor-pointer hover:opacity-100 transition-opacity duration-200"
						>
							{link.name}
						</NavLink>
					) : (
						<div className="relative" ref={productsRef}>
							<div className="capitalize flex items-center gap-2 font-medium opacity-90 cursor-pointer hover:opacity-100 transition-opacity duration-200" onClick={() => setIsProductsOpen(!isProductsOpen)}>
								{link.name}
								<div
									ref={arrowRef}
									className="transform transition-transform duration-200"
								>
									<AiFillCaretDown />
								</div>
							</div>
							<Dropdown open={isProductsOpen} />
						</div>
					)}
				</div>
			))}
		</StyledLinks>
	)
}
export default Links
