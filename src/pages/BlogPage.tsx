import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import PostCard from '../components/PostCard';
import FeaturedPost from '../components/FeaturedPost';
import NewsletterSignup from '../components/NewsletterSignup';

// Use the same mock data as in HomePage
const allPosts = [
  {
    id: '1',
    title: 'The Evolution of Electric Vehicle Charging Infrastructure',
    excerpt: 'An in-depth look at how EV charging networks are expanding globally and what it means for electric vehicle adoption.',
    author: {
      name: 'Jessica Miller',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    publishDate: 'May 15, 2025',
    readTime: '8 min read',
    commentCount: 24,
    likeCount: 86,
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3935235/pexels-photo-3935235.jpeg'
  },
  {
    id: '2',
    title: 'How to Properly Maintain Your Car\'s Paint Job',
    excerpt: 'Expert tips on keeping your vehicle\'s exterior looking showroom-new, from washing techniques to protection products.',
    author: {
      name: 'Robert Chen',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    publishDate: 'May 12, 2025',
    readTime: '6 min read',
    commentCount: 18,
    likeCount: 73,
    category: 'Maintenance',
    image: 'https://images.pexels.com/photos/2922140/pexels-photo-2922140.jpeg'
  },
  // Featured post
  {
    id: '7',
    title: 'The Ultimate Guide to Buying Your First High-Performance Vehicle',
    excerpt: 'From financing to maintenance, insurance to track days - here\'s everything you need to know before taking the plunge into the world of high-performance automobiles.',
    author: {
      name: 'Michael Reeves',
      avatar: 'https://i.pravatar.cc/150?img=7'
    },
    publishDate: 'May 18, 2025',
    readTime: '15 min read',
    commentCount: 68,
    likeCount: 221,
    category: 'Buying Guide',
    image: 'https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg'
  },
  {
    id: '3',
    title: 'The Resurgence of Station Wagons in the Modern Era',
    excerpt: 'How this once-declining body style is making a stylish comeback with new designs and technology.',
    author: {
      name: 'David Thompson',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    publishDate: 'May 10, 2025',
    readTime: '5 min read',
    commentCount: 12,
    likeCount: 45,
    category: 'Trends',
    image: 'https://images.pexels.com/photos/1428408/pexels-photo-1428408.jpeg'
  },
  {
    id: '4',
    title: 'Why German Engineering Still Sets the Standard for Luxury Cars',
    excerpt: 'Examining the principles and practices that keep German automakers at the forefront of premium vehicle manufacturing.',
    author: {
      name: 'Sophia Wagner',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    publishDate: 'May 7, 2025',
    readTime: '7 min read',
    commentCount: 31,
    likeCount: 98,
    category: 'Industry',
    image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg'
  },
  {
    id: '5',
    title: 'First Drive: 2026 Porsche Macan Electric',
    excerpt: 'We take Porsche\'s latest all-electric SUV for a spin to see if it lives up to the brand\'s sporting heritage.',
    author: {
      name: 'Jason Martinez',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    publishDate: 'May 5, 2025',
    readTime: '9 min read',
    commentCount: 42,
    likeCount: 113,
    category: 'Reviews',
    image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg'
  },
  {
    id: '6',
    title: 'The Future of Autonomous Driving: Where We Stand in 2025',
    excerpt: 'A comprehensive analysis of self-driving technology and its current implementation across global markets.',
    author: {
      name: 'Emily Johnson',
      avatar: 'https://i.pravatar.cc/150?img=6'
    },
    publishDate: 'May 3, 2025',
    readTime: '10 min read',
    commentCount: 37,
    likeCount: 104,
    category: 'Technology',
    image: 'https://images.pexels.com/photos/1624505/pexels-photo-1624505.jpeg'
  },
  // Additional posts
  {
    id: '8',
    title: 'Aftermarket Modifications That Actually Increase Your Car\'s Value',
    excerpt: 'Contrary to popular belief, some modifications can enhance rather than decrease your vehicle\'s resale potential.',
    author: {
      name: 'Tyler Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=8'
    },
    publishDate: 'April 30, 2025',
    readTime: '7 min read',
    commentCount: 26,
    likeCount: 82,
    category: 'Modifications',
    image: 'https://images.pexels.com/photos/3082519/pexels-photo-3082519.jpeg'
  },
  {
    id: '9',
    title: 'Classic Car Investment Guide: Models Set to Appreciate in the Next Decade',
    excerpt: 'Automotive experts predict which vintage vehicles are positioned to become the most valuable collector items.',
    author: {
      name: 'Isabella Garcia',
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
    publishDate: 'April 26, 2025',
    readTime: '11 min read',
    commentCount: 34,
    likeCount: 95,
    category: 'Investment',
    image: 'https://images.pexels.com/photos/2062281/pexels-photo-2062281.jpeg'
  },
];

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'reviews', name: 'Reviews' },
  { id: 'news', name: 'Industry News' },
  { id: 'guides', name: 'Buying Guides' },
  { id: 'technology', name: 'Technology' },
  { id: 'maintenance', name: 'Maintenance' },
  { id: 'trends', name: 'Trends' },
  { id: 'modifications', name: 'Modifications' },
];

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const featuredPost = allPosts.find(post => post.id === '7');
  
  // Filter posts based on search query and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                            post.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      {/* Page Header */}
      <section className="bg-surface pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The AutoMotive Blog</h1>
          <p className="text-text-secondary text-xl max-w-3xl">
            Discover the latest automotive news, in-depth reviews, and expert insights into the world of cars
          </p>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="bg-background py-8 border-b border-border sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" size={18} />
            </div>
            
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-surface border border-border rounded-md py-2 pl-4 pr-10 focus:outline-none focus:border-primary"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" size={18} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && searchQuery === '' && (
        <section className="container-custom py-12">
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
          <FeaturedPost {...featuredPost} isFeatured={true} />
        </section>
      )}
      
      {/* All Posts */}
      <section className="container-custom py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {searchQuery || selectedCategory !== 'all'
              ? 'Search Results'
              : 'Latest Articles'}
          </h2>
          <div className="flex items-center text-text-secondary text-sm">
            <span>{filteredPosts.length} articles</span>
            <button className="ml-4 flex items-center">
              <span className="mr-1">Latest</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.filter(post => post.id !== '7' || selectedCategory !== 'all' || searchQuery !== '').map(post => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-text-secondary mb-4">No articles found matching your criteria</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn btn-secondary"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
      
      <NewsletterSignup />
    </div>
  );
};

export default BlogPage;