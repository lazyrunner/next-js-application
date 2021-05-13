import Layout from '@/components/Layout';
import Link from 'next/link';

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link href='/aboutus'>about</Link>
    </Layout>
  )
}
