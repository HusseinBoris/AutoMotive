import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'reviews',
    name: 'Car Reviews',
    image: 'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg',
    count: 42,
  },
  {
    id: 'news',
    name: 'Industry News',
    image: 'https://images.pexels.com/photos/3806268/pexels-photo-3806268.jpeg',
    count: 38,
  },
  {
    id: 'guides',
    name: 'Buying Guides',
    image: 'https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg',
    count: 29,
  },
  {
    id: 'maintenance',
    name: 'Maintenance Tips',
    image: 'https://images.pexels.com/photos/3807327/pexels-photo-3807327.jpeg',
    count: 24,
  },
];

const PopularCategories: React.FC = () => {
  return (
    <section className="container-custom py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Discover content tailored to your automotive interests and passions
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/blog/category/${category.id}`}
            className="group"
          >
            <div className="card relative overflow-hidden h-64">
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-text-secondary text-sm">
                  {category.count} articles
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;