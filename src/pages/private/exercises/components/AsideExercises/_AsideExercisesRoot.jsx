import { useUtil } from 'src/hooks'

export const AsideExercisesRoot = ({ children, isVisible }) => {
	const { cn } = useUtil()

	return (
		<div
			data-state={isVisible && 'visible'}
			className={cn(
				`w-full max-w-fit hidden bottom-4  border-2 border-black 
				lg:border-none lg:block md:top-[100px] md h-fit bg-white p-4  
				pt-6 lg:pt-0 rounded-lg shadow-md lg:self-start sticky lg:max-w-[18rem] 
				data-[state=visible]:animate-asideShow duration-300
				`,
				isVisible && 'block'
			)}
		>
			{children}
		</div>
	)
}
