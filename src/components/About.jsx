import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">01 · about</span>
            <h2 className="section-title">Comments from the source file</h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="code-block">
            <div className="code-block-head">
              <span className="code-dot" style={{ background: '#e8a33d' }} />
              <span className="code-dot" style={{ background: '#3fc6b0' }} />
              <span className="code-dot" style={{ background: '#5c6788' }} />
              <span className="code-filename">about.yaml</span>
            </div>
            <pre className="code-body">
<span className="code-comment"># mid-level data engineer, Dallas-based</span>{'\n'}
<span className="code-key">focus</span>:{'\n'}
{'  '}- Lakehouse-first pipelines (Delta Lake / Iceberg) over legacy warehousing{'\n'}
{'  '}- Streaming + batch — Kafka/Spark for real-time, Airflow/Dagster for scheduled{'\n'}
{'  '}- Data contracts & quality gates so bad data never reaches production{'\n'}
{'  '}- Making pipelines AI-ready — feature stores, embeddings, vector search{'\n'}
<span className="code-key">approach</span>: <span className="code-string">"treat pipelines like production code — tested, versioned, monitored"</span>{'\n'}
<span className="code-key">currently_learning</span>:{'\n'}
{'  '}- Kubernetes & Terraform for pipeline infra{'\n'}
{'  '}- code-first orchestration (Dagster) vs. traditional DAGs{'\n'}
{'  '}- RAG pipelines & vector databases
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
