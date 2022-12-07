import { Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid>
        <Row>
        <Col>
        <CardGroup>
        <Card className=" overflow bg-dark text-white shadow-lg" style={{ width: '24rem' }}>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2WYQyFr_oQGfkq6kJejAjAHaEK%26pid%3DApi&f=1&ipt=2877fbdbd49300727f7e9c93bd890ff4fc3df0b7e011cce4094f1da7ffca860f&ipo=images/100px180" 
        className="rounded" alt="card Image ref" />
        <Card.Body>
        <Card.Title>Arena</Card.Title>
        <Card.Text>
          Watch live battles from the arena, played by the one and only War Nebula.
          bulk of the cards content.
        </Card.Text>
        <Button variant="outline-primary">Go to Videos</Button>
      </Card.Body>
    </Card>

    <Card className="bg-dark text-white shadow-lg" style={{ width: '24rem' }}>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhdqwalls.com%2Fwallpapers%2Fspiderman-marvel-contest-of-champions-mv.jpg&f=1&nofb=1&ipt=1f220d9950c22a299f34a6deb6c7191b6aacf92f0466be015ea8dda6828e918f&ipo=images/100px180" 
      className="rounded" alt="card Image ref" />
      <Card.Body>
        <Card.Title>Play Like a Champion</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="outline-primary">Login here</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </Col>

    </Row>
    <Row>
        <Col>

        <Card className="text-center overflow bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
        <Card.Header>Page Info</Card.Header>
        <Card.Body>
          <Card.Title>Marvel Contest of Champions fan page</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="outline-primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      </Col>
      </Row>
    </Container>
  );
}

export default Home;