import {Container} from "react-bootstrap"
import {Outlet} from "react-router-dom"
import {NavigationBar} from "../NavigationBar/NavigationBar"

export const Layout = () => {
	// const setActive = (isActive: boolean) => isActive ? 'active-link' : '';

	return (
		<>
			<NavigationBar />
			<Container className="vh-100 w-100 d-flex align-items-center justify-content-center flex-column overflow-hidden">
				<Outlet />
			</Container>
		</>
	)
}
