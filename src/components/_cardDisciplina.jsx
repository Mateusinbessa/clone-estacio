import ArrowRight from 'src/assets/arrowright.png'
import Maps from 'src/assets/maps.png'
import Porta from 'src/assets/porta.png'
import Calendario from 'src/assets/calendario.png'
import Pessoa from 'src/assets/pessoa.png'

const CardDisciplina = ({ disciplina, horario, polo, sala, professor, codTurma, cod, certificadora }) => {
    return (
        <div className="xl:max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden mt-2">
            <div className="px-7 py-7 flex flex-col gap-5">
                <div className='flex justify-between items-center'>
                    <h2 className="text-gray-800 text-3xl font-semibold sm:max-w-sm">{disciplina}</h2>
                    <div className='w-10 h-10 cursor-pointer'>
                        <a href="/auth/details">
                            <img src={ArrowRight} />
                        </a>
                    </div>
                </div>
                <div className='flex gap-2 items-center ml-2'>
                    <img className='w-6' src={Calendario} alt="" />
                    <p className='text-slate-700'>{horario}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2 justify-center items-center'>
                        <img className='w-8' src={Maps} alt="" />
                        <p className='text-slate-700'>{polo}</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <img className='w-7' src={Porta} alt="" />
                        <p className='text-slate-700'>Sala {sala}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-8' src={Pessoa} alt="" />
                    <p className='text-slate-700'>Professor(a) {professor}</p>
                </div>
                <div className='flex gap-2'>
                    <div className='bg-gray-300 rounded-full px-3 py-1'>
                        <p className='text-sm'>{codTurma}</p>
                    </div>
                    <div className='bg-gray-300 rounded-full px-3 py-1'>
                        <p className='text-sm'>{cod}</p>
                    </div>
                    {certificadora && (
                        <div className='bg-yellow-200 rounded-full px-3 py-1'>
                            <p className='text-sm'>Disciplina ceriticadora</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardDisciplina
export { CardDisciplina }