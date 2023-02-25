import Link from 'next/link'
import Layout from '@components/templates/Layout'

import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>first post title</title>
      </Head>
      <Layout>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  )
}
