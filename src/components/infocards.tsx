import { useState } from "react";

const accountantIcon = (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <circle cx="40" cy="22" r="12" stroke="#C9A84C" strokeWidth="2.5" fill="none"/>
    <rect x="14" y="42" width="52" height="28" rx="6" stroke="#C9A84C" strokeWidth="2.5" fill="none"/>
    <line x1="28" y1="54" x2="52" y2="54" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="28" y1="61" x2="44" y2="61" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="58" cy="36" r="10" fill="#f9f5eb" stroke="#C9A84C" strokeWidth="2"/>
    <line x1="54" y1="36" x2="62" y2="36" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="58" y1="32" x2="58" y2="40" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const contactIcon = (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <rect x="10" y="20" width="40" height="30" rx="5" stroke="#C9A84C" strokeWidth="2.5" fill="none"/>
    <path d="M10 26l20 14 20-14" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="58" cy="52" r="14" fill="#f9f5eb" stroke="#C9A84C" strokeWidth="2.2"/>
    <path d="M52 52c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="58" cy="58" r="1.5" fill="#C9A84C"/>
  </svg>
);

const mapIcon = (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <path d="M40 14c-10 0-18 8-18 18 0 12 18 34 18 34s18-22 18-34c0-10-8-18-18-18z" stroke="#C9A84C" strokeWidth="2.5" fill="none"/>
    <circle cx="40" cy="32" r="6" stroke="#C9A84C" strokeWidth="2.2" fill="none"/>
    <path d="M18 56l-8 6 20-4 20 4 20-6" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}

function Card({ title, icon, children, active }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = active || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "#fff",
        border: `1.5px solid ${isActive ? "#C9A84C" : "#e8e2d6"}`,
        borderRadius: "12px",
        padding: "36px 32px 42px",
        flex: "1 1 280px",
        minWidth: "260px",
        maxWidth: "380px",
        boxShadow: isActive
          ? "0 8px 32px rgba(201,168,76,0.18), 0 2px 8px rgba(0,0,0,0.06)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.25s ease",
        transform: isActive ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: isActive ? "80px" : "0px",
          height: "4px",
          background: "linear-gradient(90deg, #C9A84C, #e8c96d)",
          borderRadius: "2px 2px 0 0",
          transition: "width 0.35s ease",
        }}
      />

      <h3
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 700,
          fontSize: "1.25rem",
          color: "#1a1a2e",
          marginBottom: "20px",
          letterSpacing: "0.01em",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          color: "#4a4a5a",
          fontFamily: "Arial, sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "18px",
          right: "20px",
          opacity: isActive ? 1 : 0.55,
          transition: "opacity 0.3s ease",
        }}
      >
        {icon}
      </div>
    </div>
  );
}

export default function InfoCards() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          background: "#f7f4ef",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          <Card title="About" icon={accountantIcon}>
            <p>
              Trusted machinery intelligence. Reviews, specs, and supplier access in one place.
            </p>
          </Card>

          <Card title="Contact" icon={contactIcon} active>
            <p style={{ marginBottom: "6px" }}>Mon–Sat 10:00AM – 6:00PM</p>
            <p style={{ marginBottom: "14px", color: "#888" }}>Sunday Closed</p>

            <a
              href="mailto:Info@actaxsolution.in"
              style={{
                display: "block",
                color: "#C9A84C",
                textDecoration: "none",
                marginBottom: "6px",
                fontWeight: 500,
              }}
            >
              Info@actaxsolution.in
            </a>

            <a
              href="tel:+918076699897"
              style={{
                display: "block",
                color: "#4a4a5a",
                textDecoration: "none",
                marginBottom: "4px",
              }}
            >
              +918076699897
            </a>

            <a
              href="tel:+919217639029"
              style={{
                display: "block",
                color: "#4a4a5a",
                textDecoration: "none",
              }}
            >
              +91-9217639029
            </a>
          </Card>

          <Card title="Address" icon={mapIcon}>
            <p>Office No. 240, Apsara Complex</p>
            <p>Ghaziabad, Uttar Pradesh</p>
            <p>201005, India</p>
          </Card>
        </div>
      </div>
    </>
  );
}