import styled from 'styled-components'
import bubbles from '../../assets/account/bubbles.png'
const StyledAccount = styled.div`
	h1 {
		text-transform: capitalize;
		font-size: 200%;
		font-weight: bold;
	}
	input {
		height: 46px;
	}
`
const Account = () => {
	return (
		<StyledAccount>
			<div className="px-5 py-8 md:grid md:grid-cols-2">
				<div>
					<div className="flex flex-col gap-y-2 ">
						<h1 className="md:hidden">refreshments start here</h1>
						<p className="md:hidden">Get updates on new experiences, products and more.</p>
						<h1>sign in</h1>
					</div>
					<div className="py-6 w-full">
						<div className="flex flex-col w-full">
							<span className="text-xs mb-1">Email Address*</span>
							<input type="text" className="w-full  rounded border" />
						</div>
						<div className="flex flex-col w-full mt-4">
							<span className="text-xs mb-1">Password*</span>
							<input
								type="password"
								className="w-full  rounded border text-gray-800"
							/>
						</div>
						<div className="underline font-semibold capitalize mt-4 text-sm">
							forgot password
						</div>

						<button className=" text-red-500 shadow font-bold border py-3 rounded-full w-full mt-8">
							Sign in with Email
						</button>
						<button className=" bg-gray-200 shadow font-bold border py-3 rounded-full w-full mt-8">
							Continue as Guest
						</button>
					</div>
				</div>
				<div className="hidden md:flex flex-col gap-y-4 items-center justify-center">
					<div className="flex flex-col items-center justify-center">
						<h1>refreshments start here</h1>
						<p>Get updates on new experiences, products and more.</p>
					</div>
					<img src={bubbles} className="w-40 md:w-32" alt="" />
				</div>
			</div>
		</StyledAccount>
	)
}
export default Account
