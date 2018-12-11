import React from 'react';
import Slider from 'react-slick';

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const generateSlides = ({slides}) => {
    if(slides){
         return (
            <Slider {...settings}>
                {slides.map((item)=>{
                    console.log({background:`url(/images/covers/${item.cover}) no-repeat`});
                    return (
                        <div key={item.id}>
                            <div style={{background:`url(/images/covers/${item.cover}) no-repeat`}} className="item_slider">
                                <div className="caption">
                                    <h4>{item.topic}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                        )  
                })}
            </Slider>
        )
    }
}

const Featured = (props) => {
    return(
        <div>
            {generateSlides(props)}
        </div>
    )
}


export default Featured