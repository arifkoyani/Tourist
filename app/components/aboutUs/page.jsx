import React from 'react'
import Indroduce from "../introdPage/page"
import QuickContact from "../quickContact/page"
import QRcodeComponent from "../QRcodeComponent/page"
import ContactComponent from "../ContactComponent/page"
import EmailMessage from "../EmailMessage/page"
const AboutUs = () => {
  return (
    <div>
        <Indroduce/>
        <EmailMessage/>
        <QuickContact/>
        <QRcodeComponent/>
        <ContactComponent/>
    </div>
  )
}

export default AboutUs