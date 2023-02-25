import Link from 'next/link'
import ProfilePicture from '@components/atoms/ProfilePicture'
import Layout from '@components/templates/Layout'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        Go to <Link href="/posts/first-post">this page!</Link>
      </h1>
      <div
        style={{
          height: '20rem',
          width: '15rem',
          position: 'relative',
        }}
      >
        <ProfilePicture src="/images/fotoProfilo.png" alt="Tomashco" />
      </div>
    </Layout>
  )
}
