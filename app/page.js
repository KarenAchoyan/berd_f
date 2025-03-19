import Performance from "@/components/performance/performance";
import Tickets from "@/components/tickets/tickets";
import { VideoComponent } from "@/components/banner/banner";
import Galleries from "@/components/galleries/galleries";
import { MainProvider } from "@/providers/MainProvider";

async function getSpeeches() {
    const res = await fetch('https://berd.dahk.am/api/events/limit', { cache: "no-store" }); // Avoid caching if needed
    return res.json();
}

async function getGalleries() {
    const res = await fetch('https://berd.dahk.am/api/gallery-images/limit', { cache: "no-store" });
    return res.json();
}

export default async function Page() {
    const speeches = await getSpeeches();
    const galleries = await getGalleries();

    return (
        <MainProvider value={{ speeches:speeches.data, galleries:galleries.data, image: "/banner.jpg" }}>
            <VideoComponent />
            <Performance />
            <Tickets />
            <Galleries />
        </MainProvider>
    );
}
