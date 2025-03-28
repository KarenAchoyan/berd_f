"use client"
import React, {useContext} from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import Content from "@/components/costume/content";
import {getYouTubeVideoId} from "@/utils/utils";
import SliderComponent from "@/components/costume/slider";

import {CostumeContext} from "@/providers/CostumeProvider";
const Costume = () => {
    const {costume, images} = useContext(CostumeContext);
    return (
        <div className="costumes">
            <PageBanner/>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <Content title='Մեր տարազները' costume={costume}/>
                    <div className="w-full md:w-1/2">
                        <iframe
                            className="w-full h-[250px] md:h-[350px] lg:h-[400px] my-10"
                            src={`https://www.youtube.com/embed/${getYouTubeVideoId(costume.data.youtube_url)}?si=kshL58NMacA0hws0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <SliderComponent images={images}/>

        </div>
    );
};

export default Costume;