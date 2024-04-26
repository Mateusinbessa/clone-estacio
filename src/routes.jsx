import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Auth, Public } from 'src/layout'
import React from 'react'

//Auth
const Home = React.lazy(() => import('src/pages/private/home'))
const Details = React.lazy(() => import('src/pages/private/details'))
const Content = React.lazy(() => import('src/pages/private/content'))
const Exercises = React.lazy(() => import('src/pages/private/exercises/exercises'))
const SubjectCatalog = React.lazy(() => import('src/pages/private/SubjectCatalog'))
const AnswerSheet = React.lazy(() => import('src/pages/private/exercises/answerSheet'))
const SubjectPerformance = React.lazy(() =>
	import('src/pages/private/SubjectPerformance/SubjectPerformance')
)

//Public
const Forbidden = React.lazy(() => import('src/pages/public/forbidden'))
const NotFound = React.lazy(() => import('src/pages/public/notFound'))
const Login = React.lazy(() => import('src/pages/public/login'))

const routes = createBrowserRouter([
	{
		//Private routes
		path: 'auth',
		element: <Auth />,
		children: [
			{ path: '', element: <Navigate to="home" replace={true} /> },
			{ path: 'home', element: <Home /> },
			{ path: 'details', element: <Details /> },
			{ path: 'content', element: <Content /> },
			{ path: 'exercises/:exerciseId', element: <Exercises /> },
			{ path: 'subject-catalog', element: <SubjectCatalog /> },
			{ path: 'exercises/:exerciseId/answer-sheet', element: <AnswerSheet /> },
			{ path: 'exercises/:exerciseId/subject-performance', element: <SubjectPerformance /> },
			{ path: '*', element: <Navigate to="/404" /> },
		],
	},
	{
		//Public routes
		path: '',
		element: <Public />,
		children: [
			{ path: '', element: <Navigate to="login" /> },
			{ path: 'login', element: <Login /> },
			{ path: '404', element: <NotFound /> },
			{ path: 'forbidden', element: <Forbidden /> },
			{ path: '*', element: <Navigate to="404" /> },
		],
	},
])

export default routes
