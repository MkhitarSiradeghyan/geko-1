import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'ge', label: 'ჩვსახებ' },
    { code: 'hy', label: 'Հայերեն' },
    { code: 'en', label: 'English' }
  ];

  return (
    <header style={styles.header}>
      <div style={styles.logo}>GlobalApp</div>
      
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>{t('nav.home')}</a>
        <a href="#about" style={styles.link}>{t('nav.about')}</a>
        <a href="#contact" style={styles.link}>{t('nav.contact')}</a>
      </nav>

      <div style={styles.langWrapper}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            style={{
              ...styles.langBtn,
              backgroundColor: i18n.language === lang.code ? '#4A90E2' : 'transparent',
              color: i18n.language === lang.code ? 'white' : '#ccc'
            }}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    height: '70px',
    backgroundColor: '#1a1a1a',
    borderBottom: '1px solid #333',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#4A90E2',
    letterSpacing: '1px'
  },
  nav: {
    display: 'flex',
    gap: '30px',
  },
  link: {
    color: '#eee',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s',
  },
  langWrapper: {
    display: 'flex',
    gap: '8px',
    backgroundColor: '#262626',
    padding: '4px',
    borderRadius: '8px',
  },
  langBtn: {
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  }
};

export default Header;