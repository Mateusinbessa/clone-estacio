import Doc from 'src/assets/doc.png'
import Download from 'src/assets/download.png'

const PlansList = ({ plan, className }) => {
    return (
        <div className={`flex justify-between items-center cursor-pointer ${className}`}>
            <div className='flex items-center gap-2'>
                <img className='h-6' src={Doc} alt="" />
                <p className='text-slate-700'>{plan}</p>
            </div>
            <div className='flex items-center gap-2'>
                <img className='h-4' src={Download} alt="" />
                <p className='text-slate-700'>Baixar</p>
            </div>
        </div>
    )
}

export default PlansList
export { PlansList }