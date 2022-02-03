import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Product from "../components/product"
import Cart from "../components/cart"
import { useState } from 'react'


const Home: NextPage = () => {

  return (
    <div >
      <Head>
        <title>Webshop</title>
        <meta name="description" content="webshop app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        
          <Image onClick={()=>{
            <Cart/>

          
        }}className="img" src="/cart.svg" alt="" height={50} width={50}/>
        
      </header>

  <div className="wrapper">
    <div className="productWrap">

      <Product name="Smart Hub" price="49.99" />
      <Product name="Motion Sensor" price="24.99"/>
      <Product name="Wireless Camera" price="99.99"/>
      <Product name="Smoke Sensor" price="19.99"/>
      <Product name="Water Leak Sensor" price="14.99"/>
    </div>
  </div>
      
    </div>
  )
}

export default Home
