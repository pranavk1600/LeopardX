import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

const AboutPage = () => {
  useEffect(() => {
    const el = document.getElementById('about');
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
        "name": "About Us",
        "item": "https://leopardxtechnology.com/about"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>About Us | LeopardX Technologies — Modern Software Development Company</title>
        <meta name="description" content="Learn about LeopardX Technologies, our vision, mission, and how we deliver high-quality enterprise software, ERP systems, and AI solutions for modern businesses." />
        <meta name="keywords" content="About LeopardX, Software Developers, IT Consultants, Technology Partner, Web Agency India" />
        <link rel="canonical" href="https://leopardxtechnology.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Us | LeopardX Technologies — Modern Software Development Company" />
        <meta property="og:description" content="Learn about LeopardX Technologies, our vision, mission, and how we deliver high-quality enterprise software, ERP systems, and AI solutions for modern businesses." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | LeopardX Technologies — Modern Software Development Company" />
        <meta name="twitter:description" content="Learn about LeopardX Technologies, our vision, mission, and how we deliver high-quality enterprise software, ERP systems, and AI solutions for modern businesses." />
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

export default AboutPage;
