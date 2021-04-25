import * as React from "react"
import { Link, } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
        <header className="main-header">
            <div className="nav pt-4">
                <nav id="navBar" className="navbar fixed-top navbar-expand-lg main-nav ">
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
                        {/* <li>
                            <Link to="/portfolio/">PORTFOLIO</Link>
                        </li> */}
                        <li>
                            <a href="https://jobs.lever.co/panteracapital">jobs</a>
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
                            <h2 className="header">PORTICO VENTURES</h2>
                            <p>If you’re ready to elevate your business and take it
                                to the next level, send us an email or call us at: </p>
                        </div>
                        <div className>
                            {/* <div className="mobile info">
                                <img src={'/mobile.svg'} alt="logo"/>
                                <p>+xx-xxxxx-xxxxx</p>
                            </div> */}
                            <div className="mail info">
                                <img src={'/Vector-1.svg'} alt="logo"/>
                                <p>support@portico.com</p>
                            </div>
                            <div className="location info">
                                <img src={'/Vector.svg'} alt="logo"/>
                                <p>3000 Random road, Ste. 1-xxxx <br />
                                    Random Park CA XXXXX</p>
                            </div>
                        </div>
                        <div className="contact-social mt-5">
                            <a href="youtube.com" className="social btn">
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
                            {/* <a href="youtube.com" className="social btn">
                                <img src={'/ic Facebook.svg'} alt="logo"/>
                            </a> */}
                            <a href="youtube.com" className="social btn">
                                <img src={'/ic Twitter.svg'} alt="logo"/>
                            </a>
                            <a href="youtube.com" className="social btn">
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
                <strong>IR@portico.com.com</strong>
            </div>
            <div className="vent part-two">
                <div className="header">Press and Media Inquiries</div>
                <p> Members of the press can email us at:</p>
                <strong>Press@portico.com.com</strong>
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
    <footer>
        <div className="footer-top">
        <div className="part-one">
            <div className="footer-logo mt-2"> <img src={'/logo_b.png'} alt="portico_ventures" />
            </div>
            {/* <div className="footer-number mt-2">+xx-xxxxx-xxxx</div> */}
            <div className="footer-mail mt-2">support@portico.com</div>
        </div>
        {/* <div class="part-two">
            <div class="footer-quicklinks footer-heading">Quick Links</div>
            <div class="footer-links mt-3">
                <div class="">
                    <p>Portfolio</p>
                    <p>About</p>
                </div>
                <div class="ml-4">
                    <p>Contact</p>
                    <p>Jobs</p>
                </div>
            </div>
        </div> */}
        <div className="part-three">
            <div className="footer-quicklinks footer-heading mb-3">Get in Touch</div>
            <div className="footer-cta">
            <div className="btn-group">
                <input type="text" className="form-control btn-one" placeholder="Get product updates" aria-label="Username" aria-describedby="basic-addon1" />
                <button className="btn btn-secondary btn-two"><img src={'/ic Arrow Go.png'} alt="logo"/></button>
            </div>
            </div>
        </div>
        </div>
        <hr />
        <div className="footer-bottom">
        <div className="footer-social">
            <a href="youtube.com" className="social btn"><svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.47183 2.9671C3.29117 2.9671 3.95538 2.30289 3.95538 1.48355C3.95538 0.664208 3.29117 0 2.47183 0C1.65249 0 0.988281 0.664208 0.988281 1.48355C0.988281 2.30289 1.65249 2.9671 2.47183 2.9671Z" fill="black" />
                <path d="M3.7091 3.95801H1.23652C1.10003 3.95801 0.989258 4.06878 0.989258 4.20527V11.623C0.989258 11.7595 1.10003 11.8703 1.23652 11.8703H3.7091C3.84559 11.8703 3.95636 11.7595 3.95636 11.623V4.20527C3.95636 4.06878 3.84559 3.95801 3.7091 3.95801Z" fill="black" />
                <path d="M11.0788 3.54689C10.022 3.1849 8.70014 3.50288 7.90743 4.07306C7.88023 3.96673 7.78331 3.88761 7.66808 3.88761H5.1955C5.05901 3.88761 4.94824 3.99838 4.94824 4.13487V11.5526C4.94824 11.6891 5.05901 11.7999 5.1955 11.7999H7.66808C7.80457 11.7999 7.91534 11.6891 7.91534 11.5526V6.22173C8.31491 5.87755 8.8297 5.76776 9.25103 5.94678C9.6595 6.11936 9.89341 6.54069 9.89341 7.10197V11.5526C9.89341 11.6891 10.0042 11.7999 10.1407 11.7999H12.6133C12.7497 11.7999 12.8605 11.6891 12.8605 11.5526V6.60399C12.8323 4.57202 11.8764 3.81986 11.0788 3.54689Z" fill="black" />
            </svg>
            </a>
            {/* <a href="youtube.com" className="social btn"><svg width={8} height={13} viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.08148 2.02078H7.68986C7.83783 2.02078 7.95792 1.90762 7.95792 1.76819V0.252598C7.95792 0.113164 7.83783 0 7.68986 0H6.08148C4.45594 0 3.13279 1.24632 3.13279 2.77858V4.54676H1.25634C1.10837 4.54676 0.988281 4.65993 0.988281 4.79936V6.31495C0.988281 6.45438 1.10837 6.56755 1.25634 6.56755H3.13279V11.8721C3.13279 12.0115 3.25288 12.1247 3.40085 12.1247H5.00923C5.1572 12.1247 5.27729 12.0115 5.27729 11.8721V6.56755H7.15373C7.269 6.56755 7.3714 6.49783 7.40839 6.39477L7.94452 4.87918C7.97186 4.80239 7.95792 4.71752 7.90753 4.65134C7.85659 4.58566 7.77617 4.54676 7.68986 4.54676H5.27729V2.77858C5.27729 2.36078 5.6381 2.02078 6.08148 2.02078Z" fill="black" />
            </svg>
            </a> */}
            <a href="youtube.com" className="social btn"><svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2095 1.26468C13.1282 1.17289 12.9973 1.14981 12.8899 1.20642C12.8231 1.2416 12.6976 1.28776 12.5485 1.33338C12.7366 1.07616 12.8878 0.788169 12.9546 0.529303C12.9834 0.417733 12.9412 0.300117 12.8493 0.233614C12.7574 0.167661 12.635 0.167661 12.5431 0.233614C12.3983 0.33749 11.6994 0.649668 11.2575 0.750795C10.2588 -0.148913 9.09664 -0.242346 7.88849 0.483136C6.90638 1.07287 6.69264 2.27211 6.73432 3.00309C4.48635 2.7805 3.08904 1.55927 2.30249 0.54854C2.24746 0.47764 2.15876 0.440267 2.0754 0.445763C1.98777 0.452358 1.90868 0.502373 1.8638 0.579867C1.4919 1.22566 1.38877 1.9396 1.56671 2.64474C1.66396 3.02947 1.83388 3.36858 2.03105 3.64338C1.93647 3.59557 1.8451 3.53566 1.75907 3.46421C1.67999 3.39716 1.56938 3.38452 1.47587 3.42904C1.38289 3.47465 1.32358 3.57138 1.32358 3.67746C1.32358 4.88825 2.0599 5.69617 2.7476 6.11827C2.63646 6.10453 2.5205 6.07925 2.40348 6.04242C2.30303 6.01109 2.19402 6.04242 2.12456 6.12376C2.05509 6.20456 2.03853 6.31997 2.08181 6.41835C2.46814 7.29718 3.20019 7.90175 4.10589 8.12104C3.31507 8.59865 2.25654 8.83278 1.28725 8.71791C1.16168 8.69978 1.04198 8.78167 1.00244 8.90588C0.962901 9.03009 1.01473 9.16639 1.12534 9.23015C2.59585 10.0793 3.92529 10.3827 5.07412 10.3827C6.74607 10.3827 8.03651 9.74073 8.82199 9.20377C10.9396 7.7583 12.2594 5.16305 12.0756 2.84096C12.4149 2.58319 12.9225 2.10723 13.2372 1.59554C13.3024 1.49222 13.2907 1.35591 13.2095 1.26468Z" fill="black" />
            </svg>
            </a>
            <a href="youtube.com" className="social btn"><svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.48922 0C7.47089 8.58124e-05 5.51844 0.736515 3.98123 2.07752C2.44402 3.41852 1.42235 5.27659 1.09904 7.31926C0.775733 9.36194 1.17187 11.4559 2.21659 13.2265C3.2613 14.9971 4.88641 16.3288 6.80113 16.9833C7.22613 17.0596 7.3855 16.7981 7.3855 16.5694C7.3855 16.3624 7.37487 15.6761 7.37487 14.9462C5.23925 15.3493 4.68676 14.4124 4.51676 13.9222C4.32812 13.4454 4.02909 13.0229 3.64551 12.6912C3.34801 12.5278 2.92302 12.1247 3.63488 12.1138C3.9067 12.1441 4.1674 12.2411 4.39489 12.3966C4.62239 12.5521 4.80997 12.7615 4.94175 13.0071C5.05801 13.2212 5.21433 13.4097 5.40176 13.5618C5.58919 13.7139 5.80405 13.8266 6.03402 13.8933C6.264 13.9601 6.50456 13.9797 6.74194 13.951C6.97931 13.9223 7.20883 13.8459 7.41734 13.7261C7.45414 13.283 7.64672 12.8688 7.95923 12.5605C6.068 12.3426 4.09176 11.5909 4.09176 8.25747C4.07981 7.39133 4.39154 6.55333 4.963 5.91532C4.70314 5.16254 4.73355 4.33641 5.048 3.60585C5.048 3.60585 5.75985 3.37707 7.38549 4.49914C8.77632 4.10694 10.2446 4.10694 11.6355 4.49914C13.2611 3.36619 13.9729 3.60585 13.9729 3.60585C14.2874 4.3364 14.3178 5.16255 14.0579 5.91532C14.6311 6.55223 14.9431 7.39097 14.9292 8.25747C14.9292 11.6018 12.9423 12.3426 11.0511 12.5605C11.2539 12.7713 11.4102 13.0244 11.5092 13.3026C11.6082 13.5808 11.6476 13.8776 11.6248 14.1728C11.6248 15.3384 11.6142 16.2752 11.6142 16.5694C11.6142 16.7982 11.7736 17.0705 12.1986 16.9834C14.1099 16.3235 15.7304 14.9887 16.7706 13.2172C17.8109 11.4457 18.2033 9.35277 17.8777 7.31208C17.5522 5.27138 16.5299 3.41573 14.9933 2.07635C13.4568 0.736983 11.506 0.00107622 9.48922 0Z" fill="black" />
            </svg>
            </a>
        </div>
        <div className="footer-copyright">
            2021 PORTICO. All Rights reserved
        </div>
        </div>
    </footer>
    {/* Bootstrap core JavaScript
        ================================================== */}
    {/* Placed at the end of the document so the pages load faster */}
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

