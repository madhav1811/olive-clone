import React from "react";
import { Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold text-primary tracking-tight">Olive</span>
            </a>
            <p className="text-foreground/50 leading-relaxed mb-6">
              Empowering families to make healthier, safer food choices every day through transparency and data.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-foreground/40 text-sm">Product</h4>
            <ul className="space-y-4">
              <li><a href="#how-it-works" className="text-foreground/60 hover:text-primary transition-colors">How it works</a></li>
              <li><a href="#features" className="text-foreground/60 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-foreground/60 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Restaurants</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-foreground/40 text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-foreground/40 text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/40 text-sm">
            © 2026 Olive Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-foreground/40 text-sm hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-foreground/40 text-sm hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-foreground/40 text-sm hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
