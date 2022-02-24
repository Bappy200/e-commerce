import React from 'react'
import Categories from '../Categories/Categories'
import Event from '../Event/Event'
import Footer from '../Footer/Footer'
import Layout from '../Layout/Layout'
import Watch from '../Watch/Watch'

function Service() {
  return (
    <Layout>
        <>
          <Categories/>
          <Watch/>
          <Event/>
          <Footer/>
        </>
    </Layout>
  )
}

export default Service