import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass h-20 flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <span className="text-2xl font-bold text-primary tracking-tight">Olive</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button
            type="primary"
            size="large"
            className="bg-primary hover:bg-primary/90 border-none rounded-full px-6 font-semibold h-12 flex items-center text-white"
          >
            Download for iOS
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined className="text-xl" />}
            onClick={showDrawer}
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title={
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-primary">Olive</span>
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
                className="text-lg font-medium text-foreground"
                onClick={onClose}
              >
                {link.name}
              </a>
            ))}
            <Button
              type="primary"
              size="large"
              className="bg-primary hover:bg-primary/90 border-none rounded-full font-semibold h-12 mt-4 text-white"
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
