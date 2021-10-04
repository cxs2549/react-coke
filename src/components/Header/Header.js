import styled from 'styled-components'
import Burger from './Burger/Burger'
import logo from '../../assets/logo.png'
import Icons from './Icons/Icons'

const StyledHeader = styled.header``
const Header = () => {
	return (
		<StyledHeader className="h-20 border-b">
			<div className="max-w-5xl mx-auto px-4 flex items-center h-full justify-between relative">
                <Burger />
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img src={logo} className="w-16" alt="" />
                </div>
                <Icons />
            </div>
		</StyledHeader>
	)
}
export default Header
