"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { HiBolt } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        "bg-background/80 backdrop-blur-md shadow-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={closeMenu}
            >
              <HiBolt className="h-8 w-8 text-primary" />
              <span className="font-heading font-bold text-xl">DenkiLab</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </nav>

          <div className="flex md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isOpen ? (
                <HiXMark className="h-6 w-6" />
              ) : (
                <HiBars3 className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium py-2 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-2">
                  <Link href="/#contact" onClick={closeMenu}>
                    Get in Touch
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
