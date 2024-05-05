import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import logo from 'src/assets/logo-h.png'
import { useAuth, useUtil } from 'src/hooks'

const Navbar = React.memo(() => {
	const { signout } = useAuth()

	return (
		<header className="padding-x py-4 bg-[#02403d] mb-2">
			<nav className="flex justify-between items-center max-container">
				<Link to="/">
					<img src={logo} className='h-20' alt="" />
				</Link>
				<div className="flex flex-col max-lg:hidden">
					<small className="text-yellow-50">Você está logado como:</small>
					<p className="text-2xl font-semibold text-yellow-50">Aluno de Exemplo</p>
				</div>
				<div className="flex gap-3">
					<div className="w-12 h-12 bg-pink-500 rounded-full flex font-bold justify-center items-center">HM</div>
				</div>
			</nav>
		</header>
	)
})

const Auth = React.memo(() => {
	const { getUser } = useUtil()
	if (!getUser()) return <Navigate to='/login' replace />
	return (
		<section>
			<Navbar />
			<Outlet />
		</section>
	)
})

export default Auth
export { Auth }
