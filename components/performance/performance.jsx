"use client"
import React, {useContext, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./modal";
import ItemVideo from "./item";
import {MainContext} from "@/providers/MainProvider";



const Performance = () => {
    const [showModal, setShowModal] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const [video, setVideo] = useState(null);
    const {speeches} = useContext(MainContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // mobile landscape
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // mobile portrait
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function openModal() {
        setShowModal(!showModal);
        setVideoStarted(!videoStarted);
    }

    return (
        <>
            <div className="py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold">Ելույթներ</h1>
                    </div>
                    <div>
                        <Slider {...settings}>
                            {speeches.map((item) => (
                                <ItemVideo item={item} setVideo={setVideo} key={item.id} openModal={openModal}/>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {showModal && <Modal openModal={openModal} video={video} videoStarted={videoStarted}/>}


        </>
    );
};

export default Performance;
