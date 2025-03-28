import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import {Image} from "antd";
import {CalendarOutlined} from "@ant-design/icons";

const Page = () => {
    const news = [
        'Participation in the "Teaching for Success" Conference',
        'Workshop: "Challenges of Multimedia Translation"',
        'Educational Journey to the United Arab Emirates',
        'Psychology students of the European University of Armenia visited the ASIPCS "Sports Kab" scientific research center',
        'Dr. Reinhard Wagner Met with the EUA Academic & Administrative Staff',
        'The "Law Delegation" Has Launched!',
        'A meeting with Areg Gevorgyan',
        '"Khosrov Forest" Reserve: Results of a Hiking Trip in Winter Conditions',
        'Dr. Reinhard Wagner Met with EUA Partners',
    ];
    return (
        <div>
            <PageBanner/>
            <div className='container mx-auto'>
                <div className='flex flex-wrap px-5'>
                    <div className='w-full lg:w-[70%] '>
                        <div className='mt-10 single-blog'>
                            <Image preview={true} src='/banner.jpg' className='w-full h-[500px] object-cover'/>
                        </div>
                        <div>
                            <div className="flex items-center text-gray-500 text-sm mt-2">
                                <CalendarOutlined className="mr-1"/>
                                <span>October 8, 2019</span>
                            </div>
                            <div className='mt-10'>
                                <h1 className='text-5xl font-bold'> October 8, 2019
                                    Moving trough: the everyday urban jungle of your city</h1>
                                <div className="content mt-5">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed. Eiusmod tempor.
                                        incididu nt ut
                                        labore et dolore magna aliqua. Ut enim. ad minim veniam, uis nostrud exerc
                                        itation ullamco.
                                        Laboris nisi. ut aliquip ex ea commodo consequat. Duis aute irure dolr.
                                        inreprehen derit in
                                        voluptate velit esse cillum dolore. Eu fugiat nulla pariatur. Excep teur sint
                                        occaecat non
                                        proident, sunt in culpa qui officia deserunt mollit anim idlaborum. Sed ut persp
                                        iciatis
                                        unde omnis iste natus error sit. voluptatem accusantium doloremque laudantium,
                                        totam rem
                                        aperiam. Architecto beatae vitae dicta sunt explicabo.Eu fugiat nulla pariatur.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed. Eiusmod tempor.
                                        incididu nt ut
                                        labore et dolore magna aliqua. Ut enim. ad minim veniam, uis nostrud exerc
                                        itation ullamco.
                                        Laboris nisi. ut aliquip ex ea commodo consequat. Duis aute irure dolr.
                                        inreprehen derit in
                                        voluptate velit esse cillum dolore. Eu fugiat nulla pariatur. Excep teur sint
                                        occaecat non
                                        proident, sunt in culpa qui officia deserunt mollit anim idlaborum. Sed ut persp
                                        iciatis
                                        unde omnis iste natus error sit. voluptatem accusantium doloremque laudantium,
                                        totam rem
                                        aperiam. Architecto beatae vitae dicta sunt explicabo.Eu fugiat nulla pariatur.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed. Eiusmod tempor.
                                        incididu nt ut
                                        labore et dolore magna aliqua. Ut enim. ad minim veniam, uis nostrud exerc
                                        itation ullamco.
                                        Laboris nisi. ut aliquip ex ea commodo consequat. Duis aute irure dolr.
                                        inreprehen derit in
                                        voluptate velit esse cillum dolore. Eu fugiat nulla pariatur. Excep teur sint
                                        occaecat non
                                        proident, sunt in culpa qui officia deserunt mollit anim idlaborum. Sed ut persp
                                        iciatis
                                        unde omnis iste natus error sit. voluptatem accusantium doloremque laudantium,
                                        totam rem
                                        aperiam. Architecto beatae vitae dicta sunt explicabo.Eu fugiat nulla pariatur.
                                    </p>
                                </div>
                                <div className="images flex flex-wrap">
                                    <div className='w-1/2 md:w-1/4 p-2'>
                                        <Image preview={true} src='/banner.jpg' alt=''/>
                                    </div>
                                    <div className='w-1/2 md:w-1/4 p-2'>
                                        <Image preview={true} src='/banner.jpg' alt=''/>
                                    </div>
                                    <div className='w-1/2 md:w-1/4 p-2'>
                                        <Image preview={true} src='/banner.jpg' alt=''/>
                                    </div>
                                    <div className='w-1/2 md:w-1/4 p-2'>
                                        <Image preview={true} src='/banner.jpg' alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[30%] px-10">
                        <h2 className="text-xl font-bold mb-4 mt-10">Վերջին նորությունները</h2>
                        <ul className="border-t border-gray-300">
                            {news.map((item, index) => (
                                <li
                                    key={index}
                                    className="border-b border-gray-300 py-2 hover:bg-gray-100 transition duration-200 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;