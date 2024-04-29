import { Play } from 'lucide-react'
import { HeaderExercises } from '../exercises/components'
import { AsideExercises } from '../exercises/components/AsideExercises'
import { Button } from '../exercises/components/_Button'
import { PerformanceComposedChart, PerformancePieChart } from './components'

export const SubjectPerformance = () => {
	return (
		<div className="bg-[#F5F5F5]">
			<HeaderExercises themeExercise={'Listas, Pilhas e Filas'} />
			<div className="max-w-[1200px] mx-auto py-16 flex flex-col gap-8 w-full min-h-full px-4 lg-2:px-0 ">
				<div>
					<h1 className="text-[2rem] leading-tight font-bold   ">
						Seu desempenho em Listas, Pilhas e Filas
					</h1>
					<p className="text-base font-normal leading-normal">
						Aqui você pode acompanhar sua evolução a cada nova tentativa e consultar os exercícios
						finalizados.
					</p>
				</div>
				{/* <PerformanceComposedChart /> */}
				<div
					className="w-[290px] md:w-[400px] "
					style={{
						height: '272px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<PerformancePieChart />
					<h3>q1</h3>
				</div>
				{Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
					<div key={i} className=" p-6 bg-white rounded-lg flex flex-col gap-8  ">
						<div className="flex justify-between flex-col gap-4  md:flex-row md:gap-0">
							<h2 className="text-2xl leading-tight font-bold">exercicio {4 - i + 1}</h2>
							<Button
								variant="greenNotHover"
								className="rounded-full border-none whitespace-normal w-fit "
								asChild
							>
								<span>Realizado em 24/04/2024</span>
							</Button>
						</div>
						<div className=" flex justify-between flex-col gap-4  md:flex-row md:gap-0">
							<div className="flex gap-4 md:items-center md:flex-row flex-wrap flex-col items-start ">
								<h3 className="text-base leading-tight font-bold">Questões</h3>
								<AsideExercises.QuestionStats
									bulletColor="bg-[#cff2d8]"
									number={8}
									status={'Corretas'}
								/>
								<AsideExercises.QuestionStats
									bulletColor="bg-[#E0E0E0]"
									number={2}
									status={'Em branco'}
								/>
								<AsideExercises.QuestionStats
									bulletColor="bg-[#ffdad3]"
									number={3}
									status={'Incorretas'}
								/>
								<AsideExercises.QuestionStats
									bulletColor="bg-black "
									number={3}
									status={'Marcadas para revisão'}
								/>
							</div>
							<Button
								variant="ghost"
								size="lg"
								className=" border-2 border-[#144bc8] hover:bg-[#144ac837]
								hover:border-transparent text-[#144bc8] text-base font-medium 
								min-w-fit
								"
							>
								Consultar exercício
							</Button>
						</div>
					</div>
				))}
				<p className="text-base font-semibold leading-normal text-center">
					Continue treinando para tornar seu desempenho cada vez melhor!
				</p>
				<Button
					variant="ghost"
					size="lg"
					className="bg-[#144bc8] hover:bg-[#144ac837] hover:text-[#144bc8] text-white 
					text-lg font-normal  w-fit h-14 px-9 gap-4 mx-auto duration-300   "
				>
					<Play size={22} />
					<span>Consultar exercício</span>
				</Button>
			</div>
		</div>
	)
}

export default SubjectPerformance
