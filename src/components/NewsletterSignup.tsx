import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  return (
    <section className="bg-surface py-16">
      <div className="container-custom">
        <div className="bg-primary/10 rounded-lg p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute w-64 h-64 rounded-full bg-primary/20 -top-20 -right-20"></div>
          <div className="absolute w-40 h-40 rounded-full bg-primary/20 -bottom-10 -left-10"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-text-secondary mb-8 md:text-lg">
              Subscribe to our newsletter and get the latest automotive news, reviews, and exclusive content delivered straight to your inbox.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-primary"
                  required
                />
                <button 
                  type="submit" 
                  className="btn btn-primary py-3 flex items-center justify-center"
                >
                  <Mail size={18} className="mr-2" />
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-text-tertiary text-sm">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;