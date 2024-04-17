import Arrow from 'src/assets/arrow.png'

const ThemesList = ({ tema, title }) => {
    return (
        <div className='w-full flex flex-col cursor-pointer hover:bg-slate-100'>
            <p>{tema}</p>
            <div className='flex justify-between'>
                <p>{title}</p>
                <img className='h-5' src={Arrow} alt="" />
            </div>
        </div>
    )
}

export default ThemesList
export { ThemesList }