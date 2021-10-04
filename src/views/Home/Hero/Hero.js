import styled from 'styled-components'
import heroMobile from '../../../assets/hero/mobile-hero.png'
import hero from '../../../assets/hero/hero.png'
const StyledHero = styled.div`
    height: 75vh;
    width: 100%;
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