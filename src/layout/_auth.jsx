import { Outlet, Navigate } from 'react-router-dom'
import { Navbar } from 'src/components/_navbar'
import { useUtil } from "src/hooks"
import { useAuth } from 'src/hooks'

const Auth = () => {

    const { getUser } = useUtil()
    const { signout } = useAuth()
    if (!getUser()) return <Navigate to='/login' replace />
    return (
        <section>
            <Navbar />
            <Outlet />
        </section>
    )
}

export default Auth
export { Auth }