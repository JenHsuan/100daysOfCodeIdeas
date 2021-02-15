import React from 'react'
import { AppProps } from 'next/app'
import '../components/i18n'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp
