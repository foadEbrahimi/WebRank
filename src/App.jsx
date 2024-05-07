import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Feedback from "./Components/Feedback/Feedback";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Header/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Servant from "./Components/Servant/Servant";
import Team from "./Components/Team/Team";
import "./index.css";
const titleSections = [
  { ID: 1, subTitle: "خدمات", Title: "خدمات ما را بررسی کنید" },
  { ID: 2, subTitle: "نمونه کارها", Title: "نمونه کارها ما را بررسی کنید" },
  { ID: 3, subTitle: "تیم", Title: "تیم ما را بررسی کنید" },
  { ID: 4, subTitle: "تماس با ما", Title: "با ما تماس بگیرید" },
];
function App() {
  return (
    <div className="font-Tanha">
      <div className="App md:h-[100vb] flex flex-col gap-y-32 pb-4">
        <Header />
        <Hero />
      </div>
      <main className="space-y-32">
        <About />
        <Servant {...titleSections[0]} />
        <Portfolio {...titleSections[1]} />
        <Feedback />
        <Team {...titleSections[2]} />
        <Contact {...titleSections[3]} />
      </main>
      <footer className="mt-24">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
