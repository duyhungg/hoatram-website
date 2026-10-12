"use client";

import Image from "next/image";
import { ShieldCheck, Sparkles, Sprout, Target, Award, ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Logo Visual & Brand Identity Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-br from-brand-light/15 via-white to-brand-primary/10 p-8 border border-brand-light/40 shadow-xl shadow-brand-dark/5 flex flex-col items-center text-center">
              
              {/* Logo Presentation */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-white p-3 shadow-md border border-zinc-200/80 mb-6 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Hòa Tràm - Phân Bón & Thuốc BVTV"
                  width={180}
                  height={180}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-dark text-white text-xs font-bold mb-2">
                <Sprout className="w-3.5 h-3.5 text-brand-yellow" />
                <span>NÔNG NGHIỆP XANH BỀN VỮNG</span>
              </div>

              <h3 className="text-xl font-black text-brand-dark mb-1">
                CÔNG TY NÔNG DƯỢC HÒA TRÀM
              </h3>
              
              <p className="text-xs text-brand-primary font-bold uppercase tracking-wider mb-3">
                Phân Bón & Thuốc Bảo Vệ Thực Vật
              </p>

              <p className="text-xs text-zinc-600 italic">
                "Đồng hành cùng nhà nông - Kiến tạo mùa vàng"
              </p>

              <div className="mt-6 pt-4 border-t border-zinc-200/80 w-full grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-white rounded-xl p-2 border border-zinc-200">
                  <div className="font-bold text-brand-dark text-sm">15+ Năm</div>
                  <div className="text-[11px] text-zinc-500">Phát triển</div>
                </div>
                <div className="bg-white rounded-xl p-2 border border-zinc-200">
                  <div className="font-bold text-brand-primary text-sm">63 Tỉnh</div>
                  <div className="text-[11px] text-zinc-500">Phân phối</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Core Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light/20 text-brand-dark text-xs sm:text-sm font-bold border border-brand-light/50">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span>CÂU CHUYỆN THƯƠNG HIỆU HÒA TRÀM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Khát Vọng Nâng Tầm Nông Sản Việt Với{" "}
              <span className="text-brand-dark">Giải Pháp Sinh Học Hiện Đại</span>
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Xuất phát từ thấu hiểu sâu sắc nỗi trăn trở của bà con nông dân trước tình trạng sâu bệnh 
              kháng thuốc, đất đai suy thoái và chi phí mùa vụ tăng cao, <strong>Hòa Tràm</strong> ra đời 
              với sứ mệnh mang đến dòng sản phẩm phân bón và thuốc BVTV đạt chuẩn quốc tế, an toàn cho con người và môi sinh.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-brand-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-yellow flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">Chất Lượng Thật</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  100% sản phẩm đúng nồng độ hoạt chất đăng ký, không pha trộn tạp chất gây nóng cây.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-brand-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">Kỹ Thuật Tận Vườn</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Bác sĩ cây trồng túc trực tư vấn, bắt bệnh và lên phác đồ điều trị chính xác cho từng vườn.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-brand-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow text-zinc-950 flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">Bảo Hộ Đại Lý</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Chính sách vùng độc quyền, chiết khấu hấp dẫn và đồng hành phát triển cùng đại lý đối tác.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors group"
              >
                <span>Tìm hiểu toàn bộ danh mục phân bón & thuốc BVTV Hòa Tràm</span>
                <ArrowRight className="w-4 h-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

