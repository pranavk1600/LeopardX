import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Page Not Found | LeopardX Technologies</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Navbar />

      <main style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        background: 'var(--bg-soft)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '560px',
          background: 'var(--bg-white)',
          padding: '48px 32px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-light)'
        }}>
          <h1 style={{
            fontSize: '6.5rem',
            fontWeight: '900',
            lineHeight: '1',
            margin: '0 0 12px 0',
            background: 'linear-gradient(135deg, var(--amber), var(--amber-dark))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-2px'
          }}>404</h1>
          
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            margin: '0 0 16px 0',
            letterSpacing: '-0.5px'
          }}>Page Not Found</h2>

          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: '1.7',
            margin: '0 0 32px 0'
          }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link 
            to="/" 
            className="lx-nav-cta" 
            style={{ 
              display: 'inline-flex',
              padding: '12px 28px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFoundPage;
