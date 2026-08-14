import Reveal from './Reveal';

const STAGES = [
  {
    stage: 'Ingest',
    note: 'pull data from sources',
    tools: ['Python', 'Kafka', 'REST APIs'],
  },
  {
    stage: 'Process',
    note: 'transform & validate',
    tools: ['PySpark', 'SQL', 'dbt', 'Great Expectations'],
  },
  {
    stage: 'Store',
    note: 'warehouse & lakehouse',
    tools: ['Snowflake', 'PostgreSQL', 'Delta Lake', 'DuckDB'],
  },
  {
    stage: 'Orchestrate',
    note: 'schedule & monitor',
    tools: ['Airflow', 'Dagster', 'Databricks'],
  },
  {
    stage: 'Platform',
    note: 'ship & operate',
    tools: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    stage: 'Serve',
    note: 'power search & AI',
    tools: ['pgvector', 'Feature Store', 'Vector Search'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">02 · pipeline</span>
            <h2 className="section-title">How data moves through my toolkit</h2>
          </div>
        </Reveal>

        <div className="pipeline">
          {STAGES.map((s, i) => (
            <Reveal delay={i * 90} key={s.stage} className="pipeline-item-wrap">
              <div className="pipeline-item">
                <div className="pipeline-index">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="pipeline-stage">{s.stage}</h3>
                <p className="pipeline-note">{s.note}</p>
                <div className="pipeline-tools">
                  {s.tools.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              {i < STAGES.length - 1 && <div className="pipeline-connector" aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
