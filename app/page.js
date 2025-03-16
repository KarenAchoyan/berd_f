import Image from "next/image";
import Performance from "@/components/performance/performance";
import Tickets from "@/components/tickets/tickets";
import { Suspense } from "react";
import { VideoComponent } from "@/components/banner/banner";
import Galleries from "@/components/galleries/galleries";
import { MainProvider } from "@/providers/MainProvider";

// Async function to fetch speeches data
async function getSpeeches() {
    const res = await fetch('https://berd.dahk.am/api/speeches');
    if (!res.ok) {
        throw new Error('Failed to fetch speeches');
    }
    return res.json();
}

// Async function to fetch galleries data
async function getGalleries() {
    const res = await fetch('https://berd.dahk.am/api/galleries');
    if (!res.ok) {
        throw new Error('Failed to fetch galleries');
    }
    return res.json();
}

export default async function Home() {
    // Fetching data directly inside the component
    const speeches = await getSpeeches();
    const galleries = await getGalleries();
    const videoUrl = "./berd_banner.mp4";

    return (
        <>
            <MainProvider value={{ videoUrl, speeches, galleries }}>
                <div className="relative w-full h-[400px] sm:h-[600px] md:h-[800px] overflow-hidden">
                    <Suspense fallback={<p>Loading video...</p>}>
                        <VideoComponent />
                    </Suspense>
                </div>
                <Performance />
                <Tickets />
                <Galleries />
            </MainProvider>
        </>
    );
}
