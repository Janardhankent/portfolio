import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <div className="query-line">
              <span className="query-prompt">psql&gt;</span>
              <span className="query-text">INSERT INTO conversations (with) VALUES ('you');</span>
              <span className="cursor" />
            </div>

            <h2 className="contact-title">Let's build something reliable together.</h2>
            <p className="contact-sub">
              Open to Data Engineer roles, freelance pipeline work, and collaborations.
              Based in Dallas, TX — happy to work remote or on-site.
            </p>

            <div className="contact-links">
              <a className="contact-link" href="mailto:janardhanreddydondeti@gmail.com">
                <Mail size={18} />
                <span>janardhanreddydondeti@gmail.com</span>
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/janardhan-dondeti-data-engineer" target="_blank" rel="noreferrer">
                <LinkedinIcon size={18} />
                <span>linkedin.com/in/janardhan-dondeti-data-engineer</span>
              </a>
              <a className="contact-link" href="https://github.com/Janardhankent" target="_blank" rel="noreferrer">
                <GithubIcon size={18} />
                <span>github.com/Janardhankent</span>
              </a>
              <span className="contact-link contact-link-static">
                <MapPin size={18} />
                <span>Dallas, TX</span>
              </span>
            </div>

            <a className="btn btn-primary contact-cta" href="mailto:janardhanreddydondeti@gmail.com">
              Send an email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
