"use client"
import React from 'react';
import {Image} from "antd";
import Slider from "react-slick";

const SliderComponent = ({images}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1280, // Large screens
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 1024, // Tablets
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768, // Mobile
                settings: { slidesToShow: 1 },
            },
        ],
    };
    return (
        <div className="container mx-auto overflow-x-hidden py-[50px]">
            <Slider {...settings}>
                {images?.map((src, index) => (
                    <div key={index} className="px-2">
                        <Image
                            preview={true}
                            src={process.env.IMAGE_URL+src.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full sm:max-w-[280px] h-[250px] object-cover shadow-lg mx-auto "
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;