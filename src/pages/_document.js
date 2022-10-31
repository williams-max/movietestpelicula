import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>

       
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