import React from 'react';
import Article4 from '../../components/articles/article4';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Head from 'next/head'

export default function Article4Page() {
    return (
        <>
            <Head>
                <title>SAR Marketing Group | Resources </title>
                <meta name="description" content="Marketing group site created by three college students." />
            </Head>
            <Header/>
            <Article4 />
            <Footer/>
        </>
    )
}
