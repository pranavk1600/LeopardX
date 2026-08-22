import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientStats from '../components/ClientStats';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Process from '../components/Process';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = ({ showSEO = true }) => {
  useEffect(() => {
    if (showSEO) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [showSEO]);

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://leopardxtechnology.com/#organization",
        "name": "LeopardX Technologies",
        "url": "https://leopardxtechnology.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://leopardxtechnology.com/lx-logo.png"
        },
        "description": "Enterprise Software, AI Solutions and Web Development Company",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7823065239",
          "contactType": "customer service",
          "email": "leopardxtechnology@gmail.com"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://leopardxtechnology.com/#website",
        "url": "https://leopardxtechnology.com/",
        "name": "LeopardX Technologies",
        "publisher": {
          "@id": "https://leopardxtechnology.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://leopardxtechnology.com/#webpage",
        "url": "https://leopardxtechnology.com/",
        "name": "LeopardX Technologies | Enterprise Software, AI & Web Development Company",
        "isPartOf": {
          "@id": "https://leopardxtechnology.com/#website"
        },
        "about": {
          "@id": "https://leopardxtechnology.com/#organization"
        }
      }
    ]
  };

  return (
    <>
      {showSEO && (
        <Helmet>
          <html lang="en" />
          <title>LeopardX Technologies | Enterprise Software, AI & Web Development Company</title>
          <meta name="description" content="LeopardX Technologies builds enterprise software, ERP systems, AI solutions, scalable web applications, mobile apps, and custom digital products for modern businesses." />
          <meta name="keywords" content="Enterprise Software, ERP Development, AI Development, React Development, Node.js, MERN Stack, Website Development, Software Company India, LeopardX Technologies" />
          <link rel="canonical" href="https://leopardxtechnology.com/" />
          
          {/* Open Graph */}
          <meta property="og:title" content="LeopardX Technologies | Enterprise Software, AI & Web Development Company" />
          <meta property="og:description" content="LeopardX Technologies builds enterprise software, ERP systems, AI solutions, scalable web applications, mobile apps, and custom digital products for modern businesses." />
          <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
          <meta property="og:url" content="https://leopardxtechnology.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="LeopardX Technologies" />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="LeopardX Technologies | Enterprise Software, AI & Web Development Company" />
          <meta name="twitter:description" content="LeopardX Technologies builds enterprise software, ERP systems, AI solutions, scalable web applications, mobile apps, and custom digital products for modern businesses." />
          <meta name="twitter:image" content="https://leopardxtechnology.com/lx-logo.png" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(graphSchema)}
          </script>
        </Helmet>
      )}
      <Navbar />
      <main>
        <Hero />
        <ClientStats />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Team />
        <Process />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;