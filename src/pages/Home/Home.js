import React from 'react'
import Main from '../Main'
import Choose from '../Choose'
import Product from '../Product'
import Experience from '../Experience'
import Materials from '../Materials'
import Client from '../Client'
import Footer from '../../components/common/Footer';
import '../Home/home.scss'

const Home = () => {
  return (
    <>
    <Main />
      <Choose />
      <Product />
      <Experience />
      <Materials />
      <Client />
      <Footer />
    </>
  )
}

export default Home