import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';

const QUERY = "SELECT * FROM engineers WHERE focus = 'data' AND based_in = 'Dallas, TX';";

const RECORD = [
  ['id', '0x4A2F'],
  ['name', 'Janardhan Reddy Dondeti'],
  ['role', 'Data Engineer'],
  ['location', 'Dallas, TX, US'],
  ['experience', 'Mid-Level'],
  ['status', 'actively_building'],
];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [showRecord, setShowRecord] = useState(false);

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i <= QUERY.length) {
        setTyped(QUERY.slice(0, i));
        i += 1;
        setTimeout(type, 18 + Math.random() * 22);
      } else {
        setTimeout(() => setShowRecord(true), 220);
      }
    };
    const start = setTimeout(type, 400);
    return () => clearTimeout(start);
  }, []);

  return (
    <section id="top" className="hero section">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">available for new opportunities</span>
          <h1 className="hero-title">
            I design data pipelines that don't fall over at 3&nbsp;a.m.
          </h1>
          <p className="hero-sub">
            Data Engineer based in Dallas, TX, focused on building reliable ETL/ELT
            systems, cloud-native warehousing, and pipelines that hold up under
            real production load — not just the demo.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects <ArrowRight size={16} />
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/janardhan-dondeti-data-engineer"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <LinkedinIcon size={15} />
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-hidden="false">
          <div className="query-line">
            <span className="query-prompt">psql&gt;</span>
            <span className="query-text">{typed}</span>
            <span className="cursor" />
          </div>

          <div className={`record ${showRecord ? 'record-visible' : ''}`}>
            <div className="record-head">
              <span className="record-dot" />
              engineers · row 1 of 1
            </div>
            <div className="record-body">
              {RECORD.map(([key, value]) => (
                <div className="record-row" key={key}>
                  <span className="record-key">{key}</span>
                  <span className="record-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
