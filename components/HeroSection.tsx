"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Droplets, 
  Leaf, 
  TrendingUp,
  Award,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const cardMainRef = useRef<HTMLDivElement>(null);
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);
  const floatCard3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
      .from(
        titleRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3"
      )
      .from(
        descRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.4"
      )
      .from(
        ctaRef.current,
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .from(
        trustRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .from(
        cardMainRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.9,
          ease: "back.out(1.4)",
        },
        "-=0.7"
      )
      .from(
        [floatCard1Ref.current, floatCard2Ref.current, floatCard3Ref.current],
        {
          scale: 0.6,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      // Smooth floating animations
      gsap.to(floatCard1Ref.current, {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(floatCard2Ref.current, {
        y: 12,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
      });

      gsap.to(floatCard3Ref.current, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-brand-light/15 via-white to-zinc-50"
    >
      {/* Background ambient glows matching the 4 brand colors */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-brand-light/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-brand-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#0F6B3A 1.5px, transparent 1.5px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge with Official Slogan */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-dark/10 border border-brand-primary/20 text-brand-dark text-xs sm:text-sm font-bold mb-6 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
              <span>Đồng Hành Cùng Nhà Nông • Kiến Tạo Mùa Vàng</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-[1.14] mb-6"
            >
              Giải Pháp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-brand-primary to-brand-dark">
                Phân Bón & Thuốc BVTV
              </span>{" "}
              Thế Hệ Mới
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Công ty <strong>Hòa Tràm</strong> tiên phong ứng dụng công nghệ sinh học và phụ gia nano 
              thấm sâu, giúp diệt trừ sâu bệnh nấm khuẩn triệt để, kích thích rễ cây khỏe mạnh, 
              không gây nóng bông cháy lá và bảo vệ hệ sinh thái đất bền vững.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#products"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-white font-bold text-sm sm:text-base bg-gradient-to-r from-brand-dark to-brand-primary hover:from-brand-dark hover:to-brand-dark shadow-lg shadow-brand-dark/25 hover:shadow-xl hover:shadow-brand-dark/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Khám Phá Sản Phẩm</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-brand-dark bg-white hover:bg-brand-light/10 border-2 border-brand-primary/40 hover:border-brand-primary transition-all shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-brand-primary" />
                <span>Nhận Báo Giá Đại Lý</span>
              </a>
            </div>

            {/* Trust Bullet Points */}
            <div
              ref={trustRef}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-200/80 w-full"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-zinc-700">100% Cấp Phép Cục BVTV</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-zinc-700">Chiết Khấu Đại Lý Cao</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-zinc-700">Kỹ Sư Thăm Vườn Tận Nơi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase & Logo Centerpiece */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Main Showcase Card */}
            <div
              ref={cardMainRef}
              className="relative w-full max-w-md bg-gradient-to-br from-brand-dark via-brand-dark to-[#094d28] rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-brand-dark/40 border border-brand-primary/40 overflow-hidden"
            >
              {/* Card Radial Glow */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-brand-primary/35 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-brand-yellow/25 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header Badge */}
              <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/20 border border-brand-yellow/50 text-brand-yellow text-xs font-bold">
                  <Award className="w-3.5 h-3.5" /> CHẤT LƯỢNG TIÊN PHONG
                </div>
                <span className="text-xs font-semibold text-brand-light bg-white/10 px-2.5 py-0.5 rounded-full">
                  Tiêu Chuẩn ISO 9001
                </span>
              </div>

              {/* Logo Centerpiece */}
              <div className="relative py-2 flex flex-col items-center justify-center text-center z-10">
                <div className="w-32 h-32 rounded-3xl bg-white p-2.5 shadow-xl shadow-black/25 mb-4 transform hover:scale-105 transition-transform flex items-center justify-center border-2 border-brand-light/60">
                  <Image
                    src="/logo.png"
                    alt="Logo Hòa Tràm Nông Dược"
                    width={120}
                    height={120}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-2xl font-black text-white mb-0.5 tracking-wide">
                  HÒA TRÀM AGRO
                </h3>
                <p className="text-xs text-brand-yellow font-bold uppercase tracking-wider mb-2">
                  Phân Bón & Thuốc Bảo Vệ Thực Vật
                </p>
                <p className="text-xs text-white/80 italic font-medium max-w-xs mb-4">
                  "Đồng hành cùng nhà nông - Kiến tạo mùa vàng"
                </p>

                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 text-white font-medium border border-white/10">
                    Thuốc Trừ Sâu Sinh Học
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 text-white font-medium border border-white/10">
                    Thuốc Trừ Nấm Bệnh
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 text-white font-medium border border-white/10">
                    Phân Bón Kích Rễ
                  </span>
                </div>
              </div>

              {/* Card Footer Metric Banner */}
              <div className="relative z-10 mt-6 pt-5 border-t border-white/15 grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <div className="text-xl font-extrabold text-brand-yellow">99.4%</div>
                  <div className="text-[11px] text-white/80 font-medium">Hiệu lực sạch sâu bệnh</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <div className="text-xl font-extrabold text-brand-light">15 Phút</div>
                  <div className="text-[11px] text-white/80 font-medium">Thấm sâu chống rửa trôi</div>
                </div>
              </div>
            </div>

            {/* Floating Micro Card 1: Fast knockdown (Top Left) */}
            <div
              ref={floatCard1Ref}
              className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl shadow-brand-dark/15 border border-brand-light/70 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-primary/15 text-brand-primary flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-900">Diệt Sâu Nhanh Chóng</div>
                <div className="text-[11px] text-zinc-500 font-medium">Khắc phục tính kháng thuốc</div>
              </div>
            </div>

            {/* Floating Micro Card 2: Safe for crops (Bottom Right) */}
            <div
              ref={floatCard2Ref}
              className="absolute -bottom-8 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl shadow-brand-dark/15 border border-brand-yellow/60 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 text-brand-dark flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-brand-dark" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-900">Không Nóng Cây - Cháy Lá</div>
                <div className="text-[11px] text-zinc-500 font-medium">Bảo vệ thiên địch & hoa trái</div>
              </div>
            </div>

            {/* Floating Micro Card 3: Yield Boost (Top Right) */}
            <div
              ref={floatCard3Ref}
              className="hidden sm:flex absolute top-12 -right-8 bg-brand-yellow text-zinc-950 rounded-xl px-3.5 py-2 shadow-lg items-center gap-2 z-20 border border-amber-300 font-bold text-xs"
            >
              <TrendingUp className="w-4 h-4 text-zinc-950" />
              <span>Năng suất +25%</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
