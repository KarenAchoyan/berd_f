"use client"
import React, {useContext, useEffect, useState} from 'react';
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer"
import AnimationHeader from "./animationHeader";

const App = ({children}) => {
    const [showAnimationHeader, setShowAnimationHeader] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 500) {
                setShowAnimationHeader(true);
            } else {
                setShowAnimationHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <Header />
            <AnimationHeader show={showAnimationHeader}/>
            {children}
            <Footer/>
        </div>
    );
};

export default App;