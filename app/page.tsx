import Secondbar from "./components/SecondBar/page"
import Indroduce from "./components/introdPage/page"
import Cards from "./components/cards/page"
import CardWithImges from "./components/cardsWithImage/page"
import ImageCarousel from "./components/Coursal/page"
import Navbar from "./components/NavBar/page"
import QuickContact from "./components/quickContact/page"
import Footer from "./components/Footer/page"
import QRcodeComponent from "./components/QRcodeComponent/page"
import ServicesGrid from "./components/AllSources/page"
export default function Home() {
  return (
    <>
<Navbar/>
<Secondbar/>
<ImageCarousel/>
<ServicesGrid/>
<Indroduce/>
<Cards/>
<CardWithImges/>
<QRcodeComponent/>
<QuickContact/>
<Footer/>
    </>
  );
}
