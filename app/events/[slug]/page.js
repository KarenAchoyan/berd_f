import React from 'react';
import AllSpeeches from "@/components/performance/AllSpeeches";
import {SpeechesProvider} from "@/providers/SpeechesProvider";


async function getVideos(slug) {
    const res = await fetch(`https://berd.dahk.am/api/getFromCategory/${slug}`, { cache: "no-store" });
    return res.json();
}

const Page = async ({params}) => {
    const {slug} = await params;
    const videos = await getVideos(slug);
    return (
        <>
           <SpeechesProvider value={videos}>
               <AllSpeeches/>
           </SpeechesProvider>
        </>
    );
};

export default Page;