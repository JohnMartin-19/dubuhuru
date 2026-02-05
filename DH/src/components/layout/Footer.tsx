import { Link } from "react-router";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src='/dubu.jpeg' alt="Dubu Huru" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Building digital solutions that enable environmental sustainability, climate resilience, and responsible resource management across Africa.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/solutions/linka-africa"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Linka Africa
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/climate-data-platforms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Climate Data Platforms
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/sustainability-reporting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sustainability Reporting
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/green-finance"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Green Finance Tech
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/resource-management"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Smart Resource Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Gilgil, Nakuru County<br />Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:dubuhurultd@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  dubuhurultd@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+254 0118968369"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +254 0118968369
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Dubu Huru Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}