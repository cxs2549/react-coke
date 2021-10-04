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
		<StyledHero>
			<img src={heroMobile} alt="" className="md:hidden" />
			<img src={hero} alt="" className="hidden md:block" />
		</StyledHero>
	)
}
export default Hero
