import Image from "next/image";
import {CalendarOutlined} from "@ant-design/icons";
import Item from "@/components/blog/item";
import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <div className="text-center py-5">
                <h1 className="text-4xl font-bold">
                    Բլոգ
                </h1>
            </div>
            <Item/>
            <Item reverse={true}/>
            <div className="text-center py-5">
                <Link href={'/blogs'}>
                    <button className='px-5 py-2 border-black border-[1px] cursor-pointer'>ՏԵսնել բոլորը</button>
                </Link>
            </div>

        </div>

    );
}
