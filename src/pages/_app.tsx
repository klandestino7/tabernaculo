import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Head from "next/head";
import { DefaultSeo } from "next-seo";

import defaultSeoConfig from "../../next-seo.config";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from '@/styles/customTheme';

import Layout from '@/layout';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={customTheme}>
            <Head>
                <meta name="viewport" content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>

            
            <DefaultSeo {...defaultSeoConfig} />

        </ChakraProvider>
    )
}