"use client"
import React, {useContext} from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import Content from "@/components/costume/content";
import {StudioContext} from "@/providers/StudioProvider";
import SliderComponent from "@/components/costume/slider";

const Studio = () => {
    const {costume, images} = useContext(StudioContext);
    return (
        <div className="costumes">
            <PageBanner />
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <Content title='Մեր ստուդիան' costume={costume}/>

                    <div className="w-full md:w-1/2 pt-6 md:pt-10">
                        <img
                            src="/performance1.png"
                            alt="Performance"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <SliderComponent images={images}/>

        </div>
    );
};

export default Studio;