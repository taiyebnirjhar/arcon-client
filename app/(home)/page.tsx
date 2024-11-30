import About from "./_components/about/About";
import ClientStory from "./_components/client-story/ClientStory";
import ContactForm from "./_components/contact-form/ContactForm";
import Footer from "./_components/footer/Footer";
import Hero from "./_components/hero/Hero";
import { Navbar } from "./_components/navbar/navbar";
import OfficeLocation from "./_components/office-location/OfficeLocation";
import Partner from "./_components/partner/Partner";
import Projects from "./_components/projects/Projects";
import Services from "./_components/services/Services";
import Testimonial from "./_components/testimonial/Testimonial";
import VideoPreview from "./_components/video-preview/VideoPreview";
import VisitOurOffice from "./_components/visit-our-office/VisitOurOffice";
import Works from "./_components/works/Works";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2A3121] via-[#677655] to-[#819766] relative overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Video Section */}
      <VideoPreview />
      {/* Services Section */}
      <Services />
      {/* About Section */}
      <About />
      {/* Our Work content */}
      <Works />
      {/* PROJECTS content */}
      <Projects />
      {/* Visit Our Office Section */}
      <VisitOurOffice />
      {/* Location Section */}
      <OfficeLocation />
      {/* partner section */}
      <Partner />
      {/* testimonial section */}
      <Testimonial />
      {/* Client Story Section */}
      <ClientStory />
      {/* contact form section */}
      <ContactForm />
      {/* END OF CONTACT FORM */}
      {/* Footer */}
      <Footer />
    </main>
  );
}
