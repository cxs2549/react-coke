import styled from 'styled-components'
import heroMobile from '../../../assets/store/mobile-hero.png'
import hero from '../../../assets/store/hero.png'
const StyledHero = styled.div`
	width: 100%;
	@media (min-width: 1280px) {
		max-height: calc(100vh - 160px);
	}
`
const Hero = () => {
	return (
		<StyledHero className="md:flex">
			<div className="relative">
				<img src={heroMobile} alt="" className="md:hidden object-cover w-full" />
				<img src={hero} alt="" className="hidden md:block" />
				<div className="absolute top-8 md:top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center md:items-start justify-center w-full px-5">
					<h2 className="font-semibold text-3xl uppercase mb-3">bottle sale</h2>
					<p className="text-center md:text-left">
						Get <span className="font-bold">$5 off 6 personalized bottles!</span> <br /> Shop
						new label designs perfect for <br /> gifts and occasions.{' '}
					</p>
					<button className="bg-red-500 text-white py-3 px-8 rounded-full shadow font-semibold mt-4 uppercase">Shop Now</button>
				</div>
			</div>
			<div className="flex flex-col md:grid md:grid-cols-2 uppercase font-semibold text-xl">
				<div className="flex md:flex-col items-center md:h-full justify-between md:justify-center md:gap-y-4 py-6 px-5 border-b-2 border-t-2 md:border-t-0 md:border-r-2 md:border-l-2 md:border-b-0 border-black">
					<h1 className="md:text-center">new melamine collection</h1>
					<div className="text-white bg-red-500 rounded-full flex items-center justify-center h-8 w-8">
						<i className="fa fa-plus" aria-hidden="true" />
					</div>
				</div>
				<div className="flex md:flex-col items-center justify-between md:justify-center md:gap-y-4 py-6 px-5 border-b-2 md:border-b-0 border-black">
					<h1 className="md:text-center">it's #hoodieseason</h1>
					<div className="text-white bg-red-500 rounded-full flex items-center justify-center h-8 w-8">
						<i className="fa fa-plus" aria-hidden="true" />
					</div>
				</div>
			</div>
		</StyledHero>
	)
}
export default Hero
