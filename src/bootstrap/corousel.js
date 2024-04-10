import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/s72UvEE.jpg"
          alt="First slide"
           height={750}
           width={500}
        />
        <Carousel.Caption>
          <h3 style={{color:'whitesmoke'}}>HAPPY HALLOWEEN</h3>
          <p style={{color:'whitesmoke'}}>Aaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20230612/original/pngtree-wallpapers-with-scary-pumpkins-in-the-night-picture-image_3178927.jpg"
          alt="Second slide"
          height={750}
           width={500}
        />
        <Carousel.Caption>
          <h3 style={{color:'whitesmoke'}}>Someone is here</h3>
          <p style={{color:'whitesmoke'}}>Seeee backkkkkkkkkkkkkkk BOOOOOOOOOOOOOOOOOOOO.....</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20230611/original/pngtree-halloween-ghost-wallpaper-4k-5k-picture-image_3171155.jpg"
          alt="Third slide"
          height={750}
           width={500}
        />
        <Carousel.Caption>
          <h3 style={{color:'whitesmoke'}}>Help meeeeeeeeeeeeeeeee</h3>
          <p style={{color:'whitesmoke'}}>
            Boooooooooooooooooooooooooooooooooooooooooooooooooooooooo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;