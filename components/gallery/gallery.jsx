"use client"
import React, {useContext, useState} from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import Item from "@/components/galleries/item";
import {GalleryContext} from "@/providers/GalleryProvider";

const Gallery = () => {
    const {galleries, totalPages} = useContext(GalleryContext);
    const [data, setData] = useState(galleries);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchGallery = async (page) => {
        try {
            const res = await fetch(`https://berd.dahk.am/api/gallery-images?page=${page}`);
            const data = await res.json();
            if (data.success) {
                setData(data.data.images);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    const handlePageClick = async (page) => {
        setCurrentPage(page);
        await fetchGallery(page);
    };

    const getPaginationRange = () => {
        const maxPagesToShow = 5;
        const range = [];

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                range.push(i);
            }
        } else {
            range.push(1);

            if (currentPage > 3) {
                range.push("...");
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                range.push(i);
            }

            if (currentPage < totalPages - 2) {
                range.push("...");
            }

            if (!range.includes(totalPages)) {
                range.push(totalPages);
            }
        }

        return range;
    };

    return (
        <div className='gallery w-full  '>
            <PageBanner/>
            <div className='w-full h-auto mt-15 flex items-center justify-center'>
                <div className='w-[90%] h-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {data.map((item, index) => (
                            <Item item={item} key={index}/>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex space-x-2">
                            {getPaginationRange().map((page, index) => (
                                <button
                                    key={index}
                                    onClick={() => page !== "..." && handlePageClick(page)}
                                    className={`px-4 py-2 rounded-lg ${
                                        page === currentPage
                                            ? "bg-[#151784] text-white"
                                            : "bg-white text-[#151784] border border-gray-300 hover:bg-[#151784] hover:text-white"
                                    }`}
                                    disabled={page === "..."}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Gallery;