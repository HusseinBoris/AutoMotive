import React from 'react';
import Hero from '../components/Hero';
import PopularCategories from '../components/PopularCategories';
import FeaturedPost from '../components/FeaturedPost';
import PostCard from '../components/PostCard';
import LatestVideos from '../components/LatestVideos';
import CommunityHighlights from '../components/CommunityHighlights';
import NewsletterSignup from '../components/NewsletterSignup';

// Mock data for recent posts
const recentPosts = [
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
];

// Featured post data
const featuredPost = {
  id: '7',
  title: 'The Ultimate Guide to Buying Your First High-Performance Vehicle',
  excerpt: 'From financing to maintenance, insurance to track days - here\'s everything you need to know before taking the plunge into the world of high-performance automobiles. We speak with industry experts, veteran owners, and professional drivers to compile the most comprehensive guide for first-time buyers.',
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
};

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="container-custom py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
            <p className="text-text-secondary">
              Explore our handpicked selection of the best automotive content
            </p>
          </div>
          <a 
            href="/blog" 
            className="hidden sm:inline-block text-primary font-medium hover:underline"
          >
            View all articles
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedPost {...featuredPost} isFeatured={true} />
          
          {recentPosts.slice(0, 6).map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <a 
            href="/blog" 
            className="text-primary font-medium hover:underline"
          >
            View all articles
          </a>
        </div>
      </section>
      
      <PopularCategories />
      <LatestVideos />
      <CommunityHighlights />
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;