import { Outlet } from 'react-router-dom'

const Public = () => {
    return (
        <section>
            <p>This should be visible to anyone</p>
            <Outlet />
        </section>
    )
}

export default Public
export { Public }