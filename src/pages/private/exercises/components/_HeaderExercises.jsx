import { LogOut } from 'lucide-react'
import { Contrast } from 'lucide-react'
import { Type } from 'lucide-react'
import { useState } from 'react'
import ModalHeader from './_ModalHeader'

const HeaderExercises = ({ themeExercise, isAnswerSheet }) => {
	const [open, setOpen] = useState(false)

	const toggleOpen = () => {
		setOpen((prev) => !prev)
	}

	return (
		<header className="sticky top-0 py-2 px-16 mx-0 bg-white shadow-md z-10 ">
			<div className="mx-auto w-full max-w-[1200px] flex justify-between items-center">
				<div className="flex items-center w-fit gap-2 md:gap-4 flex-col md:flex-row">
					<h1 className="font-bold text-2xl leading-tight self-start md:self-auto">Exercício</h1>
					<div className="w-[1px] h-12 bg-[#E0E0E0] hidden md:block"></div>
					<h2 className="text-base leading-normal text-[#424242]">{themeExercise}</h2>
				</div>
				<div className="gap-8 items-center hidden md:flex ">
					<button
						className="flex items-center justify-center p-3 rounded-full
             hover:bg-[#F5F5F5] transition-colors"
					>
						<Type />
					</button>
					<button
						className="flex items-center justify-center p-3 rounded-full
             hover:bg-[#F5F5F5] transition-colors"
					>
						<Contrast />
					</button>
					<button
						className="flex items-center text-[#144BC8] gap-3 rounded-lg
            hover:bg-[#144ac837]  px-4 py-2 transition-colors
            "
					>
						<LogOut />
						<span>Sair e finalizar depois</span>
					</button>
				</div>
				<ModalHeader themeExercise={themeExercise} isAnswerSheet={isAnswerSheet} />
			</div>
		</header>
	)
}

export default HeaderExercises

export { HeaderExercises }
