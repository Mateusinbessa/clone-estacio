import { ArrowRight, Calendar, DoorOpen, MapPin, User } from 'lucide-react'

const CardDisciplina = ({ disciplina, horario, polo, sala, professor, codTurma, cod }) => {
    return (
        <div className="xl:max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden mt-2">
            <div className="px-7 py-7 flex flex-col gap-5">
                <div className='flex justify-between items-center gap-2'>
                    <h2 className="text-gray-800 text-3xl max-lg:text-xl font-semibold sm:max-w-sm">{disciplina}</h2>
                    <div className='w-10 h-10 max-lg:w-6 max-lg:h-6 cursor-pointer'>
                        <a href="/auth/details">
                            <ArrowRight />
                        </a>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <Calendar />
                    <p className='text-slate-700'>{horario}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2 justify-center items-center'>
                        <MapPin />
                        <p className='text-slate-700'>{polo}</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <DoorOpen />
                        <p className='text-slate-700'>Sala {sala}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <User />
                    <p className='text-slate-700'>Professor(a) {professor}</p>
                </div>
                <div className='flex gap-2'>
                    <div className='bg-gray-300 rounded-full px-3 py-1'>
                        <p className='text-sm'>{codTurma}</p>
                    </div>
                    <div className='bg-gray-300 rounded-full px-3 py-1'>
                        <p className='text-sm'>{cod}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDisciplina
export { CardDisciplina }