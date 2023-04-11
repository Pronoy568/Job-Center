import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blogContainer">
      <h1 className="titleBlog">Questions & Answers</h1>
      <div className="questionAnswer">
        <div className="divContainer">
          <h1>a. When should you use context API ?</h1>
          <p>
            The Context API is a React structure that enables to exchange unique
            details and assists in solving prop-drilling from all levels of our
            application. The Context API gives us a dependency injection system
            based on our component tree. This was not possible in React before
            and it also integrates very well with function components and hooks.
          </p>
        </div>
        <div className="divContainer">
          <h1>b. What is a custom hook? </h1>
          <p>
            A custom hook is a special JavaScript function whose name starts
            with 'use' and can be used to call other hooks. Let's take a look at
            some major differences between a custom React JS hook and React JS
            components: A custom hook does not require a specific signature.
          </p>
        </div>
        <div className="divContainer">
          <h1>c. What is useRef ?</h1>
          <p>
            useRef is a built-in React hook that accepts one argument as the
            initial value and returns a reference. A reference is an object
            having a special property current. The useRef Hook allows to persist
            values between renders. It can be used to store a mutable value that
            does not cause a re-render when updated. It can be used to access a
            DOM element directly.
          </p>
        </div>
        <div className="divContainer">
          <h1>d. What is useMemo?</h1>
          <p>
            useMemo is a function that returns a memoized value of a passed in
            resource-intensive function. It is very useful in optimizing the
            performance of a React component by eliminating repeating heavy
            computations. The useMemo Hook can be used to keep expensive,
            resource intensive functions from needlessly running. In this
            example, we have an expensive function that runs on every render.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
