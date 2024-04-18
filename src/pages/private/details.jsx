//Contants
import { themelist } from 'src/constants'

//Images
import Info from 'src/assets/info.png'
import { CardTema } from 'src/components'
import { PlansList } from 'src/components'
import { ThemesList } from 'src/components'

const Details = () => {
    return (
        <main className='min-h-screen max-container padding-x flex max-lg:flex-col gap-1'>
            <div className='flex flex-col flex-wrap w-[35%] max-lg:w-full p-10'>

                {/* Header */}
                <h1 className='font-semibold'>Disciplina</h1>
                <div className='flex justify-between items-end'>
                    <p className='text-3xl font-semibold'>Estrutura de dados</p>
                    <img className='w-6 cursor-pointer' src={Info} alt="" />
                </div>

                {/* Plans */}
                <div className='border rounded-lg mt-4 p-4'>
                    <PlansList plan='Plano de Aula' />
                    <hr className='border-gray-300 mt-4' />
                    <PlansList plan='Plano de Conteúdo' className='mt-4' />
                </div>

                {/* Themes List */}
                <div className='border rounded-lg mt-4 p-4'>
                    {themelist.map(theme => (
                        <>
                            <div key={theme.id}>
                                <ThemesList tema={theme.tema} title={theme.title} />
                            </div>
                            {theme.id === themelist.length ? null : <hr className='border-gray-300 mt-3 mb-3' />}
                        </>
                    ))}
                </div>
            </div>

            {/* Panel */}
            <div className='p-10 flex flex-auto flex-col justify-start rounded-3xl bg-gray-100 border'>
                <small>Tema 1</small>
                <p className='text-3xl font-semibold mb-14'>Introdução</p>
                <CardTema title='Introdução a Estrutura de Dados' />
            </div>
        </main>
    )
}

export default Details