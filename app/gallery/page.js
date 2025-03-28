import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import Item from "@/components/galleries/item";
import {GalleryProvider} from "@/providers/GalleryProvider";
import Gallery from "@/components/gallery/gallery";

async function getGalleries() {
    const res = await fetch('https://berd.dahk.am/api/gallery-images', {cache: "no-store"});
    return res.json();
}

const Page = async () => {

    const galleries = await getGalleries()
    const totalPages = await galleries.data.total_pages || 1;
    return (
        <>
            <GalleryProvider value={{galleries:galleries.data.images, totalPages}}>
                <Gallery/>
            </GalleryProvider>
        </>
    );
};

export default Page;