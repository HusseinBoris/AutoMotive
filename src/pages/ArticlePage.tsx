import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MessageSquare, Heart, Share2, Bookmark, ChevronLeft } from 'lucide-react';
import PostCard from '../components/PostCard';

// Mock article data
const article = {
  id: '7',
  title: 'The Ultimate Guide to Buying Your First High-Performance Vehicle',
  content: `
    <p class="text-lg mb-4">Whether you're a long-time automotive enthusiast or you've recently caught the performance car bug, buying your first high-performance vehicle is an exciting milestone. However, it can also be intimidating and filled with potential pitfalls if you're not properly prepared.</p>
    
    <p class="mb-4">In this comprehensive guide, we'll walk you through everything you need to know before making this significant purchase, from budgeting considerations to maintenance realities and insurance implications.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Defining Your Needs and Wants</h2>
    
    <p class="mb-4">Before you start browsing listings or visiting dealerships, take some time for honest self-reflection. Ask yourself:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">What will be the primary use of this vehicle? Daily driver, weekend fun, track days, or a combination?</li>
      <li class="mb-2">How much passenger space and cargo capacity do you realistically need?</li>
      <li class="mb-2">Are you willing to sacrifice comfort for performance?</li>
      <li class="mb-2">Do you prefer the involvement of a manual transmission or the convenience of an automatic?</li>
      <li class="mb-2">What's your comfort level with maintenance and potential reliability issues?</li>
    </ul>
    
    <p class="mb-4">Your answers to these questions will help narrow down the vast field of options to vehicles that will truly suit your lifestyle and preferences.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Budgeting Beyond the Purchase Price</h2>
    
    <p class="mb-4">The sticker price is just the beginning of your financial commitment to a high-performance vehicle. Be sure to calculate:</p>
    
    <h3 class="text-xl font-bold mt-6 mb-2">Insurance Costs</h3>
    
    <p class="mb-4">Performance vehicles typically command higher insurance premiums due to their value, repair costs, and statistical likelihood of being driven at higher speeds. Get insurance quotes before purchasing to avoid unpleasant surprises.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-2">Maintenance Expenses</h3>
    
    <p class="mb-4">High-performance often equals high-maintenance. Specialized parts, synthetic oils, performance tires, and more frequent servicing can add up quickly. Research typical maintenance schedules and costs for your shortlisted vehicles.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-2">Fuel Consumption</h3>
    
    <p class="mb-4">That powerful engine will likely be thirstier than a standard vehicle. Calculate the annual fuel costs based on your expected mileage and the vehicle's real-world fuel economy (not just the manufacturer's optimistic figures).</p>
    
    <h3 class="text-xl font-bold mt-6 mb-2">Depreciation</h3>
    
    <p class="mb-4">Some performance vehicles hold their value better than others. Research expected depreciation rates to understand the true cost of ownership over time.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">New vs. Used: Weighing the Options</h2>
    
    <p class="mb-4">For many first-time performance car buyers, the used market offers tremendous value. A two or three-year-old vehicle will have already experienced its steepest depreciation while still offering modern technology and safety features.</p>
    
    <p class="mb-4">However, buying new provides warranty coverage, the latest features, and the peace of mind that comes from knowing the vehicle's complete history.</p>
    
    <p class="mb-4">If you opt for a used vehicle, be sure to:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Request complete service records</li>
      <li class="mb-2">Commission a pre-purchase inspection by a specialist familiar with the specific model</li>
      <li class="mb-2">Research common problems for that model and year</li>
      <li class="mb-2">Check for modifications that could affect reliability or warranty coverage</li>
      <li class="mb-2">Verify whether the vehicle has been used on track, which can accelerate wear on components</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Preparing for Ownership</h2>
    
    <p class="mb-4">Once you've selected your vehicle, there are several steps you should take to ensure a smooth ownership experience:</p>
    
    <h3 class="text-xl font-bold mt-6 mb-2">Find a Specialized Mechanic</h3>
    
    <p class="mb-4">Locate a reputable mechanic who specializes in your specific make or type of performance vehicle before you need one.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-2">Join Owner Communities</h3>
    
    <p class="mb-4">Owner forums and clubs are invaluable resources for model-specific advice, troubleshooting, and camaraderie. Many also organize driving events and track days.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-2">Consider Track Insurance</h3>
    
    <p class="mb-4">If you plan to take your vehicle to the track, your standard insurance policy likely won't cover any incidents that occur there. Specialized track day insurance is available for this purpose.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-2">Invest in Driving Skills</h3>
    
    <p class="mb-4">A high-performance vehicle requires a higher level of driving skill to operate safely at its limits. Consider taking a performance driving course to hone your abilities.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
    
    <p class="mb-4">Purchasing your first high-performance vehicle should be an exhilarating experience, not an anxiety-inducing one. By doing your research, honestly assessing your needs and financial situation, and preparing for the realities of ownership, you'll be well-positioned to make a choice that brings you years of driving pleasure.</p>
    
    <p class="mb-4">Remember that the "right" choice varies widely based on individual preferences and circumstances. Whether you end up with a muscular American V8, a precise European sports coupe, or a technological tour de force from Japan, the key is finding the vehicle that speaks to you while fitting into your lifestyle and budget.</p>
  `,
  author: {
    name: 'Michael Reeves',
    avatar: 'https://i.pravatar.cc/150?img=7',
    bio: 'Automotive journalist with over 15 years of experience covering the performance car market. Former racing driver and certified high-performance driving instructor.',
  },
  publishDate: 'May 18, 2025',
  readTime: '15 min read',
  commentCount: 68,
  likeCount: 221,
  shareCount: 48,
  category: 'Buying Guide',
  tags: ['Performance Cars', 'Buying Guide', 'Car Shopping', 'First-time Buyers'],
  image: 'https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg',
};

// Related articles
const relatedArticles = [
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
];

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{articleId: string}>();
  // In a real application, you would fetch the article based on the ID
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img 
          src={article.image} 
          alt={article.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-white mb-4 hover:text-primary transition-colors"
              >
                <ChevronLeft size={16} className="mr-1" />
                Back to Blog
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center text-text-secondary gap-x-4 gap-y-2">
                <span className="bg-primary px-3 py-1 text-white text-sm font-medium rounded">
                  {article.category}
                </span>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Author Info */}
            <div className="flex items-center mb-8 p-4 bg-surface rounded-lg">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold">{article.author.name}</p>
                <p className="text-text-secondary text-sm">{article.author.bio}</p>
              </div>
            </div>
            
            {/* Article Body */}
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Tags */}
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Link 
                    key={index} 
                    to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-surface hover:bg-primary/10 text-text-secondary hover:text-primary px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Article Actions */}
            <div className="mt-8 py-6 border-t border-b border-border">
              <div className="flex justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                    <Heart size={20} />
                    <span>{article.likeCount}</span>
                  </button>
                  <button className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                    <MessageSquare size={20} />
                    <span>{article.commentCount}</span>
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-text-secondary hover:text-primary transition-colors" aria-label="Bookmark article">
                    <Bookmark size={20} />
                  </button>
                  <button className="text-text-secondary hover:text-primary transition-colors" aria-label="Share article">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Comments Section (simplified) */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Comments ({article.commentCount})</h3>
              <div className="bg-surface p-6 rounded-lg">
                <p className="text-center text-text-secondary">
                  Join the discussion! Sign in to comment on this article.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Related Articles */}
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <div className="space-y-6">
                {relatedArticles.map((article) => (
                  <div key={article.id} className="flex gap-3">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <Link 
                        to={`/blog/${article.id}`}
                        className="font-bold hover:text-primary transition-colors line-clamp-2"
                      >
                        {article.title}
                      </Link>
                      <p className="text-text-tertiary text-sm mt-1">
                        {article.publishDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Categories Widget */}
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog/category/reviews" className="text-text-secondary hover:text-primary transition-colors flex justify-between">
                    <span>Reviews</span>
                    <span>24</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/category/news" className="text-text-secondary hover:text-primary transition-colors flex justify-between">
                    <span>Industry News</span>
                    <span>38</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/category/guides" className="text-text-secondary hover:text-primary transition-colors flex justify-between">
                    <span>Buying Guides</span>
                    <span>16</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/category/technology" className="text-text-secondary hover:text-primary transition-colors flex justify-between">
                    <span>Technology</span>
                    <span>29</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/category/maintenance" className="text-text-secondary hover:text-primary transition-colors flex justify-between">
                    <span>Maintenance</span>
                    <span>15</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/category/modifications" className="text-text-secondary hover:text-primary transition-colors flex justify-between">
                    <span>Modifications</span>
                    <span>22</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter Widget */}
            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-text-secondary mb-4">
                Stay updated with our latest articles and news. Subscribe to our newsletter.
              </p>
              <form>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 mb-3 bg-background border border-border rounded-md focus:outline-none focus:border-primary"
                  required
                />
                <button 
                  type="submit" 
                  className="btn btn-primary w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;