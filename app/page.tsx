import Indroduce from "./components/introdPage/page"
import Cards from "./components/cards/page"
import CardWithImges from "./components/cardsWithImage/page"
import ImageCarousel from "./components/Coursal/page"
import QuickContact from "./components/quickContact/page"
import QRcodeComponent from "./components/QRcodeComponent/page"
import ServicesGrid from "./components/AllSources/page"
import ContactComponent from "./components/ContactComponent/page"
import EmailMessage from "./components/EmailMessage/page"
import BookNow from "./components/BookNow/page"
import Reviews from "./components/ClientReviews/page"
export default function Home() {
  return (
    <>

<ImageCarousel/>
<ServicesGrid/>
<Indroduce/>
<BookNow/>
<EmailMessage/>
<Cards/>
<CardWithImges/>
<QRcodeComponent/>
<QuickContact/>
<ContactComponent/>
<Reviews/>
    </>
  );
}
