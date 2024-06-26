import { useState } from "react"
import { Navigate } from 'react-router-dom'
import { useAuth, useUser, useUtil } from "src/hooks"

const Login = () => {
	const [user, setUser] = useState({ name: '', pwd: '' })
	const { getUser } = useUtil()
	const { signin } = useAuth()
	const { save } = useUser()

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		save(user)
		signin(user)
	}

	if (getUser()) return <Navigate to='/auth' replace />
	return (
		<main className="h-full flex items-center max-sm:justify-center py-24 px-6 sm:px-12">
			<form className="flex flex-col">
				<h1 className="sm:text-3xl text-2xl font-semibold">Acesse sua conta</h1>
				<label>
					<small className="font-semibold">Login *</small>
					<input
						type="text"
						className="rounded-md px-3 py-3 mt-1 w-full bg-slate-100 focus:border focus:outline-none focus:border-blue-500"
						name="name"
						value={user.name}
						onChange={handleChange}
						placeholder="Insira seu login ou email"
					/>
				</label>
				<label className="mt-4">
					<small className="font-semibold">Senha *</small>
					<input
						type="password"
						className="rounded-md px-3 py-3 mt-1 w-full bg-slate-100 focus:border focus:outline-none focus:border-blue-500"
						name="pwd"
						value={user.pwd}
						placeholder="Insira sua senha"
						onChange={handleChange}
					/>
				</label>
				<p className="mt-4 text-slate-500">Esqueci minha senha</p>
				<button className="w-full mt-5 bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 focus:outline-none focus:bg-pink-600" type="button" onClick={handleSubmit}>Logar</button>
			</form>
		</main>
	)
}

export default Login
export { Login }
