import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const akefhsdfsi = {
	data: [
		{
			theme: {
				externalCode: '00786',
				name: 'LISTAS, PILHAS E FILAS',
			},
			practice: {
				id: '662be135139d33d914913c7f',
				endedAt: '2024-04-26T17:22:49.921Z',
				markedForReviewAnswers: 0,
				correctAnswers: 0,
				wrongAnswers: 0,
				blankAnswers: 10,
				correctAnswersPercentage: 0,
			},
		},
		{
			theme: {
				externalCode: '00786',
				name: 'LISTAS, PILHAS E FILAS',
			},
			practice: {
				id: '662bb243139d33d9148c882d',
				endedAt: '2024-04-26T13:55:55.302Z',
				markedForReviewAnswers: 0,
				correctAnswers: 1,
				wrongAnswers: 8,
				blankAnswers: 1,
				correctAnswersPercentage: 10,
			},
		},
		{
			theme: {
				externalCode: '00786',
				name: 'LISTAS, PILHAS E FILAS',
			},
			practice: {
				id: '662917a0257ea9c02683cb04',
				endedAt: '2024-04-24T14:32:04.443Z',
				markedForReviewAnswers: 2,
				correctAnswers: 2,
				wrongAnswers: 3,
				blankAnswers: 5,
				correctAnswersPercentage: 20,
			},
		},
		{
			theme: {
				externalCode: '00786',
				name: 'LISTAS, PILHAS E FILAS',
			},
			practice: {
				id: '66290c47257ea9c0268259f9',
				endedAt: '2024-04-24T13:43:35.790Z',
				markedForReviewAnswers: 0,
				correctAnswers: 1,
				wrongAnswers: 1,
				blankAnswers: 8,
				correctAnswersPercentage: 10,
			},
		},
		{
			theme: {
				externalCode: '00786',
				name: 'LISTAS, PILHAS E FILAS',
			},
			practice: {
				id: '6623f046257ea9c02620f9dc',
				endedAt: '2024-04-22T22:42:32.834Z',
				markedForReviewAnswers: 2,
				correctAnswers: 2,
				wrongAnswers: 4,
				blankAnswers: 4,
				correctAnswersPercentage: 20,
			},
		},
		{
			theme: {
				externalCode: '00786',
				name: 'LISTAS, PILHAS E FILAS',
			},
			practice: {
				id: '66227d89139d33d914d60cdd',
				endedAt: '2024-04-20T16:30:14.228Z',
				markedForReviewAnswers: 1,
				correctAnswers: 0,
				wrongAnswers: 3,
				blankAnswers: 7,
				correctAnswersPercentage: 0,
			},
		},
		{
			theme: {
				externalCode: '00786',
				name: 'LISTAS, PILHAS E FILAS',
			},
			practice: {
				id: '6621428b257ea9c026f8e82a',
				endedAt: '2024-04-19T14:17:05.718Z',
				markedForReviewAnswers: 0,
				correctAnswers: 1,
				wrongAnswers: 2,
				blankAnswers: 7,
				correctAnswersPercentage: 10,
			},
		},
	],
	paginated: true,
	meta: {
		total: 7,
		currentPage: 1,
		perPage: 5,
	},
}

export const PerformanceComposedChart = () => {
	const newData = akefhsdfsi.data.reduce((acc, current, index) => {
		const { correctAnswers, wrongAnswers, blankAnswers, correctAnswersPercentage } =
			current.practice
		acc.push({
			name: `Exercício ${index + 1}`,
			'Respostas corretas': index === 0 ? correctAnswers + 5 : correctAnswers,
			'Respostas erradas': wrongAnswers,
			'Respostas em branco': index === 0 ? 5 : blankAnswers,
			correctAnswersPercentage,
		})
		return acc
	}, [])

	console.log(newData)

	return (
		<div style={{ width: '100%', height: '400px' }}>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					width={500}
					height={400}
					data={newData}
					margin={{
						top: 10,
						right: 30,
						left: 30,
						bottom: 0,
					}}
				>
					<XAxis dataKey="name" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Respostas em branco"
						stackId="1"
						stroke="#ffc658"
						fill="#ffffff"
					/>
					<Area
						type="monotone"
						dataKey="Respostas erradas"
						stackId="1"
						stroke="#FF8771"
						fill="#FFDAD3"
					/>
					<Area
						type="monotone"
						dataKey="Respostas corretas"
						stackId="1"
						stroke="#82ca9d"
						fill="#82ca9d"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}
