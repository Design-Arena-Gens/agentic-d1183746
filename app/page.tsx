import ContactSection from "@/components/ContactSection";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const HomePage = () => (
  <div className="relative flex min-h-screen flex-col">
    <Navbar />
    <main>
      <Hero />
      <Services />
      <Expertise />
      <Testimonials />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default HomePage;
