import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Studio from "@/components/studio/studio";
import {StudioProvider} from "@/providers/StudioProvider";

async function getCostumes() {
    const res = await fetch(`https://berd.dahk.am/api/our-studio`, {cache: "no-store"});
    return res.json();
}
async function getCostumeImages() {
    const res = await fetch(`https://berd.dahk.am/api/studio-images`, {cache: "no-store"});
    return res.json();
}

async function Page() {
    const costume = await getCostumes();
    const images = await getCostumeImages();
    return (
        <>
            <StudioProvider value={{costume, images:images.data}}>
                <Studio/>
            </StudioProvider>
        </>
    );
}

export default Page