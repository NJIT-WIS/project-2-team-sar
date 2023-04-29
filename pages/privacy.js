import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Privacy from '../components/privacy'

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>SAR Marketing Group | Privacy Policy</title>
                <meta name="description" content="Marketing group site created by three college students." />
            </Head>
            <Header/>
            <Privacy/>
            <Footer/>
        </>
    )
}

