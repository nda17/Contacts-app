import { useNavigate } from 'react-router-dom'

const ButtonGoBack = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	return (
		<button
			className="w-[45%] h-[2.4rem] rounded-[0.8rem] bg-tomato py-[0.2rem] px-[0.5rem] text-[#ffffff] drop-shadow-sm hover:bg-red-700 hover:opacity-100 transition-all duration-[0.4s] active:scale-[0.97] flex items-center justify-center"
			onClick={goBack}
		>
			Back
		</button>
	)
}

export default ButtonGoBack
