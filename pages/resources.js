import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Resources from '../components/resources'

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>SAR Marketing Group | Resources </title>
                <meta name="description" content="Marketing group site created by three college students." />
            </Head>
            <Header/>
            <Resources/>
            <Footer/>
        </>
    )
}

