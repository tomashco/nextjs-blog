import ProfilePicture from '../atoms/ProfilePicture'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
  home: boolean
}

const name = "Tomashco's blog"

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <header className="">
        <Head>
          <title>Tomashco&apos;s blog</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="flex flex-col items-center border-b-2 border-cyan-600">
          {home ? (
            <>
              <ProfilePicture
                home
                src="/images/fotoProfilo.png"
                alt="Tomashco"
              />
              <h1 className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text py-6 text-3xl font-bold text-transparent drop-shadow-lg">
                {name}
              </h1>
            </>
          ) : (
            <>
              <Link href="/">
                <ProfilePicture src="/images/fotoProfilo.png" alt="Tomashco" />
              </Link>
              <h2 className="py-6 text-xl drop-shadow-lg">
                <Link href="/" className="">
                  {name}
                </Link>
              </h2>
            </>
          )}
        </div>
      </header>
      <main className="h-full flex-grow  border-b-2 border-cyan-600 ">
        {children}
      </main>
      <footer className="">
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
    </div>
  )
}
