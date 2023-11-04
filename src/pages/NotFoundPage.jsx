import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<>
			<p className="absolute inset-x-0 inset-y-0 text-[#da1111] flex flex-col justify-center mb-[2.8125rem] pt-[2.5rem] pb-0 px-[0.7rem] text-center text-[1rem] font-[700]">
				ERROR: 404 - NOT FOUND!
				<br />
				Страница не существует.
				<br />
				Перейти на <Link to="/">ГЛАВНУЮ СТРАНЦУ</Link>
			</p>
		</>
	)
}

export default NotFoundPage
