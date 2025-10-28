import Head from 'next/head'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import DashboardLayout from '../components/layouts/DashboardLayout'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isDashboard = router.pathname === '/dashboard' || router.pathname.startsWith('/dashboard/')

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Replymaster</title>
      </Head>
      {isDashboard ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}