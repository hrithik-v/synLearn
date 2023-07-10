import "./styles.css";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import Pricing from "./components/pricing";
import Overlay from "./components/overlay";
import { useState } from "react";

export default function App() {
  const [toShow_overlay, setOverlay] = useState(false);
  return (
    <>
      <div className="App">
        {toShow_overlay ? (
          <Overlay hook={{ toShow_overlay, setOverlay }} />
        ) : undefined}
        <Header hook={{ toShow_overlay, setOverlay }} />
        <Carousel />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
