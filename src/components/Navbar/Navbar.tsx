import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      let currentSection = "home";

      navItems.forEach((item) => {
        const sectionId = item.href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section && window.scrollY + 120 >= section.offsetTop) {
          currentSection = sectionId;
        }
      });

      setActiveId(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbarOffset = 76;
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    window.history.pushState(null, "", href);
    setActiveId(sectionId);
    setMobileOpen(false);
  };

  const getLinkClass = (href: string, isCta?: boolean) => {
    const sectionId = href.replace("#", "");
    const isActive = activeId === sectionId;

    return `
      ${styles.navLink}
      ${isActive ? styles.activeLink : ""}
      ${isCta ? styles.navCta : ""}
    `;
  };

  return (
    <header
      className={`${styles.header} ${
        scrolled || mobileOpen ? styles.headerScrolled : ""
      }`}
    >
      <a
        href="#home"
        className={styles.logo}
        onClick={(event) => handleNavClick(event, "#home")}
        aria-label="Kydonia Apartments home"
      >
        <img
          src="/images/logo-3.jpg"
          alt=""
          className={styles.logoImage}
          aria-hidden="true"
        />
      </a>

      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.desktopLinks}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={getLinkClass(item.href, item.isCta)}
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={styles.mobileToggle}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 50 50"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M 5 8 A 2 2 0 1 0 5 12 L 45 12 A 2 2 0 1 0 45 8 L 5 8 z M 5 23 A 2 2 0 1 0 5 27 L 45 27 A 2 2 0 1 0 45 23 L 5 23 z M 5 38 A 2 2 0 1 0 5 42 L 45 42 A 2 2 0 1 0 45 38 L 5 38 z" />
          </svg>
        </button>
      </nav>

      <button
        type="button"
        className={`${styles.overlay} ${mobileOpen ? styles.overlayOpen : ""}`}
        aria-label="Close navigation menu"
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`${styles.mobileDrawer} ${
          mobileOpen ? styles.mobileDrawerOpen : ""
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileTop}>
          <div className={styles.mobileBrand}>
            <img
              src="/images/logo-3.jpg"
              alt=""
              className={styles.mobileBrandLogo}
              aria-hidden="true"
            />
            <span className={styles.mobileTitle}>Menu</span>
          </div>

          <button
            type="button"
            className={styles.mobileClose}
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M7 7L17 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.mobileLinks}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={getLinkClass(item.href, item.isCta)}
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
