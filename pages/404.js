import {FaExclamationTriangle} from 'react-icons/fa'
import Layout from '@/components/Layout';
import styels from '@/styles/404.module.css';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <Layout title='Page Not found'>
            <div className={styels.error}>
                <h1>
                    <FaExclamationTriangle/>
                    404
                </h1>
                <h4>Sorry , the page does not exist</h4>
                <Link href='/'><a>Go Back Home</a></Link>
            </div>
        </Layout>
    )
}
