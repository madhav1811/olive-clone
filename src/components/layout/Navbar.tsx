import React, { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white/80 backdrop-blur-md border-b border-primary/5 shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-accent/20">
            <img src="/images/mascot.png" alt="Olive Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="text-2xl font-black text-primary tracking-tight font-display">Olive</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary/70 hover:text-primary transition-colors font-semibold text-sm"
            >
              {link.name}
            </a>
          ))}
          <Button
            type="primary"
            size="large"
            className="bg-primary hover:bg-primary/90 border-none rounded-full px-8 font-bold h-11 flex items-center text-white text-sm"
          >
            Get the App
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined className="text-2xl text-primary" />}
            onClick={showDrawer}
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title={
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <img src="/images/mascot.png" alt="Olive Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-xl font-black text-primary font-display">Olive</span>
            </div>
          }
          placement="right"
          onClose={onClose}
          open={open}
          closeIcon={<CloseOutlined />}
          width="80%"
        >
          <div className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-primary/80 hover:text-primary"
                onClick={onClose}
              >
                {link.name}
              </a>
            ))}
            <Button
              type="primary"
              size="large"
              className="bg-primary hover:bg-primary/90 border-none rounded-full font-bold h-14 mt-4 text-white text-lg"
            >
              Download for iOS
            </Button>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
