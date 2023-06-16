import '@/styles/globals.css'
import { Context } from '@/components/context'

export default function App({ Component, pageProps }) {

    return (
      <Context>
        <Component {...pageProps} />
      </Context>
    )
}
