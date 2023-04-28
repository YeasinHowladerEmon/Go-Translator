import '@/styles/globals.css'
import '../styles/Home.css'
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
