import '../styles/index.css'
import "@contentful/live-preview/style.css";
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react'

function MyApp({ Component, pageProps }) {
  return (
    <ContentfulLivePreviewProvider 
      locale='en-US'
      //enableLiveUpdates={pageProps.preview}
      enableInspectorMode={pageProps.draftMode} 
      enableLiveUpdates={pageProps.draftMode}
    >
    <Component {...pageProps}/>
    </ContentfulLivePreviewProvider>
  )
}

export default MyApp
