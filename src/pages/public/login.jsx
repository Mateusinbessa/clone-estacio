import { useAuth, useUtil } from "src/hooks"
import { Navigate } from 'react-router-dom'
import { useUser } from 'src/hooks'
import { useState } from "react"

const Login = () => {
    const [user, setUser] = useState({ name: '', role: '', pwd: '' })
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
        <form>
            <label>
                Name:
                <input
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Role:
                <input
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    name="pwd"
                    value={user.pwd}
                    onChange={handleChange}
                />
            </label>
            <button type="submit" onClick={handleSubmit}>Logar</button>
        </form>
    )
}

export default Login
export { Login }