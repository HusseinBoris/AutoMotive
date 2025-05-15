import React from 'react';
import { MessageSquare, Heart, Share2 } from 'lucide-react';

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
];

const CommunityHighlights: React.FC = () => {
  return (
    <section className="container-custom py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Community Discussions</h2>
          <p className="text-text-secondary">
            Join the conversation with fellow automotive enthusiasts
          </p>
        </div>
        <a 
          href="/community" 
          className="hidden sm:inline-block text-primary font-medium hover:underline"
        >
          View all discussions
        </a>
      </div>
      
      <div className="space-y-6">
        {discussions.map((discussion) => (
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
                
                <p className="text-text-secondary mb-3 line-clamp-2">
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
        ))}
      </div>
      
      <div className="mt-8 text-center sm:hidden">
        <a 
          href="/community" 
          className="text-primary font-medium hover:underline"
        >
          View all discussions
        </a>
      </div>
    </section>
  );
};

export default CommunityHighlights;