import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

const ProjectsPage = () => {
  useEffect(() => {
    const el = document.getElementById('portfolio');
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
        "name": "Portfolio",
        "item": "https://leopardxtechnology.com/portfolio"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Portfolio & Case Studies | LeopardX Technologies — Custom Software Projects</title>
        <meta name="description" content="Explore the portfolio of LeopardX Technologies. See our successful enterprise applications, customized ERP dashboards, medical systems, and responsive web portals." />
        <meta name="keywords" content="LeopardX Portfolio, Software Case Studies, React Projects, Enterprise App Showcase, ERP System Examples" />
        <link rel="canonical" href="https://leopardxtechnology.com/portfolio" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Portfolio & Case Studies | LeopardX Technologies — Custom Software Projects" />
        <meta property="og:description" content="Explore the portfolio of LeopardX Technologies. See our successful enterprise applications, customized ERP dashboards, medical systems, and responsive web portals." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio & Case Studies | LeopardX Technologies — Custom Software Projects" />
        <meta name="twitter:description" content="Explore the portfolio of LeopardX Technologies. See our successful enterprise applications, customized ERP dashboards, medical systems, and responsive web portals." />
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

export default ProjectsPage;