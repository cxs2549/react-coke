import Hamburger from 'hamburger-react'
import Menu from './Menu/Menu'
import styled from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'
import {useRef} from 'react'

const StyledBurger = styled.div`
	
`


const Burger = ({open, close, click, links}) => {
	const menuRef = useRef()
	useOnClickOutside(menuRef, close)
	return (
		<StyledBurger className="transform -translate-x-4 lg:hidden" open={open} ref={menuRef}>
			<Hamburger size={22} rounded toggled={open} toggle={click} />
			<Menu open={open} close={close} links={links} />
		</StyledBurger>
	)
}
export default Burger
