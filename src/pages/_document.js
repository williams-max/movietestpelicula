import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>

<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <Head>

                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                 

                </Head>

                <body>

                    <Main />
                    <NextScript />



                </body>
            </Html>
        );
    }
}

export default MyDocument;