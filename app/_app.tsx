import type { AppProps } from "next/app"
import {Provider} from "./Context/ClosedsContext"
import React from 'react';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }: AppProps) {
    console.log("desde app")
    const router = useRouter();
    return (
        <Provider>
            <Component {...pageProps}  key={router.asPath}/>
        </Provider> 
    )
}