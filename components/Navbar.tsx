"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  Phone,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, navRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  const navLinks = [
    { name: "Sản Phẩm", href: "#products" },
    { name: "Giải Pháp Cây Trồng", href: "#solutions" },
    { name: "Cam Kết Chất Lượng", href: "#quality" },
    { name: "Nhà Nông Đánh Giá", href: "#testimonials" },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-2.5 border-b border-brand-light/40"
          : "bg-white/90 backdrop-blur-sm py-3.5 border-b border-zinc-100"
      }`}
    >
      {/* Top Banner Notice */}
      <div className="hidden lg:block bg-brand-dark text-white text-xs py-1.5 px-6 -mt-3.5 mb-2.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-brand-yellow font-medium">
              <ShieldCheck className="w-4 h-4" /> 100% Hoạt chất chuẩn đăng ký
              Cục BVTV - Bộ NN&PTNT
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/85">
              Đại lý phân phối chính hãng các loại thuốc BVTV
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <span>
              Tư vấn các loại bệnh liên hệ:{" "}
              <strong className="text-brand-yellow font-bold">
                093 250 3748
              </strong>{" "}
              (Miễn cước)
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with official public/logo.png */}
          <a href="#" className="flex items-center gap-3 group">
            <div className=" w-14 h-14 bg-white p-0.5 group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Logo Hòa Tràm"
                width={48}
                height={48}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-zinc-700 hover:text-brand-dark transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-700 hover:text-brand-dark hover:bg-zinc-100 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-800 hover:text-brand-dark px-3 py-2 rounded-lg hover:bg-brand-light/15 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2.5">
              <a
                href="tel:0988123456"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-brand-dark bg-brand-light/20 rounded-xl"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>Hotline Kỹ Sư: 0988.123.456</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand-dark to-brand-primary rounded-xl shadow-md"
              >
                <span>Đăng Ký Đại Lý & Nhận Báo Giá</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
