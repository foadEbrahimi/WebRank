import React, { Suspense } from 'react';
const About = React.lazy(() => import('./Components/About/About'));
const Contact = React.lazy(() => import('./Components/Contact/Contact'));
const Feedback = React.lazy(() => import('./Components/Feedback/Feedback'));
const Footer = React.lazy(() => import('./Components/Footer/Footer'));
const Header = React.lazy(() => import('./Components/Header/Header'));
const Hero = React.lazy(() => import('./Components/Header/Hero/Hero'));
const Portfolio = React.lazy(() => import('./Components/Portfolio/Portfolio'));
const Servant = React.lazy(() => import('./Components/Servant/Servant'));
const Team = React.lazy(() => import('./Components/Team/Team'));
import './index.css';
const titleSections = [
  { ID: 1, subTitle: 'خدمات', Title: 'خدمات ما را بررسی کنید' },
  { ID: 2, subTitle: 'نمونه کارها', Title: 'نمونه کارها ما را بررسی کنید' },
  { ID: 3, subTitle: 'تیم', Title: 'تیم ما را بررسی کنید' },
  { ID: 4, subTitle: 'تماس با ما', Title: 'با ما تماس بگیرید' },
];
function App() {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
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
    </Suspense>
  );
}

export default App;
