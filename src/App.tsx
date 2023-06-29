import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import {Home} from './module/Home/Home';
import {List} from './module/List/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from './module/Layout/Layout';


const App = () => {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="user/:id" element={<List />} />
			</Route>
		)
	)

	return <RouterProvider router={router}/>
}

export default App;
