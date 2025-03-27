import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your experienced data management enablement Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Take the <em>leap</em> with us to empower your organization with innovative strategies.
          </p>
          <p className="text-2xl font-bold mb-10">
            Enabling you to GET RESULTS
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#services" className="bg-white text-primary font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300">
              Our Services
            </Link>
            <Link href="/#contact" className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white hover:text-primary transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 