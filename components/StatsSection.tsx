"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Users2, ShieldCheck, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    icon: Building2,
    value: 15,
    suffix: "+",
    label: "Năm Kinh Nghiệm",
    sublabel: "Nghiên cứu & phân phối thuốc BVTV",
    color: "text-brand-yellow",
    bgColor: "bg-brand-yellow/15",
  },
  {
    icon: Users2,
    value: 500,
    suffix: "+",
    label: "Đại Lý & Nhà Phân Phối",
    sublabel: "Phủ sóng khắp 63 tỉnh thành cả nước",
    color: "text-brand-light",
    bgColor: "bg-brand-light/20",
  },
  {
    icon: ShieldCheck,
    value: 120,
    suffix: "+",
    label: "Sản Phẩm Đạt Chuẩn",
    sublabel: "Được Cục BVTV cấp phép lưu hành",
    color: "text-white",
    bgColor: "bg-white/15",
  },
  {
    icon: Award,
    value: 99.2,
    decimals: 1,
    suffix: "%",
    label: "Hiệu Lực Phòng Trừ",
    sublabel: "Khảo nghiệm lâm sàng đạt hiệu quả tối ưu",
    color: "text-brand-yellow",
    bgColor: "bg-brand-yellow/15",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate cards
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Animate numbers
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const numberEl = card.querySelector(".stat-number");
        if (!numberEl) return;

        const targetVal = stats[index].value;
        const decimals = stats[index].decimals || 0;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          onUpdate: () => {
            numberEl.textContent = decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val).toString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-r from-brand-dark via-[#0d5930] to-brand-dark text-white overflow-hidden shadow-inner"
    >
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-brand-light/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-brand-light font-bold opacity-80">
                    Hòa Tràm
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl lg:text-5xl font-extrabold tracking-tight ${item.color} stat-number`}>
                    0
                  </span>
                  <span className={`text-3xl font-bold ${item.color}`}>
                    {item.suffix}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand-yellow transition-colors">
                  {item.label}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {item.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

