import React from 'react'
import Main from '../Main'
import Choose from '../Choose'
import Product from '../Product'
import Experience from '../Experience'
import Materials from '../Materials'
import Client from '../Client'
import Footer from '../../components/common/Footer'

const Home = () => {
  return (
    <div>
    <Main />
      <Choose />
      <Product />
      <Experience />
      <Materials />
      <Client />
      <Footer />
    </div>
  )
}

export default Home