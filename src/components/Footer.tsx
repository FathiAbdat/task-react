import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const icons = {
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />
  };

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0D4F8C 0%, #1262AE 100%)',
      color: '#ffffff',
      padding: '1.5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '300px',
          position: 'relative'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #FFFFFF 0%, #E0E7FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.5px'
          }}>FickleFlight</h3>
          <p style={{
            marginBottom: '1.5rem',
            lineHeight: 1.6,
            opacity: 0.9,
            fontSize: '0.95rem',
            color: '#E0E7FF',
            fontWeight: 400,
            maxWidth: '280px'
          }}>
            Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings. We also have all your flight needs in our online shop.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {['facebook', 'twitter', 'instagram'].map((social) => (
              <a 
                key={social} 
                href="#" 
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                style={{
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  opacity: 0.8,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                {icons[social]}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '3rem',
          position: 'relative',
          borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
          paddingLeft: '2rem'
        }}>
          {['Company', 'Support', 'More'].map((section, index) => (
            <div key={section} style={{ position: 'relative' }}>
              <h4 style={{
                fontSize: '1rem',
                marginBottom: '1.2rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#FFFFFF'
              }}>{section}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  section === 'Company' ? ['About Us', 'News', 'Careers', 'How we work'] :
                  section === 'Support' ? ['Account', 'Support Center', 'FAQ', 'Accessibility'] :
                  ['Covid Advisory', 'Airline Fees', 'Tips', 'Quarantine Rules']
                ][0].map((item) => (
                  <li key={item} style={{ marginBottom: '0.8rem' }}>
                    <a 
                      href="#" 
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.9';
                        e.currentTarget.style.color = '#E0E7FF';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                      style={{
                        color: '#E0E7FF',
                        textDecoration: 'none',
                        opacity: 0.9,
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-block'
                      }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;