// Imports //
import React from 'react'
import { Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';

function Arena() {

    return (
      <Container fluid>
        <Row>
          <Col>

          <CardGroup>
      <Card className="overflow bg-dark text-white shadow-lg" style={{ color: "#000", width: "24rem" }}>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fA_20eNEkCENNl6Bt_10IAHaEK%26pid%3DApi&f=1&ipt=8c7d841cc6c4a182d18506b4a1e01c777beb3d70bb5a3798d646fc73843c38bf&ipo=images/100px160" 
        className="rounded" alt="Card Image" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="overflow bg-dark text-white shadow-lg" style={{ color: "#000", width: "24rem" }}>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RvTHWPsb8jEfc-5qNuhllQHaEK%26pid%3DApi&f=1&ipt=c6a8d57fef32a6358e863f62f19fa13624d81b6617412e84ecbd094f01d657e4&ipo=images/100px160" 
        className="rounded" alt="Card Image" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="overflow bg-dark text-white shadow-lg" style={{ color: "#000", width: "24rem" }}>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._LUJwNMLIY7KbmsQf6rXlgHaEK%26pid%3DApi&f=1&ipt=c14a92624d08a4f6c9968c8c97f9b78e18a83b89fc2b11a69d1a9cc569eea9f2&ipo=images/100px160" 
        className="rounded" alt="Card Image" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Col>
    </Row>
    </Container>

    );

}

export default Arena;