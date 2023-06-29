import {Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import logo from './img/logo.png';
import style from './NavigationBar.module.scss';

export const NavigationBar = () => {
	const id: string = useAppSelector((state) => state.userReducer.id);
	return (
		<>
			<Navbar expand="lg" bg="dark" data-bs-theme="dark">
					<NavLink to="/">
						<img src={logo} className={style.nav_logo} alt="logo todo_app" />
					</NavLink>
					<Nav className="me-auto">
						<NavLink className="me-4" to="/">Login</NavLink>
						<NavLink className="me-4"to={`user/${id}`}>ToDo List</NavLink>
					</Nav>
				</Navbar>
		</>
	)
};
