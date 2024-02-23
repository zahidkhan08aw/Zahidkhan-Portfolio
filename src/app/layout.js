import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZahidKhan|Portfolio",
  description:
    "Welcome to Zahid Khan's Portfolio – Your Gateway to Exceptional Frontend Development. Explore stunning creations crafted with expertise in HTML, CSS, JavaScript, React.js, Next.js, and other cutting-edge frontend tools. Immerse yourself in a showcase of captivating user interfaces, seamless interactions, and responsive designs tailored to elevate your digital presence. With a passion for innovation and a commitment to excellence, Zahid Khan brings your vision to life through the artistry of frontend development. Unleash the full potential of your digital projects – explore Zahid Khan's portfolio today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
