import { ArrowRight } from "lucide-react"

const CardTema = ({ title }) => {
    return (
        <div className=" bg-white shadow-lg rounded-lg flex flex-col p-5">
            <div className="flex ml-1 gap-4 items-center">
                <div className='w-16 h-16 bg-blue-500'></div>
                <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
            </div>
            <small className="bg-green-200 w-28 h-6 mt-5 rounded-md flex justify-center items-center">Visualizado</small>
            <hr className='border-gray-300 mt-4' />
            <div className="flex justify-end items-center mt-4">
                <a href="/auth/content">
                    <ArrowRight />
                </a>
            </div>
        </div>
    )
}

export default CardTema
export { CardTema }