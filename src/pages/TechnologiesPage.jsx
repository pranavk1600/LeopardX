import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

const TechnologiesPage = () => {
  useEffect(() => {
    const el = document.getElementById('technologies');
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
        "name": "Technologies",
        "item": "https://leopardxtechnology.com/technologies"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Technologies & Stack | LeopardX Technologies — Modern Tech Solutions</title>
        <meta name="description" content="Our modern technology stack: React, Node.js, MERN stack, Python, AI frameworks, cloud platforms, and enterprise ERP tools designed for scalability, speed, and safety." />
        <meta name="keywords" content="Tech Stack LeopardX, React Development, Node.js Backend, MERN Stack Development, Python AI, Cloud Architecture, Enterprise Tech Stack" />
        <link rel="canonical" href="https://leopardxtechnology.com/technologies" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Technologies & Stack | LeopardX Technologies — Modern Tech Solutions" />
        <meta property="og:description" content="Our modern technology stack: React, Node.js, MERN stack, Python, AI frameworks, cloud platforms, and enterprise ERP tools designed for scalability, speed, and safety." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technologies & Stack | LeopardX Technologies — Modern Tech Solutions" />
        <meta name="twitter:description" content="Our modern technology stack: React, Node.js, MERN stack, Python, AI frameworks, cloud platforms, and enterprise ERP tools designed for scalability, speed, and safety." />
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

export default TechnologiesPage;
