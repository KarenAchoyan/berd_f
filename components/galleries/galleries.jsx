"use client"
import React, {useContext} from 'react';
import {Image} from "antd";
import {MainContext} from "@/providers/MainProvider";
import Item from "@/components/galleries/item";

const Galleries = () => {
    const {galleries} = useContext(MainContext)
    return (
        <div className="container mx-auto my-10 px-4">
            <h2 className="text-3xl font-bold mb-6">Պարային նկարներ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {galleries.map((item, index) => (
                    <Item item={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Galleries;