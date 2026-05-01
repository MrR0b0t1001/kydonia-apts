import styles from "./ContactUs.module.css";

type ContactIcon = "phone" | "email" | "map" | "instagram";

const phoneNumber = "6999456875";
const emailAddress = "emailadress@gmail.com";
const locationText = "Kydonia Apartments, Platanias, Chania, Crete";

const googleMapsLink =
  "https://www.google.com/maps/place/%CE%9E%CE%B5%CE%BD%CE%BF%CE%B4%CE%BF%CF%87%CE%B5%CE%AF%CE%BF+%CE%9A%CF%85%CE%B4%CF%8E%CE%BD%CE%B9%CE%B1/@35.5141347,23.9071086,16.25z/data=!4m23!1m13!4m12!1m4!2m2!1d24.5113051!2d35.3292456!4e1!1m6!1m2!1s0x149c6280ffd2e905:0x70168f693afef24!2zzp7Otc69zr_OtM6_z4fOtc6vzr8gzprPhc60z47Ovc65zrEsIM6gzrvOsc-EzrHOvc65zqzPgiA3MzAgMTQ!2m2!1d23.9088625!2d35.5177299!3m8!1s0x149c6280ffd2e905:0x70168f693afef24!5m2!4m1!1i2!8m2!3d35.5177193!4d23.908864!16s%2Fg%2F12hrxd21z?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D";

const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=35.5177193,23.908864&z=16&output=embed";

const instagramLink = "https://www.instagram.com/kydonia_platanias_apartments/";

const contactMethods = [
  {
    icon: "phone" as ContactIcon,
    label: "Phone",
    value: phoneNumber,
    helper: "Call us for availability and booking details",
    href: `tel:${phoneNumber}`,
    external: false,
  },
  {
    icon: "email" as ContactIcon,
    label: "Email",
    value: emailAddress,
    helper: "Send us your dates and questions",
    href: `mailto:${emailAddress}`,
    external: false,
  },
  {
    icon: "map" as ContactIcon,
    label: "Location",
    value: locationText,
    helper: "Find us in Platanias, Chania",
    href: googleMapsLink,
    external: true,
  },
  {
    icon: "instagram" as ContactIcon,
    label: "Instagram",
    value: "Visit our profile",
    helper: "See more photos and updates",
    href: instagramLink,
    external: true,
  },
];

const bookingSteps = [
  "Contact us with your dates",
  "We confirm availability",
  "Arrange your stay directly",
];

const Icon = ({ name }: { name: ContactIcon }) => {
  const commonProps = {
    width: 21,
    height: 21,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...commonProps}>
          <path
            {...strokeProps}
            d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L9 10.67a16 16 0 0 0 4.33 4.33l1.23-1.23a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z"
          />
        </svg>
      );

    case "email":
      return (
        <svg {...commonProps}>
          <path
            {...strokeProps}
            d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
          />
          <path {...strokeProps} d="m22 7-10 6L2 7" />
        </svg>
      );

    case "map":
      return (
        <svg {...commonProps}>
          <path
            {...strokeProps}
            d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
          />
          <circle {...strokeProps} cx="12" cy="9" r="2.5" />
        </svg>
      );

    case "instagram":
      return (
        <svg {...commonProps}>
          <rect {...strokeProps} x="3" y="3" width="18" height="18" rx="5" />
          <circle {...strokeProps} cx="12" cy="12" r="4" />
          <path {...strokeProps} d="M17.5 6.5h.01" />
        </svg>
      );
  }
};

const ContactUs = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Contact & Bookings</p>

          <h2 className={styles.sectionTitle}>
            Book your stay directly with us
          </h2>

          <p className={styles.sectionText}>
            Bookings are handled directly by phone or email. Contact us to ask
            about availability, dates, and anything you need to know before your
            stay.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.imageCard}>
            <img
              src="/images/kydonia-hotel-5.jpg"
              alt="Aerial exterior view of Kydonia Apartments in Platanias, Chania"
              className={styles.contactImage}
            />

            <div className={styles.locationBadge}>
              <span>Platanias, Chania</span>
              <strong>Near the beach</strong>
            </div>
          </div>

          <div className={styles.bookingCard}>
            <p className={styles.cardLabel}>How to book</p>

            <h3 className={styles.cardTitle}>
              Contact us with your dates and we’ll guide you from there.
            </h3>

            <p className={styles.cardText}>
              There is no online checkout or instant booking form. Simply call
              or email us, and we’ll help you confirm availability and arrange
              your stay directly.
            </p>

            <div className={styles.contactMethods}>
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className={styles.contactMethod}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                >
                  <span className={styles.methodIcon}>
                    <Icon name={method.icon} />
                  </span>

                  <span className={styles.methodContent}>
                    <span className={styles.methodLabel}>{method.label}</span>
                    <strong className={styles.methodValue}>
                      {method.value}
                    </strong>
                    <span className={styles.methodHelper}>{method.helper}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className={styles.actions}>
              <a href={`tel:${phoneNumber}`} className={styles.primaryButton}>
                Call for Availability
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className={styles.secondaryButton}
              >
                Send Email
              </a>
            </div>

            <div className={styles.bookingFlow}>
              <p className={styles.flowTitle}>How booking works</p>

              <ol className={styles.flowList}>
                {bookingSteps.map((step, index) => (
                  <li key={step} className={styles.flowStep}>
                    <span className={styles.stepNumber}>{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className={styles.mapCard}>
          <div className={styles.mapHeader}>
            <div>
              <p className={styles.mapLabel}>Find us</p>
              <h3 className={styles.mapTitle}>Kydonia Apartments location</h3>
            </div>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className={styles.mapLink}
            >
              Open in Google Maps
            </a>
          </div>

          <iframe
            title="Kydonia Apartments location on Google Maps"
            src={googleMapsEmbedUrl}
            className={styles.mapFrame}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
