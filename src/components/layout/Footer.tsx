import React from "react";
import { InstagramOutlined, TwitterOutlined, MailOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-primary/5 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-accent/20">
                <img src="/images/mascot.png" alt="Olive Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-black text-primary tracking-tight font-display">Olive</span>
            </a>
            <p className="text-muted leading-relaxed mb-8 font-medium">
              Empowering families to make healthier, safer food choices every day through transparency and expert-backed data.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm border border-primary/5">
                <InstagramOutlined style={{ fontSize: '20px' }} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm border border-primary/5">
                <TwitterOutlined style={{ fontSize: '20px' }} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm border border-primary/5">
                <MailOutlined style={{ fontSize: '20px' }} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-black text-xs mb-8 uppercase tracking-[0.2em] text-primary/40">Product</h4>
            <ul className="space-y-4">
              <li><a href="#how-it-works" className="text-primary/70 hover:text-primary transition-colors font-semibold">How it works</a></li>
              <li><a href="#features" className="text-primary/70 hover:text-primary transition-colors font-semibold">Features</a></li>
              <li><a href="#pricing" className="text-primary/70 hover:text-primary transition-colors font-semibold">Pricing</a></li>
              <li><a href="#" className="text-primary/70 hover:text-primary transition-colors font-semibold">Restaurants</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-black text-xs mb-8 uppercase tracking-[0.2em] text-primary/40">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-primary/70 hover:text-primary transition-colors font-semibold">About Us</a></li>
              <li><a href="#" className="text-primary/70 hover:text-primary transition-colors font-semibold">Blog</a></li>
              <li><a href="#" className="text-primary/70 hover:text-primary transition-colors font-semibold">Support</a></li>
              <li><a href="#" className="text-primary/70 hover:text-primary transition-colors font-semibold">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-black text-xs mb-8 uppercase tracking-[0.2em] text-primary/40">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-primary/70 hover:text-primary transition-colors font-semibold">Privacy Policy</a></li>
              <li><a href="#" className="text-primary/70 hover:text-primary transition-colors font-semibold">Terms of Service</a></li>
              <li><a href="#" className="text-primary/70 hover:text-primary transition-colors font-semibold">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary/30 text-xs font-bold uppercase tracking-widest">
            © 2026 Olive Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-primary/30 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-primary/30 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-primary/30 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
