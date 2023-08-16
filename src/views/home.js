import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Embellished Golden Sardine</title>
        <meta property="og:title" content="Embellished Golden Sardine" />
      </Helmet>
      <a
        href="https://onenotefeed.com/short/81472?stream_uuid=0a3ec78a-0fbd-4f2d-925c-e967ab66e1af&amp;trek=1"
        className="home-link"
      >
        <img alt="image" src="/buttonbg-400h.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
