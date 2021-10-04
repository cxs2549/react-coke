import styled from 'styled-components'
const StyledLinks = styled.ul``
const Links = ({links}) => {
return (
<StyledLinks className="hidden lg:flex ml-20 gap-8 xl:ml-24 xl:text-lg">
    {links.map((link, i) => (
        <li key={i} className="capitalize font-medium opacity-75 cursor-pointer hover:opacity-100 transition-opacity duration-200">{link.name}</li>
    ))}
</StyledLinks>
)
}
export default Links