import "./globals.css";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={hankenGrotesk.className}>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}