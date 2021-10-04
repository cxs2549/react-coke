import styled from 'styled-components'
const StyledSignUp = styled.div``
const SignUp = () => {
	return (
		<StyledSignUp className="flex flex-col items-center justify-center py-6 gap-y-6 border-b border-gray-800">
			<h2 className="text-2xl font-medium text-center">Sign up for 15% off your next <br className="md:hidden" /> Coca-Cola Store order.</h2>
            <button className="text-xl font-bold text-white bg-red-500 px-8 py-3 rounded-full">Sign Up</button>
		</StyledSignUp>
	)
}
export default SignUp
