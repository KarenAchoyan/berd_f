"use client";
import React from "react";
import PageBanner from "@/components/pageBanner/pageBanner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Image} from "antd";

const Page = () => {
    const images = [
        { id: 1, path: "/1.jpg" },
        { id: 2, path: "/1.jpg" },
        { id: 3, path: "/1.jpg" },
        { id: 4, path: "/1.jpg" },
        { id: 5, path: "/1.jpg" },
        { id: 6, path: "/1.jpg" },
        { id: 7, path: "/1.jpg" },
        { id: 8, path: "/1.jpg" },
        { id: 9, path: "/1.jpg" },
        { id: 10, path: "/1.jpg" },
    ];

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
        <div className="costumes">
            <PageBanner />
            <div className="container mx-auto px-4">
                {/* Text and Video Section */}
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 pr-4">
                        <h3 className="text-3xl my-5">Մեր տարազները</h3>
                        <p>
                            Հայկական տարազը հազարամյակների խորքից է գալիս և իր մեջ է արտացոլում հայ ազգի ամբողջական պատմությունը՝
                            հեթանոսական դարաշրջանից մինչև մեր օրերը: Հայկական տարազի մասին տեղեկություններ ենք ստացել
                            ժայռապատկերների վերլուծություններից, պատմագիրների հաղորդած որոշ տվյալներից (Փ. Բուզանդ, Թ. Արծրունի,
                            Քսենոփոն): Տարազը ազգային հատկանիշները բացատրող գլխավոր գույներից մեկն է։ Հայկական ազգային տարազի գունային
                            մտածողության մեջ գերակշռում է հիմնականում կարմիրը, մանիշակագույնը, շիրանին, մուգ կանաչ, շականակագույնը,
                            կապույտի բազմաթիվ երանգներ և սևը:
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <iframe
                            className="w-full h-[250px] md:h-[350px] lg:h-[400px] my-10"
                            src="https://www.youtube.com/embed/T1GnvQOGD4o?si=kshL58NMacA0hws0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Image Carousel */}
            <div className="container mx-auto overflow-x-hidden py-[50px]">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="px-2">
                            <Image
                                preview={true}
                                src={src.path}
                                alt={`Slide ${index + 1}`}
                                className="w-full sm:max-w-[280px] h-[250px] object-cover shadow-lg mx-auto"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Page;
