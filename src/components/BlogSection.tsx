import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/Rectangle 13.png", // Replace with your image paths
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
    },
    {
      id: 2,
      image: "/Rectangle 14.png", // Replace with your image paths
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
    },
    {
      id: 3,
      image: "/Rectangle 15.png", // Replace with your image paths
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-4">Our Blogs</h2>
        <p className="text-gray-600 text-lg mb-12">
          Find a bright ideal to suit your taste with our great selection
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <button className="text-blue-600 underline font-medium mb-4">
                  Read More
                </button>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <i className="mr-1">⏱️</i> {blog.readTime}
                  </span>
                  <span className="flex items-center">
                    <i className="mr-1">📅</i> {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="mt-12">
          <button className="text-black font-medium text-lg underline hover:text-gray-600">
            View All Post
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
