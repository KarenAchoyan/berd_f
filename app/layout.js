import "./globals.css";
import App from "@/components/layouts/app";
import {AppProvider} from "@/providers/AppProvider";

export const metadata = {
    title: "Berd dance Ensemble",
    description: "",
};

async function getEventsTypes(slug) {
    const res = await fetch(`https://berd.dahk.am/api/events/types`, {cache: "no-store"});
    return res.json();
}

export default async function RootLayout({children}) {
    const eventsTypes = await getEventsTypes(children);
    const data = eventsTypes.data;
    return (
        <html lang="en">
        <body>
        <AppProvider value={data}>
            <App>
                {children}
            </App>
        </AppProvider>
        </body>
        </html>
    );
}
