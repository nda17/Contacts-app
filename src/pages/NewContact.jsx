import { useRef, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link, useNavigate } from 'react-router-dom'

const NewContact = () => {
	const [contacts, setContacts] = useLocalStorage([], 'contacts')
	const [complete, setComplete] = useState(false)
	const redirect = useNavigate()
	const firstName = useRef(null)
	const lastName = useRef(null)
	const email = useRef(null)
	const phone = useRef(null)
	const company = useRef(null)
	const job = useRef(null)

	const saveContact = data => {
		setContacts([data, ...contacts])
		setComplete(true)
	}

	const handleAdd = () => {
		const data = {
			id: Math.random().toFixed(5).toString().split('.')[1],
			firstName: firstName.current.value,
			lastName: lastName.current.value,
			email: email.current.value,
			phone: phone.current.value,
			company: company.current.value,
			job: job.current.value
		}

		saveContact(data)
	}

	useEffect(() => {
		complete ? redirect('/#') : null
	}, [complete])

	return (
		<form className="w-[262px] flex flex-col items-center mx-auto py-[1rem]">
			<div className="flex flex-col">
				<input
					ref={firstName}
					type="text"
					placeholder="First name"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">required</span>
			</div>
			<div className="flex flex-col">
				<input
					ref={lastName}
					type="text"
					placeholder="Last name"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">required</span>
			</div>
			<div className="flex flex-col">
				<input
					ref={email}
					type="email"
					placeholder="Email"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">Example: mail@mail.com (required)</span>
			</div>
			<div className="flex flex-col">
				<input
					ref={phone}
					type="tel"
					placeholder="Phone"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">digits only required</span>
			</div>
			<div className="flex flex-col">
				<input
					ref={company}
					type="text"
					placeholder="Company"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">
					Fill this field for company (not required)
				</span>
			</div>
			<div className="flex flex-col">
				<input
					ref={job}
					type="text"
					placeholder="Job title"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">
					Fill this field for job title (not required)
				</span>
			</div>
			<div className="flex justify-between w-full pt-[1rem]">
				<Link
					to={'/#'}
					className="w-[45%] h-[2.4rem] rounded-[0.8rem] bg-tomato py-[0.2rem] px-[0.5rem] text-[#ffffff] drop-shadow-sm hover:bg-red-700 hover:opacity-100 transition-all duration-[0.4s] active:scale-[0.97] flex items-center justify-center"
				>
					Back
				</Link>
				<button
					className="w-[45%] h-[2.4rem] rounded-[0.8rem] bg-purple-800 py-[0.2rem] px-[0.5rem] text-[#ffffff] drop-shadow-sm hover:bg-purple-600 hover:opacity-100 transition-all duration-[0.4s] active:scale-[0.97] flex items-center justify-center"
					onClick={handleAdd}
				>
					Add
				</button>
			</div>
		</form>
	)
}
export default NewContact
