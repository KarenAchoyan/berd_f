import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import {Carousel, Image} from "antd";

const Page = () => {
    const images = [
        {id: 1, path: '/1.jpg'},
        {id: 2, path: '/1.jpg'},
        {id: 3, path: '/1.jpg'},
        {id: 4, path: '/1.jpg'},
        {id: 5, path: '/1.jpg'},
        {id: 6, path: '/1.jpg'},
        {id: 7, path: '/1.jpg'},
        {id: 8, path: '/1.jpg'},
        {id: 9, path: '/1.jpg'},
        {id: 10, path: '/1.jpg'},

    ]

    return (
        <div className='costumes '>
            <PageBanner/>
            <div className="container m-auto">
                <div className='w-full  flex justify-center items-center flex-wrap'>
                    <div className='w-full md:w-[50%]  h-full pr-10'>
                        <h3 className='text-3xl my-5'>Մեր տարազները</h3>
                        <p>
                            Հայկական տարազը հազարամյակների խորքից է գալիս և իր մեջ է արտացոլում հայ ազգի ամբողջական
                            պատմությունը՝ հեթանոսական դարաշրջանից մինչև մեր օրերը: Հայկական տարազի մասին տեղեկություններ ենք
                            ստացել ժայռապատկերների վերլուծություններից, պատմագիրների հաղորդած որոշ տվյալներից (Փ. Բուզանդ,
                            Թ. Արծրունի, Քսենոփոն): Տարազը ազգային հատկանիշները բացատրող գլխավոր գույներից մեկն է։ Հայկական
                            ազգային տարազի գունային մտածողության մեջ գերակշռում է հիմնականում կարմիրը, մանիշակագույնը,
                            շիրանին, մուգ կանաչ, շականակագույնը, կապույտի բազմաթիվ երանգներ և սևը:
                        </p>
                    </div>
                    <div className='w-full md:w-[50%] h-full'>
                        <iframe
                            className='w-full h-[300px] lg:h-[400px] my-10'
                            src="https://www.youtube.com/embed/T1GnvQOGD4o?si=kshL58NMacA0hws0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-6">
                <Carousel
                    autoplay
                    dots
                    infinite
                    slidesToShow={5}
                    arrows={true}
                    touchMove={true}
                    responsive={[
                        {breakpoint: 1280, settings: {slidesToShow: 3}},
                        {breakpoint: 1024, settings: {slidesToShow: 2}},
                        {breakpoint: 768, settings: {slidesToShow: 1}},
                    ]}
                >
                    {images.map((src, index) => (
                        <div key={index} className="h-[250px] w-[250px] item-carousel">
                            <Image
                                src={src.path}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Page;