import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <img
        className={styles.heroImage}
        src="/images/hero-3.jpg"
        alt="Kydonia Apartments near the beach in Platanias, Chania, Crete"
      />

      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Platanias, Chania · Crete</p>

          <h1 id="hero-title" className={styles.heroTitle}>
            Kydonia Apartments
          </h1>

          <h2 className={styles.heroSubtitle}>
            Relax by the sea in Platanias, Chania
          </h2>

          <p className={styles.heroText}>
            A welcoming family-run apartment complex just moments from the
            beach, designed for peaceful holidays in Crete.
          </p>

          <div className={styles.heroActions}>
            <a
              href="#services"
              className={styles.primaryButton}
              aria-label="Book your stay at Kydonia Apartments"
            >
              View our services
            </a>

            <a
              href="#contact"
              className={styles.secondaryButton}
              aria-label="Contact Kydonia Apartments"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
