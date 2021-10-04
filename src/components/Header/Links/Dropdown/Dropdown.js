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
    width: 400px;
    overflow: hidden;
    pointer-events: ${props => (props.open ? '' : 'none')};
    opacity: ${props => (props.open ? 1 : 0)};
    transition: opacity 200ms;
`
const Dropdown = ({open}) => {
    const images = [coke, cokeEnergy, cokeZero, cokeCoffee, cokeFlavors, cokeLocal, allCokes]
return (
<StyledDropdown className="rounded-lg shadow bg-white p-4 flex flex-col gap-y-4" open={open}>
    {images.map((img, i) =>(
        <img src={img} alt="" className="rounded cursor-pointer" />
    ))}
</StyledDropdown>
)
}
export default Dropdown