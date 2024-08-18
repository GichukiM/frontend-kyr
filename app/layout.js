// layout.tsx or layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Searchbar from "./components/common/Searchbar";
import { SearchProvider } from "./components/common/SearchContext"; // Adjust the path as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Know Your Rights",
  description: "Know your rights Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <Searchbar />
          <Navbar />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
