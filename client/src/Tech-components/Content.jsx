import React from 'react';
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="blog-post">
        <h2 className="blog-title">Understanding React Hooks</h2>
        <img src="/pexels-cmonphotography-1809644.jpg" alt="React Hooks" />
        <p className="blog-meta">by Jane Doe on July 12, 2024</p>
        <div className="blog-content">
          <p>
            React Hooks are functions that let you use state and other React features without writing a class. Hooks were introduced in React 16.8. They allow you to use state and other React features in functional components, making your code more concise and easier to understand.
          </p>
          <p>
            The most commonly used hooks are <code>useState</code> and <code>useEffect</code>. The <code>useState</code> hook allows you to add state to your functional components, while the <code>useEffect</code> hook lets you perform side effects in your components.
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="blog-title">A Guide to JavaScript ES6</h2>
        <img src="path/to/javascript-es6-image.jpg" alt="JavaScript ES6" />
        <p className="blog-meta">by John Smith on June 20, 2024</p>
        <div className="blog-content">
          <p>
            ES6, also known as ECMAScript 2015, introduced many new features to JavaScript that make it easier to write and maintain code. Some of the key features include arrow functions, template literals, classes, and modules.
          </p>
          <p>
            Arrow functions provide a concise way to write functions in JavaScript. Template literals allow you to embed expressions within strings. Classes provide a clearer and more concise syntax for creating objects and handling inheritance. Modules enable you to break your code into smaller, reusable pieces.
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="blog-title">CSS Grid Layout: A Comprehensive Guide</h2>
        <img src="path/to/css-grid-layout-image.jpg" alt="CSS Grid Layout" />
        <p className="blog-meta">by Emily Brown on May 15, 2024</p>
        <div className="blog-content">
          <p>
            CSS Grid Layout is a powerful layout system available in CSS. It allows you to create complex and responsive web layouts with ease. Grid layout works by defining a grid container with rows and columns, and then placing grid items within the container.
          </p>
          <p>
            You can control the size and position of grid items using various grid properties such as <code>grid-template-columns</code>, <code>grid-template-rows</code>, <code>grid-column</code>, and <code>grid-row</code>. CSS Grid is supported in all modern browsers, making it a reliable choice for web developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
