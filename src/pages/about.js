import * as React from "react"
import { Link, } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from '../../site/content/navbar.json'
import Footer from "./footer"
import CFooter from '../../site/content/settings.json'


const About = () => {
  return (
    <Layout>
      <Seo title="About" />
        <header className="main-header ">
            <div className="nav pt-4">
            <nav id="navBar" className="navbar fixed-top navbar-expand-lg main-nav">
                <a className="navbar-brand" href="/">
                <img src={'/logo.png'} alt="portico_ventures" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar icon-bar-1" />
                <span className="icon-bar icon-bar-2" />
                <span className="icon-bar icon-bar-3" />
                </button>
                <div className="collapse navbar-collapse" id="mainMenu">
                    <ul className="navbar-nav ml-auto text-uppercase f1">
                        <li>
                            <Link className="active" to="/about/">ABOUT</Link>
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
            <div className="about-section">
            {/* Section Home Starts */}
            <div id="content-part" className="container mt-5">
                {/* <h2 class="text-uppercase mb-3">about portico </h2> */}
                <h1>{Content["heading-one"]}</h1>
                <p>{Content["para-one"]}</p>
            </div>
            <hr />
            <div id="content-part" className="pt-2 container">
                <h2 className="vent text-uppercase mb-3">{Content["sub-heading-one"]}</h2>
                <p className="vent">{Content["para-two"]}</p>
                <p className="vent">{Content["para-three"]}</p>
                <p className="vent">{Content["para-four"]}</p>

                <h2 className="vent text-uppercase mb-3">{Content["sub-heading-two"]}</h2>
                <p className="vent">{Content["para-five"]}</p>
                <p className="vent">{Content["para-six"]}</p>
                <p className="vent">{Content["para-seven"]}</p>
                
                <h2 className="vent text-uppercase mb-3">{Content["sub-heading-three"]}</h2>
                <p className="vent">{Content["para-eight"]}</p>
                <p className="vent">{Content["para-nine"]}</p>
                <p className="vent">{Content["para-ten"]}</p>
                
                {/* <h1 className="vent">{Content["heading-three"]}</h1> */}
                {/* <p className="vent">{Content["para-seven"]}</p> */}
            </div>
            {/* Section Home Ends */}
            </div>
        </header>
        <Footer></Footer>
    </Layout>
  )
}

export default About

