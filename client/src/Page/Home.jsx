import React from 'react'
import Navbar from '../components/Navbar/Navbar';


const Home = () => {
  return (
    <>
      <Navbar />
      <div className='my-12'>
        <h1 className='text-red-500 bg-red-200 text-2xl'>Also heading is included</h1>
      </div>
    </>

  )
}

export default Home;