import type { AppProps } from "next/app"
import {Provider} from "./Context/ClosedsContext"
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
    console.log("desde app")

    return (
        <Provider>
            <Component {...pageProps}/>
        </Provider> 
    )
}
