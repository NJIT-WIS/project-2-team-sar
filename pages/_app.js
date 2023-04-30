//import '../styles/globals.css'
import script from 'next/script'

function App({ Component, pageProps }) {
  return (  
      <>
        <script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"/>
        <script id="gtag-init" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
                page_path: window.location.pathname,
              });
              `,
          }}
          />     
        <Component {...pageProps} />
      
      </>
  )
}

export default App