import styled from 'styled-components'
import heroMobile from '../../../assets/hero/mobile-hero.png'
import hero from '../../../assets/hero/hero.png'
const StyledHero = styled.div`
	width: 100%;
	/* @media (min-width: 1280px) {
		max-height: calc(90vh - 160px);
	} */
	button {
		top: 23%;
		@media (min-width: 768px) {
			top: 25%;
		}
		@media (min-width: 1280px) {
			top: 28%;
			font-size: 180%;
		}
	}
`
const Hero = () => {
	return (
		<StyledHero className="relative">
			<img src={heroMobile} alt="" className="md:hidden" />
			<img src={hero} alt="" className="hidden md:block" />
			<button className="absolute left-1/2 top-32  transform -translate-x-1/2 uppercase text-red-500 bg-white px-16 md:px-20 whitespace-nowrap py-3 xl:py-4 rounded-full font-extrabold text-lg shadow-xl hover:bg-black transition-colors duration-300">
				try it first
			</button>
		</StyledHero>
	)
}
export default Hero
