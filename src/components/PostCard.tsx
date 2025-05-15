import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MessageSquare, Heart } from 'lucide-react';

interface PostCardProps {
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
}

const PostCard: React.FC<PostCardProps> = ({
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
}) => {
  return (
    <article className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary px-3 py-1 text-white text-sm font-medium rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <Link to={`/blog/${id}`}>
          <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-text-secondary mb-4 text-sm line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center mb-4">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <div>
            <p className="text-text-primary text-sm font-medium">{author.name}</p>
            <p className="text-text-tertiary text-xs">{publishDate}</p>
          </div>
        </div>
        
        <div className="flex justify-between text-text-tertiary text-xs">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare size={14} className="mr-1" />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center">
            <Heart size={14} className="mr-1" />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;