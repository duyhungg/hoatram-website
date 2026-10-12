"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Wheat, 
  Apple, 
  Coffee, 
  Flower2, 
  CheckCircle, 
  Calendar,
  AlertTriangle,
  Sprout
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
  {
    id: "rice",
    name: "Lúa Nước Chất Lượng Cao",
    icon: Wheat,
    tagline: "Bảo vệ đòng trổ, hạt vàng sáng bóng, không lem lép",
    challenges: ["Đạo ôn lá & cổ bông", "Rầy nâu mang virus lùn sọc đen", "Sâu cuốn lá nhỏ, sâu đục thân", "Cỏ dại cạnh tranh dinh dưỡng"],
    protocol: [
      {
        stage: "7 - 12 ngày sau sạ (Đầu vụ)",
        action: "Xử lý cỏ & Kích hoạt mầm rễ",
        products: "TramClean 480SL + TramRoot Extra",
        note: "Diệt sạch cỏ lồng vực, giúp lúa đẻ nhánh sớm, cứng cây.",
      },
      {
        stage: "40 - 45 ngày (Làm đòng)",
        action: "Ngừa đạo ôn lá & Quản lý rầy nâu",
        products: "TràmTop 350SC + MegaTram Gold 750WG",
        note: "Bảo vệ lá đòng xanh bền, triệt tiêu ổ rầy trước khi trổ.",
      },
      {
        stage: "Trổ lẹt xẹt & Trổ đều (Thu hoạch)",
        action: "Chống lem lép hạt, dưỡng hạt sáng chắc",
        products: "TràmTop 350SC + Dinh Dưỡng Vi Lượng Tràm",
        note: "Hạt lúa no tròn tới cậy, giảm tỷ lệ gãy nát khi xay xát.",
      },
    ],
  },
  {
    id: "fruit",
    name: "Cây Ăn Trái (Sầu Riêng, Cam, Bưởi)",
    icon: Apple,
    tagline: "Trị dứt điểm xì mủ, chống rụng hoa non, trái tròn đều",
    challenges: ["Nứt thân xì mủ do nấm Phytophthora", "Thán thư rụng bông và trái non", "Rầy phấn trắng & rệp sáp gai", "Vàng lá thối rễ sau mưa dầm"],
    protocol: [
      {
        stage: "Phục hồi sau thu hoạch & Tạo cơi đọt",
        action: "Tưới gốc ngừa nấm & Kích rễ mới",
        products: "TramCide 500WP quét thân + TramRoot Extra tưới rễ",
        note: "Tẩy rửa rong rêu, ngừa xì mủ và bung cơi đọt mập khỏe.",
      },
      {
        stage: "Giai đoạn nhú mắt cua & Nuôi bông",
        action: "Phòng ngừa bọ trĩ, thán thư khô bông",
        products: "BioTram Pro 100SL + TràmTop 350SC",
        note: "Phun ướt đều chùm hoa, hạt phấn khỏe, tăng đậu trái.",
      },
      {
        stage: "Nuôi trái & Chống nứt gai",
        action: "Diệt sâu đục trái & nấm thối đít trái",
        products: "Bộ đôi TràmTop 350SC + Vi lượng Bo Canxi",
        note: "Múi vàng ngọt, cơm dày hạt lép, vỏ xanh bóng đẹp.",
      },
    ],
  },
  {
    id: "industrial",
    name: "Cây Công Nghiệp (Cà Phê, Tiêu)",
    icon: Coffee,
    tagline: "Phòng trừ nấm hồng, tuyến trùng rễ, nhân cà phê chắc hạt",
    challenges: ["Rỉ sắt và nấm hồng mùa mưa", "Tuyến trùng hại rễ gây vàng lá chết chậm", "Rệp sáp chùm quả", "Rụng quả non hàng loạt"],
    protocol: [
      {
        stage: "Đầu mùa mưa",
        action: "Xử lý tuyến trùng & Cải tạo rễ đất",
        products: "TramRoot Extra + Tinh dầu Tràm sát khuẩn đất",
        note: "Ngăn chặn tuyến trùng đục rễ và nấm Fusarium xâm nhập.",
      },
      {
        stage: "Giữa mùa mưa (Cao điểm nấm bệnh)",
        action: "Phun chặn đứng rỉ sắt & nấm hồng cành",
        products: "TràmTop 350SC luân phiên TramCide 500WP",
        note: "Bảo vệ tán lá cà phê, giữ bộ cành dự trữ cho vụ sau.",
      },
      {
        stage: "Giai đoạn vào nhân & Nuôi quả",
        action: "Chống rệp sáp & Tăng trọng lượng nhân",
        products: "MegaTram Gold 750WG",
        note: "Hạt cà phê chắc nịch, tỷ lệ nhân loại 1 đạt trên 92%.",
      },
    ],
  },
  {
    id: "vegetable",
    name: "Rau Màu & Hoa Kiểng Công Nghệ Cao",
    icon: Flower2,
    tagline: "Tiêu chuẩn VietGAP, thời gian cách ly ngắn, an toàn tuyệt đối",
    challenges: ["Sâu tơ, sâu xanh kháng thuốc", "Bọ trĩ, nhện đỏ hại lá", "Sương mai, phấn trắng, lở cổ rễ", "Dư lượng hóa chất quá ngưỡng"],
    protocol: [
      {
        stage: "Ươm cây con & Ra luống",
        action: "Nhúng rễ ngừa lở cổ rễ",
        products: "TramRoot Extra liều nhẹ",
        note: "Cây nhanh bắt rễ, không bị nghẹt mầm.",
      },
      {
        stage: "Phát triển sinh khối lá",
        action: "Trừ sâu tơ, sâu khoang sinh học",
        products: "BioTram Pro 100SL (Emamectin sinh học)",
        note: "Thời gian cách ly chỉ 3-5 ngày, cực kỳ an toàn.",
      },
      {
        stage: "Gần thu hoạch",
        action: "Quản lý sương mai không để vết bẩn lá",
        products: "TramCide liều loãng",
        note: "Rau mướt đẹp, không để lại vết thuốc trên rau củ quả.",
      },
    ],
  },
];

export default function CropSolutionsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeSolution = solutions[activeTab];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      id="solutions"
      ref={containerRef}
      className="py-24 bg-zinc-50 relative overflow-hidden border-t border-zinc-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 text-brand-dark text-xs sm:text-sm font-semibold mb-3 border border-brand-primary/20">
            <Sprout className="w-4 h-4 text-brand-primary" />
            <span>PHÁC ĐỒ ĐIỀU TRỊ CHUYÊN BIỆT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Giải Pháp Đúng Bệnh -{" "}
            <span className="text-brand-dark">Đúng Thời Điểm</span> Cho Từng Loại Cây
          </h2>
          <p className="text-base text-zinc-600">
            Đội ngũ kỹ sư Hòa Tràm xây dựng quy trình dinh dưỡng và bảo vệ thực vật khép kín, 
            tối ưu số lần phun thuốc, hạ giá thành đầu tư mà vẫn đảm bảo năng suất vượt trội.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-brand-dark text-white shadow-xl shadow-brand-dark/20 scale-[1.02] border-2 border-brand-primary"
                    : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? "bg-brand-primary text-white" : "bg-brand-light/20 text-brand-dark"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold line-clamp-1">{item.name}</h3>
                  <p className={`text-[11px] line-clamp-1 ${isActive ? "text-brand-light" : "text-zinc-500"}`}>
                    Xem phác đồ chuẩn
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Solution Details Card */}
        <div
          ref={contentRef}
          className="bg-white rounded-3xl border border-zinc-200/90 shadow-xl p-6 sm:p-10"
        >
          {/* Card Top Banner */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-8 border-b border-zinc-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark bg-brand-light/25 px-2.5 py-1 rounded-md mb-2">
                <span>Phác đồ khuyến nông Hòa Tràm</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                {activeSolution.name}
              </h3>
              <p className="text-sm font-medium text-brand-primary mt-1">
                {activeSolution.tagline}
              </p>
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 bg-brand-yellow text-zinc-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-400 transition-colors shadow-sm shrink-0"
            >
              Yêu Cầu Kỹ Sư Tư Vấn Vườn Này
            </a>
          </div>

          {/* Key Challenges Warning */}
          <div className="my-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Các đối tượng sâu bệnh hại phổ biến & nguy hiểm nhất:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {activeSolution.challenges.map((c, i) => (
                <div key={i} className="text-xs text-amber-950 bg-white/80 p-2 rounded-lg border border-amber-200/40 font-medium">
                  • {c}
                </div>
              ))}
            </div>
          </div>

          {/* Detailed 3-Step Protocol */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-primary" />
              <span>Quy trình can thiệp 3 giai đoạn then chốt:</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeSolution.protocol.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200/80 flex flex-col justify-between hover:border-brand-primary/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-dark text-white">
                        Giai đoạn 0{idx + 1}
                      </span>
                      <span className="text-[11px] text-zinc-500 font-semibold">{p.stage}</span>
                    </div>

                    <h5 className="text-sm font-bold text-zinc-900 mb-2">
                      {p.action}
                    </h5>

                    <div className="text-xs font-bold text-brand-dark bg-brand-light/30 p-2 rounded-lg mb-3">
                      Thuốc chỉ định: {p.products}
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {p.note}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] text-brand-primary font-bold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Đảm bảo hiệu lực & an toàn</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

