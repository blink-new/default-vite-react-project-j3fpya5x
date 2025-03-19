import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Security', href: '#' },
      ]
    }
  ];
  
  return (
    <footer className="border-t border-accents-2 dark:border-accents-7 bg-background dark:bg-background-dark">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-flex items-center">
              <span className="text-xl font-bold">Vercel</span>
            </Link>
            <p className="mt-4 text-sm text-accents-5 max-w-xs">
              Develop. Preview. Ship.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-accents-5 hover:text-foreground dark:hover:text-foreground-dark transition-colors">
                <span className="sr-only">Github</span>
                <Github size={20} />
              </a>
              <a href="#" className="text-accents-5 hover:text-foreground dark:hover:text-foreground-dark transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="#" className="text-accents-5 hover:text-foreground dark:hover:text-foreground-dark transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground dark:text-foreground-dark">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-accents-5 hover:text-foreground dark:hover:text-foreground-dark transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-accents-2 dark:border-accents-7">
          <p className="text-xs text-accents-5">
            &copy; {currentYear} Vercel, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}