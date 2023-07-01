import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const AssociatedFoundations = () => {
	const foundations = [
		{
			name: 'Garras y Patas',
			photo: 'https://lh3.googleusercontent.com/p/AF1QipPLNcjJt9AUQUPdXdoNOntu_GNu9RzWUwRyXZPm=s1360-w1360-h1020',
			description: 'Breve descripción de la fundación A.',
			webpage: 'https://www.garrasypatas.cl/',
		},
		{
			name: 'Huella Animal',
			photo: 'https://fundacionhuellaanimal.cl/wp-content/uploads/2022/06/0019_hakake-1.jpg',
			description: 'Breve descripción de la fundación B.',
			webpage: 'https://fundacionhuellaanimal.cl/',
		},
		{
			name: 'Fundación animal cl',
			photo: 'https://fundacionanimal.cl/wp-content/uploads/2022/09/logo2.png',
			description: 'Breve descripción de la fundación C.',
			webpage: 'https://fundacionanimal.cl/',
		},
		{
			name: 'Fundación D',
			photo: 'ruta/a/la/foto-d.jpg',
			description: 'Breve descripción de la fundación D.',
			webpage: 'www.foundationD.com',
		},
	]
	const tarjetas = foundations.map((foundation, index) => (
		<Col key={index}>
			<Card className='h-100' style={{ backgroundColor: '#dbe6de' }}>
				<Card.Header>
					<Card.Title className='text-center'>{foundation.name}</Card.Title>
				</Card.Header>
				<Card.Img className='p-2' src={foundation.photo} />
				<Card.Body className='position-relative'>
					<Card.Text>{foundation.description}</Card.Text>
				</Card.Body>
				<Card.Footer className='text-center'>
					<Button className='w-50' variant='success' href={foundation.webpage} target='_blank'>
						Sitio Web
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	))

	return (
		<Container
			fluid
			className='p-4'
			style={{
				background:
					'linear-gradient(90deg, rgba(180, 222, 191, 0.6168592436974789) 19%, rgba(126, 148, 84, 1) 71%)',
			}}
		>
			<div>
				<h1 className='text-center mb-3'>
					Fundaciones <i className='bi bi-house-door-fill fs-1'></i>
				</h1>
				<h5 className='mb-5'>
					Aquí te mostramos las fundaciones en alianza con nuestra aplicación donde podrás conocer más a fondo
					la labor de cada una de estas organizaciones dedicadas al rescate, rehabilitación, cuidado,
					reubicación y adopción de mascotas abandonadas. Cada mascota tiene su historia particular y todos
					necesitan tu aporte. Puedes ser voluntario, realizar aportes monetarios, difundir la pagina de la
					fundación, contactarte con ellos entre otros.
				</h5>
			</div>

			<Row xs={1} md={2} lg={4}>
				{tarjetas}
			</Row>
		</Container>
	)
}

export default AssociatedFoundations
