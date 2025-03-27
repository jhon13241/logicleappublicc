import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Page Not Found - LogicLeap Consulting</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Head>

      <Navbar />
      
      <section className="flex items-center justify-center min-h-[70vh] bg-gray-50 py-16">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link href="/" className="bg-primary text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Return to Homepage
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 