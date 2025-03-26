import React, { useState } from 'react';
import { PlayCircleOutlined } from "@ant-design/icons";
import { Skeleton,Image } from "antd";

const ItemVideo = ({ openModal, item, setVideo }) => {
    const [isLoading, setIsLoader] = useState(true);

    function op() {
        openModal();
        setVideo(item.youtube_link);
    }

    return (
        <>
            <div className="relative w-[95%] h-[300px] m-auto">
                <img
                    src={process.env.IMAGE_URL + item?.avatar}
                    alt=""
                    onLoad={() => setIsLoader(false)}
                    className={`${isLoading ? 'opacity-100' : 'opacity-100'} transition-opacity duration-500 w-full h-full object-cover`}
                />

                <div
                    className="imageVideo absolute inset-0 flex items-center justify-center bg-[#0000006b]  cursor-pointer"
                    onClick={op}
                >
                    <PlayCircleOutlined className="text-white text-5xl" />
                </div>
            </div>
        </>
    );
};

export default ItemVideo;
