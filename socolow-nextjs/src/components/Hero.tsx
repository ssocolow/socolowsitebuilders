export default function Hero() {
  return (
    <section className="hero">
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      <div className="hero-content">
        <h1>Socolow Website Builders</h1>
        <p>Professional web design and maintenance services that grow your business online</p>
        <div className="hero-profiles">
          <div className="hero-profile">
            <div
              className="hero-profile-pic"
              style={{ backgroundImage: "url('/image.png')" }}
            ></div>
            <h3>George Socolow</h3>
          </div>
          <div className="hero-profile">
            <div
              className="hero-profile-pic"
              style={{ backgroundImage: "url('/simonsoc-headshot.jpg')" }}
            ></div>
            <h3>Simon Socolow</h3>
          </div>
        </div>
        <a href="#contact" className="cta-button">Get Your Website Today</a>
      </div>
    </section>
  );
} 