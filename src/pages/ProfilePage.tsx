import React from 'react';
import { User, Settings, BookOpen, MessageSquare, Heart } from 'lucide-react';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="container-custom">
        {/* Profile Header */}
        <div className="bg-surface rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">Alex Johnson</h1>
              <p className="text-text-secondary mb-4">Car enthusiast | Automotive Photographer</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">127</p>
                  <p className="text-text-secondary text-sm">Discussions</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">1.2k</p>
                  <p className="text-text-secondary text-sm">Comments</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">3.4k</p>
                  <p className="text-text-secondary text-sm">Likes</p>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">
              <Settings size={18} className="mr-2" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-text-secondary mb-4">
                Passionate about cars and automotive photography. Always eager to learn and share knowledge about the latest in the automotive world.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-text-secondary">
                  <User size={18} className="mr-2" />
                  <span>Member since January 2023</span>
                </div>
                <div className="flex items-center text-text-secondary">
                  <BookOpen size={18} className="mr-2" />
                  <span>127 Discussions created</span>
                </div>
                <div className="flex items-center text-text-secondary">
                  <MessageSquare size={18} className="mr-2" />
                  <span>892 Comments</span>
                </div>
                <div className="flex items-center text-text-secondary">
                  <Heart size={18} className="mr-2" />
                  <span>2.1k Likes received</span>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  Sports Cars
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  Car Photography
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  Track Days
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  Maintenance
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  Performance Mods
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-6">
                {/* Activity Item */}
                <div className="border-b border-border pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-secondary">Started a discussion</span>
                    <span className="text-text-tertiary text-sm">2 hours ago</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                    Best track day tires for beginners?
                  </h3>
                  <p className="text-text-secondary">
                    Looking for recommendations on track day tires that offer good performance but are still forgiving for beginners.
                  </p>
                </div>

                {/* Activity Item */}
                <div className="border-b border-border pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-secondary">Commented on</span>
                    <span className="text-text-tertiary text-sm">5 hours ago</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                    First track day experience
                  </h3>
                  <p className="text-text-secondary">
                    Great write-up! I had a similar experience at my first track day. The key is definitely to start slow and gradually build up speed as you get more comfortable.
                  </p>
                </div>

                {/* Activity Item */}
                <div className="pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-secondary">Liked a discussion</span>
                    <span className="text-text-tertiary text-sm">1 day ago</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                    Camera settings for car photography
                  </h3>
                  <p className="text-text-secondary">
                    A comprehensive guide on camera settings for automotive photography in different lighting conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;