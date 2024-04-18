import ArrowLeft from 'src/assets/arrowleft.png'
import Capa from 'src/assets/capa.png'
import Row from 'src/assets/row.png'
import { useState } from 'react'

const NavBar = ({ visualized }) => {
  return (
    <nav className="flex justify-between gap-4 sticky top-0 bg-white p-5">
      <div className='flex items-center gap-2'>
        <a href="/auth/details">
          <img className='w-7' src={ArrowLeft} alt="" />
        </a>
        <p className='text-xl max-lg:text-lg max-md:text-base max-sm:text-sm'>Voltar para disciplina</p>
      </div>
      <p className='text-xl max-lg:text-lg max-md:text-base max-sm:text-sm self-center'><strong>Tema 1:</strong> Caminho do Brilho</p>
      {visualized && <p className="bg-green-200 w-28 h-6 rounded-md flex justify-center items-center">Visualizado</p>}
    </nav>
  )
}

const TitleContent = ({ title }) => {
  return (
    <div className='flex gap-4'>
      <img src={Row} alt="" />
      <p className='text-4xl'>{title}</p>
    </div>
  )
}

const TextContent = ({ content }) => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam quis rerum sequi fugit impedit? Maiores asperiores laboriosam corrupti possimus velit natus ex repellendus. Dolores laborum cumque beatae animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit quo distinctio sit delectus illum. Nobis ullam placeat ratione error qui impedit itaque! Commodi, deserunt alias eligendi veritatis asperiores laborum.</p>
    </div>
  )
}

const VideoContent = ({ url }) => {
  return (
    <div className='mb-10 border border-red-500 sm:h-[400px] md:h-[650px] h-64'>
      <iframe
        width='100%'
        height='100%'
        src="https://www.youtube.com/embed/ydmMreUcoHw?si=oaBN1nTYF00WUPZ8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  )
}

const Avaliation = () => {
  const [rating, setRating] = useState(0);

  const handleStarHover = (value) => {
    setRating(value);
  };

  const handleStarClick = (value) => {
    console.log('Voto:', value);
    //TODO: Lógica do voto
  };

  return (
    <div className='lg:mt-16 mt-8 flex justify-center'>
      <div className='w-[100%] bg-white rounded-lg shadow-xl p-6 flex justify-center max-lg:flex-col max-lg:items-center gap-4 items-center'>
        <p className='text-xl max-lg:text-lg font-semibold text-slate-600'>O que você achou do conteúdo?</p>
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`text-4xl cursor-pointer ${value <= rating ? 'text-blue-500' : 'text-gray-300'}`}
              onMouseEnter={() => handleStarHover(value)}
              onMouseLeave={() => handleStarHover(0)}
              onClick={() => handleStarClick(value)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <main className="padding-x min-h-screen">
      <section className="max-container">
        {/* 1 NAVBAR*/}
        <NavBar />

        {/* 2 BANNER*/}
        <div>
          <img className='max-lg:hidden mt-5 w-full h-[800px]' src={Capa} alt="" />
        </div>

        {/* 3 CONTENT --> VIDEO, AUDIO*/}
        <div className='p-24 max-lg:p-12 flex flex-col gap-4'>
          <TitleContent title='Onboarding' />
          <div className='content-container'>
            <VideoContent />
            <TextContent />
            <Avaliation />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Content