import { motion } from 'framer-motion';

export default function AboutPage() {
  const team = [
    {
      name: 'Jane Doe',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'John Smith',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Sarah Johnson',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our company and our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Founded in 2023, SimpleWeb began with a simple mission: to create beautiful, 
                  functional websites that help businesses succeed online.
                </p>
                <p>
                  What started as a small team of passionate designers and developers has grown 
                  into a full-service web development agency serving clients worldwide.
                </p>
                <p>
                  We believe that great design and technology should be accessible to everyone. 
                  That's why we work closely with our clients to understand their unique needs 
                  and deliver solutions that exceed expectations.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our team working together" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented people behind our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person, index) => (
              <motion.div 
                key={person.name}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                  <p className="text-indigo-600">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Quality', description: 'We never compromise on quality. Every pixel, every line of code is crafted with care.' },
              { title: 'Innovation', description: 'We stay at the forefront of technology to deliver cutting-edge solutions.' },
              { title: 'Collaboration', description: 'We believe in working closely with our clients to achieve the best results.' },
              { title: 'Integrity', description: 'We are honest, transparent, and ethical in all our business practices.' },
              { title: 'Creativity', description: 'We approach each project with fresh ideas and creative thinking.' },
              { title: 'Results', description: 'We focus on delivering measurable results that help our clients succeed.' },
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-gray-50 p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}