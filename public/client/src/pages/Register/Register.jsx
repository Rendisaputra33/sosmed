import React from 'react'
import TextInput from '../../components/Inputs/TextInput'
import ElevationButton from '../../components/Buttons/ElevationButton'
import * as userActions from '../../store/actions/userAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spiner from '../../components/Loaders/Spiner'

//
export default function Register(props) {
	//
	const [form, setForm] = React.useState({ username: '', password: '', email: '' })
	const [loading, setLoading] = React.useState(false)

	const dispatch = useDispatch()
	const navigation = useNavigate()

	const handleChange = event => {
		if (event.target.name === 'username') {
			return setForm(prev => ({
				username: event.target.value,
				password: prev.password,
				email: prev.email,
			}))
		} else if (event.target.name === 'email') {
			return setForm(prev => ({
				username: prev.username,
				password: prev.password,
				email: prev.email,
			}))
		}
		return setForm(prev => ({
			username: prev.username,
			password: event.target.value,
			email: prev.email,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
		dispatch(userActions.postLogin(form)).then(res => {
			setLoading(false)
			navigation('/login', { replace: true })
		})
	}

	return (
		<form method="post" onSubmit={handleSubmit}>
			<Spiner loading={loading} />
			<div className="box-wraper-login">
				<div className="login-box">
					<h1>Sign In</h1>
					<div className="grid-container grid-row-1">
						<TextInput
							hint="Username"
							name="username"
							value={form.username}
							changeValue={handleChange}
						/>
					</div>
					<ElevationButton color="rgb(250, 220, 89)" width="100%" height="42px" type="submit">
						<span style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Login</span>
					</ElevationButton>
				</div>
			</div>
		</form>
	)
}
