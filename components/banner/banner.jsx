"use client";
import { useContext } from "react";
import { MainContext } from "@/providers/MainProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Banner() {
    const { images } = useContext(MainContext);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="relative w-full h-[300px] min-h-[300px] sm:h-[500px] md:h-[650px] lg:h-[800px] carousel-banner">
                    <div  className="relative w-full h-full">
                        <img
                            className="w-full h-full object-cover"
                            src={"berd.gif"}
                            alt={`Banner`}
                        />
                    </div>
        </div>
    );
}
