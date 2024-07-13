import React, { useState } from 'react';
import "./Content.css";

const blogPosts = [
  {
    title: "Understanding React Hooks",
    imgSrc: "/pexels-cmonphotography-1809644.jpg",
    alt: "React Hooks",
    meta: "by Jane Doe on July 12, 2024",
    content: [
      "React Hooks are functions that let you use state and other React features without writing a class. Hooks were introduced in React 16.8. They allow you to use state and other React features in functional components, making your code more concise and easier to understand.",
      "The most commonly used hooks are useState and useEffect. The useState hook allows you to add state to your functional components, while the useEffect hook lets you perform side effects in your components."
    ]
  },
  {
    title: "A Guide to JavaScript ES6",
    imgSrc: "path/to/javascript-es6-image.jpg",
    alt: "JavaScript ES6",
    meta: "by John Smith on June 20, 2024",
    content: [
      "ES6, also known as ECMAScript 2015, introduced many new features to JavaScript that make it easier to write and maintain code. Some of the key features include arrow functions, template literals, classes, and modules.",
      "Arrow functions provide a concise way to write functions in JavaScript. Template literals allow you to embed expressions within strings. Classes provide a clearer and more concise syntax for creating objects and handling inheritance. Modules enable you to break your code into smaller, reusable pieces."
    ]
  },
  {
    title: "CSS Grid Layout: A Comprehensive Guide",
    imgSrc: "path/to/css-grid-layout-image.jpg",
    alt: "CSS Grid Layout",
    meta: "by Emily Brown on May 15, 2024",
    content: [
      "CSS Grid Layout is a powerful layout system available in CSS. It allows you to create complex and responsive web layouts with ease. Grid layout works by defining a grid container with rows and columns, and then placing grid items within the container.",
      "You can control the size and position of grid items using various grid properties such as grid-template-columns, grid-template-rows, grid-column, and grid-row. CSS Grid is supported in all modern browsers, making it a reliable choice for web developers."
    ]
  }
];

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Calculate the current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate the page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="content">
      {currentPosts.map((post, index) => (
        <div className="blog-post" key={index}>
          <h2 className="blog-title">{post.title}</h2>
          <img src={post.imgSrc} alt={post.alt} />
          <p className="blog-meta">{post.meta}</p>
          <div className="blog-content">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)} className={`page-number ${number === currentPage ? 'active' : ''}`}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Content;
