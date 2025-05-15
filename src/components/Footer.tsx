import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-primary">Auto<span className="text-white">Motive</span></span>
            </Link>
            <p className="text-text-secondary mb-6">
              Your trusted source for automotive news, reviews, and community discussions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/blog" className="text-text-secondary hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/community" className="text-text-secondary hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/blog/category/reviews" className="text-text-secondary hover:text-primary transition-colors">Car Reviews</Link></li>
              <li><Link to="/blog/category/news" className="text-text-secondary hover:text-primary transition-colors">Industry News</Link></li>
              <li><Link to="/blog/category/guides" className="text-text-secondary hover:text-primary transition-colors">Buying Guides</Link></li>
              <li><Link to="/blog/category/maintenance" className="text-text-secondary hover:text-primary transition-colors">Maintenance Tips</Link></li>
              <li><Link to="/blog/category/tech" className="text-text-secondary hover:text-primary transition-colors">Automotive Tech</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-text-secondary mb-4">Stay updated with our latest articles and news.</p>
            <form className="mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:border-primary"
                />
                <button 
                  type="submit" 
                  className="btn btn-primary flex items-center justify-center"
                >
                  <Mail size={16} className="mr-2" />
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-text-tertiary">
          <p>&copy; {new Date().getFullYear()} AutoMotive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;