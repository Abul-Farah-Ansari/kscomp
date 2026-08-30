import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import About from "./components/About";
import FinancialManagement from "./components/FinancialManagement";
import Services from "./components/Services";
import IntroVideo from "./components/IntroVideo";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import CEOMessage from "./components/CEOMessage";
import FAQ from "./components/FAQ";
import QueryForm from "./components/QueryForm";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import WhatsAppButton from "./components/WhatsAppButton";


const Home = () => {
  return (
    <main className="bg-white">

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-[200]">
        <Navbar />
      </div>

      {/* Hero */}
      <Hero />

      {/* Feature Cards */}
      <FeatureCards />

      {/* About */}
      <About />
      <Stats />

      <IntroVideo />

      {/* Financial Management */}
      <FinancialManagement />

      {/* Our Services */}
      <Services />
      <Clients />
      <Testimonials />
      <CEOMessage />
      <FAQ />
      <QueryForm />
      <Footer />
      <Chatbot />
      <WhatsAppButton />

    </main>
  );
};

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* About Page */}
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <h1 className="p-10 text-4xl">
              About
            </h1>
          </>
        }
      />

      {/* Services Page */}
      <Route
        path="/services"
        element={
          <>
            <Navbar />
            <h1 className="p-10 text-4xl">
              Services
            </h1>
          </>
        }
      />

      {/* Contact Page */}
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <h1 className="p-10 text-4xl">
              Contact
            </h1>
          </>
        }
      />

      {/* Blog Page */}
      <Route
        path="/blog"
        element={
          <>
            <Navbar />
            <h1 className="p-10 text-4xl">
              Blog
            </h1>
          </>
        }
      />

      {/* Careers Page */}
      <Route
        path="/careers"
        element={
          <>
            <Navbar />
            <h1 className="p-10 text-4xl">
              Careers
            </h1>
          </>
        }
      />

      {/* Appointment Page */}
      <Route
        path="/appointment"
        element={
          <>
            <Navbar />
            <h1 className="p-10 text-4xl">
              Appointment
            </h1>
          </>
        }
      />

    </Routes>
  );
}

export default App;