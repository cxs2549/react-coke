import styled from 'styled-components'
import coke from '../../../../assets/nav/nav-coca-cola.png'
import cokeEnergy from '../../../../assets/nav/nav-coke-energy.png'
import cokeZero from '../../../../assets/nav/nav-zero-sugar.png'
import cokeCoffee from '../../../../assets/nav/nav-coke-with-coffee.jpeg'
import cokeFlavors from '../../../../assets/nav/nav-coca-cola-flavors.png'
import cokeLocal from '../../../../assets/nav/nav-local-tastes.png'
import allCokes from '../../../../assets/nav/nav-all-products.png'

const StyledDropdown = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    width: 600px;
    overflow: hidden;
    overflow-x: scroll;
    pointer-events: ${props => (props.open ? '' : 'none')};
    opacity: ${props => (props.open ? 1 : 0)};
    transition: opacity 200ms;
    img {
        object-fit: cover;
        width: 310px;
        height: 70px;
        object-position: center center;
    }
`
const Dropdown = ({open}) => {
    const images = [coke, cokeEnergy, cokeZero, cokeCoffee, cokeFlavors, cokeLocal, allCokes]
return (
<StyledDropdown className="rounded-lg shadow bg-white p-4 grid grid-cols-2 justify-center items-center gap-4 flex-wrap" open={open}>
    {images.map((img, i) =>(
        <img src={img} alt="" className="rounded cursor-pointer" />
    ))}
</StyledDropdown>
)
}
export default Dropdown