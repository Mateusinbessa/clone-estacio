import { APP_KEY } from "src/config"

const useUtil = () => {

    const getUser = () => {
        const user = JSON.parse(localStorage.getItem(APP_KEY))
        if (!user) return null
        else return user
    }

    return {
        getUser
    }
}

export default useUtil
export { useUtil }