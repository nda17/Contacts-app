import { useRef, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link, useNavigate } from 'react-router-dom'

const NewContact = () => {
	const [isValid, setIsValid] = useState('')
	const [informer, setInformer] = useState('Enter data:')
	const [contacts, setContacts] = useLocalStorage([], 'contacts')
	const [complete, setComplete] = useState(false)
	const navigate = useNavigate()

	const firstName = useRef(null)
	const lastName = useRef(null)
	const email = useRef(null)
	const phone = useRef(null)
	const company = useRef(null)
	const job = useRef(null)

	const validateFirstName = () => {
		const regex = new RegExp('^[a-zA-Z][a-zA-Z0-9-]+$')
		if (regex.test(firstName.current.value)) {
			setIsValid(true)
			firstName.current.style.borderColor = '#44c47c'
			return true
		} else {
			setIsValid(false)
			firstName.current.style.borderColor = '#eb4034'
			return false
		}
	}

	const validateLastName = () => {
		const regex = new RegExp('^[a-zA-Z][a-zA-Z0-9-]+$')
		if (regex.test(lastName.current.value)) {
			setIsValid(true)
			lastName.current.style.borderColor = '#44c47c'
			return true
		} else {
			setIsValid(false)
			lastName.current.style.borderColor = '#eb4034'
			return false
		}
	}

	const validateEmail = () => {
		const regex = new RegExp(
			/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i //eslint-disable-line
		)
		if (regex.test(email.current.value)) {
			setIsValid(true)
			email.current.style.borderColor = '#44c47c'
			return true
		} else {
			setIsValid(false)
			email.current.style.borderColor = '#eb4034'
			return false
		}
	}

	const validatePhone = () => {
		const regex = new RegExp(/^\+?[0-9()\- ]{10,20}$/)
		if (regex.test(phone.current.value)) {
			setIsValid(true)
			phone.current.style.borderColor = '#44c47c'
			return true
		} else {
			setIsValid(false)
			phone.current.style.borderColor = '#eb4034'
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

	const saveContact = data => {
		setContacts([data, ...contacts])
	}

	const resetForm = () => {
		setInformer('Enter data:')
		firstName.current.value = ''
		firstName.current.style.borderColor = 'grey'
		lastName.current.value = ''
		lastName.current.style.borderColor = 'grey'
		email.current.value = ''
		email.current.style.borderColor = 'grey'
		phone.current.value = ''
		phone.current.style.borderColor = 'grey'
		company.current.value = ''
		company.current.style.borderColor = 'grey'
		job.current.value = ''
		job.current.style.borderColor = 'grey'
	}

	const redirect = () => {
		setComplete(true)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (validate()) {
			// submit AJAX
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
			resetForm()
			redirect()
		} else {
			setInformer('Correct mistakes!')
		}
	}

	useEffect(() => {
		validate()

		if (
			!firstName.current.value.length &&
			!lastName.current.value.length &&
			!email.current.value.length &&
			!phone.current.value.length &&
			!isValid
		) {
			setInformer('Enter data:')
		}

		if (
			firstName.current.value.length ||
			lastName.current.value.length ||
			email.current.value.length ||
			(phone.current.value.length && !isValid)
		) {
			setInformer('Correct mistakes!')
		}

		if (
			firstName.current.value.length &&
			lastName.current.value.length &&
			email.current.value.length &&
			phone.current.value.length &&
			isValid
		) {
			setInformer('All data is valid.')
		}
	}, [isValid])

	useEffect(() => {
		complete ? navigate('/#') : null
	}, [complete])

	return (
		<form className="w-[262px] flex flex-col items-center mx-auto py-[1rem]">
			<p className="pt-[1rem] font-bold mb-[1rem]">{informer}</p>
			<div className="flex flex-col">
				<input
					ref={firstName}
					onChange={validateFirstName}
					placeholder="First name"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
				/>
				<span className="text-[12px]">required</span>
			</div>
			<div className="flex flex-col">
				<input
					ref={lastName}
					onChange={validateLastName}
					placeholder="Last name"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
				/>
				<span className="text-[12px]">required</span>
			</div>
			<div className="flex flex-col">
				<input
					ref={email}
					onChange={validateEmail}
					placeholder="Email"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
				/>
				<span className="text-[12px]">Example: mail@mail.com (required)</span>
			</div>
			<div className="flex flex-col">
				<input
					ref={phone}
					onChange={validatePhone}
					placeholder="Phone"
					required="required"
					className="w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"
				/>
				<span className="text-[12px]">digits only (required)</span>
			</div>
			<div className="flex flex-col">
				<input
					ref={company}
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
					ref={job}
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
					Add
				</button>
			</div>
		</form>
	)
}

export default NewContact
