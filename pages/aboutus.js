import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import About from '../components/about';

export default function Aboutus() {
    return (
        <>
            <Head>
                <title>SAR Marketing Group | About us</title>
                <meta name="description" content="Marketing group site created by three college students." />
            </Head>
            <Header/>
            <About/>
            <Footer/>

            
        </>
    )
}

