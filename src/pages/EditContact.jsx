import { useEffect, useRef, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'

const EditContact = () => {
	const [contacts, setContacts] = useLocalStorage([], 'contacts')
	const [complete, setComplete] = useState(false)
	const redirect = useNavigate()
	const location = useLocation()
	const { id, firstName, lastName, email, phone, company, job } = location.state

	const firstNameEdit = useRef(null)
	const lastNameEdit = useRef(null)
	const emailEdit = useRef(null)
	const phoneEdit = useRef(null)
	const companyEdit = useRef(null)
	const jobEdit = useRef(null)

	const saveEdit = currentContact => {
		const otherContacts = contacts.filter(item => item.id !== currentContact.id)
		setContacts([currentContact, ...otherContacts])
		setComplete(true)
	}

	const handleSave = e => {
		e.preventDefault()
		const data = {
			id: id,
			firstName: firstNameEdit.current.value,
			lastName: lastNameEdit.current.value,
			email: emailEdit.current.value,
			phone: phoneEdit.current.value,
			company: companyEdit.current.value,
			job: jobEdit.current.value
		}

		saveEdit(data)
	}

	useEffect(() => {
		complete ? redirect('/#') : null
	}, [complete])

	return (
		<form className="w-[262px] flex flex-col items-center mx-auto py-[1rem]">
			<div className="flex flex-col">
				<input
					defaultValue={firstName}
					ref={firstNameEdit}
					type="text"
					placeholder="First name"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">required</span>
			</div>
			<div className="flex flex-col">
				<input
					defaultValue={lastName}
					ref={lastNameEdit}
					type="text"
					placeholder="Last name"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">required</span>
			</div>
			<div className="flex flex-col">
				<input
					defaultValue={email}
					ref={emailEdit}
					type="email"
					placeholder="Email"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">Example: mail@mail.com (required)</span>
			</div>
			<div className="flex flex-col">
				<input
					defaultValue={phone}
					ref={phoneEdit}
					type="tel"
					placeholder="Phone"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content focus:border-purple-500"
				/>
				<span className="text-[12px]">digits only required</span>
			</div>
			<div className="flex flex-col">
				<input
					defaultValue={company}
					ref={companyEdit}
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
					defaultValue={job}
					ref={jobEdit}
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
					onClick={handleSave}
				>
					Save
				</button>
			</div>
		</form>
	)
}
export default EditContact
