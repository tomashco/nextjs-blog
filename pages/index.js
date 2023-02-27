import Link from 'next/link'
import Layout from '../components/templates/Layout'
import Calculator from '../components/molecules/Calculator' // TODO: understand why with jest, the relative path with @ is not working
import TodoApp from '../components/molecules/TodoApp'

export default function Home() {
  return (
    <Layout home>
      <h1 className="text-3xl font-bold">
        Go to <Link href="/posts/first-post">this page!</Link>
      </h1>
      <hr className="mt-6 mb-3" />
      <TodoApp />
      <Calculator />
    </Layout>
  )
}
