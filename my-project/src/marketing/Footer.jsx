// src/components/Footer.jsx
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700">
        {/* Logo + About */}
        <div>
          <img
            src="/logo.png"
            alt="Texcoms Logo"
            className="h-10 w-auto object-contain mb-5"
          />
          <p className="text-sm leading-relaxed text-gray-400">
            Texcoms offers global textile solutions — from machinery trading and
            consulting to digital transformation — empowering mills to optimize
            performance and quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/divisions"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Divisions
              </a>
            </li>
            <li>
              <a
                href="/latest-offering"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Latest Offering
              </a>
            </li>
            <li>
              <a
                href="/news"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                News & Insights
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
              <span>
                Texcoms Worldwide <br />
                15 Kallang Way #06-01, Singapore 349254
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <a href="tel:+6567456893" className="hover:text-blue-400">
                +65 6745 6893
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="mailto:info@texcoms.com" className="hover:text-blue-400">
                info@texcoms.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/texcoms"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.facebook.com/texcoms"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <Youtube className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Texcoms Worldwide. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
