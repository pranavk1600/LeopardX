import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

const ContactPage = () => {
  useEffect(() => {
    const el = document.getElementById('contact');
    if (el) {
      const navbarHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://leopardxtechnology.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://leopardxtechnology.com/contact"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Contact Us | LeopardX Technologies — Get a Custom Software Quote</title>
        <meta name="description" content="Get in touch with LeopardX Technologies today. Contact us for customized enterprise software, AI solutions, ERP integrations, and software engineering services." />
        <meta name="keywords" content="Contact LeopardX, Software Development Quote, Hire AI Developers, ERP Consulting Contact, LeopardX India" />
        <link rel="canonical" href="https://leopardxtechnology.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | LeopardX Technologies — Get a Custom Software Quote" />
        <meta property="og:description" content="Get in touch with LeopardX Technologies today. Contact us for customized enterprise software, AI solutions, ERP integrations, and software engineering services." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | LeopardX Technologies — Get a Custom Software Quote" />
        <meta name="twitter:description" content="Get in touch with LeopardX Technologies today. Contact us for customized enterprise software, AI solutions, ERP integrations, and software engineering services." />
        <meta name="twitter:image" content="https://leopardxtechnology.com/lx-logo.png" />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <Home showSEO={false} />
    </>
  );
};

export default ContactPage;