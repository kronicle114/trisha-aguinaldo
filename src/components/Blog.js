import React from 'react';

export default function Blog(props) {
  return(
    <div className="blog-container">
    <h2>Blog</h2>
    <ul className="article-list">
      <li className="articles">
        <h3><a href="https://www.linkedin.com/pulse/teaching-girls-code-boston-patricia-aguinaldo/">Teaching Girls To Code (Boston)</a></h3>
        <p>December 20, 2018</p>
      </li>
      <li className="articles">
        <h3><a href="https://medium.com/@trishaaguinaldo/salary-negotiation-in-a-gender-biased-world-c7ff22bdceda">Salary Negotiation In A Gender-Biased World</a></h3>
        <p>Dec 4, 2018</p>
      </li>
      <li className="articles">
        <h3><a href="https://medium.com/@trishaaguinaldo/how-did-i-spend-my-first-week-of-bootcamp-8539b129ce94">How I spent my first week of bootcamp</a></h3>
        <p>Nov 3, 2018</p>
      </li>
    </ul>
  </div>
  )
}