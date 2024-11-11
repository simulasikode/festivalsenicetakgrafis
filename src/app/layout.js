import "./globals.css";

export const metadata = {
  title: "Festival Seni Cetak Grafis",
  description: "orgenize by Krack! Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
