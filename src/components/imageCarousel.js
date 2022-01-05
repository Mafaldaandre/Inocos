import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/homePage.css";

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
   
  };
  
  return (
    <div>
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <img className="imgSlider" src={item.src}  alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}