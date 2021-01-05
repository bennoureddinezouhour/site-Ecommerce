
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function CarouselLogo() {
  var settings = {
   
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
      <div className='container mt-5'>
    <Slider {...settings} >
      <div>
       <img src='https://www.tunisianet.com.tn/modules/wblogoslider/views/img/d2459ec74fad18dfaa1aad282c4bb9da5054ad43_marque_hp.png' className="img-responsive center-block" width='100'/>
      </div>
      <div>
      <img src='https://www.tunisianet.com.tn/modules/wblogoslider/views/img/08c934caf40880d89ad321b8626278474cf2b204_marque_lenovo.png' className="img-responsive center-block" width='100' />
      </div>
      <div>
      <img src='https://www.tunisianet.com.tn/modules/wblogoslider/views/img/8c6efd560cede847e8daeb38da9988a4331a7081_marque_asus.png' className="img-responsive center-block"width='100' />
      </div>
      <div>
      <img src='https://www.tunisianet.com.tn/modules/wblogoslider/views/img/e892dbd79887420ab520e13d98b411002e9b7eac_marque_acer.png' className="img-responsive center-block" width='100'/>
      </div>
      <div>
      <img src='https://www.tunisianet.com.tn/modules/wblogoslider/views/img/e8c341e49f558c584e689f4ecf003335ea343665_marque_dell.png' className="img-responsive center-block" width='100'/>
      </div>
      <div>
      <img src='https://www.tunisianet.com.tn/modules/wblogoslider/views/img/ae65910c2092e2e907dfa26a6a76f281c7c6bfe7_marque_huawei.png' className="img-responsive center-block" width='100' />
      </div>
      <div>
      <img src='https://www.tunisianet.com.tn/modules/wblogoslider/views/img/2617db8253af14d8ab6c118e97c9a08e282020c6_marque_samsung.png' className="img-responsive center-block" width='100' />   
      </div>
      <div>
      <img src='https://www.tunisianet.com.tn/modules/wblogoslider/views/img/69be67b14825e97210c3840388e599bfd68d7237_marque_apple.png' width='100' />   
      </div>
    </Slider>
    </div>
  );
}