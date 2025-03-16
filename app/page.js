import Performance from "@/components/performance/performance";
import Tickets from "@/components/tickets/tickets";
import {Suspense} from "react";
import {VideoComponent} from "@/components/banner/banner";
import Galleries from "@/components/galleries/galleries";
import {MainProvider} from "@/providers/MainProvider";

async function getSpeeches() {
    try {
        const res = await fetch('https://berd.dahk.am/api/speeches');
        if (!res.ok) {
            throw new Error('Failed to fetch speeches');
        }
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];  // Return an empty array if fetching fails
    }
}

async function getGalleries() {
    try {
        const res = await fetch('https://berd.dahk.am/api/galleries');
        if (!res.ok) {
            throw new Error('Failed to fetch galleries');
        }
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function Home() {
    const speeches = await getSpeeches();
    const galleries = await getGalleries();

    return (
        <MainProvider value={{speeches, galleries}}>
            <VideoComponent/>
            <Performance/>
            <Tickets/>
            <Galleries/>
        </MainProvider>
    );
}
