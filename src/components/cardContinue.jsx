const CardContinue = ({ disciplina }) => {
    return (
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-14 flex gap-4 items-center">
                <div className='w-16 h-16 bg-blue-500 rounded-full'></div>
                <h2 className="text-gray-800 text-3xl font-semibold">{disciplina}</h2>
            </div>
        </div>
    )
}

export default CardContinue
export { CardContinue }