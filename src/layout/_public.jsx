import { Outlet } from 'react-router-dom'
import Navbar from 'src/components/navbar'

const Public = () => {
    return (
        <section>
            <Navbar />
            <Outlet />
        </section>
    )
}

export default Public
export { Public }