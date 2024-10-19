import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/NavBar/page";
import Secondbar from "./components/SecondBar/page";
import Footer from "./components/Footer/page";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: "Travel at Ease",
  description: "Welcome To Pakistan",
  icons: {
    icon: "/logo.png", 
  },
};

export default function RootLayout({
  children
} ) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
 <Navbar/>
 <Secondbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
