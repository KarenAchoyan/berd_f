import Performance from "@/components/performance/performance";
import Tickets from "@/components/tickets/tickets";
import {Banner} from "@/components/banner/banner";
import Galleries from "@/components/galleries/galleries";
import {MainProvider} from "@/providers/MainProvider";
import Blog from "@/components/blog/blog";

async function getSpeeches() {
    const res = await fetch('https://berd.dahk.am/api/events/limit', {cache: "no-store"});
    return res.json();
}

async function getBlogs() {
    const res = await fetch('https://berd.dahk.am/api/blogs_limit', {cache: "no-store"});
    return res.json();
}

async function getGalleries() {
    const res = await fetch('https://berd.dahk.am/api/gallery-images/limit', {cache: "no-store"});
    return res.json();
}

async function getInfo() {
    const res = await fetch('https://berd.dahk.am/api/getInfo', {cache: "no-store"})
    return res.json()
}

async function getSliders() {
    const res = await fetch('https://berd.dahk.am/api/sliders', {cache: "no-store"})
    return res.json()
}

async function getTickets() {
    const res = await fetch('https://berd.dahk.am/api/tickets', {cache: "no-store"})
    return res.json()
}

export default async function Page() {
    const speeches = await getSpeeches();
    const galleries = await getGalleries();
    const infos = await getInfo();
    const sliders = await getSliders();
    const tickets = await getTickets();
    const blogs = await getBlogs();
    return (
        <MainProvider
            value={{speeches: speeches.data, galleries: galleries.data, images: sliders, tickets, blogs: blogs.data}}>
            <Banner/>
            <Performance/>
            {tickets?.data?.length > 0 && (
                <Tickets/>
            )}
            <Galleries/>
        </MainProvider>
    );
}
