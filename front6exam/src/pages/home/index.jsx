import React from 'react'
import Features from '../../sections/features'
import { Helmet } from 'react-helmet-async'

function Home() {
  return ( 
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <Features/>
    </>
  )
}

export default Home