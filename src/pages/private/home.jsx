import Banner from 'src/assets/banner.png'
import { CardDisciplina } from 'src/components'
import { disciplinaslist } from 'src/constants'

const Home = () => {
    return (
        <main className='min-h-screen padding-x max-container'>
            {/* Banner */}
            <img className='max-lg:hidden' src={Banner} alt="Banner" />

            {/* Minhas Disciplinas */}
            <section className='bg-gray-100 rounded-xl p-8 mt-8'>
                <h1 className='text-4xl'>Minhas disciplinas</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6'>
                    {disciplinaslist.map(disciplina => (
                        <CardDisciplina
                            key={disciplina.cod}
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
            </section>
        </main>
    )
}

export default Home
export { Home }