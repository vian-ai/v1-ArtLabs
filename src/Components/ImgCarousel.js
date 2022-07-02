import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';

const ImgCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="carouselImg"
                    src={img1}
                    alt="First slide"
                    style={{
                        width: '100%',
                        height: '60%'
                    }}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="carouselImg"
                    src={img2}
                    alt="Second slide"
                    style={{
                        width: '100%',
                        height: '60%'
                    }}
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="carouselImg"
                    src={img3}
                    alt="Third slide"
                    style={{
                        width: '100%',
                        height: '60%'
                    }}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="carouselImg"
                    src={img4}
                    alt="Third slide"
                    style={{
                        width: '100%',
                        height: '60%'
                    }}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImgCarousel;