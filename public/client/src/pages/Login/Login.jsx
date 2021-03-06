import React from 'react'
import TextInput from '../../components/Inputs/TextInput'
import ElevationButton from '../../components/Buttons/ElevationButton'
import * as userActions from '../../store/actions/userAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spiner from '../../components/Loaders/Spiner'

//
export default function Login(props) {
	//
	const [form, setForm] = React.useState({ username: '', password: '' })
	const [loading, setLoading] = React.useState(false)

	const dispatch = useDispatch()
	const navigation = useNavigate()

	const handleChange = event => {
		if (event.target.name === 'username') {
			return setForm(prev => ({ username: event.target.value, password: prev.password }))
		}
		return setForm(prev => ({ username: prev.username, password: event.target.value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
		dispatch(userActions.postLogin(form)).then(res => {
			setLoading(false)
			navigation('/', { replace: true })
		})
	}

	return (
		<form method="post" onSubmit={handleSubmit}>
			<Spiner loading={loading} />
			<div className="box-wraper-login">
				<div className="login-box">
					<h1>Sign In</h1>
					<div className="input-wraper" style={{ marginTop: 50 }}>
						<TextInput
							value={form.username}
							name="username"
							type="text"
							hint="Username"
							changeValue={handleChange}
						/>
					</div>
					<div className="input-wraper" style={{ marginTop: 50, marginBottom: 70 }}>
						<TextInput
							value={form.password}
							name="password"
							type="password"
							hint="Password"
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
