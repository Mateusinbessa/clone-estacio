import Arrow from 'src/assets/arrow.png'

const ThemesList = ({ tema, title }) => {
    return (
        <>
            <div className='w-full flex flex-col cursor-pointer hover:bg-slate-50'>
                <p>{tema}</p>
                <div className='flex justify-between'>
                    <p>{title}</p>
                    <img className='h-5' src={Arrow} alt="" />
                </div>
            </div>
            <hr className='border-gray-300 mt-3 mb-3' />
        </>
    )
}

export default ThemesList
export { ThemesList }