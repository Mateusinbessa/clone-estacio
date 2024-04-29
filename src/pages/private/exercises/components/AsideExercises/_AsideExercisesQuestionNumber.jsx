import { useUtil } from 'src/hooks'

export const AsideExercisesQuestionNumber = ({
	item,
	index,
	isCorrectAnswer,
	wasSelectedAnswer,
	isAnswerSheetPage = false,
}) => {
	const { cn } = useUtil()

	const handleClick = () => {
		const questionRef = document.getElementById(`question_${item.id}`)
		if (questionRef) {
			questionRef.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const getContainerClasses = () => {
		let classes =
			'w-11 h-11 flex items-center justify-center rounded-lg cursor-pointer relative border border-[#E0E0E0]'

		if (item?.isMarkedForReview) {
			classes +=
				" after:content-[''] after:w-2 after:h-2 after:bg-black after:absolute after:-top-1 after:left-1/2 after:-translate-x-1/2 after:rounded-full"
		}

		if (item?.selectedAnswer) {
			classes += ' bg-[#C2D4FF] border-[#144BC8] border'
		}

		if (isCorrectAnswer && wasSelectedAnswer) {
			classes += ' bg-[#cff2d8] border-[#1C662E]'
		}

		if (!isCorrectAnswer && wasSelectedAnswer && isAnswerSheetPage) {
			classes += ' bg-[#FFDAD3] border-[#991700]'
		}

		return classes
	}

	return (
		<div key={index} className={cn(getContainerClasses())} onClick={handleClick}>
			<span className="font-normal text-base">{index + 1}</span>
		</div>
	)
}
