import styled from 'styled-components'
const StyledLinks = styled.div``
const Links = () => {
	const links = [
		{
			title: 'shop & visit',
			links: [
				'coca-Cola store online',
				`coca-Cola int'l store online`,
				'coca-Coal store atlanta',
				'coca-Cola orlanda',
				'coca-Cola las vegas',
				'world of coca-Cola attraction'
			]
		},
		{ title: 'help', links: [ 'FAQs', 'contact us', 'order status', 'shipping', 'sitemap' ] },
		{
			title: 'explore',
			links: [
				'android app',
				'apple app',
				'coca-Cola give',
				'coca-Cola offers',
				'insiders club',
				'sip & scan',
				'vending'
			]
		},
		{
			title: 'legal',
			links: [
				'company',
				'careers',
				'privacy',
				'policy',
				'rules',
				'do not sell my personal information',
				'terms & conditions'
			]
		}
	]
	return (
		<StyledLinks className="px-8 text-xs grid grid-cols-2 xl:grid-cols-4 border-b md:border-b-0 md:gap-x-8 gap-y-12 border-gray-800 pb-8">
			{links.map((link, i) => (
				<ul key={i} className="flex flex-col gap-y-3">
					<h2 className="mb-3 uppercase font-bold
    text-sm">{link.title}</h2>
					{link.links.map((link, i) => <li key={i} className="capitalize">{link}</li>)}
				</ul>
			))}
		</StyledLinks>
	)
}
export default Links
