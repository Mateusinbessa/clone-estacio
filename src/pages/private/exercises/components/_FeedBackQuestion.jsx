import { X } from 'lucide-react'
import { buttonVariants } from './_Button'
import { useUtil } from 'src/hooks'
import { Check } from 'lucide-react'
import { Info } from 'lucide-react'

export const FeedBackQuestion = ({ isCorrectAnswer, correctAlternativeIndex, hasItemSelected }) => {
	const { cn } = useUtil()

	return (
		<div
			className={cn(
				'w-full rounded-lg flex gap-4 items-center p-3',
				isCorrectAnswer && 'bg-[#cff2d8] border-none',
				!isCorrectAnswer && hasItemSelected && 'bg-[#FFDAD3] border-none',
				!hasItemSelected && 'border-[#e9e8e8] bg-[#f5f4f4]'
			)}
		>
			<div
				className={cn(
					'h-10 w-10 min-h-10 min-w-10 flex items-center justify-center rounded-full',
					isCorrectAnswer && 'bg-[#54D073]',
					!isCorrectAnswer && hasItemSelected && 'bg-[#FF8771]',
					!hasItemSelected && 'bg-[#12121229] '
				)}
			>
				{isCorrectAnswer && <Check />}
				{!isCorrectAnswer && hasItemSelected && <X />}
				{!hasItemSelected && <Info />}
			</div>
			<div className="flex flex-col gap-1">
				<h4 className="font-bold leading-normal text-base">
					{isCorrectAnswer && 'Resposta Correta'}
					{!isCorrectAnswer && hasItemSelected && 'Resposta Incorreta'}
					{!hasItemSelected && 'Questão não respondida'}
				</h4>
				<p className="font-normal leading-normal text-base">
					{isCorrectAnswer
						? 'Parabéns, você selecionou a alternativa correta. Confira o gabarito comentado!'
						: ` Opa! A alternativa correta é a letra ${String.fromCharCode(
								65 + correctAlternativeIndex
						  )}. Confira o gabarito comentado!`}
				</p>
			</div>
		</div>
	)
}
