import React from 'react'
import HomeHeader from '../../Components/HomeHeader'
import MessageUs from '../../Components/MessageUs'
import OurPrograms from '../../Components/OurPrograms'
import OurTeachers from '../../Components/OurTeachers'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'

function Home() {
  return (
     <>
     <Navbar/>
     <HomeHeader/>
     <OurPrograms/>
     <OurTeachers/>
     <MessageUs/>
     <Footer/>
     </>
  )
}

export default Home