import Head from 'next/head';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Us - LogicLeap Consulting</title>
        <meta name="description" content="Get in touch with LogicLeap Consulting to discuss your data management needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <div className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
            We're here to help you optimize your data management strategy. Reach out to our team for personalized solutions.
          </p>
        </div>
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
} 