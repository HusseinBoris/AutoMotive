import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MessageSquare, Heart } from 'lucide-react';

interface FeaturedPostProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  commentCount: number;
  likeCount: number;
  category: string;
  image: string;
  isFeatured?: boolean;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
  id,
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  commentCount,
  likeCount,
  category,
  image,
  isFeatured = false,
}) => {
  return (
    <article 
      className={`card overflow-hidden group ${
        isFeatured ? 'col-span-full lg:col-span-2 lg:flex' : ''
      }`}
    >
      <div className={`${isFeatured ? 'lg:w-1/2' : 'w-full'} overflow-hidden relative`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary px-3 py-1 text-white text-sm font-medium rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className={`p-6 ${isFeatured ? 'lg:w-1/2' : 'w-full'}`}>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-text-secondary mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center mb-4">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <p className="text-text-primary font-medium">{author.name}</p>
            <p className="text-text-tertiary text-sm">{publishDate}</p>
          </div>
        </div>
        
        <div className="flex justify-between text-text-tertiary text-sm">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare size={16} className="mr-1" />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center">
            <Heart size={16} className="mr-1" />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;