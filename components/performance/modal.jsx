import React from 'react';

const Modal = ({ openModal, video }) => {
    // Check if the video prop has a valid value
    const youtubeEmbedLink = video ? `https://www.youtube.com/embed/${video}` : '';

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                onClick={openModal}
            ></div>
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-white z-50 p-4 rounded-lg shadow-lg"
            >
                <iframe
                    width="100%"
                    height="100%"
                    src={youtubeEmbedLink}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                />
            </div>
        </>
    );
};

export default Modal;
