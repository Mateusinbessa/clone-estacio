import Imagem from 'src/assets/banner.png'
import CardContinue from 'src/components/cardContinue'
import CardDisciplina from 'src/components/cardDisciplina'

const Home = () => {
    return (
        <main className='min-h-svh'>

            <section className='padding-x'>
                <div className="max-container">
                    <img className='max-lg:hidden' src={Imagem} alt="" />
                </div>
            </section>

            <section className='padding-x mt-8'>
                <div className='bg-gray-100 max-container rounded-xl p-8'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-3xl font-semibold'>Minhas Disciplinas</h2>
                        <p className='text-slate-600'>Continue de onde parou</p>
                        <CardContinue disciplina='Pensamento Computacional' />
                        <hr className='border-gray-300 mt-8' />
                        <div className='flex gap-12 flex-wrap justify-start'>
                            <CardDisciplina
                                disciplina='Estrutura de dados'
                                horario='18h30-21h10'
                                polo='Via Corpvs'
                                sala='102'
                                professor='Niltemberg Carvalho'
                                codTurma='ARA0098'
                                cod='3003'
                                certificadora={true}
                            />
                            <CardDisciplina
                                disciplina='Desenv. Web em HTML5, CSS, JavaScript'
                                horario='18h30-21h10'
                                polo='Via Corpvs'
                                sala='102'
                                professor='Henrique Mota'
                                codTurma='ARA0098'
                                cod='3003'
                                certificadora={true}
                            />
                            <CardDisciplina
                                disciplina='Sistemas Operacionais'
                                horario='18h30-21h10'
                                polo='Via Corpvs'
                                sala='102'
                                professor='Elifranio Alves Cruz'
                                codTurma='ARA0098'
                                cod='3003'
                                certificadora={true}
                            />
                            <CardDisciplina
                                disciplina='Pensamento computacional'
                                horario='18h30-21h10'
                                polo='Via Corpvs'
                                sala='102'
                                professor='Mauro Cesar Cantarino Gil'
                                codTurma='ARA0098'
                                cod='3003'
                                certificadora={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}

export default Home
export { Home }