import { File, ArrowDownToLine } from 'lucide-react'

const PlansList = ({ plan, className }) => {
    return (
        <>
            <div className={`flex justify-between items-center cursor-pointer ${className}`}>
                <div className='flex items-center gap-2'>
                    <File />
                    <p className='text-slate-700'>{plan}</p>
                </div>
                <div className='flex items-center gap-2 px-2'>
                    <ArrowDownToLine />
                    <p className='text-slate-700'>Baixar</p>
                </div>
            </div>
        </>
    )
}

export default PlansList
export { PlansList }