import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Stack from "./pages/Stack";

function App() {
  return (
    <div className=" bg-background font-primary text-white">
      <div className="mx-auto px-4 sm:px-16 md:px-8">
        <Header />
        <Home />
        <About />
        <Divider />
        <Portfolio />
        <Divider />
        <Stack />
        <Divider />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
