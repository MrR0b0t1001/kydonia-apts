import type { JSX } from "react";
import styles from "./Services.module.css";

type IconName =
  | "wifi"
  | "snowflake"
  | "balcony"
  | "kitchen"
  | "waves"
  | "sun"
  | "walk"
  | "map"
  | "coffee"
  | "restaurant"
  | "shop"
  | "moon"
  | "heart"
  | "sparkles"
  | "smile"
  | "leaf"
  | "clean"
  | "car"
  | "calendar"
  | "terrace";

type ServiceHighlight = {
  icon: IconName;
  label: string;
};

type ServiceStory = {
  label: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  highlights: ServiceHighlight[];
};

const serviceStories: ServiceStory[] = [
  {
    label: "Apartment Comfort",
    title: "Comfortable havens for slow mornings",
    text: "Bright, practical spaces designed for restful holidays in Crete. After a day by the sea or exploring Chania, your apartment becomes a calm place to slow down, recharge, and enjoy your stay at your own pace.",
    image: "/images/kydonia-hotel-1.jpg",
    imageAlt: "Bright apartment room at Kydonia Apartments in Platanias",
    highlights: [
      { icon: "wifi", label: "Wi-Fi" },
      { icon: "snowflake", label: "Air conditioning" },
      { icon: "balcony", label: "Private balcony" },
      { icon: "kitchen", label: "Kitchenette" },
    ],
  },
  {
    label: "Beachside Living",
    title: "Moments from the beach",
    text: "Start the day with the sea nearby, enjoy relaxed beach hours, and return easily to your apartment whenever you need a quiet break. The location makes simple summer routines feel effortless.",
    image: "/images/kydonia-hotel-2.jpg",
    imageAlt: "Beach near Kydonia Apartments in Platanias, Chania",
    highlights: [
      { icon: "waves", label: "Beach nearby" },
      { icon: "walk", label: "Sea walks" },
      { icon: "sun", label: "Sunbeds nearby" },
      { icon: "map", label: "Easy access" },
    ],
  },
  {
    label: "Platanias Around You",
    title: "Local life right outside your stay",
    text: "Enjoy the relaxed rhythm of Platanias with cafes, restaurants, shops, and evening walks close to your apartment. Everything feels close enough to enjoy without complicating your holiday.",
    image: "/images/kydonia-hotel-3.jpg",
    imageAlt:
      "Local cafes and restaurants near Kydonia Apartments in Platanias",
    highlights: [
      { icon: "coffee", label: "Cafes" },
      { icon: "restaurant", label: "Restaurants" },
      { icon: "shop", label: "Shops" },
      { icon: "moon", label: "Evening walks" },
    ],
  },
  {
    label: "Cretan Hospitality",
    title: "Family-run hospitality",
    text: "A stay shaped by warmth, care, and local knowledge. Kydonia Apartments is managed with the kind of personal attention that helps guests feel welcome, comfortable, and looked after.",
    image: "/images/kydonia-hotel-4.jpg",
    imageAlt:
      "Exterior of Kydonia Apartments family-run accommodation in Crete",
    highlights: [
      { icon: "heart", label: "Personal care" },
      { icon: "sparkles", label: "Local tips" },
      { icon: "smile", label: "Warm welcome" },
      { icon: "leaf", label: "Peaceful atmosphere" },
    ],
  },
  {
    label: "Easy Holidays",
    title: "Simple convenience for easy holidays",
    text: "Your stay should feel smooth from the moment you arrive. Useful comforts, outdoor corners, and helpful support make it easier to focus on the reason you came: rest, sunshine, and time by the sea.",
    image: "/images/kydonia-hotel-5.jpg",
    imageAlt: "Balcony and outdoor space at Kydonia Apartments in Platanias",
    highlights: [
      { icon: "clean", label: "Cleaning support" },
      { icon: "car", label: "Parking" },
      { icon: "calendar", label: "Booking help" },
      { icon: "terrace", label: "Outdoor spaces" },
    ],
  },
];

const Icon = ({ name }: { name: IconName }) => {
  const commonProps = {
    width: 18,
    height: 18,
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

  const icons: Record<IconName, JSX.Element> = {
    wifi: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M5 13a10 10 0 0 1 14 0" />
        <path {...strokeProps} d="M8.5 16.5a5 5 0 0 1 7 0" />
        <path {...strokeProps} d="M12 20h.01" />
      </svg>
    ),
    snowflake: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M12 2v20" />
        <path {...strokeProps} d="M4.9 4.9l14.2 14.2" />
        <path {...strokeProps} d="M19.1 4.9 4.9 19.1" />
        <path {...strokeProps} d="M4 12h16" />
      </svg>
    ),
    balcony: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M5 21V9a7 7 0 0 1 14 0v12" />
        <path {...strokeProps} d="M3 21h18" />
        <path {...strokeProps} d="M8 21v-7" />
        <path {...strokeProps} d="M12 21v-7" />
        <path {...strokeProps} d="M16 21v-7" />
      </svg>
    ),
    kitchen: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M6 3v18" />
        <path {...strokeProps} d="M6 8h12a2 2 0 0 1 2 2v11" />
        <path {...strokeProps} d="M10 8V5a2 2 0 0 1 4 0v3" />
      </svg>
    ),
    waves: (
      <svg {...commonProps}>
        <path
          {...strokeProps}
          d="M3 8c2 0 2-1.5 4-1.5S9 8 11 8s2-1.5 4-1.5S17 8 21 8"
        />
        <path
          {...strokeProps}
          d="M3 14c2 0 2-1.5 4-1.5S9 14 11 14s2-1.5 4-1.5S17 14 21 14"
        />
        <path
          {...strokeProps}
          d="M3 20c2 0 2-1.5 4-1.5S9 20 11 20s2-1.5 4-1.5S17 20 21 20"
        />
      </svg>
    ),
    sun: (
      <svg {...commonProps}>
        <circle {...strokeProps} cx="12" cy="12" r="4" />
        <path {...strokeProps} d="M12 2v2" />
        <path {...strokeProps} d="M12 20v2" />
        <path {...strokeProps} d="M4.93 4.93l1.41 1.41" />
        <path {...strokeProps} d="M17.66 17.66l1.41 1.41" />
        <path {...strokeProps} d="M2 12h2" />
        <path {...strokeProps} d="M20 12h2" />
        <path {...strokeProps} d="M4.93 19.07l1.41-1.41" />
        <path {...strokeProps} d="M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    walk: (
      <svg {...commonProps}>
        <circle {...strokeProps} cx="13" cy="4" r="2" />
        <path {...strokeProps} d="M10 22l2-7" />
        <path {...strokeProps} d="M17 22l-3-7-3-2 1-5" />
        <path {...strokeProps} d="M8 9l4-1 4 3" />
      </svg>
    ),
    map: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path {...strokeProps} d="M9 3v15" />
        <path {...strokeProps} d="M15 6v15" />
      </svg>
    ),
    coffee: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" />
        <path {...strokeProps} d="M16 10h2a2 2 0 0 1 0 4h-2" />
        <path {...strokeProps} d="M6 21h10" />
        <path {...strokeProps} d="M8 3v2" />
        <path {...strokeProps} d="M12 3v2" />
      </svg>
    ),
    restaurant: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M4 3v8" />
        <path {...strokeProps} d="M8 3v8" />
        <path {...strokeProps} d="M4 7h4" />
        <path {...strokeProps} d="M6 11v10" />
        <path {...strokeProps} d="M15 3v18" />
        <path {...strokeProps} d="M15 3c3 2 4 5 4 8h-4" />
      </svg>
    ),
    shop: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M4 10h16l-1.5-6h-13L4 10Z" />
        <path {...strokeProps} d="M5 10v10h14V10" />
        <path {...strokeProps} d="M9 20v-6h6v6" />
      </svg>
    ),
    moon: (
      <svg {...commonProps}>
        <path
          {...strokeProps}
          d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
        />
      </svg>
    ),
    heart: (
      <svg {...commonProps}>
        <path
          {...strokeProps}
          d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"
        />
      </svg>
    ),
    sparkles: (
      <svg {...commonProps}>
        <path
          {...strokeProps}
          d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z"
        />
        <path
          {...strokeProps}
          d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z"
        />
        <path
          {...strokeProps}
          d="M5 15l.7 1.8L7.5 17.5l-1.8.7L5 20l-.7-1.8-1.8-.7 1.8-.7L5 15Z"
        />
      </svg>
    ),
    smile: (
      <svg {...commonProps}>
        <circle {...strokeProps} cx="12" cy="12" r="9" />
        <path {...strokeProps} d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path {...strokeProps} d="M9 9h.01" />
        <path {...strokeProps} d="M15 9h.01" />
      </svg>
    ),
    leaf: (
      <svg {...commonProps}>
        <path
          {...strokeProps}
          d="M20 4c-8 0-14 5-14 11a5 5 0 0 0 5 5c6 0 9-7 9-16Z"
        />
        <path {...strokeProps} d="M6 20c2-5 6-8 11-10" />
      </svg>
    ),
    clean: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M4 21l4-11" />
        <path {...strokeProps} d="M8 10l4 11" />
        <path {...strokeProps} d="M6 16h4" />
        <path
          {...strokeProps}
          d="M15 4l.8 2.2L18 7l-2.2.8L15 10l-.8-2.2L12 7l2.2-.8L15 4Z"
        />
        <path
          {...strokeProps}
          d="M20 12l.5 1.5L22 14l-1.5.5L20 16l-.5-1.5L18 14l1.5-.5L20 12Z"
        />
      </svg>
    ),
    car: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M5 16h14" />
        <path {...strokeProps} d="M7 16l1.5-5h7L17 16" />
        <path {...strokeProps} d="M6 16v3" />
        <path {...strokeProps} d="M18 16v3" />
        <circle {...strokeProps} cx="8" cy="19" r="1.5" />
        <circle {...strokeProps} cx="16" cy="19" r="1.5" />
      </svg>
    ),
    calendar: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M7 3v4" />
        <path {...strokeProps} d="M17 3v4" />
        <path {...strokeProps} d="M4 8h16" />
        <path {...strokeProps} d="M5 5h14v16H5V5Z" />
        <path {...strokeProps} d="M9 13h3" />
        <path {...strokeProps} d="M9 17h6" />
      </svg>
    ),
    terrace: (
      <svg {...commonProps}>
        <path {...strokeProps} d="M4 13h16" />
        <path {...strokeProps} d="M6 13v8" />
        <path {...strokeProps} d="M18 13v8" />
        <path {...strokeProps} d="M3 21h18" />
        <path {...strokeProps} d="M12 3v10" />
        <path {...strokeProps} d="M5 9a7 7 0 0 1 14 0H5Z" />
      </svg>
    ),
  };

  return icons[name];
};

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Stay Experience</p>

          <h2 className={styles.sectionTitle}>
            Everything you need for a relaxing stay
          </h2>

          <p className={styles.sectionText}>
            From bright apartments to beachside days and local Cretan
            hospitality, Kydonia Apartments gives you a calm base for enjoying
            Platanias, Chania, and the sea.
          </p>
        </div>

        <div className={styles.storyList}>
          {serviceStories.map((story, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={story.title}
                className={`${styles.story} ${
                  isReversed ? styles.storyReversed : ""
                }`}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className={styles.storyImage}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                <div className={styles.storyContent}>
                  <p className={styles.storyLabel}>{story.label}</p>

                  <h3 className={styles.storyTitle}>{story.title}</h3>

                  <p className={styles.storyText}>{story.text}</p>

                  <ul className={styles.highlightList}>
                    {story.highlights.map((highlight) => (
                      <li key={highlight.label} className={styles.highlight}>
                        <span className={styles.highlightIcon}>
                          <Icon name={highlight.icon} />
                        </span>
                        <span>{highlight.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.servicesCta}>
          <div>
            <p className={styles.ctaLabel}>Ready to plan your stay?</p>
            <h3 className={styles.ctaTitle}>
              Your quiet haven in Platanias is waiting.
            </h3>
          </div>

          <a href="#contact" className={styles.ctaButton}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
