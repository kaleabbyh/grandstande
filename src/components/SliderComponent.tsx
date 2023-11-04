import IMG1 from "../assets/images/buna.jpg";
import IMG2 from "../assets/images/011.jpg";
import IMG3 from "../assets/images/s01.jpg";
import IMG4 from "../assets/images/medicineSlider.png";
import IMG6 from "../assets/images/s02.jpg";
import IMG7 from "../assets/images/s03.jpg";
import IMG8 from "../assets/images/s04.jpg";
import IMG9 from "../assets/images/s06.jpg";
import IMG10 from "../assets/images/s07.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const IMAGES = [
    { ImgUrl: IMG1, title: "COFFE FARM" },
    { ImgUrl: IMG2, title: "SESAME SEED FARM" },
    { ImgUrl: IMG3, title: "KETORAN PLC" },
    { ImgUrl: IMG4, title: "MPORT AND DISTRIBUTION" },
    { ImgUrl: IMG6, title: "OUR TEAM" },
    { ImgUrl: IMG7, title: "EXPORT COFFEE" },
    { ImgUrl: IMG8, title: "MANUFACTURING" },
    { ImgUrl: IMG9, title: "OUR STORE" },
    { ImgUrl: IMG10, title: "MANUFACTURING SOCKS" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings} className=" h-screen w-full overflow-hidden ">
        {IMAGES.map((IMAGE, index) => (
          <div className=" relative" key={index}>
            <img
              src={IMAGE.ImgUrl}
              alt="Image 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center ">
              <h1 className="text-white uppercase  font-semibold text-6xl border border-white">
                <div className="border border-white px-4 p-2 m-0.5 bg-purple-600 bg-opacity-10">
                  {IMAGE.title}
                </div>
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
