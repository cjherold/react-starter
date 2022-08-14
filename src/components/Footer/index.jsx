import { Container, Row } from 'react-bootstrap';

export default function Footer() {
	return (
		<>
			<Container id='footer' fluid>
				<Row className='p-3'>
					<div className='col mx-auto'>
						<p className='text-center my-auto'>Footer 2022</p>
					</div>
				</Row>
			</Container>
		</>
	);
}
