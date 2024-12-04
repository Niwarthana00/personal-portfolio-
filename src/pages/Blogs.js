import React, { useState } from 'react';
import '../styles/blogs.css';

const blogs = [
  {
    title: "Blog Topic 1",
    description: "Even the all-powerful Painting has no control about the blind texts. It is an almost unorthographic.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0ktn1to3yLKb5o8Z9b7AK76ayXl8ZZhY7w&s",
  },
  {
    title: "Blog Topic 2",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    imageUrl: "https://cdn.educba.com/academy/wp-content/uploads/2023/03/What-is-MySQL-2.jpg",
  },
  {
    title: "Blog Topic 3",
    description: "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
    imageUrl: "https://blog.solguruz.com/wp-content/uploads/2023/11/Flutter-for-Hybrid-Apps-Why-Flutter-is-the-Best-Platform-to-Make-Hybrid-Apps.png",
  },
  {
    title: "Blog Topic 4",
    description: "A wonderful serenity has taken possession of my entire soul.",
    imageUrl: "https://7768311.fs1.hubspotusercontent-na1.net/hub/7768311/hubfs/chub_backup/What%20is%20business%20analysis.webp?width=443&height=400&name=What%20is%20business%20analysis.webp",
  },
  {
    title: "Blog Topic 5",
    description: "Mountains, far from the countries Vokalia and Consonantia.",
    imageUrl: "https://cdn.educba.com/academy/wp-content/uploads/2023/03/What-is-MySQL-2.jpg",
  },
  {
    title: "Blog Topic 6",
    description: "Separated they live in Bookmarksgrove.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0ktn1to3yLKb5o8Z9b7AK76ayXl8ZZhY7w&s",
  },
];

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsToShow = 3;

  const nextBlog = () => {
    setCurrentIndex((prevIndex) => (prevIndex + blogsToShow) % blogs.length);
  };

  const prevBlog = () => {
    setCurrentIndex((prevIndex) => (prevIndex - blogsToShow + blogs.length) % blogs.length);
  };

  const visibleBlogs = blogs.slice(
    currentIndex,
    currentIndex + blogsToShow
  ).concat(
    blogs.slice(0, Math.max(0, (currentIndex + blogsToShow) - blogs.length))
  );

  return (
    <div className="blogs-container" id="blogs">
      <h2>My Blogs</h2>
      <div className="carousel">
        <button onClick={prevBlog} className="nav-button">&lt;</button>
        <div className="blog-cards">
          {visibleBlogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <img src={blog.imageUrl} alt={blog.title} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextBlog} className="nav-button">&gt;</button>
      </div>
    </div>
  );
}
