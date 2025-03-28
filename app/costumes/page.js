import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Costume from "@/components/costume/costume";
import {CostumeProvider} from "@/providers/CostumeProvider";


async function getCostumes() {
    const res = await fetch(`https://berd.dahk.am/api/our-costume`, {cache: "no-store"});
    return res.json();
}
async function getCostumeImages() {
    const res = await fetch(`https://berd.dahk.am/api/costume-images`, {cache: "no-store"});
    return res.json();
}

export default async function Page() {
    const costume = await getCostumes();
    const images = await getCostumeImages();

    return(
        <>
            <CostumeProvider value={{costume,images:images.data}}>
                <Costume/>
            </CostumeProvider>
        </>
    )
};

