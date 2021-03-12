import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {

    render() {
        return (
            <Html>
                <Head />

                <body className="font-sans">
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}

export default Document;
