import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Health Benefits of Raw Honey",
    excerpt: "Discover why raw honey is nature's best medicine and how it can boost your immune system.",
    image: "/images/blog/raw-honey-benefits.jpg",
    date: "March 15, 2024",
    category: "Health & Wellness",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How to Identify Pure Honey",
    excerpt: "Learn the simple tests to determine if your honey is pure or adulterated.",
    image: "/images/blog/pure-honey-guide.jpg",
    date: "March 10, 2024",
    category: "Buying Guide",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Honey in Traditional Medicine",
    excerpt: "Exploring the ancient healing practices using honey across different cultures.",
    image: "/images/blog/traditional-medicine.jpg",
    date: "March 5, 2024",
    category: "History & Culture",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Best Honey Recipes for Immunity",
    excerpt: "Try these delicious recipes that combine honey with other immune-boosting ingredients.",
    image: "/images/blog/honey-recipes.jpg",
    date: "March 1, 2024",
    category: "Recipes",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Beekeeping in Pakistan",
    excerpt: "A deep dive into the art of beekeeping in different regions of Pakistan.",
    image: "/images/blog/beekeeping.jpg",
    date: "February 25, 2024",
    category: "Education",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "Honey for Skin Care",
    excerpt: "Natural beauty treatments using honey for glowing and healthy skin.",
    image: "/images/blog/honey-skincare.jpg",
    date: "February 20, 2024",
    category: "Beauty",
    readTime: "5 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Our Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the latest insights about honey, health benefits, recipes, and beekeeping practices.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="bg-primary-gold px-3 py-1 rounded-full text-sm mb-3 inline-block">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-3xl font-montserrat font-bold mb-2">
                    {blogPosts[0].title}
                  </h2>
                  <p className="mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center text-sm">
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-primary-gold/10 text-primary-gold px-3 py-1 rounded-full text-sm mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-montserrat font-bold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-primary-gold/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest articles and recipes directly in your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
              />
              <button className="bg-primary-gold hover:bg-primary-gold/90 text-white px-6 py-2 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
