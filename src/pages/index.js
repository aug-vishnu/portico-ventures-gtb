import * as React from "react"
import { Link, graphql } from "gatsby"
// import '../components/main'


import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from '../../site/content/home.json'
import CFooter from '../../site/content/settings.json'
import Footer from "./footer"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  
  return (
    <Layout>
      <Seo title="Home" />
      <body className="hero">
      <header className="main-header">
          <div className="nav">
              <nav id="navBar" className="navbar floatingNav fixed-top navbar-expand-lg main-nav">
                  <a className="navbar-brand" href="/">
                      <img src={'logo.png'} alt="portico_ventures" />
                  </a>
                    {/* <Dropdown className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu"
                      aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <Dropdown.Toggle >
                            <span className="icon-bar icon-bar-1" />
                            <span className="icon-bar icon-bar-2" />
                            <span className="icon-bar icon-bar-3" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" collapse navbar-collapse navbar-nav ml-auto text-uppercase f1">
                            <Dropdown.Item href="/about/">CONTACT</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        <div className="collapse navbar-collapse" id="mainMenu">
                        </div>
                    </Dropdown> */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu"
                      aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="icon-bar icon-bar-1" />
                      <span className="icon-bar icon-bar-2" />
                      <span className="icon-bar icon-bar-3" />
                  </button>
                  <div className="collapse navbar-collapse" id="mainMenu">
                      <ul className="navbar-nav ml-auto text-uppercase f1">
                        <li>
                            <Link to="/about/">ABOUT</Link>
                        </li>
                        {/* <li>
                            <Link to="/portfolio/">PORTFOLIO</Link>
                        </li> */}
                        <li>
                            <a href={CFooter["jobs_link"]}>jobs</a>
                        </li>
                        <li>
                            <Link to="/contact/">CONTACT</Link>
                        </li>
                      </ul>
                  </div>
              </nav>
          </div>
          {/* /.container */}
          <div className="hero-section">
              {/* Section Home Starts */}
              <div id="content-part" className="banner">
                  <h1>{Content["heading-one"]} <strong>{Content["heading-one-strong"]}</strong> </h1>
                  <p>{Content["para-one"]}</p>
                  <p>{Content["para-two"]}</p>
              </div>
              {/* <div id="image-part">
                  <img src={'crypto-circle.png'} alt="portico_ventures">
              </div> */}
              {/* Section Home Ends */}
          </div>
      </header>
      </body>
      <Footer></Footer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
