import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import {ManagerProvider} from "@/providers/ManagerProvider";
import Managers from "@/components/about/managers";

async function getManagers() {
    try {
        const res = await fetch('https://berd.dahk.am/api/managers');
        if (!res.ok) {
            throw new Error('Failed to fetch galleries');
        }
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

const Page = async () => {
    const managers = await getManagers();

    return (
        <div>
            <PageBanner title={''}/>
            <ManagerProvider value={managers}>
                <Managers/>
            </ManagerProvider>
        </div>
    );
};

export default Page;