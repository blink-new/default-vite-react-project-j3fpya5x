import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Zap, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../components/Card';

export default function HomePage() {
  const features = [
    {
      name: 'Performance',
      description: 'Get the fastest page loads for your users with optimized builds.',
      icon: <Zap className="h-6 w-6 text-vercel-blue" />,
    },
    {
      name: 'Global Edge Network',
      description: 'Deploy to a global edge network for fast content delivery.',
      icon: <Globe className="h-6 w-6 text-vercel-blue" />,
    },
    {
      name: 'Developer Experience',
      description: 'Focus on building your product, not managing infrastructure.',
      icon: <Code className="h-6 w-6 text-vercel-blue" />,
    },
  ];

  const testimonials = [
    {
      quote: "Deploying with Vercel has transformed our workflow. It's incredibly fast and reliable.",
      author: "Jane Doe",
      role: "CTO, TechCorp"
    },
    {
      quote: "The developer experience is unmatched. Our team's productivity has increased dramatically.",
      author: "John Smith",
      role: "Lead Developer, StartupX"
    },
    {
      quote: "Vercel's global edge network ensures our users have a lightning-fast experience worldwide.",
      author: "Sarah Johnson",
      role: "Product Manager, GlobalApp"
    }
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Develop. Preview. <span className="vercel-gradient-text">Ship.</span>
            </h1>
            <p className="text-xl md:text-2xl text-accents-5 max-w-3xl mx-auto mb-8">
              Vercel combines the best developer experience with an obsessive focus on end-user performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-8">
                Start Deploying
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Get a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px w-full bg-vercel-gradient"></div>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Platform for Your Next Web Project
            </h2>
            <p className="text-xl text-accents-5 max-w-3xl mx-auto">
              Everything you need to build faster, more scalable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accents-5">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accents-1 dark:bg-accents-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-xl text-accents-5 max-w-3xl mx-auto">
              Join thousands of developers and companies building on Vercel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardContent className="flex-grow">
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter className="border-t border-accents-2 dark:border-accents-7 pt-4">
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-accents-5">{testimonial.role}</p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg">
            <div className="gradient-animation absolute inset-0 opacity-10"></div>
            <div className="relative p-8 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to get started?
                </h2>
                <p className="text-lg text-accents-5 max-w-md mb-6 md:mb-0">
                  Deploy your first project in seconds.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link to="/contact">
                  <Button className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}