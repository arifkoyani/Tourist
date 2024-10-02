import React from 'react'
import Navbar from "../NavBar/page"
import SecondBar from "../SecondBar/page"
import Indroduce from "../introdPage/page"
import QuickContact from "../quickContact/page"
import QRcodeComponent from "../QRcodeComponent/page"
import ContactComponent from "../ContactComponent/page"
import Footer from "../Footer/page"
import EmailMessage from "../EmailMessage/page"
const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <SecondBar/>
        <Indroduce/>
        <EmailMessage/>
        <QuickContact/>
        <QRcodeComponent/>

        <ContactComponent/>
        <Footer/>



    </div>
  )
}

export default AboutUs