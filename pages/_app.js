//import '../styles/globals.css'
import script from 'next/script'

function App({ Component, pageProps }) {
  return (  
      <>
        <script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-WFZBBHQ7H6"/>
        <script id="gtag-init" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config','G-WFZBBHQ7H6',{
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