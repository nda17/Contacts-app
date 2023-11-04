import { RotatingLines } from 'react-loader-spinner'

const Preloader = () => {
	return (
		<div className="w-[1.8rem] h-[1.8rem] absolute top-0 bottom-0 left-0 right-0 m-auto">
			<RotatingLines
				strokeColor="#000000"
				strokeWidth="5"
				animationDuration="0.75"
				width="50"
				visible={true}
			/>
		</div>
	)
}

export default Preloader
