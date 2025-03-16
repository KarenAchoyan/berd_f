"use client"
import React, {useContext} from 'react';
import {Image} from "antd";
import {MainContext} from "@/providers/MainProvider";

const Galleries = () => {
    const {galleries} = useContext(MainContext)
    return (
        <div className="container mx-auto my-10 px-4">
            <h2 className="text-3xl font-bold mb-6">Պարային նկարներ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleries.map((item, index) => (
                    <div key={index} className="item-gallery h-80 overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={process.env.IMAGE_URL2 + item?.image}
                            alt={`Dance ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            preview={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galleries;