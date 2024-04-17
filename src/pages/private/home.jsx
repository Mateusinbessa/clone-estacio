import Imagem from 'src/assets/banner.png'
import CardDisciplina from 'src/components/cardDisciplina'
import { disciplinaslist } from 'src/constants'

const Home = () => {
    return (
        <main className='min-h-svh'>
            {/* Banner */}
            <section className='padding-x'>
                <div className="max-container">
                    <img className='max-lg:hidden' src={Imagem} alt="" />
                </div>
            </section>

            {/* Minhas Disciplinas */}
            <section className='padding-x mt-8'>
                <div className='bg-gray-100 max-container rounded-xl p-8'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl font-semibold'>Minhas disciplinas</h1>
                        <div className='flex gap-12 flex-wrap justify-start'>
                            {disciplinaslist.map(disciplina => (
                                <CardDisciplina
                                    disciplina={disciplina.disciplina}
                                    horario={disciplina.horario}
                                    polo={disciplina.polo}
                                    sala={disciplina.sala}
                                    professor={disciplina.professor}
                                    codTurma={disciplina.codTurma}
                                    cod={disciplina.cod}
                                    certificadora={disciplina.certificadora}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}

export default Home
export { Home }