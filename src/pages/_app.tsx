import "@/styles/globals.css";
import "focus-visible";

import Head from "next/head";
import { AppProps } from "next/app";

import { CustomPage } from "@/CustomPage";
import AppLayout from "@/components/Layout";

type CustomAppProps = Omit<AppProps, "Component"> & {
    Component: CustomPage;
}

function MyApp({ Component, pageProps }: CustomAppProps) {
    const Layout = Component.Layout || AppLayout.Empty;

    return (
        <>
            <Head>
                <title>Next JS Template</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
