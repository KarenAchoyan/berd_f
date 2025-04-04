"use client";
import React, { useContext, useState } from "react";
import Item from "@/components/blog/item";
import { NewsContext } from "@/providers/NewsProvider";

const All = () => {
    const { data, totalPages } = useContext(NewsContext);
    const [news, setNews] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchNews = async (page) => {
        try {
            const res = await fetch(`https://berd.dahk.am/api/blogs?page=${page}`);
            const data = await res.json();
            if (data.success) {
                setNews(data.data.news);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    const handlePageClick = async (page) => {
        setCurrentPage(page);
        await fetchNews(page);
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
        <div>
            <div>
                {news?.map((item, index) => {
                    const slug = item?.title?.toLowerCase().replace(/\s+/g, "-"); // Convert title to slug
                    return (
                        <Item reverse={index % 2 === 0} slug={slug} item={item} key={index} />
                    );
                })}
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
    );
};

export default All;
