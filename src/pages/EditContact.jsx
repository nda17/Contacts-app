import { useRef, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'

const EditContact = () => {
	const [isValid, setIsValid] = useState('')
	const [informer, setInformer] = useState('Enter data:')
	const [contacts, setContacts] = useLocalStorage([], 'contacts')
	const [complete, setComplete] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	const { id, firstName, lastName, email, phone, company, job } = location.state

	const firstNameEdit = useRef(null)
	const lastNameEdit = useRef(null)
	const emailEdit = useRef(null)
	const phoneEdit = useRef(null)
	const companyEdit = useRef(null)
	const jobEdit = useRef(null)

	const validateFirstName = () => {
		const regex = new RegExp('^[a-zA-Z][a-zA-Z0-9-]+$')
		if (regex.test(firstNameEdit.current.value)) {
			setIsValid(true)
			firstNameEdit.current.style.borderColor = '#44c47c'
			return true
		} else {
			setIsValid(false)
			firstNameEdit.current.style.borderColor = '#eb4034'
			return false
		}
	}

	const validateLastName = () => {
		const regex = new RegExp('^[a-zA-Z][a-zA-Z0-9-]+$')
		if (regex.test(lastNameEdit.current.value)) {
			setIsValid(true)
			lastNameEdit.current.style.borderColor = '#44c47c'
			return true
		} else {
			setIsValid(false)
			lastNameEdit.current.style.borderColor = '#eb4034'
			return false
		}
	}

	const validateEmail = () => {
		const regex = new RegExp(
			/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i //eslint-disable-line
		)
		if (regex.test(emailEdit.current.value)) {
			setIsValid(true)
			emailEdit.current.style.borderColor = '#44c47c'
			return true
		} else {
			setIsValid(false)
			emailEdit.current.style.borderColor = '#eb4034'
			return false
		}
	}

	const validatePhone = () => {
		const regex = new RegExp(/^\+?[0-9()\- ]{10,20}$/)
		if (regex.test(phoneEdit.current.value)) {
			setIsValid(true)
			phoneEdit.current.style.borderColor = '#44c47c'
			return true
		} else {
			setIsValid(false)
			phoneEdit.current.style.borderColor = '#eb4034'
			return false
		}
	}

	const validateOptional = () => {
		company.current.value.length
			? (company.current.style.borderColor = '#44c47c')
			: (company.current.style.borderColor = 'grey')

		job.current.value.length
			? (job.current.style.borderColor = '#44c47c')
			: (job.current.style.borderColor = 'grey')
	}

	const saveEditContact = currentContact => {
		const otherContacts = contacts.filter(item => item.id !== currentContact.id)
		setContacts([currentContact, ...otherContacts])
	}

	const validate = () => {
		validateFirstName()
		validateLastName()
		validateEmail()
		validatePhone()
		if (
			validateFirstName() &&
			validateLastName() &&
			validateEmail() &&
			validatePhone()
		) {
			return true
		}
	}

	const resetForm = () => {
		setInformer('Enter data:')
	}

	const redirect = () => {
		setComplete(true)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (validate()) {
			// submit AJAX
			const data = {
				id: id,
				firstName: firstNameEdit.current.value,
				lastName: lastNameEdit.current.value,
				email: emailEdit.current.value,
				phone: phoneEdit.current.value,
				company: companyEdit.current.value,
				job: jobEdit.current.value
			}
			saveEditContact(data)
			resetForm()
			redirect()
		} else {
			setInformer('Correct mistakes!')
		}
	}

	useEffect(() => {
		validate()
	}, [])

	useEffect(() => {
		isValid ? setInformer('Enter data:') : setInformer('Correct mistakes!')
	}, [isValid])

	useEffect(() => {
		complete ? navigate('/#') : null
	}, [complete])

	return (
		<form className="w-[262px] flex flex-col items-center mx-auto py-[1rem]">
			<p className="pt-[1rem] font-bold mb-[1rem]">{informer}</p>
			<div className="flex flex-col">
				<input
					defaultValue={firstName}
					ref={firstNameEdit}
					onChange={validateFirstName}
					placeholder="First name"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
				/>
				<span className="text-[12px]">required</span>
			</div>
			<div className="flex flex-col">
				<input
					defaultValue={lastName}
					ref={lastNameEdit}
					onChange={validateLastName}
					placeholder="Last name"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
				/>
				<span className="text-[12px]">required</span>
			</div>
			<div className="flex flex-col">
				<input
					defaultValue={email}
					ref={emailEdit}
					onChange={validateEmail}
					placeholder="Email"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
				/>
				<span className="text-[12px]">Example: mail@mail.com (required)</span>
			</div>
			<div className="flex flex-col">
				<input
					defaultValue={phone}
					ref={phoneEdit}
					onChange={validatePhone}
					placeholder="Phone"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
				/>
				<span className="text-[12px]">digits only required</span>
			</div>
			<div className="flex flex-col">
				<input
					defaultValue={company}
					ref={companyEdit}
					onChange={validateOptional}
					placeholder="Company"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
				/>
				<span className="text-[12px]">
					Fill this field for company (not required)
				</span>
			</div>
			<div className="flex flex-col">
				<input
					defaultValue={job}
					ref={jobEdit}
					onChange={validateOptional}
					placeholder="Job title"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
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
					onClick={handleSubmit}
				>
					Save
				</button>
			</div>
		</form>
	)
}
export default EditContact
