"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Back to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-white text-zinc-700 shadow-lg border border-zinc-200 hover:bg-zinc-100 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Về đầu trang"
        >
          <ArrowUp className="w-5 h-5 text-brand-dark" />
        </button>
      )}

      {/* Zalo Button */}
      <a
        href="https://zalo.me/0988123456"
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-blue-600 text-white shadow-xl hover:shadow-blue-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
        aria-label="Chat Zalo với kỹ sư"
      >
        <span className="absolute right-15 bg-zinc-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat Zalo Kỹ Thuật
        </span>
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Floating Phone with Pulse */}
      <a
        href="tel:0988123456"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-brand-dark to-brand-primary text-white shadow-2xl hover:shadow-brand-dark/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Gọi hotline tư vấn"
      >
        {/* Pulse ripple rings */}
        <span className="absolute -inset-1 rounded-full bg-brand-primary/40 animate-ping opacity-75 pointer-events-none" />
        
        <span className="absolute right-16 bg-brand-dark text-brand-yellow text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-brand-yellow/30">
          Gọi Ngay: 0988.123.456
        </span>

        <Phone className="w-6 h-6 text-brand-yellow relative z-10" />
      </a>
    </div>
  );
}

