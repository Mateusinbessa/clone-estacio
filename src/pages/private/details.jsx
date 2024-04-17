import Info from 'src/assets/info.png'
import CardTema from 'src/components/cardTema'
import PlansList from 'src/components/plansList'
import ThemesList from 'src/components/themesList'

const Details = () => {
    return (
        <main className='min-h-screen max-container padding-x flex max-lg:flex-col gap-1'>
            <div className='flex flex-col flex-wrap w-[30%] max-lg:w-full p-10'>
                {/* Header */}
                <h1 className='font-semibold'>Disciplina</h1>
                <div className='flex justify-between items-end'>
                    <p className='text-3xl font-semibold'>Estrutura de dados</p>
                    <img className='w-6' src={Info} alt="" />
                </div>
                {/* Plans */}
                <div className='border rounded-lg mt-4 p-4'>
                    <PlansList plan='Plano de ensino' />
                    <hr className='border-gray-300 mt-5' />
                    <PlansList plan='Plano de ensino' className='mt-4' />
                </div>
                <div className='border rounded-lg mt-4 p-4'>
                    <ThemesList tema='Tema 1' title='Introdução' />
                    <ThemesList tema='Tema 2' title='Estruturas de dados heterogêneas' />
                    <ThemesList tema='Tema 3' title='Modularização' />
                    <ThemesList tema='Tema 4' title='Ordenação' />
                    <ThemesList tema='Tema 5' title='Árvores' />
                </div>
            </div>

            <div className='p-10 flex flex-auto flex-col justify-start rounded-3xl bg-gray-100 border'>
                <small>Tema 1</small>
                <p className='text-3xl font-semibold mb-14'>Introdução</p>
                <CardTema title='Introdução a Estrutura de Dados' />
            </div>
        </main>
    )
}

export default Details