import { Play } from 'lucide-react'
import { HeaderExercises } from '../exercises/components'
import { AsideExercises } from '../exercises/components/AsideExercises'
import { Button } from '../exercises/components/_Button'
import { PerformanceComposedChart, PerformancePieChart, SubjectPerformanceCard } from './components'

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
				<PerformanceComposedChart />
				<div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden">
					{Array.from({ length: 4 }, (_, index) => index + 1).map((item) => (
						<div
							key={item}
							className="min-w-[290px] md:min-w-[400px] first:ml-4 last:mr-4"
							style={{
								height: '280px',
								minHeight: '280px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<PerformancePieChart />
							<h3 className="text-2xl font-semibold leading-tight    ">Exercício 1</h3>
						</div>
					))}
				</div>
				{Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
					<SubjectPerformanceCard
						i={i}
						key={i}
						blankQuestions={(Math.random() * 10).toFixed(0)}
						markedToReviewQuestions={(Math.random() * 10).toFixed(0)}
						rightQuestions={(Math.random() * 10).toFixed(0)}
						wrongQuestions={(Math.random() * 10).toFixed(0)}
					/>
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
					<span>Iniciar novo exercício</span>
				</Button>
			</div>
		</div>
	)
}

export default SubjectPerformance
