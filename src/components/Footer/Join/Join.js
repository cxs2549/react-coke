import styled from 'styled-components'
const StyledJoin = styled.div`
input {
    min-height: 36px;
}
`
const Join = () => {
	return (
		<StyledJoin className="flex flex-col items-center justify-center py-8 px-8">
			<h4 className="font-semibold mb-1 text-xl">SIGN UP TO HEAR FROM US</h4>
			<p className="text-sm text-center max-w-sm">
				We'll send you emails on the latest happenings, promotions, and more.
			</p>
			<div className="py-6 w-full">
				<div className="flex flex-col w-full">
					<span className="text-xs mb-1">Email Address*</span>
					<input type="text" className="w-full  rounded px-4 text-gray-800" />
				</div>
				<div className="flex flex-col w-full mt-4">
					<span className="text-xs mb-1">Date of Birth*</span>
					<input type="date" className="w-full  rounded text-gray-800 px-4"  />
				</div>
                <div className="flex  gap-4 mt-4">
                    <input type="checkbox" name="" id="" />
                    <span className="text-xs">I agree to The Coca-Cola® Company's Terms of Use and Privacy Policy*</span>
                </div>
                <h5 className="text-xs pt-5 leading-4">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </h5>
                <button className="uppercase font-semibold border py-3 rounded-full w-full mt-8">Join the list</button>
			</div>
		</StyledJoin>
	)
}
export default Join
