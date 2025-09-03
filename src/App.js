import { BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Lateral from "./components/lateral/lateral";
import Services from "./components/services/services";
import Why from './components/why/why';
import CTA from './components/CTA/CTA';
import Footer from './components/footer/footer';
import { GlobalStyled } from '.';
import { ResponsiveProvider } from './components/Responsive/Responsive';

function App() {
  return (
    <>
    <ResponsiveProvider>
      <Router>
        <GlobalStyled />
        <Lateral />
        <Header />
        <Hero />
        <Services />
        <Why />
        <CTA />
        <Footer />
      </Router>
    </ResponsiveProvider>
    </>
  );
}

export default App;
