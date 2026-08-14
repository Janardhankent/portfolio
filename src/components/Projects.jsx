import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import Reveal from './Reveal';

const PROJECTS = [
  {
    id: '01',
    name: 'Batch ETL Pipeline on Airflow',
    desc: 'Production-style orchestration pipeline that extracts data from multiple sources, runs validation and transformation logic, and lands curated datasets in a cloud warehouse on a scheduled DAG.',
    tools: ['Python', 'Airflow', 'AWS S3', 'Snowflake'],
    repo: 'https://github.com/Janardhankent/batch-etl-airflow',
    demo: null,
  },
  {
    id: '02',
    name: 'Real-Time Streaming Pipeline',
    desc: 'Event-driven pipeline that ingests streaming data through Kafka, processes it with Spark Structured Streaming, and writes aggregated metrics to a queryable data store.',
    tools: ['Kafka', 'Apache Spark', 'Python', 'Databricks'],
    repo: 'https://github.com/Janardhankent',
    demo: null,
  },
  {
    id: '03',
    name: 'Data Warehouse & dbt Models',
    desc: 'Dimensional data warehouse project with staging, intermediate, and mart layers built in dbt, incremental models, and automated testing for data quality and lineage tracking.',
    tools: ['dbt', 'SQL', 'AWS Redshift', 'Docker'],
    repo: 'https://github.com/Janardhankent',
    demo: null,
  },
  {
    id: '04',
    name: 'AI-Ready Feature Pipeline with Vector Search',
    desc: 'Code-first pipeline (Dagster over cron-style DAGs) that transforms raw data into ML-ready features, embeds text fields, and serves similarity search through pgvector — built for downstream LLM and recommendation use cases.',
    tools: ['Python', 'Dagster', 'pgvector', 'Feature Store'],
    repo: 'https://github.com/Janardhankent',
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">03 · projects</span>
            <h2 className="section-title">Selected work</h2>
          </div>
        </Reveal>

        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <Reveal delay={i * 90} key={p.id}>
              <article className="project-card">
                <div className="project-id">{p.id}</div>
                <div className="project-main">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tools">
                    {p.tools.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a className="icon-link" href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`}>
                    <GithubIcon size={17} />
                    Repo
                  </a>
                  <a className="icon-link" href={p.demo || '#contact'} target={p.demo ? '_blank' : undefined} rel="noreferrer" aria-label={`${p.name} demo`}>
                    <ArrowUpRight size={17} />
                    {p.demo ? 'Live demo' : 'Ask for a walkthrough'}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="projects-note">
            More repositories, including work in progress, live on{' '}
            <a href="https://github.com/Janardhankent" target="_blank" rel="noreferrer" className="inline-link">
              github.com/Janardhankent
            </a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
