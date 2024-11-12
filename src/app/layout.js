import Footer from "./component/Footer/Index";
import Nav from "./component/Nav";
import SmoothScrolling from "./component/SmoothScrolling";
import "./globals.css";

export const metadata = {
  title: "Festival Seni Cetak Grafis",
  description: "orgenize by Krack! Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrolling>
          <Nav />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
