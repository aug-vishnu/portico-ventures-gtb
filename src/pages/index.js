import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import content from "../../site/content/contact.json"
import { Dropdown } from 'react-bootstrap'
import Content from '../../site/content/home.json'
import CFooter from '../../site/content/settings.json'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  
  return (
    <Layout>
      <Seo title="Home" />
      <body className="hero">
      <header className="main-header">
          <div className="nav">
              <nav id="navBar" className="navbar fixed-top navbar-expand-lg main-nav">
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
                            <a href={CFooter["job_link"]}>jobs</a>
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
      <footer>
          <div className="footer-top">
              <div className="part-one col-lg-4">
                  <div className="footer-logo mt-2"> <img src={'logo_b.png'} alt="portico_ventures" />
                  </div>
                  {/* <div className="footer-number mt-2">+xx-xxxxx-xxxx</div> */} 
                  <div className="footer-mail mt-2">{CFooter["email"]}</div>
              </div>
              <div className="part-two col-lg-4">
                  <div className="footer-social">
                      <a href={CFooter["linkedin"]} className="social btn"><svg width={13} height={12} viewBox="0 0 13 12"
                              fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M2.47183 2.9671C3.29117 2.9671 3.95538 2.30289 3.95538 1.48355C3.95538 0.664208 3.29117 0 2.47183 0C1.65249 0 0.988281 0.664208 0.988281 1.48355C0.988281 2.30289 1.65249 2.9671 2.47183 2.9671Z"
                                  fill="black" />
                              <path
                                  d="M3.7091 3.95801H1.23652C1.10003 3.95801 0.989258 4.06878 0.989258 4.20527V11.623C0.989258 11.7595 1.10003 11.8703 1.23652 11.8703H3.7091C3.84559 11.8703 3.95636 11.7595 3.95636 11.623V4.20527C3.95636 4.06878 3.84559 3.95801 3.7091 3.95801Z"
                                  fill="black" />
                              <path
                                  d="M11.0788 3.54689C10.022 3.1849 8.70014 3.50288 7.90743 4.07306C7.88023 3.96673 7.78331 3.88761 7.66808 3.88761H5.1955C5.05901 3.88761 4.94824 3.99838 4.94824 4.13487V11.5526C4.94824 11.6891 5.05901 11.7999 5.1955 11.7999H7.66808C7.80457 11.7999 7.91534 11.6891 7.91534 11.5526V6.22173C8.31491 5.87755 8.8297 5.76776 9.25103 5.94678C9.6595 6.11936 9.89341 6.54069 9.89341 7.10197V11.5526C9.89341 11.6891 10.0042 11.7999 10.1407 11.7999H12.6133C12.7497 11.7999 12.8605 11.6891 12.8605 11.5526V6.60399C12.8323 4.57202 11.8764 3.81986 11.0788 3.54689Z"
                                  fill="black" />
                          </svg>
                      </a>
                      {/* <a href={CFooter["linkedin"]} className="social btn"><svg width={8} height={13} viewBox="0 0 8 13"
                              fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M6.08148 2.02078H7.68986C7.83783 2.02078 7.95792 1.90762 7.95792 1.76819V0.252598C7.95792 0.113164 7.83783 0 7.68986 0H6.08148C4.45594 0 3.13279 1.24632 3.13279 2.77858V4.54676H1.25634C1.10837 4.54676 0.988281 4.65993 0.988281 4.79936V6.31495C0.988281 6.45438 1.10837 6.56755 1.25634 6.56755H3.13279V11.8721C3.13279 12.0115 3.25288 12.1247 3.40085 12.1247H5.00923C5.1572 12.1247 5.27729 12.0115 5.27729 11.8721V6.56755H7.15373C7.269 6.56755 7.3714 6.49783 7.40839 6.39477L7.94452 4.87918C7.97186 4.80239 7.95792 4.71752 7.90753 4.65134C7.85659 4.58566 7.77617 4.54676 7.68986 4.54676H5.27729V2.77858C5.27729 2.36078 5.6381 2.02078 6.08148 2.02078Z"
                                  fill="black" />
                          </svg>
                      </a> */}
                      <a href={CFooter["twitter"]} className="social btn"><svg width={14} height={11} viewBox="0 0 14 11"
                              fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M13.2095 1.26468C13.1282 1.17289 12.9973 1.14981 12.8899 1.20642C12.8231 1.2416 12.6976 1.28776 12.5485 1.33338C12.7366 1.07616 12.8878 0.788169 12.9546 0.529303C12.9834 0.417733 12.9412 0.300117 12.8493 0.233614C12.7574 0.167661 12.635 0.167661 12.5431 0.233614C12.3983 0.33749 11.6994 0.649668 11.2575 0.750795C10.2588 -0.148913 9.09664 -0.242346 7.88849 0.483136C6.90638 1.07287 6.69264 2.27211 6.73432 3.00309C4.48635 2.7805 3.08904 1.55927 2.30249 0.54854C2.24746 0.47764 2.15876 0.440267 2.0754 0.445763C1.98777 0.452358 1.90868 0.502373 1.8638 0.579867C1.4919 1.22566 1.38877 1.9396 1.56671 2.64474C1.66396 3.02947 1.83388 3.36858 2.03105 3.64338C1.93647 3.59557 1.8451 3.53566 1.75907 3.46421C1.67999 3.39716 1.56938 3.38452 1.47587 3.42904C1.38289 3.47465 1.32358 3.57138 1.32358 3.67746C1.32358 4.88825 2.0599 5.69617 2.7476 6.11827C2.63646 6.10453 2.5205 6.07925 2.40348 6.04242C2.30303 6.01109 2.19402 6.04242 2.12456 6.12376C2.05509 6.20456 2.03853 6.31997 2.08181 6.41835C2.46814 7.29718 3.20019 7.90175 4.10589 8.12104C3.31507 8.59865 2.25654 8.83278 1.28725 8.71791C1.16168 8.69978 1.04198 8.78167 1.00244 8.90588C0.962901 9.03009 1.01473 9.16639 1.12534 9.23015C2.59585 10.0793 3.92529 10.3827 5.07412 10.3827C6.74607 10.3827 8.03651 9.74073 8.82199 9.20377C10.9396 7.7583 12.2594 5.16305 12.0756 2.84096C12.4149 2.58319 12.9225 2.10723 13.2372 1.59554C13.3024 1.49222 13.2907 1.35591 13.2095 1.26468Z"
                                  fill="black" />
                          </svg>
                      </a>
                      <a href={CFooter["github"]} className="social btn"><svg width={18} height={17} viewBox="0 0 18 17"
                              fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M9.48922 0C7.47089 8.58124e-05 5.51844 0.736515 3.98123 2.07752C2.44402 3.41852 1.42235 5.27659 1.09904 7.31926C0.775733 9.36194 1.17187 11.4559 2.21659 13.2265C3.2613 14.9971 4.88641 16.3288 6.80113 16.9833C7.22613 17.0596 7.3855 16.7981 7.3855 16.5694C7.3855 16.3624 7.37487 15.6761 7.37487 14.9462C5.23925 15.3493 4.68676 14.4124 4.51676 13.9222C4.32812 13.4454 4.02909 13.0229 3.64551 12.6912C3.34801 12.5278 2.92302 12.1247 3.63488 12.1138C3.9067 12.1441 4.1674 12.2411 4.39489 12.3966C4.62239 12.5521 4.80997 12.7615 4.94175 13.0071C5.05801 13.2212 5.21433 13.4097 5.40176 13.5618C5.58919 13.7139 5.80405 13.8266 6.03402 13.8933C6.264 13.9601 6.50456 13.9797 6.74194 13.951C6.97931 13.9223 7.20883 13.8459 7.41734 13.7261C7.45414 13.283 7.64672 12.8688 7.95923 12.5605C6.068 12.3426 4.09176 11.5909 4.09176 8.25747C4.07981 7.39133 4.39154 6.55333 4.963 5.91532C4.70314 5.16254 4.73355 4.33641 5.048 3.60585C5.048 3.60585 5.75985 3.37707 7.38549 4.49914C8.77632 4.10694 10.2446 4.10694 11.6355 4.49914C13.2611 3.36619 13.9729 3.60585 13.9729 3.60585C14.2874 4.3364 14.3178 5.16255 14.0579 5.91532C14.6311 6.55223 14.9431 7.39097 14.9292 8.25747C14.9292 11.6018 12.9423 12.3426 11.0511 12.5605C11.2539 12.7713 11.4102 13.0244 11.5092 13.3026C11.6082 13.5808 11.6476 13.8776 11.6248 14.1728C11.6248 15.3384 11.6142 16.2752 11.6142 16.5694C11.6142 16.7982 11.7736 17.0705 12.1986 16.9834C14.1099 16.3235 15.7304 14.9887 16.7706 13.2172C17.8109 11.4457 18.2033 9.35277 17.8777 7.31208C17.5522 5.27138 16.5299 3.41573 14.9933 2.07635C13.4568 0.736983 11.506 0.00107622 9.48922 0Z"
                                  fill="black" />
                          </svg>
                      </a>
                  </div>
                  {/* <div class="footer-quicklinks footer-heading">Quick Links</div>
                  <div class="footer-links mt-3">
                      <div class="">
                          <p>Portfolio</p>
                          <p>About</p>
                      </div>
                      <div class="ml-4">
                          <p>Contact</p>
                          <p>Jobs</p>
                      </div>
                  </div> */}
              </div>
              <div className="part-three col-lg-4">
                  <div className="footer-quicklinks footer-heading mb-3">Get in Touch</div>
                  <div className="footer-cta">
                      <div className="btn-group">
                          {/* <div class="input-group-append">
                              <div class="input-group-text" id="btnGroupAddon">@</div>
                          </div> */}
                          <input type="text" className="form-control btn-one" placeholder="Get product updates"
                              aria-label="Username" aria-describedby="basic-addon1" />
                          <button className="btn btn-secondary btn-two"><img src={'ic Arrow Go.png'} alt="logo"/></button>
                      </div>
                  </div>
              </div>
          </div>
          <hr />
          <div className="footer-bottom-index">
              <div className="footer-copyright ">
                  2021 PORTICO. All Rights reserved
              </div>
          </div>
      </footer>
      </body>
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
