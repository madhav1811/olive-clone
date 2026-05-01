import React from "react";
import { Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <img src="/images/mascot.png" alt="Olive Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-xl font-bold text-primary">Olive</span>
            </a>
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              Empowering families to make healthier food choices with expert-backed insights.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-sm text-gray-900 mb-6 uppercase tracking-wide">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm text-gray-900 mb-6 uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm text-gray-900 mb-6 uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2026 Olive Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
