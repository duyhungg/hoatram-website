import Image from "next/image";
import { Sprout, Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Company Brand Col with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-md border border-zinc-200 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Hòa Tràm Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-tight">
                  HÒA TRÀM AGRO
                </span>
                <span className="text-[11px] font-bold text-brand-yellow uppercase tracking-wider">
                  Phân Bón & Thuốc BVTV
                </span>
              </div>
            </div>

            <p className="text-xs text-brand-light italic font-medium">
              "Đồng hành cùng nhà nông - Kiến tạo mùa vàng"
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Công Ty Cổ Phần Nông Dược Hòa Tràm chuyên cung ứng giải pháp phân bón sinh học 
              và thuốc bảo vệ thực vật thế hệ mới, đồng hành cùng vụ mùa bội thu của nhà nông Việt Nam.
            </p>

            <div className="pt-2 flex flex-col gap-1 text-xs text-zinc-400">
              <div><strong>Mã số doanh nghiệp:</strong> 0317892345 do Sở KH&ĐT cấp</div>
              <div><strong>Giấy phép lưu hành:</strong> Cục Bảo Vệ Thực Vật - Bộ NN&PTNT</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-brand-yellow">
              Danh Mục Sản Phẩm
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#products" className="hover:text-white transition-colors">Thuốc Trừ Sâu - Rầy Sinh Học</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Thuốc Trừ Nấm Bệnh - Vi Khuẩn</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Phân Bón Kích Rễ Sinh Học</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Phân Bón Lá Nano Canxi-Bo</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Thuốc Trừ Cỏ Chọn Lọc</a></li>
            </ul>
          </div>

          {/* Solutions by crops */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-brand-light">
              Giải Pháp Cây Trồng
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#solutions" className="hover:text-white transition-colors">Cây Lúa Nước (ĐBSCL & ĐBSH)</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Sầu Riêng, Cam, Bưởi, Xoài</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Cà Phê, Hồ Tiêu, Cao Su</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Rau Màu & Hoa Kiểng VietGAP</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Phác Đồ 3 Giai Đoạn Vụ Mùa</a></li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-white">
              Hỗ Trợ & Chính Sách
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#contact" className="hover:text-white transition-colors">Chính Sách Chiết Khấu Đại Lý</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Cam Kết Độc Quyền Khu Vực</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Quy Trình Thu Gom Bao Bì BVTV</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kỹ Sư Thăm Vườn Miễn Phí</a></li>
              <li><a href="tel:0988123456" className="text-brand-yellow font-bold hover:underline">Hotline: 0988.123.456</a></li>
            </ul>
          </div>

        </div>

        {/* Environmental Message Banner */}
        <div className="my-8 p-4 rounded-2xl bg-brand-dark/40 border border-brand-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-yellow shrink-0" />
            <span>
              <strong>Chung tay vì môi trường nông thôn xanh:</strong> Thu gom và tiêu hủy bao bì, chai lọ thuốc BVTV đúng nơi quy định sau khi phun xịt.
            </span>
          </div>
          <span className="text-brand-light font-bold shrink-0">#NôngNghiệpXanhHòaTràm</span>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 pt-4">
          <p>© {new Date().getFullYear()} Công Ty Cổ Phần Nông Dược Hòa Tràm. Tất cả quyền được bảo lưu.</p>
          <p className="flex items-center gap-1 text-zinc-400">
            Đồng hành cùng nhà nông - Kiến tạo mùa vàng bội thu
          </p>
        </div>

      </div>
    </footer>
  );
}
