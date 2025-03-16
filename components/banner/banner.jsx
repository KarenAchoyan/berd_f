"use client"
import Image from "next/image";

export function VideoComponent() {
    return (
        <div className="relative w-full h-[800px]">
          <Image className="w-full h-full object-cover" src={"/banner.jpg"} alt={"Banner"} width={1200} height={800} />
        </div>
    );
}
