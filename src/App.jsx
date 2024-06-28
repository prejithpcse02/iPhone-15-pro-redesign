import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Home />
        <Highlights />
        <Model />
        <Features />
        <Works />
        <Footer />
      </main>
    </>
  );
}
