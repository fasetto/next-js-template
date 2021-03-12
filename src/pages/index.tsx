import Head from 'next/head'

export default function Home() {
    return (
        <div className="min-h-screen px-2 flex flex-col items-center">
            <Head>
                <title>Nexy JS Template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="py-20 flex flex-col justify-center">
                <h1 className="text-black font-semibold text-4xl">
                    Welcome to Next.js!
               </h1>
            </main>
        </div>
    );
}
