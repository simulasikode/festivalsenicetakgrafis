import Footer from "./component/Footer/Index";
import Nav from "./component/Nav";
import SmoothScrolling from "./component/SmoothScrolling";
import Top from "./component/top";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Festival Seni Cetak Grafis",
  description: "orgenize by Krack! Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibm.className}>
      <body>
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
