"use client";

import { useState, useEffect, useRef } from "react";
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
  ShieldCheck, 
  Zap, 
  AlertOctagon, 
  Activity, 
  Flame, 
  Compass, 
  ChevronRight,
  Headphones
} from "lucide-react";

interface CropScenario {
  id: string;
  tabLabel: string;
  tabLabelColor?: string;
  icon: typeof AlertOctagon;
  statusBadge: string;
  badgeColor: string;
  problemTitle: string;
  problemDesc: string;
  solutionProduct: string;
  solutionFormula: string;
  efficacyRate: number;
  speedText: string;
  highlightBenefit: string;
  bgColor: string;
}

const scenarios: CropScenario[] = [
  {
    id: "emergency",
    tabLabel: "🚨 Cứu Vườn Sâu Bệnh Khẩn",
    icon: AlertOctagon,
    statusBadge: "BÁO ĐỘNG DỊCH HẠI",
    badgeColor: "bg-red-500/15 text-red-600 border-red-500/30",
    problemTitle: "Rầy Nâu, Bọ Trĩ, Xì Mủ Thân Kháng Thuốc",
    problemDesc: "Sâu rầy chích hút lây lan nhanh, nấm Phytophthora gây loét nứt thân rụng đọt hàng loạt.",
    solutionProduct: "TràmTop 350SC + MegaTram Gold 750WG",
    solutionFormula: "Hoạt chất kép Azoxy + Difenoconazole & Pymetrozine cốm tan nhanh",
    efficacyRate: 99.4,
    speedText: "Hạ gục sau 30 phút • Khô vết loét trong 24h",
    highlightBenefit: "Khóa vòi chích hút, chống tính kháng thuốc triệt để",
    bgColor: "from-brand-dark via-[#094d28] to-[#06381d]",
  },
  {
    id: "recovery",
    tabLabel: "🌱 Tái Sinh Bộ Rễ & Hạ Phèn",
    icon: Activity,
    statusBadge: "PHỤC HỒI SINH TRƯỞNG",
    badgeColor: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
    problemTitle: "Vàng Lá Thối Rễ, Nghẹt Rễ, Đất Chai Cứng",
    problemDesc: "Rễ thối đen do ngập úng mùa mưa, ngộ độc phèn hữu cơ, cây còi cọc không hút được dinh dưỡng.",
    solutionProduct: "TramRoot Extra Max + Tinh Dầu Tràm",
    solutionFormula: "Axit Humic 15% + Fulvic tinh khiết + Chelate vi lượng nano",
    efficacyRate: 98.8,
    speedText: "Bung rễ tơ trắng sau 5 ngày tưới gốc",
    highlightBenefit: "Tinh dầu Tràm xua đuổi tuyến trùng, kích rễ đâm sâu 40cm",
    bgColor: "from-[#0F6B3A] via-[#165b34] to-[#0b3e21]",
  },
  {
    id: "yield",
    tabLabel: "🌾 Nuôi Bông & Kiến Tạo Mùa Vàng",
    icon: Flame,
    tabLabelColor: "text-amber-500",
    statusBadge: "NÂNG TẦM NĂNG SUẤT",
    badgeColor: "bg-amber-500/15 text-amber-700 border-amber-500/30",
    problemTitle: "Rụng Bông, Nứt Trái, Lem Lép Hạt Lúa",
    problemDesc: "Thời tiết bất lợi gây khô đen bông sầu riêng, rụng trái non, hạt lúa vào gạo bị lép hạt.",
    solutionProduct: "TramBio Nano Canxi-Bo + Siêu Vi Lượng",
    solutionFormula: "Canxi hữu cơ 12% + Bo nano 20,000ppm dạng sữa nano siêu thẩm thấu",
    efficacyRate: 99.1,
    speedText: "Tăng thụ phấn +38% • Hạt vàng no cậy",
    highlightBenefit: "Múi dày ngọt cơm, vỏ xanh bóng gai, đạt chuẩn xuất khẩu",
    bgColor: "from-[#1b5e39] via-[#0F6B3A] to-[#24583b]",
  },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const consoleCardRef = useRef<HTMLDivElement>(null);
  const rateNumberRef = useRef<HTMLSpanElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const scenario = scenarios[activeTab];

  // GSAP Entrance Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        y: -25,
        opacity: 0,
        duration: 0.6,
      })
      .from(".hero-headline", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, "-=0.3")
      .from(".hero-desc", {
        y: 30,
        opacity: 0,
        duration: 0.7,
      }, "-=0.4")
      .from(".hero-actions", {
        y: 25,
        opacity: 0,
        duration: 0.6,
      }, "-=0.4")
      .from(".hero-doctor", {
        y: 20,
        opacity: 0,
        duration: 0.5,
      }, "-=0.3")
      .from(rightColRef.current, {
        scale: 0.92,
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.3)",
      }, "-=0.7")
      .from(".hero-floating-badge", {
        scale: 0.5,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "back.out(1.5)",
      }, "-=0.4");

      // Continuous golden sun arc gentle pulse
      gsap.to(".sun-corona", {
        scale: 1.1,
        opacity: 0.7,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating ambient badges animation
      gsap.to(".badge-float-1", {
        y: -10,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".badge-float-2", {
        y: 12,
        duration: 3.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate tab switch in console card
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (consoleCardRef.current) {
        gsap.fromTo(
          consoleCardRef.current,
          { opacity: 0.7, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      }

      // Animate Efficacy Counter
      if (rateNumberRef.current) {
        const targetVal = scenario.efficacyRate;
        const obj = { val: 80 };
        gsap.to(obj, {
          val: targetVal,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            if (rateNumberRef.current) {
              rateNumberRef.current.textContent = obj.val.toFixed(1);
            }
          },
        });
      }
    }, consoleCardRef);

    return () => ctx.revert();
  }, [activeTab, scenario.efficacyRate]);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#eaf4ec] via-[#f7faf7] to-white"
    >
      {/* Dynamic Golden Sun Corona in Top Right - Echoing the logo's gold arc */}
      <div className="sun-corona absolute -top-32 -right-32 w-[550px] h-[550px] bg-gradient-to-br from-brand-yellow/30 via-brand-primary/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-brand-light/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-brand-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Topographic organic curves background watermark */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#0F6B3A 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Live Operational Pill */}
        <div className="hero-badge flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-brand-light/30">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-brand-light/60 text-brand-dark text-xs font-bold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
            </span>
            <span className="uppercase tracking-wide text-brand-dark">Trực Ban Nông Dược Mùa Vụ 2026</span>
            <span className="text-zinc-300">|</span>
            <span className="text-zinc-600 font-medium">Bác sĩ cây trồng trực tuyến 24/7</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-brand-dark bg-brand-yellow/25 px-3 py-1 rounded-full border border-brand-yellow/40">
            <Sparkles className="w-3.5 h-3.5 text-brand-dark" />
            <span>Đã hỗ trợ xử lý dịch hại thành công trên 15.000+ hecta</span>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vision, Big Typography & Action */}
          <div ref={leftColRef} className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Super Header Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-brand-dark text-white text-xs font-bold mb-4 tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
              <span>HÒA TRÀM AGRO • CÔNG NGHỆ BẢO VỆ MÙA MÀNG 4.0</span>
            </div>

            {/* Massive Distinctive Headline */}
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-zinc-950 tracking-tight leading-[1.12] mb-6">
              Đồng Hành Cùng Nhà Nông{" "}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-brand-primary to-brand-dark">
                Kiến Tạo Mùa Vàng
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-800 mt-2">
                Bảo Vệ Cây Trồng Toàn Diện
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="hero-desc text-base sm:text-lg text-zinc-600 leading-relaxed mb-6 font-normal">
              Đột phá với hệ giải pháp <strong>Phân bón sinh học & Thuốc BVTV công nghệ nano</strong>. 
              Thấm sâu sau 15 phút, kháng mưa bão rửa trôi, dập tắt sâu rầy nấm bệnh kháng thuốc 
              mà vẫn bảo vệ bộ rễ, không nóng bông cháy trái và giữ trọn độ phì nhiêu của đất.
            </p>

            {/* 3 Impact Badges Horizontal Bar */}
            <div className="grid grid-cols-3 gap-2 w-full mb-8 p-3 rounded-2xl bg-white shadow-sm border border-zinc-200/80">
              <div className="text-center px-1 py-1 border-r border-zinc-100">
                <div className="text-base sm:text-lg font-black text-brand-dark">15 Phút</div>
                <div className="text-[11px] text-zinc-500 font-semibold">Thấm sâu nano</div>
              </div>
              <div className="text-center px-1 py-1 border-r border-zinc-100">
                <div className="text-base sm:text-lg font-black text-brand-primary">99.4%</div>
                <div className="text-[11px] text-zinc-500 font-semibold">Sạch sâu nấm</div>
              </div>
              <div className="text-center px-1 py-1">
                <div className="text-base sm:text-lg font-black text-brand-yellow">100%</div>
                <div className="text-[11px] text-zinc-500 font-semibold">Không nóng cây</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="#products"
                className="relative group overflow-hidden flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-zinc-950 font-black text-sm sm:text-base bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-yellow hover:opacity-95 shadow-lg shadow-brand-yellow/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Xem Danh Mục Sản Phẩm</span>
                <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-sm sm:text-base text-brand-dark bg-white hover:bg-brand-light/15 border-2 border-brand-primary/40 hover:border-brand-primary transition-all shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-brand-primary" />
                <span>Đăng Ký Đại Lý Phân Phối</span>
              </a>
            </div>

            {/* Interactive Agronomist Live Support Strip */}
            <div className="hero-doctor flex items-center gap-3.5 p-3 rounded-2xl bg-white/90 border border-brand-light/50 shadow-xs w-full max-w-md">
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-brand-dark to-brand-primary flex items-center justify-center text-white shrink-0 shadow-sm font-bold text-sm">
                KS
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-zinc-900 truncate">Kỹ sư trưởng: Nguyễn Hoàng Nam</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">Trực ca</span>
                </div>
                <p className="text-[11px] text-zinc-500 truncate">Bắt bệnh qua ảnh & lên phác đồ miễn phí 24/7</p>
              </div>
              <a
                href="tel:0988123456"
                className="shrink-0 p-2 rounded-xl bg-brand-dark text-brand-yellow hover:bg-brand-primary transition-colors"
                title="Gọi trực tiếp kỹ sư"
              >
                <Headphones className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: "BẢNG ĐIỀU KHIỂN CỨU VƯỜN SINH HỌC" - The Standout Showcase */}
          <div ref={rightColRef} className="lg:col-span-6 relative">
            
            {/* Top Interactive Scenario Selector Tabs */}
            <div className="bg-zinc-900/90 backdrop-blur-md p-1.5 rounded-2xl mb-3 shadow-md flex gap-1 border border-zinc-800">
              {scenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer text-center truncate ${
                    activeTab === idx
                      ? "bg-brand-primary text-white shadow-md scale-[1.02]"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {sc.tabLabel}
                </button>
              ))}
            </div>

            {/* Central Bio-Console Card */}
            <div
              ref={consoleCardRef}
              className={`relative bg-gradient-to-br ${scenario.bgColor} rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-white/20 overflow-hidden transition-all duration-300`}
            >
              {/* Radial light glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl pointer-events-none" />

              {/* Console Header: Logo + Problem Scenario Badge */}
              <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-md border border-brand-light/60 flex items-center justify-center shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Hòa Tràm Logo"
                      width={48}
                      height={48}
                      priority
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-black text-white tracking-wider flex items-center gap-1.5">
                      HÒA TRÀM AGRO
                      <span className="text-[9px] bg-brand-yellow text-zinc-950 font-black px-1 rounded">LAB</span>
                    </span>
                    <span className="text-[10px] text-brand-light font-bold block">
                      Phác Đồ Đặc Trị Mùa Vụ
                    </span>
                  </div>
                </div>

                <div className={`px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md ${scenario.badgeColor} bg-white/90`}>
                  {scenario.statusBadge}
                </div>
              </div>

              {/* Problem Analysis Card */}
              <div className="p-3.5 rounded-2xl bg-black/25 backdrop-blur-sm border border-white/10 mb-5 relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-yellow mb-1">
                  <scenario.icon className="w-4 h-4 shrink-0" />
                  <span>Đối tượng cần xử lý:</span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-white mb-1">
                  {scenario.problemTitle}
                </h3>
                <p className="text-xs text-white/75 leading-relaxed font-normal">
                  {scenario.problemDesc}
                </p>
              </div>

              {/* Prescribed Solution Card */}
              <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 mb-6 relative z-10">
                <div className="text-[11px] font-bold text-brand-light uppercase tracking-wider mb-1">
                  Giải Pháp Can Thiệp Độc Quyền Hòa Tràm:
                </div>
                <div className="text-lg sm:text-xl font-black text-white mb-1 text-brand-yellow">
                  {scenario.solutionProduct}
                </div>
                <div className="text-xs text-white/90 font-medium mb-3">
                  {scenario.solutionFormula}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-xs text-brand-light font-bold">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>{scenario.highlightBenefit}</span>
                </div>
              </div>

              {/* Real-time Efficacy Progress Metric */}
              <div className="pt-2 relative z-10">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-semibold text-white/80">Hiệu lực sạch sâu nấm thực nghiệm:</span>
                  <div className="text-right">
                    <span ref={rateNumberRef} className="text-3xl sm:text-4xl font-black text-brand-yellow">
                      {scenario.efficacyRate}
                    </span>
                    <span className="text-2xl font-bold text-brand-yellow">%</span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-3 rounded-full bg-white/20 overflow-hidden p-0.5 border border-white/15">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-primary via-brand-light to-brand-yellow transition-all duration-1000 ease-out"
                    style={{ width: `${scenario.efficacyRate}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/70 font-medium mt-2">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-brand-yellow" /> {scenario.speedText}
                  </span>
                  <span className="text-brand-light font-bold">Chuẩn VietGAP / GlobalGAP</span>
                </div>
              </div>

            </div>

            {/* Floating Badge 1: Rainproof Guarantee (Top Right) */}
            <div className="hero-floating-badge badge-float-1 hidden sm:flex absolute -top-5 -right-5 bg-white rounded-2xl p-3 shadow-xl border border-brand-primary/30 items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 text-brand-dark flex items-center justify-center font-bold shrink-0">
                <Droplets className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-900">Phụ Gia Nano Bám Dính</div>
                <div className="text-[11px] text-zinc-500 font-medium">Kháng mưa rửa trôi chỉ sau 15p</div>
              </div>
            </div>

            {/* Floating Badge 2: Non-toxic / Safe for flowers (Bottom Left) */}
            <div className="hero-floating-badge badge-float-2 hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-brand-yellow/60 items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 text-zinc-950 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-brand-dark" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-900">Mát Cây - An Toàn Bông Trái</div>
                <div className="text-[11px] text-zinc-500 font-medium">Bảo vệ thiên địch & rễ tơ</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
