import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { RiHomeSmileFill } from "react-icons/ri";


const FundacionesDeAdopcion = () => {
    // Datos de ejemplo de fundaciones
    const fundaciones = [
        {
            nombre: 'Fundación Garras y Patas',
            foto: 'https://lh3.googleusercontent.com/p/AF1QipPLNcjJt9AUQUPdXdoNOntu_GNu9RzWUwRyXZPm=s1360-w1360-h1020',
            descripcion: 'Breve descripción de la fundación A.',
            paginaWeb: 'https://www.garrasypatas.cl/',
        },
        {
            nombre: 'Fundación Huella Animal',
            foto: 'https://fundacionhuellaanimal.cl/wp-content/uploads/2022/06/0019_hakake-1.jpg',
            descripcion: 'Breve descripción de la fundación B.',
            paginaWeb: 'https://fundacionhuellaanimal.cl/',
        },
        {
            nombre: 'Fundación Funadación animal cl',
            foto: 'https://fundacionanimal.cl/wp-content/uploads/2022/09/logo2.png',
            descripcion: 'Breve descripción de la fundación C.',
            paginaWeb: 'https://fundacionanimal.cl/',
        },
        {
            nombre: 'Fundación D',
            foto: 'ruta/a/la/foto-d.jpg',
            descripcion: 'Breve descripción de la fundación D.',
            paginaWeb: 'www.fundaciond.com',
        },
    ];
    const tarjetas = fundaciones.map((fundacion, index) => (
        <Col key={index} >
            <Card className="shadow-lg d-flex h-100 p-2" style={{ backgroundColor: '#dbe6de' }}>
                <Card.Img variant="top"  src={fundacion.foto} />
                <Card.Body>
                    <Card.Title>{fundacion.nombre}</Card.Title>
                    <Card.Text>{fundacion.descripcion}</Card.Text>
                    <Button variant="success" href={fundacion.paginaWeb} target="_blank">
                        Sitio Web
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    ));

    return (
        <Container className="Cards" style={{
            background: 'rgb(180, 222, 191)',
            background: 'linear-gradient(90deg, rgba(180, 222, 191, 0.6168592436974789) 19%, rgba(126, 148, 84, 1) 71%)'
        }}>

            <div>
                <h1 className="text-center mb-4"> Fundaciones <RiHomeSmileFill /> </h1>
                <h5> Aquí te mostramos las fundaciones en alianza con nuestra aplicación donde podrás conocer más a fondo la labor de cada una de estas organizaciones dedicadas al rescate, rehabilitación, cuidado, reubicación y adopcion de mascotas abandonadas.
                    Cada mascota tiene su historia 

                    particular y todos necesitan tu aporte. Puedes ser voluntario, realizar aportes monetarios, difundir la pagina de la fundación, contactarte con ellos entre otros. </h5>
            </div>

            <Row className="h-100 align-items-stretch">{tarjetas}</Row>
        </Container>
    );
};

export default FundacionesDeAdopcion;
