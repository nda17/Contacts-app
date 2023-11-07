import { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link } from 'react-router-dom'

const Contacts = () => {
	const [informer, setInformer] = useState('')
	const [renderedContacts, setRenderedContacts] = useState([])
	const [savedContacts, setSavedContacts] = useLocalStorage([], 'contacts')
	const [searchContact, setSearchContact] = useState([])
	const [value, setValue] = useState('')

	const searchContacts = value => {
		setSearchContact(
			savedContacts.filter(item => {
				return (
					item.firstName.toLowerCase().includes(value.toLowerCase()) ||
					item.lastName.toLowerCase().includes(value.toLowerCase()) ||
					item.email.toLowerCase().includes(value.toLowerCase()) ||
					item.phone.toLowerCase().includes(value.toLowerCase())
				)
			})
		)
	}

	const onChangeSearch = event => {
		const value = event.target.value
		setValue(value)
		searchContacts(value)
	}

	const handleKeySearch = event => {
		if (event.key === 'Enter') {
			event.preventDefault()
			setValue(value)
			searchContacts(value)
		}
	}

	const removeContact = contact => {
		setSavedContacts(savedContacts.filter(item => item.id !== contact.id))
	}

	useEffect(() => {
		!renderedContacts.length
			? setInformer('No saved contacts.')
			: setInformer(`${renderedContacts.length} contact found :`)
	}, [renderedContacts])

	useEffect(() => {
		!searchContact.length
			? setRenderedContacts(savedContacts)
			: setRenderedContacts(searchContact)
	}, [searchContact, savedContacts])

	return (
		<div>
			<form className="pt-[2rem] w-[100%] md:w-[90%] xl:w-[70%] flex flex-col md:flex-row justify-between items-center px-[0.7rem] mx-auto mb-[2rem]">
				<input
					className="w-[100%] md:w-[72%] lg:w-[79%] xl:w-[77%] xxl:w-[80.5%] h-[3rem] p-[10px] bg-[#e8eced] shadow-[0px_5px_10px_2px_rgba(34,60,80,0.2)] border-[2px] border-solid border-[#ffd700] outline-none focus:border-[#39c832] transition-all duration-[0.3s] placeholder:opacity-100 placeholder:text-black rounded-[0.8rem]  mb-[1.3rem] md:mb-0"
					type="search"
					placeholder="Name, email, or phone number..."
					color="red"
					value={value}
					onChange={onChangeSearch}
					onKeyDown={handleKeySearch}
				/>
				<Link
					to={'/add-contacts'}
					className="w-[10rem] h-[3rem] rounded-[0.8rem] bg-purple-800 py-[0.2rem] px-[0.5rem] text-[#ffffff] drop-shadow-sm hover:bg-purple-600 hover:opacity-100 transition-all duration-[0.4s] active:scale-[0.97] flex items-center justify-center"
				>
					+ Add contact
				</Link>
			</form>
			<p className="text-center font-black mb-[0.5rem]">{informer}</p>
			<div className="w-full md:w-[90%] xl:w-[70%] flex flex-col  px-[0.7rem] mx-auto mb-[3rem]">
				{renderedContacts.map(item => (
					<details
						key={item.id}
						className="py-[2rem] mb-[0.8rem] bg-[lightgrey] rounded-[0.8rem]"
					>
						<summary className="relative">
							<p className="w-[65%] sm:w-[75%] md:w-[80%]">{`${item.firstName} ${item.lastName}`}</p>
							<div className="flex flex-col">
								<Link
									to={'/edit-contact'}
									state={{
										id: item.id,
										firstName: item.firstName,
										lastName: item.lastName,
										email: item.email,
										phone: item.phone,
										company: item.company,
										job: item.job
									}}
									className="absolute right-[0.5rem] top-[-1.4rem] m-auto w-[6rem] h-[2.5rem]  rounded-[0.8rem] bg-purple-800 py-[0.2rem] text-[#ffffff] drop-shadow-sm hover:bg-purple-600 hover:opacity-100 transition-all duration-[0.4s] active:scale-[0.97] flex items-center justify-center"
								>
									Edit
								</Link>
								<button
									onClick={() => removeContact(item)}
									className="absolute right-[0.5rem] bottom-[-1.4rem] m-auto w-[6rem] h-[2.5rem]  rounded-[0.8rem] bg-purple-800 py-[0.2rem] text-[#ffffff] drop-shadow-sm hover:bg-purple-600 hover:opacity-100 transition-all duration-[0.4s] active:scale-[0.97] flex items-center justify-center"
								>
									Remove
								</button>
							</div>
						</summary>
						<div className="content p-[0.7rem]">
							<ul>
								<li className="w-[62%]">Email: {item.email}</li>
								<li>Phone number: {item.phone}</li>
								<li>Company: {item.company}</li>
								<li>Job: {item.job}</li>
							</ul>
						</div>
					</details>
				))}
			</div>
		</div>
	)
}

export default Contacts
