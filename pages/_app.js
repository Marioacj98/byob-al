import '@/styles/globals.css'
import 'swiper/swiper.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Layout from '@/components/Layout'
import ShopProvider from '@/context/shopContext'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={useRouter.asPath} />
      </Layout>
    </ShopProvider>
  )
}
