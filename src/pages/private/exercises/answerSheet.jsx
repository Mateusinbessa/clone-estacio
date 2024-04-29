import { useParams } from 'react-router-dom'

import { dataAnswerSheet } from './components/dataAnswerSheet'
import { useUtil } from 'src/hooks'

import {
	HeaderExercises,
	QuestionCard,
	AsideExercises,
	Button,
	FeedBackQuestion,
	AnswerSheetComment,
} from 'src/pages/private/exercises/components'
import { BarChart } from 'lucide-react'
import { useState } from 'react'
import { X } from 'lucide-react'
import { CircleCheckBig } from 'lucide-react'

export const AnswerSheet = () => {
	const { exerciseId } = useParams()

	const [asideIsVisible, setAsideIsVisible] = useState(false)

	const { cn } = useUtil()

	const checkButtonVariant = (isCorrectAnswer, selectedAnswer) => {
		if (isCorrectAnswer) {
			return 'greenNotHover'
		}
		if (!isCorrectAnswer && selectedAnswer) {
			return 'redNotHover'
		}
		return 'defaultNotHover'
	}

	const normalizeAlternatives = (alternatives) => {
		return alternatives.reduce(
			(acc, crr, crrIndex) => {
				if (crr.wasSelectedAnswer) {
					acc.hasItemSelected = true
				}
				if (crr.isCorrectAnswer && crr.wasSelectedAnswer) {
					acc.isCorrect = true
				}
				if (crr.isCorrectAnswer) {
					acc.correctAlternativeIndex = crrIndex
				}
				return acc
			},
			{
				isCorrect: false,
				hasItemSelected: false,
				correctAlternativeIndex: 0,
			}
		)
	}

	const rightQuestionsCount = dataAnswerSheet?.data?.questions
		?.map((question) => {
			const { isCorrect } = normalizeAlternatives(question.alternatives)
			return isCorrect
		})
		.filter((item) => item && item).length

	const questionsCount = dataAnswerSheet?.data?.questions.length

	return (
		<>
			<HeaderExercises themeExercise={dataAnswerSheet.data?.theme?.name} isAnswerSheet />
			<main className="w-full min-h-screen py-8 px-4 lg:px-16 bg-[#F5F5F5]">
				<div
					className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_18rem] 
        h-full lg:items-start lg:gap-8  max-w-[1200px] mx-auto"
				>
					<div className="space-y-8">
						<div className="space-y-4">
							<h1 className="text-[2rem] font-bold text-center leading-tight">
								Você acertou {rightQuestionsCount} de {questionsCount}{' '}
							</h1>
							<p className="text-base font-normal leading-normal text-center">
								Verifique o seu desempenho e continue treinando! Você pode refazer o exercício
								quantas vezes quiser.
							</p>
							<button
								className="flex items-center justify-center h-14 bg-[#144BC8] text-white gap-3 rounded-lg
              hover:bg-[#144ac837]  px-8 py-2  transition-colors duration-300 hover:text-[#144BC8]
                font-medium text-base mx-auto
              "
							>
								<BarChart />
								<span>Verificar Desempenho</span>
							</button>
						</div>

						{dataAnswerSheet?.data?.questions?.map((alternative, index) => {
							const answerSelectionValidity = normalizeAlternatives(alternative.alternatives)

							return (
								<QuestionCard
									id={`question_${alternative.id}`}
									alternativeData={alternative}
									key={alternative.id}
									questionNumber={index + 1}
									disableQuestionReview
								>
									{alternative.alternatives.map((alt, ind) => {
										const btnVariant = checkButtonVariant(
											alt.isCorrectAnswer,
											alt.wasSelectedAnswer
										)

										return (
											<Button
												key={alt.id}
												variant={btnVariant}
												size="cardOption"
												className="justify-start cursor-default"
											>
												<span
													className={cn(
														`font-normal text-base min-h-8 max-h-8 min-w-8 max-w-8 flex items-center 
                      									justify-center rounded-full bg-[#F5F5F5]`,
														btnVariant === 'redNotHover' && 'bg-[#991700] text-white',
														btnVariant === 'greenNotHover' && 'bg-[#1C662E] text-white'
													)}
												>
													{String.fromCharCode(65 + ind)}
												</span>
												<p className="text-start text-[#121212]">{alt.description}</p>
											</Button>
										)
									})}

									<FeedBackQuestion
										isCorrectAnswer={answerSelectionValidity.isCorrect}
										correctAlternativeIndex={answerSelectionValidity.correctAlternativeIndex}
										hasItemSelected={answerSelectionValidity.hasItemSelected}
									/>
									<AnswerSheetComment comment={alternative.commentedAnswer} />
								</QuestionCard>
							)
						})}
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
							{dataAnswerSheet?.data?.questions?.map((item, index) => {
								const shablau = normalizeAlternatives(item.alternatives)
								return (
									<AsideExercises.QuestionNumber
										item={item}
										index={index}
										isCorrectAnswer={shablau.isCorrect}
										wasSelectedAnswer={shablau.hasItemSelected}
										key={index}
										isAnswerSheetPage
									/>
								)
							})}
						</AsideExercises.QuestionNumberRoot>
						<AsideExercises.QuestionStatsRoot className="flex-col">
							<AsideExercises.QuestionStats
								bulletColor="bg-[#cff2d8]"
								number={dataAnswerSheet.data.rightQuestions}
								status={'Corretas'}
							/>
							<AsideExercises.QuestionStats
								bulletColor="bg-[#E0E0E0]"
								number={dataAnswerSheet.data.blankQuestions}
								status={'Em branco'}
							/>
							<AsideExercises.QuestionStats
								bulletColor="bg-[#ffdad3]"
								number={dataAnswerSheet.data.wrongQuestions}
								status={'Incorretas'}
							/>
						</AsideExercises.QuestionStatsRoot>
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

export default AnswerSheet
