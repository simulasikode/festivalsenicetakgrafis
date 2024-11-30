import "./globals.css";
import Top from "./component/top";
import Nav from "./component/Nav";
import Footer from "./component/Footer/Index";
import SmoothScrolling from "./component/SmoothScrolling";
import GoogleAnalytics from "./component/GoogleAnalytics";
import { GoogleTagManager } from "@next/third-parties/google";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Festival Seni Cetak Grafis",
  description: "Festival seni cetak grafis:Trilogia orgenize by Krack! Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibm.className}>
      <GoogleAnalytics />
      <body>
        <GoogleTagManager gtmId="GTM-N264BVRG" />
        <Top />
        <SmoothScrolling>
          <Nav />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
