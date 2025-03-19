import { motion } from 'framer-motion';
import { CheckCircle, Users, BarChart3, Globe, Zap, Shield } from 'lucide-react';
import Button from '../components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

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

  const values = [
    {
      title: 'Performance',
      description: 'We obsess over milliseconds because speed is a competitive advantage.',
      icon: <Zap className="h-6 w-6 text-vercel-blue" />,
    },
    {
      title: 'Global',
      description: 'We build for a worldwide audience with a global edge network.',
      icon: <Globe className="h-6 w-6 text-vercel-blue" />,
    },
    {
      title: 'Security',
      description: 'We implement industry best practices to keep your data safe.',
      icon: <Shield className="h-6 w-6 text-vercel-blue" />,
    },
    {
      title: 'Reliability',
      description: 'We engineer our platform for 99.99% uptime and reliability.',
      icon: <CheckCircle className="h-6 w-6 text-vercel-blue" />,
    },
    {
      title: 'Community',
      description: 'We foster an inclusive community of developers and creators.',
      icon: <Users className="h-6 w-6 text-vercel-blue" />,
    },
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of what's possible on the web.',
      icon: <BarChart3 className="h-6 w-6 text-vercel-blue" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="vercel-gradient-text">Vercel</span>
            </h1>
            <p className="text-xl text-accents-5 max-w-3xl mx-auto">
              Our mission is to make cloud computing accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-accents-5">
                <p>
                  Founded in 2019, Vercel was created with a simple mission: to provide the best developer experience for deploying frontend frameworks.
                </p>
                <p>
                  What started as a deployment platform for static sites has evolved into a comprehensive suite of tools and services for frontend developers.
                </p>
                <p>
                  Today, Vercel powers millions of websites and applications, from individual developers to large enterprises, all with the same commitment to performance and developer experience.
                </p>
              </div>
              <div className="mt-8">
                <Button>Learn More</Button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl"
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
      <section className="py-16 md:py-24 bg-accents-1 dark:bg-accents-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-accents-5 max-w-3xl mx-auto">
              The talented people behind our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person, index) => (
              <motion.div 
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={false} className="overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardContent className="text-center py-6">
                    <h3 className="text-xl font-semibold">{person.name}</h3>
                    <p className="text-accents-5">{person.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-accents-5 max-w-3xl mx-auto">
              The principles that guide our work every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="mb-4">{value.icon}</div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accents-5">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accents-1 dark:bg-accents-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-accents-5 max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals to join our mission.
          </p>
          <Button size="lg">View Open Positions</Button>
        </div>
      </section>
    </div>
  );
}