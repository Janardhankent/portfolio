import { useEffect, useState } from 'react';

const LINKS = [
  ['About', '#about'],
  ['Pipeline', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" aria-label="Home">
          <span className="nav-brand-mark">JD</span>
          <span className="nav-brand-name">janardhan<span className="nav-brand-dot">.</span>eng</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <a className="btn btn-primary nav-cta" href="mailto:janardhanreddydondeti@gmail.com">
          Get in touch
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-primary" href="mailto:janardhanreddydondeti@gmail.com" onClick={() => setOpen(false)}>
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
