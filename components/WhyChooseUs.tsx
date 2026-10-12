"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ShieldCheck, 
  Droplets, 
  Users, 
  BadgePercent, 
  Leaf, 
  Truck,
  CheckCircle2
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const advantages = [
  {
    icon: ShieldCheck,
    title: "100% Hoạt Chất Chuẩn Nồng Độ",
    desc: "Được Cục Bảo Vệ Thực Vật cấp phép lưu hành. Hàm lượng hoạt chất được kiểm định nghiêm ngặt theo tiêu chuẩn ISO 9001:2015 trước khi xuất xưởng.",
    color: "bg-brand-dark text-white",
  },
  {
    icon: Droplets,
    title: "Công Nghệ Phụ Gia Bám Dính Nano",
    desc: "Thấm sâu qua biểu bì lá chỉ sau 15 phút, chống rửa trôi khi mưa lớn, giảm hao hụt đến 40% chi phí phân thuốc cho mỗi hecta.",
    color: "bg-brand-primary text-white",
  },
  {
    icon: Users,
    title: "Kỹ Sư Nông Học Khám Vườn Tận Nơi",
    desc: "Đội ngũ chuyên viên túc trực tại các vựa cây trái và cánh đồng trọng điểm, hỗ trợ soi kính hiển vi, bắt bệnh và lên đơn thuốc miễn phí.",
    color: "bg-brand-yellow text-zinc-950",
  },
  {
    icon: BadgePercent,
    title: "Chính Sách Đại Lý Độc Quyền Vùng",
    desc: "Chiết khấu cao, thưởng doanh số quý/năm, cam kết bảo hộ thị trường chống bán phá giá hoặc tràn hàng sang địa bàn lân cận.",
    color: "bg-brand-light text-brand-dark",
  },
  {
    icon: Leaf,
    title: "Định Hướng Sinh Học - Xuất Khẩu",
    desc: "Thời gian cách ly ngắn (PHI), đáp ứng các tiêu chuẩn khắt khe về dư lượng thuốc BVTV khi xuất khẩu sang châu Âu, Mỹ, Nhật Bản, Trung Quốc.",
    color: "bg-brand-dark text-brand-yellow",
  },
  {
    icon: Truck,
    title: "Giao Hàng Thần Tốc Dập Dịch Hại",
    desc: "Mạng lưới kho vệ tinh tại ĐBSCL, Đông Nam Bộ, Tây Nguyên và miền Bắc giúp đại lý nhận hàng nhanh trong 12 - 24 giờ khi dịch sâu rầy bùng phát.",
    color: "bg-brand-primary text-brand-light",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 45,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow/20 text-brand-dark text-xs sm:text-sm font-semibold mb-3 border border-brand-yellow/40">
            <CheckCircle2 className="w-4 h-4 text-brand-dark" />
            <span>UY TÍN & CAM KẾT CHẤT LƯỢNG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Tại Sao Hơn 500+ Đại Lý & Nhà Nông{" "}
            <span className="text-brand-dark">Chọn Hòa Tràm?</span>
          </h2>
          <p className="text-base text-zinc-600">
            Chúng tôi không chỉ cung ứng phân bón & thuốc bảo vệ thực vật, chúng tôi trao giải pháp bền vững 
            giúp giữ gìn chất lượng đất và đảm bảo lợi nhuận tối đa trên mỗi vụ mùa.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-zinc-50 rounded-2xl p-7 border border-zinc-200/80 hover:border-brand-primary/50 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-brand-dark transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center gap-2 text-xs font-bold text-brand-primary">
                  <span>Cam kết chất lượng Hòa Tràm</span>
                  <span className="text-brand-yellow font-extrabold">★</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

