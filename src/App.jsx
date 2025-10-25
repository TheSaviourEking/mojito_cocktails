import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <div className="h-dvh"></div>
    </main>
  );
}

export default App;
