import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

const ServicesPage = () => {
  useEffect(() => {
    const el = document.getElementById('services');
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
        "name": "Services",
        "item": "https://leopardxtechnology.com/services"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Our Services | LeopardX Technologies — Custom Software & AI Development</title>
        <meta name="description" content="Discover our professional services: customized enterprise software development, ERP integrations, generative AI implementation, UI/UX design, and scalable full-stack web/mobile apps." />
        <meta name="keywords" content="Software Development Services, Enterprise Solutions, ERP Customization, AI Consulting, Web Development Services, Mobile App Development" />
        <link rel="canonical" href="https://leopardxtechnology.com/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our Services | LeopardX Technologies — Custom Software & AI Development" />
        <meta property="og:description" content="Discover our professional services: customized enterprise software development, ERP integrations, generative AI implementation, UI/UX design, and scalable full-stack web/mobile apps." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | LeopardX Technologies — Custom Software & AI Development" />
        <meta name="twitter:description" content="Discover our professional services: customized enterprise software development, ERP integrations, generative AI implementation, UI/UX design, and scalable full-stack web/mobile apps." />
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

export default ServicesPage;
