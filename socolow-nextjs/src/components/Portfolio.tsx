export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-content">
        <h2 className="section-title" style={{ color: '#333' }}>Recent Work</h2>
        <a
          href="https://trinitypropertymanagementme.com/"
          className="portfolio-card"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trinity Property Management website"
        >
          <img src="/trinpm.png" alt="Trinity Property Management" className="portfolio-image" />
        </a>
      </div>
    </section>
  );
}


