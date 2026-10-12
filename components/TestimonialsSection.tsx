"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, MapPin, UserCheck, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reviews = [
  {
    name: "Anh Trần Văn Hùng",
    role: "Chủ Vườn Sầu Riêng 6ha",
    location: "Cai Lậy, Tiền Giang",
    avatarInitial: "H",
    rating: 5,
    title: "Vết xì mủ khô ráo hoàn toàn sau 2 lần quét TramCide!",
    feedback:
      "Vườn sầu riêng Ri6 và Monthong năm trước bị xì mủ thân và thán thư rụng đọt non nghiêm trọng. Nhờ kỹ sư Hoa Tràm xuống chỉ dẫn dùng TramCide 500WP kết hợp TràmTop 350SC, chỉ sau 2 lần xịt vết bệnh khô hẳn. Vụ vừa rồi vườn nhà tôi trúng hơn 85 tấn sầu riêng loại 1 xuất khẩu.",
    tag: "Đặc trị xì mủ sầu riêng",
  },
  {
    name: "Chú Nguyễn Văn Thơ",
    role: "Giám Đốc HTX Lúa Tân Phú",
    location: "Thoại Sơn, An Giang",
    avatarInitial: "T",
    rating: 5,
    title: "Cắt đứt dịch rầy nâu, lúa trổ đều sáng hạt!",
    feedback:
      "HTX canh tác hơn 350ha lúa chất lượng cao. Đợt dịch rầy nâu bùng phát, dùng MegaTram Gold 750WG rầy rớt đáy sau 30 phút, không bị tái phát. Bà con giảm được 2 cơi phun xịt, vừa tiết kiệm chi phí vừa bảo vệ sức khỏe người làm ruộng.",
    tag: "Hiệu quả 350ha lúa sạch bệnh",
  },
  {
    name: "Chị Lê Thị Mai",
    role: "Chủ Đại Lý VTNN Mai Phát",
    location: "Buôn Hồ, Đắk Lắk",
    avatarInitial: "M",
    rating: 5,
    title: "Khách nông dân dùng là quay lại khen, chính sách đại lý rất tốt!",
    feedback:
      "Làm đại lý hơn 12 năm, tôi đánh giá cao uy tín của công ty Hoa Tràm. Thuốc đưa cho bà con xịt hiệu quả thật nên đại lý giữ được khách quen. Chính sách chiết khấu rõ ràng, bảo hộ vùng không lo bị phá giá, kỹ sư hỗ trợ hội thảo đầu bờ rất nhiệt tình.",
    tag: "Đại lý phân phối cấp 1",
  },
  {
    name: "Bác Hoàng Văn Bình",
    role: "Hợp Tác Xã Rau Sạch",
    location: "Đơn Dương, Lâm Đồng",
    avatarInitial: "B",
    rating: 5,
    title: "Dòng thuốc trừ sâu sinh học BioTram đạt chuẩn xuất khẩu!",
    feedback:
      "Trồng ớt ngọt và xà lách sạch sợ nhất sâu tơ, bọ trĩ kháng thuốc. Thuốc sinh học BioTram Pro 100SL diệt sâu nhạy, thời gian cách ly chỉ 3 ngày. Kiểm nghiệm mẫu rau gửi vào chuỗi siêu thị đạt chuẩn VietGAP 100%, an tâm tuyệt đối.",
    tag: "Chuẩn an toàn VietGAP",
  },
];

export default function TestimonialsSection() {
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
          y: 40,
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
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-brand-light/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light/20 text-brand-dark text-xs sm:text-sm font-semibold mb-3 border border-brand-light/40">
            <UserCheck className="w-4 h-4 text-brand-primary" />
            <span>ĐÁNH GIÁ TỪ THỰC TẾ ĐỒNG RUỘNG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Nhà Nông Và Đại Lý Nói Gì Về{" "}
            <span className="text-brand-dark">Hòa Tràm?</span>
          </h2>
          <p className="text-base text-zinc-600">
            Thước đo chất lượng chính xác nhất chính là niềm vui của bà con khi mùa màng trúng giá, 
            trúng mùa và sự tin tưởng bền vững của hệ thống đại lý đối tác.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-zinc-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Watermark */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-light/25 pointer-events-none group-hover:scale-110 transition-transform" />

              <div className="relative z-10">
                {/* Rating stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-brand-yellow fill-brand-yellow"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-brand-dark bg-brand-light/20 px-2.5 py-0.5 rounded-full border border-brand-light/40">
                    {rev.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-3 leading-snug">
                  "{rev.title}"
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed italic mb-6">
                  {rev.feedback}
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-zinc-100 flex items-center gap-3.5 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-dark to-brand-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  {rev.avatarInitial}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-zinc-900">{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-brand-primary" />
                  </div>
                  <div className="text-xs text-zinc-500 font-medium">{rev.role}</div>
                  <div className="text-[11px] text-brand-primary flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{rev.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

