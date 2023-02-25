import Head from 'next/head'
import Image from 'next/image'

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Tomashco&apos;s blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>{children}</main>
      <footer>
        Powered by{' '}
        <div
          style={{
            width: '15rem',
            height: '5rem',
            position: 'relative',
          }}
        >
          <Image
            fill
            style={{ objectFit: 'contain' }}
            src="/images/tomashcoLogo.png"
            alt="TomashcoLogo"
          />
        </div>
      </footer>
    </>
  )
}
