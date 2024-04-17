import ArrowLeft from 'src/assets/arrowleft.png'
import Capa from 'src/assets/capa.png'

const Content = () => {
  return (
    <main className="padding-x min-h-screen">
      <section className="max-container p-2">

        {/* 1 */}
        <nav className="flex justify-between sticky top-0 bg-white p-5">
          <div className='flex items-center gap-2'>
            <a href="/auth/details">
              <img className='w-7' src={ArrowLeft} alt="" />
            </a>
            <p className='text-xl'>Voltar para disciplina</p>
          </div>
          <p className='text-xl'><strong>Tema 1:</strong> Caminho do Brilho</p>
          <p className="bg-green-200 w-28 h-6 rounded-md flex justify-center items-center">Visualizado</p>
        </nav>

        {/* 2 */}
        <div>
          <img className='max-lg:hidden mt-5 w-full h-[600px]' src={Capa} alt="" />
        </div>

        {/* 3 */}
        <div className='content-container p-10'>
          <p className='text-4xl'>---- On Boarding</p>


          <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis, dicta officia sit accusantium nisi quam nemo pariatur saepe tempora atque aut minima. Dolorum nesciunt labore atque pariatur, quisquam sequi!</p>
        </div>
      </section>
    </main>
  )
}

export default Content