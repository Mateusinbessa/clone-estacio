import { AsideExercises } from '../../exercises/components/AsideExercises'
import { Button } from '../../exercises/components/_Button'

export const SubjectPerformanceCard = ({
	i,
	rightQuestions,
	wrongQuestions,
	blankQuestions,
	markedToReviewQuestions,
}) => {
	return (
		<div className=" p-6 bg-white rounded-lg flex flex-col gap-8  ">
			<div className="flex justify-between flex-col gap-4  md:flex-row md:gap-0">
				<h2 className="text-2xl leading-tight font-bold">Exercício {4 - i + 1}</h2>
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
						number={rightQuestions}
						status={'Corretas'}
					/>
					<AsideExercises.QuestionStats
						bulletColor="bg-[#E0E0E0]"
						number={blankQuestions}
						status={'Em branco'}
					/>
					<AsideExercises.QuestionStats
						bulletColor="bg-[#ffdad3]"
						number={wrongQuestions}
						status={'Incorretas'}
					/>
					<AsideExercises.QuestionStats
						bulletColor="bg-black "
						number={markedToReviewQuestions}
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
	)
}
