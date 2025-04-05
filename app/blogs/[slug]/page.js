import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import {Image} from "antd";
import {CalendarOutlined} from "@ant-design/icons";
import Details from "@/components/blog/details";
import Head from "next/head";
import parse from "html-react-parser";
import {truncateText} from "@/utils/utils";

async function getSingleNews(slug) {
    try {
        const res = await fetch(`https://berd.dahk.am/api/blogs/${slug}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return {success: false, message: `Error ${res.status}: News not found`};
        }

        const data = await res.json();
        return {success: true, data};
    } catch (error) {
        return {success: false, message: "Failed to fetch news"};
    }
}

export async function generateMetadata({ params }) {
    const result = await getSingleNews(params.slug);

    if (!result.success || !result.data || !result.data.data) {
        return {
            title: 'Blog Post Not Found',
            openGraph: {
                title: 'Blog Post Not Found',
                description: 'This blog post could not be found.',
            },
        };
    }

    const data = result.data.data;
    const title = data.title || "Blog Post";
    const description = truncateText(parse(data?.content  || "Read our latest blog post on various topics."), 160)
    const image = process.env.IMAGE_URL + data.avatar || "/default-avatar.png"; // Fallback image if no avatar

    return {
        title: `${title} | Blog`,
        openGraph: {
            title: title,
            description: description,
            image: image,
            type: 'article',
            url: `https://berd-f.vercel.app/blog/${params.slug}`,
        },
    };
}

const Page = async ({params}) => {
    const result = await getSingleNews(params.slug);
    const data = await result.data.data;
    const lastNews = result.data.lastNews;
    return (
        <div>
            <PageBanner/>
            <Details data={data} lastNews={lastNews}/>
        </div>
    );
};

export default Page;