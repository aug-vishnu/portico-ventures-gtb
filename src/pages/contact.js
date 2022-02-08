import * as React from "react"
import { Link, } from "gatsby"
// import '../components/main'


import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "./footer"
import Content from '../../site/content/contact.json'
import CFooter from '../../site/content/settings.json'

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
        <header className="main-header bgr">
            <div className="nav pt-4">
                <nav id="navBar" className="navbar floatingNav fixed-top navbar-expand-lg main-nav ">
                    <a className="navbar-brand" href="/">
                        <img src={'/logo.png'} alt="portico_ventures" />
                    </a>
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
                        <li>
                            <Link to="/portfolio/">PORTFOLIO</Link>
                        </li>
                        <li>
                            <a href={CFooter["jobs_link"]}>jobs</a>
                        </li>
                        <li>
                            <Link className="active" to="/contact/">CONTACT</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* /.container */}
            <div className="contact-section">
                {/* Section Home Starts */}
                <div id="contact-content" className="container mt-5">
                    <div className="content">
                        <div>
                            <h2 className="header">{Content["heading-two"]}</h2>
                            <p>{Content["para-two"]} </p>
                        </div>
                        <div className>
                            {/* <div className="mobile info">
                                <img src={'/mobile.svg'} alt="logo"/>
                                <p>+xx-xxxxx-xxxxx</p>
                            </div> */}
                            <div className="mail info">
                                <img src={'/Vector-1.svg'} alt="logo"/>
                                <a href={`mailto:${CFooter["email"]}`}>{CFooter["email"]}</a>
                            </div>
                            {/* <div className="location info">
                                <img src={'/Vector.svg'} alt="logo"/>
                                <p>{CFooter["address"]}</p>
                            </div> */}
                        </div>
                        <div className="contact-social mt-5">
                            <a href={CFooter["linkedin"]} className="social btn">
                                <svg width={18} height={18} viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.39483 5.09142C3.57346 5.09142 4.52892 4.13596 4.52892 2.95733C4.52892 1.77871 3.57346 0.823242 2.39483 0.823242C1.21621 0.823242 0.260742 1.77871 0.260742 2.95733C0.260742 4.13596 1.21621 5.09142 2.39483 5.09142Z"
                                        fill="white" />
                                    <path
                                        d="M4.17519 6.51733H0.618377C0.422041 6.51733 0.262695 6.67668 0.262695 6.87302V17.5435C0.262695 17.7398 0.422041 17.8992 0.618377 17.8992H4.17519C4.37153 17.8992 4.53087 17.7398 4.53087 17.5435V6.87302C4.53087 6.67668 4.37153 6.51733 4.17519 6.51733Z"
                                        fill="white" />
                                    <path
                                        d="M14.7768 5.92587C13.2566 5.40515 11.3551 5.86255 10.2148 6.68276C10.1757 6.52981 10.0363 6.416 9.87051 6.416H6.31369C6.11735 6.416 5.95801 6.57534 5.95801 6.77168V17.4421C5.95801 17.6385 6.11735 17.7978 6.31369 17.7978H9.87051C10.0668 17.7978 10.2262 17.6385 10.2262 17.4421V9.77363C10.801 9.27852 11.5415 9.1206 12.1476 9.37811C12.7352 9.62638 13.0716 10.2325 13.0716 11.0399V17.4421C13.0716 17.6385 13.231 17.7978 13.4273 17.7978H16.9841C17.1805 17.7978 17.3398 17.6385 17.3398 17.4421V10.3235C17.2993 7.40052 15.9242 6.31854 14.7768 5.92587Z"
                                        fill="white" />
                                </svg>
                            </a>
                            {/* <a href={CFooter["linkedin"]} className="social btn">
                                <img src={'/ic Facebook.svg'} alt="logo"/>
                            </a> */}
                            <a href={CFooter["twitter"]} className="social btn">
                                <img src={'/ic Twitter.svg'} alt="logo"/>
                            </a>
                            <a href={CFooter["github"]} className="social btn">
                                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3874 0.968262C9.484 0.968385 6.6754 2.02774 4.46412 3.95678C2.25283 5.88582 0.783166 8.55865 0.318083 11.497C-0.147 14.4354 0.422851 17.4476 1.92567 19.9946C3.42849 22.5417 5.76622 24.4573 8.52055 25.3988C9.13191 25.5085 9.36117 25.1324 9.36117 24.8033C9.36117 24.5056 9.34588 23.5183 9.34588 22.4684C6.27378 23.0482 5.47902 21.7006 5.23447 20.9954C4.96312 20.3096 4.53297 19.7018 3.98119 19.2246C3.55323 18.9895 2.94187 18.4097 3.96589 18.3941C4.3569 18.4376 4.73192 18.5771 5.05917 18.8007C5.38643 19.0244 5.65627 19.3257 5.84583 19.679C6.01306 19.987 6.23793 20.2582 6.50755 20.477C6.77718 20.6957 7.08625 20.8578 7.41706 20.9539C7.74788 21.0499 8.09394 21.0782 8.4354 21.0369C8.77687 20.9956 9.10703 20.8856 9.40697 20.7133C9.45991 20.076 9.73694 19.4801 10.1865 19.0366C7.46593 18.7232 4.62311 17.6418 4.62311 12.8467C4.60593 11.6007 5.05435 10.3952 5.8764 9.47747C5.50259 8.39459 5.54633 7.20621 5.99867 6.15529C5.99867 6.15529 7.02266 5.82619 9.36115 7.44028C11.3619 6.8761 13.474 6.8761 15.4747 7.44028C17.8132 5.81053 18.8372 6.15529 18.8372 6.15529C19.2896 7.20619 19.3334 8.3946 18.9595 9.47747C19.784 10.3937 20.2328 11.6002 20.2128 12.8467C20.2128 17.6575 17.3546 18.7232 14.6341 19.0366C14.9259 19.3398 15.1507 19.7039 15.2931 20.1041C15.4355 20.5042 15.4922 20.9312 15.4595 21.3558C15.4595 23.0326 15.4442 24.3802 15.4442 24.8034C15.4442 25.1325 15.6734 25.5242 16.2848 25.3989C19.0343 24.4497 21.3653 22.5295 22.8617 19.9812C24.3581 17.4329 24.9225 14.4222 24.4542 11.4867C23.9859 8.55116 22.5154 5.88179 20.3051 3.9551C18.0947 2.02841 15.2885 0.96981 12.3874 0.968262Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h2 className="text-uppercase">Contact Us</h2>
                        <p className="mb-5">Any question or remarks? Just write us a message!</p>
                        <form action="/" onsubmit="return validateform()">
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" type="text" className="form-control" required placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input name="email" type="text" className="form-control" required
                                    placeholder="youremail@domain.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" required placeholder="Enter Message" name="message"
                                    id="message" rows={5} defaultValue={""} />
                                </div>
                <button data-toggle="modal" type="submit">
                Submit
                </button>
            </form>
            </div>
        </div>
        <div id="contact-location">
            {/* <div class="map">
                <img src={'/snazzy-image.png'} alt="">
            </div> */}
            {/* <div id="map"></div> */}
            <hr />
            <div id="contact-mails" className="pt-2 container">
            <div className="vent part-one">
                <div className="header">Investor Relations
                </div>
                <p>You can email our Investor Relations team at:</p>
                <strong>IR@portico.com</strong>
            </div>
            <div className="vent part-two">
                <div className="header">Press and Media Inquiries</div>
                <p> Members of the press can email us at:</p>
                <strong>Press@portico.com</strong>
            </div>
            <div className="vent part-three">
                <div className="header">Data Providers</div>
                <p> We at Portico are always on the lookout for more data so that we can make better predictions. Send us an email if you have a dataset you think we should study:</p>
                <strong>data@portico.com</strong>
            </div>
            </div>
        </div>
        {/* Section Home Ends */}
        </div>
    </header>

    <Footer></Footer>

    {/* Scripts */}
    <div className="page-wrapper modal" id="sucessModal">
        <div className="custom-modal modal-dialog">
        {/* <div class="succes succes-animation modal-content icon-top"><i class="fa fa-check"></i></div> */}
        <div className="succes border-bottom" />
        <div className="content d-flex flex-column align-items-center">
            {/* <p class="p-0 type">Form Response</p> */}
            <p className="py-3 m-0 message-type">Succesfully Booked</p>
        </div>
        </div>
    </div>
    </Layout>
  )
}

export default Contact

