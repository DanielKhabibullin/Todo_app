import {Route, Routes} from 'react-router-dom';
import {Home} from './module/Home/Home';
import {List} from './module/List/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column p-3'>
				<Routes>
						<Route path='/user/:id' element={<List />} />
						<Route path='/' element={<Home />} />
				</Routes>
		</div>
	);
}

export default App;
