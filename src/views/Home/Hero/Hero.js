import styled from 'styled-components'
import heroMobile from '../../../assets/hero/mobile-hero.png'
import hero from '../../../assets/hero/hero.png'
const StyledHero = styled.div`
	width: 100%;
	@media (min-width: 1280px) {
		max-height: calc(100vh - 160px);
	}
`
const Hero = () => {
	return (
		<StyledHero className="relative">
			<img src={heroMobile} alt="" className="md:hidden" />
			<img src={hero} alt="" className="hidden md:block" />
			<button className="absolute left-1/2 bottom-6 transform -translate-x-1/2 uppercase text-red-500 bg-white px-20 whitespace-nowrap py-3 rounded-full font-bold text-lg shadow md:top-40 md:bottom-auto">
				try it first
			</button>
		</StyledHero>
	)
}
export default Hero
