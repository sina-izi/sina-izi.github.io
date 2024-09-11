import React from 'react';
import './Blog.css'; // Add your styles for the tiles in this CSS file

function Blog() {
  const blogPosts = [
    { title: 'My First Blog Post', description: 'This is a summary of my first post.' },
    { title: 'React Tips and Tricks', description: 'Some tips for working with React.' },
    { title: 'My Journey in Software Development', description: 'Personal notes on my journey.' },
    // Add more posts here
  ];

  return (
    <div>
      <h2>My Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-tile">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
