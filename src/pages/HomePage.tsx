import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const features = [
    {
      name: 'Modern Design',
      description: 'Clean and responsive design that looks great on all devices.',
      icon: <CheckCircle className="h-6 w-6 text-indigo-500" />,
    },
    {
      name: 'User-Friendly',
      description: 'Intuitive navigation and clear information architecture.',
      icon: <Users className="h-6 w-6 text-indigo-500" />,
    },
    {
      name: 'Performance',
      description: 'Optimized for speed and efficiency to provide the best user experience.',
      icon: <BarChart3 className="h-6 w-6 text-indigo-500" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to SimpleWeb
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
              A beautiful and functional website template for your next project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/about" 
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium shadow-md transition-colors"
              >
                Learn More
              </Link>
              <Link 
                to="/contact" 
                className="bg-indigo-700 hover:bg-indigo-800 px-6 py-3 rounded-md font-medium shadow-md transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create a stunning online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Ready to get started?
                </h2>
                <p className="mt-2 text-lg text-indigo-100 max-w-md">
                  Contact us today to learn more about our services.
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-white text-indigo-600 hover:bg-gray-50 px-6 py-3 rounded-md font-medium shadow-md transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}