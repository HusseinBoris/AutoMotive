import React, { useState } from 'react';
import { Search, MessageSquare, Heart, Share2, Filter, TrendingUp, Clock, Plus } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

// Mock discussion data
const discussions = [
  {
    id: '1',
    title: 'Which SUV has the best fuel economy in 2025?',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?img=11',
    },
    replies: 34,
    likes: 87,
    shares: 12,
    excerpt: 'Looking for recommendations on fuel-efficient SUVs. I\'m comparing the Toyota RAV4 Hybrid, Honda CR-V Hybrid, and Ford Escape Plug-in. Any real-world experiences?',
    tags: ['SUV', 'Fuel Economy', 'Hybrid'],
    timeAgo: '3 hours ago',
  },
  {
    id: '2',
    title: 'Manual vs. DCT - Which is better for track days?',
    author: {
      name: 'Sarah Williams',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    replies: 56,
    likes: 124,
    shares: 18,
    excerpt: 'Planning to take my car to the track regularly. Debating whether to go with a manual or a dual-clutch transmission. Would love to hear from experienced track drivers.',
    tags: ['Track', 'Transmission', 'Performance'],
    timeAgo: '8 hours ago',
  },
  {
    id: '3',
    title: 'First-time classic car buyer - Need advice',
    author: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    replies: 47,
    likes: 93,
    shares: 21,
    excerpt: 'I\'m looking to buy my first classic car (1960s-70s era). What are the common pitfalls to avoid? Any recommendations for models that are relatively reliable and have good parts availability?',
    tags: ['Classic Cars', 'Buying Advice', 'Restoration'],
    timeAgo: '1 day ago',
  },
  {
    id: '4',
    title: 'Best ceramic coating for daily drivers?',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=13',
    },
    replies: 39,
    likes: 76,
    shares: 14,
    excerpt: 'I\'m looking to protect my daily driver with a ceramic coating. There are so many options on the market - which ones have you found to be the most durable and easy to maintain?',
    tags: ['Detailing', 'Ceramic Coating', 'Paint Protection'],
    timeAgo: '2 days ago',
  },
  {
    id: '5',
    title: 'Insurance rates for young drivers on sports cars',
    author: {
      name: 'Jason Lee',
      avatar: 'https://i.pravatar.cc/150?img=22',
    },
    replies: 28,
    likes: 52,
    shares: 9,
    excerpt: 'I\'m 23 and looking to buy my first sports car. Anyone in a similar age bracket willing to share their insurance experiences? Which companies offered the best rates?',
    tags: ['Insurance', 'Sports Cars', 'Young Drivers'],
    timeAgo: '3 days ago',
  },
  {
    id: '6',
    title: 'Unusual but reliable cars for under $15k?',
    author: {
      name: 'Sophia Martinez',
      avatar: 'https://i.pravatar.cc/150?img=16',
    },
    replies: 63,
    likes: 108,
    shares: 25,
    excerpt: 'I\'m looking for something different that stands out from the crowd but won\'t leave me stranded. Budget is $15k max. Any suggestions for interesting but dependable options?',
    tags: ['Budget Cars', 'Unique Vehicles', 'Used Market'],
    timeAgo: '4 days ago',
  },
];

// Topic categories
const topics = [
  { id: 'all', name: 'All Topics' },
  { id: 'maintenance', name: 'Maintenance & Repairs' },
  { id: 'buying', name: 'Buying Advice' },
  { id: 'modifications', name: 'Modifications' },
  { id: 'performance', name: 'Performance' },
  { id: 'classics', name: 'Classic Cars' },
  { id: 'evs', name: 'Electric Vehicles' },
  { id: 'shows', name: 'Shows & Events' },
];

const CommunityPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [sortOption, setSortOption] = useState('trending');
  
  // Filter discussions based on search and topic
  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          discussion.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || 
                         discussion.tags.some(tag => tag.toLowerCase().includes(selectedTopic.toLowerCase()));
    
    return matchesSearch && matchesTopic;
  });
  
  // Sort discussions based on selected option
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (sortOption === 'trending') {
      return b.likes - a.likes;
    } else if (sortOption === 'recent') {
      return discussions.findIndex(d => d.id === a.id) - discussions.findIndex(d => d.id === b.id);
    } else {
      return b.replies - a.replies;
    }
  });
  
  return (
    <div>
      {/* Page Header */}
      <section className="bg-surface pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Car Community</h1>
          <p className="text-text-secondary text-xl max-w-3xl">
            Join the conversation with fellow automotive enthusiasts. Ask questions, share experiences, and connect with car lovers from around the world.
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
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" size={18} />
            </div>
            
            <div className="relative">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="appearance-none bg-surface border border-border rounded-md py-2 pl-4 pr-10 focus:outline-none focus:border-primary"
              >
                {topics.map(topic => (
                  <option key={topic.id} value={topic.id}>
                    {topic.name}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" size={18} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Discussions */}
      <section className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Community Discussions</h2>
              
              <div className="flex text-sm">
                <button 
                  onClick={() => setSortOption('trending')}
                  className={`flex items-center px-3 py-1 rounded-l-md ${
                    sortOption === 'trending' 
                      ? 'bg-primary text-white' 
                      : 'bg-surface text-text-secondary hover:text-primary'
                  }`}
                >
                  <TrendingUp size={14} className="mr-1" />
                  Trending
                </button>
                <button 
                  onClick={() => setSortOption('recent')}
                  className={`flex items-center px-3 py-1 ${
                    sortOption === 'recent' 
                      ? 'bg-primary text-white' 
                      : 'bg-surface text-text-secondary hover:text-primary'
                  }`}
                >
                  <Clock size={14} className="mr-1" />
                  Recent
                </button>
                <button 
                  onClick={() => setSortOption('discussed')}
                  className={`flex items-center px-3 py-1 rounded-r-md ${
                    sortOption === 'discussed' 
                      ? 'bg-primary text-white' 
                      : 'bg-surface text-text-secondary hover:text-primary'
                  }`}
                >
                  <MessageSquare size={14} className="mr-1" />
                  Most Discussed
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {sortedDiscussions.length > 0 ? (
                sortedDiscussions.map(discussion => (
                  <div key={discussion.id} className="card p-6 transition-all hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <img 
                        src={discussion.author.avatar} 
                        alt={discussion.author.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                          {discussion.title}
                        </h3>
                        
                        <p className="text-text-secondary mb-3">
                          {discussion.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {discussion.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between">
                          <div className="flex items-center text-text-tertiary text-sm">
                            <span className="mr-4">By {discussion.author.name}</span>
                            <span>{discussion.timeAgo}</span>
                          </div>
                          
                          <div className="flex items-center gap-4 text-text-tertiary text-sm">
                            <div className="flex items-center">
                              <MessageSquare size={16} className="mr-1" />
                              <span>{discussion.replies}</span>
                            </div>
                            <div className="flex items-center">
                              <Heart size={16} className="mr-1" />
                              <span>{discussion.likes}</span>
                            </div>
                            <div className="flex items-center">
                              <Share2 size={16} className="mr-1" />
                              <span>{discussion.shares}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 bg-surface rounded-lg">
                  <p className="text-xl text-text-secondary mb-4">No discussions found matching your criteria</p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedTopic('all');
                    }}
                    className="btn btn-secondary"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Start a Discussion */}
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Start a Discussion</h3>
              <p className="text-text-secondary mb-4">
                Have a question or want to share your automotive experience? Create a new discussion thread.
              </p>
              <button className="btn btn-primary w-full flex items-center justify-center">
                <Plus size={18} className="mr-2" />
                New Discussion
              </button>
            </div>
            
            {/* Popular Tags */}
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="bg-background hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors">
                  SUV
                </a>
                <a href="#" className="bg-background hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors">
                  Electric Vehicles
                </a>
                <a href="#" className="bg-background hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors">
                  Maintenance
                </a>
                <a href="#" className="bg-background hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors">
                  Performance
                </a>
                <a href="#" className="bg-background hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors">
                  Classic Cars
                </a>
                <a href="#" className="bg-background hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors">
                  DIY Repairs
                </a>
                <a href="#" className="bg-background hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors">
                  Sports Cars
                </a>
                <a href="#" className="bg-background hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors">
                  Off-roading
                </a>
                <a href="#" className="bg-background hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors">
                  Car Shows
                </a>
              </div>
            </div>
            
            {/* Community Guidelines */}
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Be respectful and considerate to other members
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Stay on topic and avoid off-topic discussions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  No advertising or self-promotion
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Share knowledge and help others when possible
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Use appropriate language and avoid conflicts
                </li>
              </ul>
              <a href="#" className="text-primary hover:underline block mt-3">
                Read full guidelines
              </a>
            </div>
            
            {/* Community Stats */}
            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Community Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-md text-center">
                  <p className="text-2xl font-bold text-primary">14,582</p>
                  <p className="text-text-secondary text-sm">Members</p>
                </div>
                <div className="bg-background p-4 rounded-md text-center">
                  <p className="text-2xl font-bold text-primary">3,297</p>
                  <p className="text-text-secondary text-sm">Discussions</p>
                </div>
                <div className="bg-background p-4 rounded-md text-center">
                  <p className="text-2xl font-bold text-primary">27,945</p>
                  <p className="text-text-secondary text-sm">Replies</p>
                </div>
                <div className="bg-background p-4 rounded-md text-center">
                  <p className="text-2xl font-bold text-primary">847</p>
                  <p className="text-text-secondary text-sm">Active Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSignup />
    </div>
  );
};

export default CommunityPage;