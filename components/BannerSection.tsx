"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BannerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const snail1Ref = useRef<HTMLDivElement>(null);
  const snail2Ref = useRef<HTMLDivElement>(null);
  const caterpillar1Ref = useRef<HTMLDivElement>(null);
  const caterpillar2Ref = useRef<HTMLDivElement>(null);
  const beetleRef = useRef<HTMLDivElement>(null);
  const hopperRef = useRef<HTMLDivElement>(null);

  // Birds & Egrets (Chim & Cò) flying refs
  const stork1Ref = useRef<HTMLDivElement>(null);
  const stork2Ref = useRef<HTMLDivElement>(null);
  const stork3Ref = useRef<HTMLDivElement>(null);
  const bird1Ref = useRef<HTMLDivElement>(null);
  const bird2Ref = useRef<HTMLDivElement>(null);

  const handlePestClick = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;

    // Quick eliminated tumble animation
    gsap.to(ref.current, {
      scale: 0.3,
      rotation: "+=360",
      y: "+=35",
      opacity: 0.2,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        // Respawn after 2s
        gsap.to(ref.current, {
          scale: 1,
          rotation: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1.8,
          ease: "back.out(2)",
        });
      },
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Snail 1 (Ốc bươu vàng to) - Crawls slowly across bottom-left
      if (snail1Ref.current) {
        gsap.to(snail1Ref.current, {
          x: 320,
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        // Shell wobble while crawling
        gsap.to(snail1Ref.current.querySelector(".snail-shell"), {
          rotation: 6,
          y: -4,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Antennae wiggle
        gsap.to(snail1Ref.current.querySelectorAll(".snail-antenna"), {
          rotation: -12,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          stagger: 0.2,
          ease: "sine.inOut",
        });
      }

      // 2. Snail 2 (Ốc bươu con) - Crawls along the bottom-right
      if (snail2Ref.current) {
        gsap.to(snail2Ref.current, {
          x: -260,
          duration: 22,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });

        gsap.to(snail2Ref.current.querySelector(".snail-shell"), {
          rotation: -5,
          y: -2,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 3. Caterpillar 1 (Sâu cuốn lá xanh) - Inching crawling movement
      if (caterpillar1Ref.current) {
        gsap.to(caterpillar1Ref.current, {
          x: 420,
          y: -30,
          duration: 16,
          repeat: -1,
          yoyo: true,
          ease: "none",
        });

        // Inching worm contraction / expansion
        const inchTl = gsap.timeline({ repeat: -1 });
        inchTl
          .to(caterpillar1Ref.current.querySelector(".caterpillar-body"), {
            scaleX: 0.75,
            scaleY: 1.35,
            duration: 0.45,
            ease: "power1.in",
          })
          .to(caterpillar1Ref.current.querySelector(".caterpillar-body"), {
            scaleX: 1.25,
            scaleY: 0.8,
            duration: 0.5,
            ease: "power2.out",
          })
          .to(caterpillar1Ref.current.querySelector(".caterpillar-body"), {
            scaleX: 1,
            scaleY: 1,
            duration: 0.35,
            ease: "power1.out",
          });
      }

      // 4. Caterpillar 2 (Sâu đục thân) - Crawling along middle rice stalks
      if (caterpillar2Ref.current) {
        gsap.to(caterpillar2Ref.current, {
          x: -360,
          y: 25,
          duration: 19,
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: 1.5,
        });

        const inch2Tl = gsap.timeline({ repeat: -1 });
        inch2Tl
          .to(caterpillar2Ref.current.querySelector(".caterpillar-body"), {
            scaleX: 0.8,
            scaleY: 1.3,
            duration: 0.5,
            ease: "power1.in",
          })
          .to(caterpillar2Ref.current.querySelector(".caterpillar-body"), {
            scaleX: 1.2,
            scaleY: 0.85,
            duration: 0.55,
            ease: "power2.out",
          })
          .to(caterpillar2Ref.current.querySelector(".caterpillar-body"), {
            scaleX: 1,
            scaleY: 1,
            duration: 0.4,
            ease: "power1.out",
          });
      }

      // 5. Beetle / Rầy nâu chích hút - Skittering movement
      if (beetleRef.current) {
        const beetleTl = gsap.timeline({ repeat: -1 });
        beetleTl
          .to(beetleRef.current, {
            x: 100,
            y: -15,
            rotation: 12,
            duration: 1.2,
            ease: "power2.inOut",
          })
          .to(beetleRef.current, {
            rotation: -8,
            duration: 0.4,
          })
          .to(beetleRef.current, {
            x: 200,
            y: 10,
            rotation: 5,
            duration: 1.5,
            ease: "power1.inOut",
          })
          .to(beetleRef.current, {
            x: 50,
            y: -25,
            rotation: 180,
            duration: 1.8,
            ease: "power2.inOut",
          })
          .to(beetleRef.current, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1.6,
            ease: "power1.inOut",
          });

        gsap.to(beetleRef.current.querySelectorAll(".beetle-leg"), {
          rotation: 20,
          duration: 0.15,
          repeat: -1,
          yoyo: true,
          stagger: 0.05,
        });
      }

      // 6. Planthopper / Bọ trĩ nhảy nhót
      if (hopperRef.current) {
        const hopperTl = gsap.timeline({ repeat: -1 });
        hopperTl
          .to(hopperRef.current, {
            y: -35,
            x: 60,
            rotation: -15,
            duration: 0.35,
            ease: "power2.out",
          })
          .to(hopperRef.current, {
            y: 0,
            x: 110,
            rotation: 0,
            duration: 0.35,
            ease: "power2.in",
          })
          .to(hopperRef.current, {
            duration: 1.2,
          })
          .to(hopperRef.current, {
            y: -40,
            x: 160,
            rotation: 20,
            duration: 0.35,
            ease: "power2.out",
          })
          .to(hopperRef.current, {
            y: 0,
            x: 210,
            rotation: 0,
            duration: 0.35,
            ease: "power2.in",
          })
          .to(hopperRef.current, {
            duration: 1.5,
          })
          .to(hopperRef.current, {
            x: 0,
            duration: 2.5,
            ease: "power1.inOut",
          });
      }

      // 7. Pesticide Spray Mist Particles Effect
      gsap.to(".spray-mist-particle", {
        x: -280,
        y: "+=70",
        opacity: 0,
        scale: 2.2,
        duration: 2.2,
        stagger: {
          each: 0.2,
          repeat: -1,
        },
        ease: "power1.out",
      });

      // 8. Đàn Cò Trắng (White Egrets / Storks) bay lượn trên bầu trời
      if (stork1Ref.current) {
        gsap.to(stork1Ref.current, {
          x: "115vw",
          duration: 22,
          repeat: -1,
          ease: "none",
        });
        gsap.to(stork1Ref.current, {
          y: "+=35",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (stork2Ref.current) {
        gsap.to(stork2Ref.current, {
          x: "115vw",
          duration: 25,
          repeat: -1,
          ease: "none",
          delay: 3,
        });
        gsap.to(stork2Ref.current, {
          y: "-=30",
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (stork3Ref.current) {
        gsap.to(stork3Ref.current, {
          x: "115vw",
          duration: 30,
          repeat: -1,
          ease: "none",
          delay: 7,
        });
        gsap.to(stork3Ref.current, {
          y: "+=22",
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Cò vỗ cánh nhịp nhàng (Wing flapping)
      gsap.to(".stork-wing-flap", {
        scaleY: -0.55,
        transformOrigin: "center bottom",
        duration: 0.35,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // 9. Đôi chim én nhỏ (Swallows / Birds) chao lượn nhanh
      if (bird1Ref.current) {
        gsap.to(bird1Ref.current, {
          x: "-120vw",
          duration: 15,
          repeat: -1,
          ease: "none",
          delay: 1.5,
        });
        gsap.to(bird1Ref.current, {
          y: "+=40",
          rotation: -12,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (bird2Ref.current) {
        gsap.to(bird2Ref.current, {
          x: "-120vw",
          duration: 18,
          repeat: -1,
          ease: "none",
          delay: 4.5,
        });
        gsap.to(bird2Ref.current, {
          y: "-=35",
          rotation: 8,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Chim vỗ cánh nhanh
      gsap.to(".bird-wing-flap", {
        scaleY: -0.7,
        transformOrigin: "center bottom",
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-8 lg:pb-12 bg-gradient-to-b from-brand-light/10 via-emerald-50/20 to-white overflow-hidden"
    >
      <div className="w-full max-w-[1720px] mx-auto px-2.5 sm:px-5 lg:px-8">
        {/* Rounded Framed Banner Container - Fixed mobile zoom & rounded corners */}
        <div className="relative w-full aspect-[1672/941] rounded-2xl sm:rounded-3xl lg:rounded-[36px] overflow-hidden shadow-xl sm:shadow-2xl border border-emerald-900/10 ring-1 ring-black/5 select-none bg-emerald-950">
          {/* Main Background Image - Exact 1672/941 aspect ratio prevents any mobile zoom */}
          <Image
            src="/banner-section.png"
            alt="Hòa Tràm - Người nông dân phun thuốc bảo vệ thực vật trên cánh đồng lúa"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1720px"
            className="object-cover object-center w-full h-full"
          />

          {/* Very Subtle Vignette & Edge Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 pointer-events-none" />

          {/* Animated Pesticide Mist Particles from the Spray Nozzle */}
          <div className="absolute top-[67%] left-[52%] w-4 h-4 pointer-events-none">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="spray-mist-particle absolute w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white/75 blur-[1px] shadow-sm shadow-emerald-200"
                style={{
                  top: `${(i - 3) * 4}px`,
                  left: `${i * 3}px`,
                }}
              />
            ))}
          </div>

          {/* ======================================================== */}
          {/* FLYING BIRDS & EGRETS (CÒ TRẮNG & CHIM TRÊN BẦU TRỜI)   */}
          {/* ======================================================== */}

          {/* 1. Con Cò Trắng Đầu Đàn (Main White Egret) */}
          <div
            ref={stork1Ref}
            className="absolute top-[10%] -left-[100px] z-20 pointer-events-none select-none drop-shadow-md scale-60 sm:scale-80 md:scale-100 origin-center"
          >
          <svg width="68" height="46" viewBox="0 0 100 70" fill="none">
            {/* Trailing black legs */}
            <line x1="28" y1="40" x2="6" y2="52" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="41" x2="10" y2="56" stroke="#404040" strokeWidth="1.8" strokeLinecap="round" />
            {/* Slender white body & curved neck */}
            <path d="M78 20 Q70 14 62 22 Q54 30 38 36 Q28 40 22 36 Q30 44 46 40 Q58 36 66 28 Q72 22 80 20 Z" fill="#FFFFFF" />
            {/* Head & eye */}
            <circle cx="81" cy="19" r="4.5" fill="#FFFFFF" />
            <circle cx="82" cy="18.5" r="1.3" fill="#1A1A1A" />
            {/* Golden-yellow beak */}
            <polygon points="84,17 97,20.5 84,22" fill="#F4B400" />
            {/* Far Wing (shaded light gray) */}
            <g className="stork-wing-flap origin-bottom">
              <path d="M44 34 Q36 10 48 2 Q56 14 52 32 Z" fill="#E2E7E4" />
            </g>
            {/* Near Wing (pure white) */}
            <g className="stork-wing-flap origin-bottom">
              <path d="M46 36 Q38 6 54 0 Q62 10 56 34 Z" fill="#FFFFFF" stroke="#D3DAD5" strokeWidth="0.8" />
            </g>
          </svg>
        </div>

        {/* 2. Con Cò Trắng Bay Theo Sau (Second Egret) */}
        <div
          ref={stork2Ref}
          className="absolute top-[16%] -left-[170px] z-20 pointer-events-none select-none drop-shadow-sm scale-50 sm:scale-65 md:scale-75 origin-center"
        >
          <svg width="68" height="46" viewBox="0 0 100 70" fill="none">
            <line x1="28" y1="40" x2="6" y2="52" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="41" x2="10" y2="56" stroke="#404040" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M78 20 Q70 14 62 22 Q54 30 38 36 Q28 40 22 36 Q30 44 46 40 Q58 36 66 28 Q72 22 80 20 Z" fill="#FFFFFF" />
            <circle cx="81" cy="19" r="4.5" fill="#FFFFFF" />
            <circle cx="82" cy="18.5" r="1.3" fill="#1A1A1A" />
            <polygon points="84,17 97,20.5 84,22" fill="#F4B400" />
            <g className="stork-wing-flap origin-bottom">
              <path d="M44 34 Q36 10 48 2 Q56 14 52 32 Z" fill="#E2E7E4" />
            </g>
            <g className="stork-wing-flap origin-bottom">
              <path d="M46 36 Q38 6 54 0 Q62 10 56 34 Z" fill="#FFFFFF" stroke="#D3DAD5" strokeWidth="0.8" />
            </g>
          </svg>
        </div>

        {/* 3. Con Cò Trắng Xa Xăm (Third Egret in Distance) */}
        <div
          ref={stork3Ref}
          className="absolute top-[6%] -left-[240px] z-20 pointer-events-none select-none opacity-85 scale-35 sm:scale-45 md:scale-50 origin-center"
        >
          <svg width="68" height="46" viewBox="0 0 100 70" fill="none">
            <line x1="28" y1="40" x2="6" y2="52" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
            <path d="M78 20 Q70 14 62 22 Q54 30 38 36 Q28 40 22 36 Q30 44 46 40 Q58 36 66 28 Q72 22 80 20 Z" fill="#FFFFFF" />
            <polygon points="84,17 97,20.5 84,22" fill="#F4B400" />
            <g className="stork-wing-flap origin-bottom">
              <path d="M46 36 Q38 6 54 0 Q62 10 56 34 Z" fill="#FFFFFF" />
            </g>
          </svg>
        </div>

        {/* 4. Chim Én Bay Chao Lượn 1 (Swallow 1) */}
        <div
          ref={bird1Ref}
          className="absolute top-[12%] -right-[60px] z-20 pointer-events-none select-none drop-shadow-xs scale-65 sm:scale-85 md:scale-100 origin-center"
        >
          <svg width="36" height="26" viewBox="0 0 60 40" fill="none">
            {/* Forked tail */}
            <polygon points="12,22 2,14 6,22 2,30" fill="#1C2530" />
            {/* Body */}
            <ellipse cx="28" cy="22" rx="16" ry="6" fill="#1E2835" />
            <circle cx="42" cy="20" r="5" fill="#1E2835" />
            <ellipse cx="32" cy="24" rx="8" ry="3" fill="#E8EDF2" />
            <polygon points="46,19 53,20.5 46,22" fill="#F4B400" />
            {/* Wings flapping */}
            <g className="bird-wing-flap origin-bottom">
              <path d="M26 20 Q18 0 34 2 Q38 12 32 20 Z" fill="#141B24" />
            </g>
          </svg>
        </div>

        {/* 5. Chim Én Bay Chao Lượn 2 (Swallow 2) */}
        <div
          ref={bird2Ref}
          className="absolute top-[22%] -right-[130px] z-20 pointer-events-none select-none opacity-90 scale-50 sm:scale-65 md:scale-75 drop-shadow-xs origin-center"
        >
          <svg width="36" height="26" viewBox="0 0 60 40" fill="none">
            <polygon points="12,22 2,14 6,22 2,30" fill="#1C2530" />
            <ellipse cx="28" cy="22" rx="16" ry="6" fill="#1E2835" />
            <circle cx="42" cy="20" r="5" fill="#1E2835" />
            <ellipse cx="32" cy="24" rx="8" ry="3" fill="#E8EDF2" />
            <polygon points="46,19 53,20.5 46,22" fill="#F4B400" />
            <g className="bird-wing-flap origin-bottom">
              <path d="M26 20 Q18 0 34 2 Q38 12 32 20 Z" fill="#141B24" />
            </g>
          </svg>
        </div>

        {/* ======================================================== */}
        {/* ANIMATED PEST 1: ỐC BƯƠU VÀNG TO (Golden Apple Snail)    */}
        {/* ======================================================== */}
        <div
          ref={snail1Ref}
          onClick={() => handlePestClick(snail1Ref)}
          className="absolute bottom-[10%] left-[8%] sm:left-[14%] z-20 cursor-pointer transform hover:scale-125 transition-transform group/snail scale-60 sm:scale-80 md:scale-100 origin-bottom"
          title="Ốc Bươu Vàng"
        >
          <div className="relative flex flex-col items-center">
            <span className="opacity-0 group-hover/snail:opacity-100 transition-opacity absolute -top-7 text-[10px] font-bold bg-zinc-950/90 text-brand-yellow px-2 py-0.5 rounded-full whitespace-nowrap border border-brand-yellow/40 shadow-lg pointer-events-none">
              Ốc bươu vàng
            </span>

            <svg
              width="68"
              height="48"
              viewBox="0 0 100 70"
              fill="none"
              className="drop-shadow-lg"
            >
              <ellipse
                cx="48"
                cy="56"
                rx="42"
                ry="10"
                fill="#E8B878"
                opacity="0.95"
              />
              <path d="M12 56 Q5 52 8 46 Q14 48 24 54 Z" fill="#D4A060" />
              <circle cx="16" cy="46" r="10" fill="#E8B878" />
              <path
                d="M14 42 Q8 30 6 22"
                stroke="#B88645"
                strokeWidth="3"
                strokeLinecap="round"
                className="snail-antenna origin-bottom"
              />
              <circle cx="6" cy="22" r="2.5" fill="#5A3A10" />
              <path
                d="M19 40 Q18 28 20 20"
                stroke="#B88645"
                strokeWidth="3"
                strokeLinecap="round"
                className="snail-antenna origin-bottom"
              />
              <circle cx="20" cy="20" r="2.5" fill="#5A3A10" />
              <circle cx="12" cy="45" r="2" fill="#3D2605" />
              <circle cx="18" cy="45" r="2" fill="#3D2605" />

              <g className="snail-shell origin-center">
                <ellipse
                  cx="58"
                  cy="36"
                  rx="32"
                  ry="26"
                  fill="url(#snailGrad)"
                  stroke="#683F15"
                  strokeWidth="2.5"
                />
                <path
                  d="M72 32 C70 20 54 18 46 26 C38 34 42 48 54 48 C64 48 68 40 62 34 C58 30 52 32 50 36"
                  stroke="#4A2B0A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <ellipse
                  cx="78"
                  cy="38"
                  rx="8"
                  ry="16"
                  fill="#8B572A"
                  opacity="0.7"
                />
              </g>

              <defs>
                <radialGradient id="snailGrad" cx="50%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#E5A65E" />
                  <stop offset="60%" stopColor="#A86B30" />
                  <stop offset="100%" stopColor="#5A3512" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ANIMATED PEST 2: ỐC BƯƠU VÀNG NHỎ (Baby Snail)           */}
        {/* ======================================================== */}
        <div
          ref={snail2Ref}
          onClick={() => handlePestClick(snail2Ref)}
          className="absolute bottom-[6%] right-[12%] sm:right-[22%] z-20 cursor-pointer transform hover:scale-125 transition-transform group/snail2 scale-60 sm:scale-80 md:scale-100 origin-bottom"
          title="Ốc bươu nhỏ"
        >
          <div className="relative flex flex-col items-center">
            <span className="opacity-0 group-hover/snail2:opacity-100 transition-opacity absolute -top-6 text-[9px] font-bold bg-zinc-950/90 text-brand-yellow px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-md pointer-events-none">
              Ốc bươu con
            </span>

            <svg
              width="42"
              height="30"
              viewBox="0 0 100 70"
              fill="none"
              className="drop-shadow-md"
            >
              <ellipse cx="48" cy="56" rx="42" ry="10" fill="#E8B878" />
              <circle cx="16" cy="46" r="10" fill="#E8B878" />
              <path
                d="M14 42 Q8 30 6 22"
                stroke="#B88645"
                strokeWidth="3"
                strokeLinecap="round"
                className="snail-antenna"
              />
              <circle cx="6" cy="22" r="2" fill="#5A3A10" />
              <path
                d="M19 40 Q18 28 20 20"
                stroke="#B88645"
                strokeWidth="3"
                strokeLinecap="round"
                className="snail-antenna"
              />
              <circle cx="20" cy="20" r="2" fill="#5A3A10" />
              <ellipse
                cx="58"
                cy="36"
                rx="30"
                ry="24"
                fill="#C57E37"
                stroke="#4A2B0A"
                strokeWidth="2.5"
                className="snail-shell"
              />
              <circle cx="60" cy="36" r="12" fill="#884F17" />
            </svg>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ANIMATED PEST 3: SÂU CUỐN LÁ XANH (Green Caterpillar)   */}
        {/* ======================================================== */}
        <div
          ref={caterpillar1Ref}
          onClick={() => handlePestClick(caterpillar1Ref)}
          className="absolute bottom-[22%] left-[10%] sm:left-[22%] z-20 cursor-pointer transform hover:scale-125 transition-transform group/caterpillar scale-60 sm:scale-80 md:scale-100 origin-bottom"
          title="Sâu Cuốn Lá"
        >
          <div className="relative flex flex-col items-center">
            <span className="opacity-0 group-hover/caterpillar:opacity-100 transition-opacity absolute -top-7 text-[10px] font-bold bg-zinc-950/90 text-emerald-400 px-2 py-0.5 rounded-full whitespace-nowrap border border-emerald-500/40 shadow-lg pointer-events-none">
              Sâu cuốn lá lúa
            </span>

            <div className="caterpillar-body origin-center">
              <svg
                width="64"
                height="32"
                viewBox="0 0 110 50"
                fill="none"
                className="drop-shadow-lg"
              >
                <circle
                  cx="15"
                  cy="25"
                  r="11"
                  fill="#78B830"
                  stroke="#386810"
                  strokeWidth="2"
                />
                <circle
                  cx="30"
                  cy="22"
                  r="12"
                  fill="#88C838"
                  stroke="#386810"
                  strokeWidth="2"
                />
                <circle
                  cx="46"
                  cy="18"
                  r="13"
                  fill="#98D840"
                  stroke="#386810"
                  strokeWidth="2"
                />
                <circle
                  cx="63"
                  cy="20"
                  r="12"
                  fill="#88C838"
                  stroke="#386810"
                  strokeWidth="2"
                />
                <circle
                  cx="80"
                  cy="24"
                  r="11"
                  fill="#78B830"
                  stroke="#386810"
                  strokeWidth="2"
                />
                <circle
                  cx="96"
                  cy="26"
                  r="12"
                  fill="#68A828"
                  stroke="#2D540D"
                  strokeWidth="2.5"
                />
                <circle cx="100" cy="22" r="3" fill="#1C3806" />
                <circle cx="101" cy="21" r="1" fill="#FFFFFF" />
                <path
                  d="M98 16 Q102 8 106 5"
                  stroke="#2D540D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="106" cy="5" r="2" fill="#F4B400" />
                <path
                  d="M94 16 Q92 8 90 6"
                  stroke="#2D540D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="90" cy="6" r="2" fill="#F4B400" />
                <ellipse cx="46" cy="16" rx="4" ry="2" fill="#F4B400" />
                <ellipse cx="63" cy="18" rx="4" ry="2" fill="#F4B400" />
                <ellipse cx="30" cy="20" rx="3" ry="1.5" fill="#F4B400" />
                <ellipse cx="28" cy="34" rx="2.5" ry="4" fill="#386810" />
                <ellipse cx="44" cy="31" rx="2.5" ry="4" fill="#386810" />
                <ellipse cx="62" cy="32" rx="2.5" ry="4" fill="#386810" />
                <ellipse cx="78" cy="35" rx="2.5" ry="4" fill="#386810" />
              </svg>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ANIMATED PEST 4: SÂU ĐỤC THÂN VÀNG SỌC                   */}
        {/* ======================================================== */}
        <div
          ref={caterpillar2Ref}
          onClick={() => handlePestClick(caterpillar2Ref)}
          className="absolute bottom-[35%] right-[18%] sm:right-[32%] z-20 cursor-pointer transform hover:scale-125 transition-transform group/worm2 scale-60 sm:scale-80 md:scale-100 origin-bottom"
          title="Sâu Đục Thân"
        >
          <div className="relative flex flex-col items-center">
            <span className="opacity-0 group-hover/worm2:opacity-100 transition-opacity absolute -top-6 text-[9px] font-bold bg-zinc-950/90 text-amber-400 px-2 py-0.5 rounded-full whitespace-nowrap shadow-md pointer-events-none">
              Sâu đục thân
            </span>

            <div className="caterpillar-body origin-center">
              <svg
                width="50"
                height="24"
                viewBox="0 0 100 45"
                fill="none"
                className="drop-shadow-md"
              >
                <circle
                  cx="15"
                  cy="22"
                  r="9"
                  fill="#E2A648"
                  stroke="#7A4D10"
                  strokeWidth="2"
                />
                <circle
                  cx="28"
                  cy="20"
                  r="10"
                  fill="#E8B860"
                  stroke="#7A4D10"
                  strokeWidth="2"
                />
                <circle
                  cx="43"
                  cy="18"
                  r="11"
                  fill="#F2CA78"
                  stroke="#7A4D10"
                  strokeWidth="2"
                />
                <circle
                  cx="58"
                  cy="19"
                  r="10"
                  fill="#E8B860"
                  stroke="#7A4D10"
                  strokeWidth="2"
                />
                <circle
                  cx="72"
                  cy="21"
                  r="9.5"
                  fill="#E2A648"
                  stroke="#7A4D10"
                  strokeWidth="2"
                />
                <circle
                  cx="86"
                  cy="23"
                  r="10.5"
                  fill="#C58525"
                  stroke="#683E0A"
                  strokeWidth="2"
                />
                <circle cx="90" cy="20" r="2.5" fill="#2E1700" />
              </svg>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ANIMATED PEST 5: RẦY NÂU / BỌ TRĨ CHÍCH HÚT              */}
        {/* ======================================================== */}
        <div
          ref={beetleRef}
          onClick={() => handlePestClick(beetleRef)}
          className="absolute bottom-[28%] left-[4%] sm:left-[8%] z-20 cursor-pointer transform hover:scale-125 transition-transform group/beetle scale-60 sm:scale-80 md:scale-100 origin-bottom"
          title="Rầy Nâu"
        >
          <div className="relative flex flex-col items-center">
            <span className="opacity-0 group-hover/beetle:opacity-100 transition-opacity absolute -top-6 text-[9px] font-bold bg-zinc-950/90 text-brand-yellow px-2 py-0.5 rounded-full whitespace-nowrap border border-brand-yellow/30 shadow-md pointer-events-none">
              Rầy Nâu
            </span>

            <svg
              width="44"
              height="44"
              viewBox="0 0 60 60"
              fill="none"
              className="drop-shadow-md"
            >
              <g className="beetle-legs">
                <path
                  d="M18 20 Q10 12 4 15"
                  stroke="#3D2005"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="beetle-leg"
                />
                <path
                  d="M42 20 Q50 12 56 15"
                  stroke="#3D2005"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="beetle-leg"
                />
                <path
                  d="M16 30 Q6 28 2 34"
                  stroke="#3D2005"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="beetle-leg"
                />
                <path
                  d="M44 30 Q54 28 58 34"
                  stroke="#3D2005"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="beetle-leg"
                />
                <path
                  d="M18 42 Q10 48 6 56"
                  stroke="#3D2005"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="beetle-leg"
                />
                <path
                  d="M42 42 Q50 48 54 56"
                  stroke="#3D2005"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="beetle-leg"
                />
              </g>
              <ellipse
                cx="30"
                cy="34"
                rx="14"
                ry="17"
                fill="#6A3C12"
                stroke="#351B06"
                strokeWidth="2"
              />
              <line
                x1="30"
                y1="20"
                x2="30"
                y2="50"
                stroke="#351B06"
                strokeWidth="1.5"
              />
              <ellipse cx="30" cy="20" rx="9" ry="6" fill="#884C18" />
              <circle cx="30" cy="14" r="6" fill="#3D2005" />
              <circle cx="26" cy="13" r="1.8" fill="#F4B400" />
              <circle cx="34" cy="13" r="1.8" fill="#F4B400" />
              <path
                d="M28 10 Q24 2 18 4"
                stroke="#3D2005"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M32 10 Q36 2 42 4"
                stroke="#3D2005"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ANIMATED PEST 6: BỌ TRĨ / CHÂU CHẤU NHỎ                   */}
        {/* ======================================================== */}
        <div
          ref={hopperRef}
          onClick={() => handlePestClick(hopperRef)}
          className="absolute bottom-[18%] left-[34%] sm:left-[40%] z-20 cursor-pointer transform hover:scale-125 transition-transform group/hopper scale-60 sm:scale-80 md:scale-100 origin-bottom"
          title="Bọ Trĩ"
        >
          <div className="relative flex flex-col items-center">
            <span className="opacity-0 group-hover/hopper:opacity-100 transition-opacity absolute -top-6 text-[9px] font-bold bg-zinc-950/90 text-brand-light px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-md pointer-events-none">
              Bọ trĩ
            </span>

            <svg
              width="36"
              height="36"
              viewBox="0 0 50 50"
              fill="none"
              className="drop-shadow-sm"
            >
              <ellipse
                cx="25"
                cy="25"
                rx="7"
                ry="16"
                transform="rotate(-30 25 25)"
                fill="#4A751A"
                stroke="#223B06"
                strokeWidth="1.5"
              />
              <circle cx="32" cy="13" r="5" fill="#2E4F0A" />
              <circle cx="34" cy="12" r="1.5" fill="#F4B400" />
              <path
                d="M20 28 L10 18 L6 34"
                stroke="#223B06"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 24 L14 14 L12 28"
                stroke="#38600E"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
