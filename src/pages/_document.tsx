import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/header'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>F1 | Next.js POC</title>
                <meta name="description" content="SSR POC with Next.js consuming F1 API" />
            </Head>
            <body>
                <Header />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}