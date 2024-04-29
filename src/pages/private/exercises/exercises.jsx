import { useEffect, useMemo, useState } from 'react'

import { useExerciseData } from 'src/hooks'
import { setCurrentExercise, toggleSelectItem } from 'src/reducers/exercises/exerciseSlice'
import { dataQuestions } from './components/dataQuestions'

import {
	HeaderExercises,
	QuestionCard,
	AsideExercises,
	QuestionCardOptions,
	Button,
} from 'src/pages/private/exercises/components'
import { CircleCheckBig } from 'lucide-react'
import { X } from 'lucide-react'

const Exercises = () => {
	const { exerciseData, dispatch } = useExerciseData()

	const [asideIsVisible, setAsideIsVisible] = useState(false)

	const questionsCompleted = useMemo(() => {
		return exerciseData?.data?.questions?.reduce(
			(acc, crr) => {
				if (crr.selectedAnswer) {
					acc.completed += 1
				} else {
					acc.notCompleted += 1
				}
				return acc
			},
			{
				completed: 0,
				notCompleted: 0,
			}
		)
	}, [exerciseData.data.questions])

	useEffect(() => {
		dispatch(setCurrentExercise(dataQuestions.data))
	}, [])

	return (
		<>
			<HeaderExercises themeExercise={exerciseData?.data?.theme?.name} />
			<main
				className="w-full min-h-screen pt-8 pb-16 px-4 lg:px-16 bg-[#F5F5F5] relative"
				onScroll={() => {
					console.log('scroll')
				}}
			>
				<div
					className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_18rem]
         h-full lg:items-start lg:gap-8  max-w-[1200px] mx-auto"
				>
					<div className="space-y-8">
						{exerciseData?.data?.questions?.map((question, index) => (
							<QuestionCard
								id={`question_${question.id}`}
								alternativeData={question}
								key={question.id}
								questionNumber={index + 1}
							>
								{question.alternatives.map((alternative, index) => {
									return (
										<QuestionCardOptions
											description={alternative.description}
											index={index}
											isSelectedAnswer={alternative.id === question.selectedAnswer}
											onClick={() =>
												dispatch(
													toggleSelectItem({
														questionId: question.id,
														answerId: alternative.id,
													})
												)
											}
											key={alternative.id}
										/>
									)
								})}
							</QuestionCard>
						))}
					</div>

					<AsideExercises.Root isVisible={asideIsVisible}>
						{/* <AsideExercises.Title /> */}
						<Button
							size="icon"
							className="absolute top-1 right-1 active:bg-[#f5f4f4] lg:hidden "
							onClick={() => {
								setAsideIsVisible(!asideIsVisible)
							}}
						>
							<X />
						</Button>

						<AsideExercises.QuestionNumberRoot>
							{exerciseData?.data?.questions?.map((item, index) => (
								<AsideExercises.QuestionNumber item={item} index={index} key={index} />
							))}
						</AsideExercises.QuestionNumberRoot>
						<AsideExercises.QuestionStatsRoot>
							<AsideExercises.QuestionStats
								bulletColor="bg-[#144BC8]"
								number={questionsCompleted?.completed}
								status={'Respondidas'}
							/>
							<AsideExercises.QuestionStats
								bulletColor="bg-[#E0E0E0]"
								number={questionsCompleted?.notCompleted}
								status={'Em branco'}
							/>
						</AsideExercises.QuestionStatsRoot>
						<AsideExercises.Controls />
					</AsideExercises.Root>
				</div>
				{!asideIsVisible && (
					<Button
						className="fixed bottom-3/4 right-8 lg:hidden  
				 p-3 bg-[#f5f4f4] border-2 hover:border-black text-[#144BC8]  
				"
						onClick={() => setAsideIsVisible(!asideIsVisible)}
					>
						<CircleCheckBig />
					</Button>
				)}
			</main>
		</>
	)
}

export default Exercises
