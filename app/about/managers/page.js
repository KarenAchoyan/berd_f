import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import {ManagerProvider} from "@/providers/ManagerProvider";
import Managers from "@/components/about/managers";


async function getManagers() {
    const res = await fetch('https://berd.dahk.am/api/managers', { cache: "no-store" })
    return res.json()
}

const Page = async () => {
    const managers = await getManagers();
    const data = managers.data;
    return (
        <div>
            <PageBanner title={''}/>
            <ManagerProvider value={data}>
                <Managers/>
            </ManagerProvider>
        </div>
    );
};

export default Page;