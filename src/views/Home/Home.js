import styled from 'styled-components'
import Flavors from './Flavors/Flavors'
import Hero from './Hero/Hero'
const StyledHome = styled.div``
const Home = () => {
return (
<StyledHome>
    <Hero />
    <div className="max-w-7xl mx-auto">
        <Flavors />
    </div>
</StyledHome>
)
}
export default Home