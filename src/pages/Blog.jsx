import React, { useState } from "react";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  Clock,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "How to Improve Your Credit Score Before Applying for a Loan",
    category: "Credit Score",
    author: "Admin",
    date: "10 July 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    description:
      "Learn practical tips to improve your credit score and increase your chances of getting loan approval.",
  },
  {
    id: 2,
    title: "Home Loan vs Personal Loan: Which One Should You Choose?",
    category: "Home Loan",
    author: "Finance Team",
    date: "08 July 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    description:
      "Understand the differences between home loans and personal loans to make an informed decision.",
  },
  {
    id: 3,
    title: "Top 10 Tips for Faster Loan Approval",
    category: "Personal Loan",
    author: "Loan Expert",
    date: "05 July 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
    description:
      "Discover the best practices that can help you secure faster loan approval with minimal documentation.",
  },
  {
    id: 4,
    title: "Understanding EMI and How It Affects Your Budget",
    category: "EMI",
    author: "Finance Team",
    date: "01 July 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800",
    description:
      "Learn how EMI works, how it is calculated, and how to manage monthly repayments effectively.",
  },
];

const categories = [
  "All",
  "Personal Loan",
  "Home Loan",
  "Business Loan",
  "Credit Score",
  "EMI",
];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <BookOpen className="mx-auto w-16 h-16 mb-5" />

          <h1 className="text-5xl font-bold">
            LoanHub Blog
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
            Stay informed with expert financial advice, loan guides,
            credit score tips, EMI planning, and personal finance articles.
          </p>

        </div>
      </section>

      {/* Search */}
      <section className="max-w-6xl mx-auto px-6 -mt-8">

        <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3">

          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search articles..."
            className="w-full outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white shadow hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </section>

      {/* Featured Blog */}
      {filteredBlogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">

            <img
              src={filteredBlogs[0].image}
              alt={filteredBlogs[0].title}
              className="w-full h-full object-cover"
            />

            <div className="p-10">

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                Featured
              </span>

              <h2 className="text-4xl font-bold mt-6">
                {filteredBlogs[0].title}
              </h2>

              <p className="text-gray-600 mt-5 leading-7">
                {filteredBlogs[0].description}
              </p>

              <div className="flex flex-wrap gap-6 mt-8 text-gray-500">

                <div className="flex items-center gap-2">
                  <User size={18} />
                  {filteredBlogs[0].author}
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {filteredBlogs[0].date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  {filteredBlogs[0].readTime}
                </div>

              </div>

              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                Read More
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold mb-10">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <span className="text-blue-600 text-sm font-semibold">
                  {blog.category}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {blog.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500 mt-6">

                  <span>{blog.author}</span>

                  <span>{blog.date}</span>

                </div>

                <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2">
                  Read Article
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

        <div className="max-w-4xl mx-auto px-6 py-20 text-center">

          <h2 className="text-4xl font-bold">
            Subscribe to Our Newsletter
          </h2>

          <p className="mt-5 text-blue-100">
            Receive the latest finance tips, loan updates, and exclusive offers directly in your inbox.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-4 rounded-lg text-gray-900 w-full sm:w-96 outline-none"
            />

            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Blog;