import styled from 'styled-components'
import Flavors from './Flavors/Flavors'
import Hero from './Hero/Hero'
const StyledHome = styled.div``
const Home = () => {
return (
<StyledHome>
    <Hero />
    <Flavors />
</StyledHome>
)
}
export default Home