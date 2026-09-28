import {
  Instagram,
  Linkedin,
  Mail
} from "lucide-react";

function SocialLinks() {
  const links = [
    {
      label: "Instagram",
      href: "https://instagram.com/adonai_vangadio1",
      icon: Instagram
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/adonaivangadio",
      icon: Linkedin
    },
    {
      label: "Email",
      href: "mailto:adonaivangadio1@gmail.com",
      icon: Mail
    }
  ];

  return (
    <div className="social-links">

      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noreferrer"}
          aria-label={label}
          className="social-link"
        >
          <Icon size={17} strokeWidth={1.7} />
          <span>{label}</span>
        </a>
      ))}

    </div>
  );
}

export default SocialLinks;