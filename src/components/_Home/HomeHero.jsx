import React from 'react'
import { Container, Row } from 'react-bootstrap';

export default function HomeHero() {
  return (
    <Container fluid className='home-hero'>
        <Row>
            <h1>React Starter</h1>
            <hr />
            <h3>Home Page</h3>
        </Row>
    </Container>
  )
}
