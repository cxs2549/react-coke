import styled from 'styled-components'
import Join from './Join/Join'
import Links from './Links/Links'
import SignUp from './SignUp/SignUp'
import logo from '../../assets/logo_white.png'
import { RiFacebookLine, RiInstagramLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri'

const StyledFooter = styled.footer`
	background-color: rgb(30, 30, 30);
	svg {
		font-size: 1.5rem;
		cursor: pointer;
		transition: color 400ms;
		&:hover {
			color: red;
		}
	}
`
const Footer = () => {
	return (
		<StyledFooter className=" text-white">
			<div className="max-w-7xl mx-auto">
				<SignUp />
				<div className="lg:flex items-center lg:py-8 md:border-b border-gray-500">
                    <Join />
                    <Links />
                </div>
				<div className="px-8 pb-8">
					<div className="py-8 flex gap-4 items-center justify-center">
						<div>
							<RiFacebookLine />
							<RiInstagramLine />
						</div>
						<img src={logo} className="w-40" alt="" />
						<div>
							<RiTwitterLine />
							<RiYoutubeLine />
						</div>
					</div>
					<p className="text-xs text-center">
						Copyright &copy; 2021 CxS Development for The Coca-Cola Company. <br className="md:hidden" /> All rights
						reserved.
					</p>
				</div>
			</div>
		</StyledFooter>
	)
}
export default Footer
