import { FaDatabase, FaChartBar, FaCogs, FaSearchPlus, FaShieldAlt, FaTable } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Metadata Management",
      description: "We help unlock the value of your data by helping define the relationships between your business and technical metadata.",
      icon: <FaDatabase className="w-12 h-12 text-primary mb-4" />
    },
    {
      id: 2,
      title: "Data Intelligence",
      description: "We help you in discovering the best artificial intelligence and machine learning tools in the industry to find meaningful data from large datasets.",
      icon: <FaSearchPlus className="w-12 h-12 text-primary mb-4" />
    },
    {
      id: 3,
      title: "Data Governance",
      description: "We will help you define a strategic framework to manage and govern your data assets within the enterprise including integrity and security best practices.",
      icon: <FaShieldAlt className="w-12 h-12 text-primary mb-4" />
    },
    {
      id: 4,
      title: "Reference Data Management",
      description: "We help establish processes to classify and track changes across business lines and systems within the enterprise using best practices.",
      icon: <FaTable className="w-12 h-12 text-primary mb-4" />
    },
    {
      id: 5,
      title: "Data Quality",
      description: "We help define strategies to make sure the data is suited for your needs including accuracy, completeness, consistency, validity, uniqueness, and timeliness.",
      icon: <FaCogs className="w-12 h-12 text-primary mb-4" />
    },
    {
      id: 6,
      title: "Business Intelligence",
      description: "We help identify solutions and strategies to manage the data analysis and business information.",
      icon: <FaChartBar className="w-12 h-12 text-primary mb-4" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We assist you with your data management, business intelligence, and metadata 
            management implementations using our strategies based on best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 