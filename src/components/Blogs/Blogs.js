import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h3>What is Context API and what is the purpose of Context API?</h3>
            <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. Using the context API, a certain data context may be shared across all branches without generating any complications. If we want to provide data from a parent to numerous children, we would normally have to utilize props multiple times. But using the context API function, we can pass the data all at once. Any component tree under that context API configuration may simply access the data after passing it.</p>
            <br />
            <h3>What is semantic tags, and what is the purpose of semantic tags?</h3>
            <p>The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages. Semantic tags that make sense to both the developer and the web browser. The use of semantic tags to organize code is becoming increasingly prevalent. Semantic tags are frequently used to label the various components of a web page so that human or machine can understand the section very easily. It offers a better user experience. </p>
        </div>
    );
};

export default Blogs;