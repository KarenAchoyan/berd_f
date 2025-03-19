"use client"
import React, {useContext, useState} from 'react';
import ItemVideo from "@/components/performance/item";
import Modal from "@/components/performance/modal";
import {SpeechesContext} from "@/providers/SpeechesProvider";
import PageBanner from "@/components/pageBanner/pageBanner";

const AllSpeeches = () => {
    const [showModal, setShowModal] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const [video, setVideo] = useState(null);

    function openModal() {
        setShowModal(!showModal);
        setVideoStarted(!videoStarted);
    }

    const speeches = useContext(SpeechesContext);
    return (
        <>
            <PageBanner/>
            <div className='container m-auto my-20'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {speeches?.map((item) => (
                        <ItemVideo item={item} setVideo={setVideo} key={item.id} openModal={openModal}/>
                    ))}
                </div>
                {showModal && <Modal openModal={openModal} video={video} videoStarted={videoStarted}/>}
            </div>
        </>
    );
};

export default AllSpeeches;