import styled from 'styled-components'
const StyledCOVID = styled.ul`
    li {
        &:not(:last-child)::after {
            content: '|';
            padding-left: 1rem;

        }
    }
`
const COVID = () => {
    const items = ['COVID-19 SHIPPING ADVISARY', 'Free Shipping on Orders $75+', '$5 off 6 Bottles']
return (
<StyledCOVID className="bg-red-500 py-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-semibold text-white px-4">
    {items.map((item, i) => (
        <li key={i} className={i !== 1 && 'underline'}>{item}</li>
    ))}
</StyledCOVID>
)
}
export default COVID