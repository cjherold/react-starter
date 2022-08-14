import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TopNav() {
	return (
		<Navbar className='navbar-expand-md navbar-dark bg-dark'>
			{/* container fluid  */}
			<Container fluid className=''>
				<Link className='navbar-brand' to='/'>
					Home
				</Link>
				{/* <Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto me-3'>
						<Link className='nav-link' to='/page2'>
							page2
						</Link>
						<Link className='nav-link' to='/page3'>
							page3
						</Link>
					</Nav>
				</Navbar.Collapse> */}
			</Container>
		</Navbar>
	);
}
