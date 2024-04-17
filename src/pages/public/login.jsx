import { useAuth, useUtil } from "src/hooks"
import { Navigate } from 'react-router-dom'
import { useUser } from 'src/hooks'
import { useState } from "react"

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
        <main className="max-container bg-custom min-h-screen py-24 px-12 sm:px-24">
            <section className=" bg-white sm:w-[500px] w-[400px] p-10 rounded-md">
                <form className="flex flex-col">
                    <h1 className="text-3xl font-semibold">Acesse sua conta</h1>
                    <p className="mt-5 mb-5 text-slate-500">Novo cliente? Então registre-se aqui.</p>
                    <label>
                        <small className="font-semibold">Login *</small>
                        <input
                            className="rounded-md px-3 py-3 mt-1 w-full bg-slate-100 focus:border focus:outline-none focus:border-blue-500"
                            name="name"
                            value={user.name}
                            placeholder="Insira seu login ou email"
                            onChange={handleChange}
                            type="text"
                        />
                    </label>
                    <label className="mt-4">
                        <small className="font-semibold">Senha *</small>
                        <input
                            className="rounded-md px-3 py-3 mt-1 w-full bg-slate-100 focus:border focus:outline-none focus:border-blue-500"
                            name="pwd"
                            value={user.pwd}
                            placeholder="Insira sua senha"
                            onChange={handleChange}
                            type="password"
                        />
                    </label>
                    <p className="mt-4 text-slate-500">Esqueci minha senha</p>
                    <button className="w-full mt-5 bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 focus:outline-none focus:bg-pink-600" type="button" onClick={handleSubmit}>Logar</button>
                </form>
            </section>
        </main>
    )
}

export default Login
export { Login }