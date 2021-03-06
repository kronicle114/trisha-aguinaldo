import React from 'react'
import '../styles/blog.css'

export default function Blog(props) {
  
  return(
    <section className="blog-container">
    <h2 id="blog" className="uppercase">Blog</h2>
    <div className="ombre-bar"/>
      <blockquote
        cite="https://www.globalcitizen.org/en/content/google-yuri-kochiyama-doodle-peace-activist/"
      >
          Life is not what you alone make it. Life is the input of everyone who touched your life and every experience that entered it. We are all part of one another.
          <footer>— Yuri Kochiyama</footer>
      </blockquote>

    <div className="blog-contents">
      <ul className="article-list">
          <li className="articles">
            <h3><a href="https://www.reggora.com/meet-the-team-trisha-aguinaldo/">Meet the Team: Trisha Aguinaldo</a></h3>
            <p>February 5, 2021</p>
          </li>
        <li className="articles">
          <h3><a href="https://dev.to/kronicle114/bash-profile-shortcuts-and-terminal-customizations-2lmj">Bash profile shortcuts and terminal customizations</a></h3>
          <p>Dec 23, 2019</p>
        </li>
        <li className="articles">
          <h3><a href="https://dev.to/kronicle114/updating-vim-macos-797">Updating Vim (MacOS)</a></h3>
          <p>Jul 6, 2019</p>
        </li>
	      {/* <li className="articles">
          <h3><a href="https://medium.com/@trishaaguinaldo/hide-secret-info-via-env-34acf446e32">Hide Secret Info via .env</a></h3>
          <p>Jul 4, 2019</p>
        </li> */}
	      <li className="articles">
          <h3><a href="https://medium.com/@trishaaguinaldo/how-did-i-spend-my-first-week-of-bootcamp-8539b129ce94">How I spent my first week of bootcamp</a></h3>
          <p>Nov 3, 2018</p>
        </li>
        <li className="articles">
          <h3><a href="https://www.linkedin.com/pulse/create-custom-domain-your-heroku-app-patricia-aguinaldo/">Create a Custom Domain for your Heroku App</a></h3>
          <p>January 22, 2019</p>
        </li>
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
    
  </section>
  )
}
