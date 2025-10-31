import "./navbar.css";

const SOCIAL_LINKS = {
  github: {
    url: "https://github.com/PaulIaszfalvi",
    label: "GitHub",
    icon: "devicon-github-original",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/paul-iaszfalvi-46a25819a/",
    label: "Linked",
    icon: "devicon-linkedin-plain colored",
  },
};

const NAV_PAGES = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact", isMobileSpecial: true },
];

const SocialLink = ({ social, data }) => (
  <div className={`social-link hvr-pop ${social}`}>
    <a href={data.url} target="_blank" rel="noreferrer" aria-label={data.label}>
      {social === "linkedin" ? (
        <span className="linkedin-container">
          <span className="linkedin-text">{data.label}</span>
          <i className={data.icon}></i>
        </span>
      ) : (
        <>
          <i className={data.icon}></i>
          <span className="github-text">{data.label}</span>
        </>
      )}
    </a>
  </div>
);

const EmailDisplay = () => (
  <div className="email">
    <p className="email-text">
      <span className="email-text-firstname">Paul</span>
      <span className="email-text-lastname">Iaszfalvi</span>
      <span className="email-text-link">@gmail.com</span>
    </p>
  </div>
);

const NavPages = () => (
  <div className="pages">
    {NAV_PAGES.map(({ label, href, isMobileSpecial }) => (
      <a
        key={href}
        className={`nav-link hvr-pop pt-xs-5 pt-md-0 ${
          isMobileSpecial ? "mobile-border" : ""
        }`}
        href={href}
      >
        {label}
      </a>
    ))}
  </div>
);

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-items row align-items-center">
        <div className="links">
          <EmailDisplay />
          <SocialLink social="github" data={SOCIAL_LINKS.github} />
          <SocialLink social="linkedin" data={SOCIAL_LINKS.linkedin} />
        </div>
        <NavPages />
      </div>
    </nav>
  );
};

export default Navbar;
