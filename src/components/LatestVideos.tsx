import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: '1',
    title: '2025 Tesla Roadster: First Drive Review',
    thumbnail: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    duration: '12:34',
    views: '245K',
    date: '3 days ago',
    videoId: 'abc123',
  },
  {
    id: '2',
    title: 'Ford Mustang vs Chevrolet Camaro: The Ultimate Showdown',
    thumbnail: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    duration: '18:21',
    views: '189K',
    date: '1 week ago',
    videoId: 'def456',
  },
  {
    id: '3',
    title: 'Inside the Lamborghini Factory: How Supercars Are Made',
    thumbnail: 'https://images.pexels.com/photos/3802580/pexels-photo-3802580.jpeg',
    duration: '22:45',
    views: '412K',
    date: '2 weeks ago',
    videoId: 'ghi789',
  },
];

const LatestVideos: React.FC = () => {
  return (
    <section className="container-custom py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Latest Videos</h2>
          <p className="text-text-secondary">
            Watch our in-depth car reviews and automotive features
          </p>
        </div>
        <a 
          href="#" 
          className="hidden sm:inline-block text-primary font-medium hover:underline"
        >
          View all videos
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="card group">
            <div className="relative overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  className="bg-primary/90 text-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform"
                  aria-label="Play video"
                >
                  <Play size={24} fill="white" />
                </button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <div className="flex justify-between text-text-tertiary text-sm">
                <span>{video.views} views</span>
                <span>{video.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center sm:hidden">
        <a 
          href="#" 
          className="text-primary font-medium hover:underline"
        >
          View all videos
        </a>
      </div>
    </section>
  );
};

export default LatestVideos;