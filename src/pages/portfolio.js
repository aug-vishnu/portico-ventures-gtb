import * as React from "react"
import { Link, } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "./footer"
import CFooter from '../../site/content/settings.json'


const Portfolio = () => {
  return (
    <Layout>
      <Seo title="Portfolio" />
        <header className="main-header ">
            <div className="nav pt-4">
            <nav id="navBar" className="navbar floatingNav fixed-top navbar-expand-lg main-nav">
                <a className="navbar-brand" href="/">
                <img src={'/logo.png'} alt="logo" alt="portico_ventures" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
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
                            <Link className="active" to="/portfolio/">PORTFOLIO</Link>
                        </li>
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
            <div className="monster portfolio-section">
            {/* Section Home Starts */}
            <div id="content-part" className="container">
                <h1 className="text-center text-uppercase mb-3">venture investments</h1>
                <h5 className="text-center">We at Portico believe in empowering the growth and success of startups in the crypto assets and the blockchain industry that show great potential to become the pioneers of tomorrow.
                </h5>
            </div>
            <div id="icons-part" className="container">
                <div className="row">
                <div className="vent monster col-md-4 col-xs-6">
                    <a href="https://app.1inch.io/" className="icon">
                    <img src={'/portfolio_png/1inch.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">1inch</p>
                </div>
                <div className="vent monster col-md-4 col-xs-6">
                    <a href="https://www.abra.com/" className="icon">
                    <img src={'/portfolio_png/ABRA 1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">abra</p>
                </div>
                <div className="vent monster col-md-4 col-xs-6">
                    <a href="https://www.alchemyapi.io/" className="icon">
                    <img src={'/portfolio_png/alchemy 1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">ALCHEMY</p>
                </div>
                <div className="vent monster col-md-4 col-xs-6">
                    <a href="https://amber.app/" className="icon">
                    <img src={'/portfolio_png/Amber+-+White 1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">amber</p>
                </div>
                <div className="vent monster col-md-4 col-xs-6">
                    <a href="https://www.ampleforth.org/" className="icon">
                    <img src={'/portfolio_png/a_white 1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">ampleforth</p>
                </div>
                <div className="vent monster col-md-4 col-xs-6">
                    <a href="https://www.anchorage.com/" className="icon">
                    <img src={'/portfolio_png/Anchorage 1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">anchorage</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://audius.co/" className="icon">
                    <img src={'/portfolio_png/audius.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">audius</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.bakkt.com/" className="icon">
                    <img src={'/portfolio_png/Bakkt+Logo+-+B&W.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">bakkt</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://balancer.finance/" className="icon">
                    <img src={'/portfolio_png/Balancer+White.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">balancer</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.bitpesa.co/company/" className="icon">
                    <img src={'/portfolio_png/bitpesa+copy.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">bitpesa</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://bitso.com/" className="icon">
                    <img src={'/portfolio_png/Bitoasis.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">Bitso</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.bitstamp.net/" className="icon">
                    <img src={'/portfolio_png/audius-1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">bitstamp</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://blockfolio.com/" className="icon">
                    <img src={'/portfolio_png/Bakkt+Logo+-+B&W-1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">blockfolio</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.theblockcrypto.com/" className="icon">
                    <img src={'/portfolio_png/Balancer+White-1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">The Block</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://brave.com/brave-tap-blockchain/" className="icon">
                    <img src={'/portfolio_png/bitpesa+copy-1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">brave</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://chain.link/" className="icon">
                    <img src={'/portfolio_png/Anchorage 2.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">chain</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.chronicled.com/" className="icon">
                    <img src={'/portfolio_png/audius-2.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">chronicled</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.circle.com/en/" className="icon">
                    <img src={'/portfolio_png/Bakkt+Logo+-+B&W-2.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">circle</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.civic.com/" className="icon">
                    <img src={'/portfolio_png/Balancer+White-2.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">civic</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.coinbase.com/learn/crypto-basics/what-is-a-blockchain" className="icon">
                    <img src={'/portfolio_png/bitpesa+copy-2.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">coinbase</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://coins.ph/blog/what-is-blockchain-how-does-it-work/" className="icon">
                    <img src={'/portfolio_png/Bakkt+Logo+-+B&W-3.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">coins.ph</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://coinme.com/" className="icon">
                    <img src={'/portfolio_png/Bitoasis-1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">coinme</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.coinsuper.com/" className="icon">
                    <img src={'/portfolio_png/audius-3.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">coinsuper</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://coinmarketcap.com/earn/" className="icon">
                    <img src={'/portfolio_png/Balancer+White-3.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">earn</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.erisx.com/" className="icon">
                    <img src={'/portfolio_png/bitpesa+copy-3.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">eris x</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://filament.com/" className="icon">
                    <img src={'/portfolio_png/Anchorage 3.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">filament</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://ftx.com/en" className="icon">
                    <img src={'/portfolio_png/audius-4.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">ftx</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://harbor.com/" className="icon">
                    <img src={'/portfolio_png/Bakkt+Logo+-+B&W-4.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">harbor</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://instadapp.io/" className="icon">
                    <img src={'/portfolio_png/Balancer+White-4.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">InstaDApp</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://koinex.in/" className="icon">
                    <img src={'/portfolio_png/bitpesa+copy-4.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">koinex</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.korbit.co.kr/" className="icon">
                    <img src={'/portfolio_png/Bitoasis-2.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">korbit</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://merkledata.io/" className="icon">
                    <img src={'/portfolio_png/audius-5.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">Merkle data</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.meter.io/" className="icon">
                    <img src={'/portfolio_png/Bakkt+Logo+-+B&W-5.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">Meter</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://near.org/" className="icon">
                    <img src={'/portfolio_png/Balancer+White-5.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">NEAR Protocol</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://offchainlabs.com/" className="icon">
                    <img src={'/portfolio_png/bitpesa+copy-5.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">Offchain Labs</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://opentoken.com/" className="icon">
                    <img src={'/portfolio_png/Bitoasis-3.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">opentoken</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://paradex.io/" className="icon">
                    <img src={'/portfolio_png/audius-6.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">paradex</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://polychain.capital/" className="icon">
                    <img src={'/portfolio_png/Bakkt+Logo+-+B&W-6.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">polychain capital</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.ripio.com/ar/" className="icon">
                    <img src={'/portfolio_png/Balancer+White-6.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">ripio</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://ripple.com/xrp/" className="icon">
                    <img src={'/portfolio_png/bitpesa+copy-6.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">XRP Ripple</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://shapeshift.com/" className="icon">
                    <img src={'/portfolio_png/Bitoasis-4.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">shapeshift</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://staked.us/" className="icon">
                    <img src={'/portfolio_png/audius-7.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">staked</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://starkware.co/" className="icon">
                    <img src={'/portfolio_png/Bakkt+Logo+-+B&W-7.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">starkware</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://synthetic-minds.com/" className="icon">
                    <img src={'/portfolio_png/Balancer+White-7.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">synthetic minds</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://tagomi.com/" className="icon">
                    <img src={'/portfolio_png/bitpesa+copy-7.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">tagomi</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.transparent.us/" className="icon">
                    <img src={'/portfolio_png/Bitoasis-5.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">transparent financial systems</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.vauld.com/" className="icon">
                    <img src={'/portfolio_png/audius-8.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">vauld</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.veem.com/" className="icon">
                    <img src={'/portfolio_png/veem 1.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">veem</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.wintermute.com/" className="icon">
                    <img src={'/portfolio_png/Balancer+White-8.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">Wintermute</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.sendwyre.com/" className="icon">
                    <img src={'/portfolio_png/bitpesa+copy-8.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">wyre</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://www.xapo.com/" className="icon">
                    <img src={'/portfolio_png/Bitoasis-6.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">Xapo</p>
                </div>
                <div className="vent col-md-4 col-xs-6">
                    <a href="https://z.cash/" className="icon">
                    <img src={'/portfolio_png/audius-9.png'} alt="logo" />
                    </a>
                    <p className="text-center text-uppercase">zcash</p>
                </div>
                </div>
            </div>
            {/* Section Home Ends */}
            </div>
        </header>

        <Footer></Footer>
        
    </Layout>
  )
}

export default Portfolio

