import Carousel from 'react-bootstrap/Carousel';


function Navigation() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-fade" data-bs-interval="20000"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8Y3C4156EjgtXMZ5iWnHYQHaEK%26pid%3DApi&f=1&ipt=ae1a5aca692163ab8e3d5b82e921e714a28c54681e4814f3949de3822df93bff&ipo=images"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Wear the best brands</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000" 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechin.id%2Fwp-content%2Fuploads%2F2020%2F03%2FTentang-Marvel-Contest-of-Champions.jpg&f=1&nofb=1&ipt=555cbba93fbe82e241d91d4627d58a95e1d4a84811cd2ca62aeea08d8b1b4e05&ipo=images"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Eat amazing food</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5c%2Fba%2F8f%2F5cba8f70a79a55341913a71908bc3293.png&f=1&nofb=1&ipt=d59baacd81416ca02dcc47d160fce51f9b529740f39f6c5820cd224143b7faee&ipo=images"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Enjoy the best life style</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Navigation;