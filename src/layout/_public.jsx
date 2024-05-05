import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from 'src/assets/logo-h.png'

const Public = React.memo(() => {
	return (
		<div className='h-full'>
			<header className='w-full p-4 bg-[#02403d]'>
				<nav className='container mx-auto'>
					<Link to='/'>
						<img src={logo} alt='logo' className='h-20' />
					</Link>
				</nav>
			</header>
			<Outlet />
		</div>
	)
})

export default Public
export { Public }
