import { Link } from "react-router-dom";
import { Cpu, Github, Twitter, Youtube, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Embedded Systems", path: "/embedded" },
    { name: "IoT Projects", path: "/iot" },
    { name: "Hardware Projects", path: "/hardware-projects" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Reviews", path: "/reviews" },
  ],
  resources: [
    { name: "Schematics Library", path: "/schematics" },
    { name: "Code Examples", path: "/tutorials" },
    { name: "Component Guide", path: "/tutorials" },
    { name: "Tools & Software", path: "/tutorials" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Contribute", path: "/about" },
    { name: "Advertise", path: "/contact" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "Email", icon: Mail, url: "mailto:hello@techknots.com" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-border">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Tech<span className="text-primary">Knots</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Your go-to resource for embedded systems, IoT, and hardware engineering. Learn, build, and innovate.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechKnots. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
