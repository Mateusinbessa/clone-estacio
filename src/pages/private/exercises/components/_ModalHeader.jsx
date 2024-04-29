import * as Dialog from '@radix-ui/react-dialog'
import { X, Menu } from 'lucide-react'
import { Button } from '.'
import { Type } from 'lucide-react'
import { Contrast } from 'lucide-react'
import { LogOut } from 'lucide-react'

const ModalHeader = ({ themeExercise, isAnswerSheet }) => (
	<Dialog.Root>
		<Dialog.Trigger asChild className="md:hidden border-none active:bg-[#d4d4d4]">
			<Button size="icon" variant="defaultNotHover">
				<Menu />
			</Button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="bg-black/45 data-[state=open]:animate-overlayShow fixed inset-0 z-20" />
			<Dialog.Content
				className="fixed top-0 w-screen h-fit bg-white shadow-2xl
                 focus:outline-none z-30 flex flex-col justify-between rounded-b-xl
            "
			>
				<div className="flex justify-between items-center  border-b border-b-[#E0E0E0] py-2 px-16 pb-4 ">
					<div className="flex items-center w-fit gap-2 md:gap-4 flex-col md:flex-row">
						<h1 className="font-bold text-2xl leading-tight self-start md:self-auto">Exercício</h1>
						<div className="w-[1px] h-12 bg-[#E0E0E0] hidden md:block"></div>
						<h2 className="text-base leading-normal text-[#424242]">{themeExercise}</h2>
					</div>
					<Dialog.Trigger asChild className="md:hidden border-none active:bg-[#d4d4d4]">
						<Button size="icon" variant="defaultNotHover">
							<X />
						</Button>
					</Dialog.Trigger>
				</div>
				<div className="items-center flex flex-col ">
					<Button
						size="icon"
						variant="defaultNotHover"
						className="w-full flex gap-4 justify-start p-4
                        hover:bg-[#f5f4f4] border-none h-fit"
					>
						<Type />
						<span>Aumentar o texto</span>
					</Button>
					<Button
						size="icon"
						variant="defaultNotHover"
						className="w-full flex gap-4 justify-start p-4
                        hover:bg-[#f5f4f4] border-none h-fit "
					>
						<Contrast />
						<span>Alto contraste</span>
					</Button>
					{!isAnswerSheet && (
						<Button
							size="default"
							className="flex items-center justify-center bg-[#144BC8] w-full  text-white gap-3 rounded-lg
                        hover:bg-[#144ac837]  px-6  transition-colors duration-300 hover:text-[#144BC8]
                          font-medium text-base py-5 h-fit rounded-t-none rounded-b-xl
            "
						>
							<LogOut />
							<span>Sair e finalizar depois</span>
						</Button>
					)}
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
)

export default ModalHeader
