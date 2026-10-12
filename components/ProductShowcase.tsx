"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Sparkles, 
  Droplet, 
  Package, 
  FlaskConical, 
  Check, 
  ChevronRight,
  Phone,
  Sprout
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProductCategory = "all" | "insecticide" | "fungicide" | "fertilizer" | "herbicide";

interface Product {
  id: string;
  name: string;
  type: ProductCategory;
  typeName: string;
  badge: string;
  badgeColor: string;
  activeIngredient: string;
  formulation: string;
  targets: string[];
  features: string[];
  packaging: string;
  dosage: string;
  featured?: boolean;
}

const productsData: Product[] = [
  {
    id: "tram-top-350sc",
    name: "TràmTop 350SC",
    type: "fungicide",
    typeName: "Thuốc Trừ Nấm Bệnh",
    badge: "Công Nghệ Nano Thấm Sâu",
    badgeColor: "bg-brand-dark text-white",
    activeIngredient: "Azoxystrobin 200g/l + Difenoconazole 150g/l",
    formulation: "Dạng huyền phù đậm đặc (SC)",
    targets: ["Thán thư sầu riêng & xoài", "Đạo ôn lúa, lem lép hạt", "Rỉ sắt cà phê", "Đốm lá rau màu"],
    features: ["Lưu dẫn 2 chiều toàn thân cây", "Hiệu lực kéo dài 14-21 ngày", "Không gây cháy bông, rụng trái"],
    dosage: "Pha 20 - 25ml cho bình 25 Lít (1 chai 500ml/phuy 400L)",
    packaging: "Chai 250ml & 500ml",
    featured: true,
  },
  {
    id: "biotram-pro-100sl",
    name: "BioTram Pro 100SL",
    type: "insecticide",
    typeName: "Thuốc Trừ Sâu - Rầy Sinh Học",
    badge: "Sinh Học - Cách Ly Ngắn",
    badgeColor: "bg-brand-primary text-white",
    activeIngredient: "Emamectin Benzoate 50g/l + Dịch chiết Thảo mộc",
    formulation: "Dung dịch tan trong nước (SL)",
    targets: ["Sâu cuốn lá, sâu đục thân", "Bọ trĩ, rầy phấn trắng", "Sâu tơ, sâu xanh da láng"],
    features: ["Hạ gục nhanh sau 15-30 phút", "Ức chế tính kháng thuốc của sâu", "An toàn theo chuẩn GlobalGAP"],
    dosage: "Pha 15 - 20ml cho bình 25 Lít nước",
    packaging: "Chai 100ml & 450ml",
    featured: true,
  },
  {
    id: "megatram-gold-750wg",
    name: "MegaTram Gold 750WG",
    type: "insecticide",
    typeName: "Đặc Trị Rầy Chích Hút",
    badge: "Khóa Kim Châm Tức Thì",
    badgeColor: "bg-brand-yellow text-zinc-950 font-bold",
    activeIngredient: "Pymetrozine 500g/kg + Nitenpyram 250g/kg",
    formulation: "Cốm hòa tan nhanh không bụi (WG)",
    targets: ["Rầy nâu hại lúa", "Rệp sáp hại cây ăn trái", "Rầy xanh hại chè & sầu riêng"],
    features: ["Làm tê liệt vòi hút rầy ngay", "Cắt đứt truyền virus gây hại", "Hiệu quả triệt để cả trứng & rầy non"],
    dosage: "Pha 1 gói 100g cho 1 phuy 200 Lít nước",
    packaging: "Gói 100g tiện dụng",
  },
  {
    id: "tramcide-500wp",
    name: "TramCide 500WP (Sát Khuẩn Vàng)",
    type: "fungicide",
    typeName: "Thuốc Trừ Vi Khuẩn & Nấm",
    badge: "Sát Trùng Cực Mạnh",
    badgeColor: "bg-brand-dark text-brand-yellow font-bold",
    activeIngredient: "Kasugamycin 2% + Đồng Oxychloride 48%",
    formulation: "Bột thấm nước mịn (WP)",
    targets: ["Xì mủ thân sầu riêng & mít", "Bạc lá vi khuẩn lúa", "Thối nhũn bắp cải, hành tỏi", "Ghẻ loét cam quýt"],
    features: ["Làm khô vết thương hở cực nhanh", "Tạo lớp màng bảo vệ biểu bì lá", "Không làm nóng bộ rễ"],
    dosage: "Quét trực tiếp vết xì mủ hoặc pha 500g cho 200L nước",
    packaging: "Gói 100g & 500g",
  },
  {
    id: "tramroot-extra",
    name: "TramRoot Extra Max",
    type: "fertilizer",
    typeName: "Phân Bón Kích Rễ Sinh Học",
    badge: "Bung Rễ Trắng - Hạ Phèn",
    badgeColor: "bg-brand-light text-brand-dark font-bold",
    activeIngredient: "Axit Humic 15% + Axit Fulvic + Vi lượng Chelate + Tinh Dầu Tràm",
    formulation: "Dung dịch hữu cơ khoáng cao cấp",
    targets: ["Vàng lá thối rễ, nghẹt rễ lúa", "Cây suy kiệt sau thu hoạch", "Đất chai cứng, nhiễm phèn mặn"],
    features: ["Kích thích rễ non đâm sâu", "Tinh dầu tràm xua đuổi tuyến trùng", "Tăng khả năng hấp thu phân NPK"],
    dosage: "Pha 1 Lít cho 400 - 500 Lít nước tưới gốc",
    packaging: "Chai 1 Lít & Can 5 Lít",
    featured: true,
  },
  {
    id: "trambio-canxi-bo",
    name: "TramBio Nano Canxi-Bo",
    type: "fertilizer",
    typeName: "Phân Bón Lá Dinh Dưỡng",
    badge: "Chống Rụng Bông - Chống Nứt Trái",
    badgeColor: "bg-brand-primary text-white",
    activeIngredient: "Canxi hữu cơ 12% + Bo nano 20,000ppm + Axit Amin thủy phân",
    formulation: "Dạng sữa phân tử nano hấp thu nhanh",
    targets: ["Rụng hoa và trái non trên sầu riêng, cam bưởi", "Nứt gai, thối đuôi trái", "Lem lép hạt lúa"],
    features: ["Hạt phấn khỏe, tăng tỷ lệ thụ phấn", "Dày cơm, mỏng vỏ, trái bóng đẹp", "Tăng độ ngọt tự nhiên (Brix)"],
    dosage: "Pha 1ml/1 Lít nước (Chai 500ml pha 400 - 500L)",
    packaging: "Chai 500ml",
    featured: true,
  },
  {
    id: "tramclean-480sl",
    name: "TramClean 480SL",
    type: "herbicide",
    typeName: "Thuốc Trừ Cỏ Chọn Lọc",
    badge: "Cỏ Chết Triệt Để - Cây An Toàn",
    badgeColor: "bg-zinc-800 text-white",
    activeIngredient: "Bispyribac-sodium 100g/l + Phụ gia an toàn",
    formulation: "Dung dịch hòa tan (SL)",
    targets: ["Cỏ lồng vực, cỏ gạo", "Cỏ đuôi phụng, cỏ chác lác", "Cỏ lá rộng trên ruộng lúa"],
    features: ["Diệt cỏ hậu nảy mầm từ 8-15 ngày", "Mầm lúa phát triển bình thường", "Tiết kiệm 40% công làm cỏ"],
    dosage: "Pha 30 - 40ml cho bình 25 Lít nước",
    packaging: "Chai 100ml & 250ml",
  },
];

const categories = [
  { id: "all", label: "Tất Cả Sản Phẩm" },
  { id: "insecticide", label: "Trừ Sâu - Rầy Sinh Học" },
  { id: "fungicide", label: "Trừ Nấm Bệnh - Vi Khuẩn" },
  { id: "fertilizer", label: "Phân Bón Lá & Kích Rễ" },
  { id: "herbicide", label: "Trừ Cỏ Chọn Lọc" },
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const filteredProducts = activeCategory === "all"
    ? productsData
    : productsData.filter((p) => p.type === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="products"
      ref={containerRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light/20 text-brand-dark text-xs sm:text-sm font-bold mb-3 border border-brand-light/50">
            <FlaskConical className="w-4 h-4 text-brand-primary" />
            <span>DANH MỤC PHÂN BÓN & THUỐC BVTV CHÍNH HÃNG HÒA TRÀM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Hoạt Chất Tiên Tiến,{" "}
            <span className="text-brand-dark">Hiệu Lực Kéo Dài</span> & Thân Thiện
          </h2>
          <p className="text-base text-zinc-600">
            Hòa Tràm cung ứng đồng bộ từ giải pháp phòng trừ dịch hại đến dinh dưỡng phục hồi rễ, lá, hoa và trái, 
            giúp nhà nông kiểm soát chi phí và tối đa hóa năng suất vụ mùa.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as ProductCategory)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-brand-dark text-white shadow-md shadow-brand-dark/25 scale-105"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-zinc-200 hover:border-brand-primary/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header & Badge */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-semibold bg-zinc-100 px-2.5 py-0.5 rounded-full">
                    {product.typeName}
                  </span>
                </div>

                <h3 className="text-xl font-black text-zinc-900 group-hover:text-brand-dark transition-colors mb-1">
                  {product.name}
                </h3>
                
                <div className="text-xs text-brand-dark font-medium bg-brand-light/15 p-2.5 rounded-xl border border-brand-light/40 mb-4">
                  <span className="text-zinc-500 font-normal">Thành phần:</span> {product.activeIngredient}
                </div>

                {/* Target Pests / Diseases */}
                <div className="mb-4">
                  <div className="text-xs font-bold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Công dụng đặc trị:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.targets.map((target, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-md border border-zinc-200/60 font-medium"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outstanding Features */}
                <div className="space-y-1.5 mb-2">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-600">
                      <Check className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-zinc-50/90 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500">
                  <Package className="w-4 h-4 text-brand-dark" />
                  <span>{product.packaging}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-dark hover:text-brand-primary transition-colors cursor-pointer"
                >
                  <span>Chi tiết & Tư vấn</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dealer Registration Promo Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-dark via-brand-primary to-brand-dark rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black flex items-center justify-center md:justify-start gap-2.5">
              <Sparkles className="w-6 h-6 text-brand-yellow shrink-0" />
              Chính Sách Hợp Tác Phân Phối Đại Lý Cấp 1 & Cấp 2
            </h4>
            <p className="text-sm text-white/85 max-w-xl">
              Nhận ngay chiết khấu hấp dẫn lên đến 35%, bảo hộ độc quyền huyện/xã, hỗ trợ bảng hiệu biển bạt và kỹ sư tổ chức hội thảo đầu bờ cho nông dân.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-7 py-3.5 bg-brand-yellow text-zinc-950 hover:bg-amber-400 font-extrabold rounded-xl text-sm transition-all shadow-md hover:scale-105"
          >
            Nhận Báo Giá Sỉ & Chiết Khấu
          </a>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-zinc-200">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-800 p-1.5 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer text-lg"
            >
              ✕
            </button>

            <div className="inline-block text-xs font-bold px-2.5 py-1 rounded bg-brand-light/30 text-brand-dark mb-3">
              {selectedProduct.typeName}
            </div>

            <h3 className="text-2xl font-black text-zinc-900 mb-2">
              {selectedProduct.name}
            </h3>

            <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200/80 text-xs space-y-1.5 mb-4">
              <div><strong>Thành phần hoạt chất:</strong> {selectedProduct.activeIngredient}</div>
              <div><strong>Dạng chế phẩm:</strong> {selectedProduct.formulation}</div>
              <div><strong>Liều lượng khuyến cáo:</strong> <span className="text-brand-dark font-bold">{selectedProduct.dosage}</span></div>
              <div><strong>Quy cách đóng gói:</strong> {selectedProduct.packaging}</div>
            </div>

            <div className="space-y-3 mb-6 text-sm text-zinc-700">
              <div>
                <strong className="text-zinc-900 block mb-1">Cơ chế & Ưu điểm vượt trội:</strong>
                <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-600">
                  {selectedProduct.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-zinc-900 block mb-1">Đối tượng áp dụng:</strong>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.targets.map((t, i) => (
                    <span key={i} className="text-[11px] bg-brand-light/25 text-brand-dark px-2.5 py-0.5 rounded font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="tel:0988123456"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-dark text-white text-xs font-bold hover:bg-brand-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-yellow" />
                <span>Gọi Kỹ Sư: 0988.123.456</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-3 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

