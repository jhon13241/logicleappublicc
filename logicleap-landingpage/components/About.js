import { FaUsers, FaAward, FaCheckCircle } from 'react-icons/fa';

export default function About() {
  const benefits = [
    "We build trusted relationships",
    "We go the extra mile",
    "We add value by helping you achieve ROI",
    "We offer practical advice",
    "We Get Results"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our consultants bring a combined practical experience of over 20+ years in the data management 
              arena across industry verticals. Our result-oriented approach defines our zeal to help others.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-2" />
                What Sets Us Apart
              </h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaUsers className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                Our team comprises industry veterans with deep expertise in data management solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaAward className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Knowledge</h3>
              <p className="text-gray-600">
                We stay current with the latest trends and technologies in data management.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md col-span-full">
              <h3 className="text-xl font-semibold mb-2">Our Process</h3>
              <p className="text-gray-600">
                We understand your business needs and requirements, enabling us to customize an approach that 
                enhances the efficiency and effectiveness of your solutions. By leveraging industry standards and 
                the expertise of our architects and analysts, we identify the most effective strategies tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 