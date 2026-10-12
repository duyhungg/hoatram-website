"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles,
  Headphones
} from "lucide-react";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    type: "dealer",
    crop: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-dark/10 text-brand-dark text-xs sm:text-sm font-semibold mb-3 border border-brand-dark/20">
                <Headphones className="w-4 h-4 text-brand-primary" />
                <span>KẾT NỐI VỚI NÔNG DƯỢC HÒA TRÀM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Đồng Hành Cùng Nhà Nông, Hợp Tác Cùng{" "}
                <span className="text-brand-dark">Đại Lý</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-4 leading-relaxed">
                Đội ngũ kỹ sư nông học giàu kinh nghiệm của Hòa Tràm sẵn sàng tư vấn phác đồ điều trị 
                chuẩn xác cho từng loại dịch hại và cung cấp chính sách chiết khấu tốt nhất cho đại lý.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-brand-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-yellow flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500 uppercase">Tổng đài kỹ thuật & Đặt hàng</div>
                  <a href="tel:0988123456" className="text-lg font-bold text-zinc-900 hover:text-brand-dark transition-colors">
                    0988.123.456
                  </a>
                  <span className="block text-xs text-zinc-500">Hotline miễn cước: 1800 6868</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-brand-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500 uppercase">Trụ sở nhà máy sản xuất</div>
                  <p className="text-sm font-bold text-zinc-800">
                    Lô B3, KCN Đức Hòa, Tỉnh Long An
                  </p>
                  <span className="block text-xs text-zinc-500">Kho vệ tinh: Cần Thơ • Đắk Lắk • Hà Nội</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-brand-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow text-zinc-950 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500 uppercase">Hộp thư hợp tác đại lý</div>
                  <p className="text-sm font-bold text-zinc-800">
                    kinhdoanh@hoatram-agro.vn
                  </p>
                  <span className="block text-xs text-zinc-500">Phản hồi báo giá trong 2 giờ làm việc</span>
                </div>
              </div>
            </div>

            {/* Quality badge card */}
            <div className="p-4 rounded-2xl bg-brand-light/20 border border-brand-light/50 flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-brand-dark shrink-0" />
              <div className="text-xs text-brand-dark leading-snug">
                <strong>Cam kết chính hãng 100%:</strong> Có tem chống giả QR code quét xác thực nguồn gốc xuất xứ trên từng chai thuốc và gói thuốc.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 shadow-xl p-6 sm:p-10 relative">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                  Đăng Ký Thành Công!
                </h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto mb-6">
                  Cảm ơn bạn đã liên hệ với Hoa Tràm. Kỹ sư phụ trách khu vực của bạn sẽ gọi điện lại qua số{" "}
                  <strong>{formData.phone}</strong> trong vòng 15 phút để tư vấn chi tiết.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-brand-dark text-white text-xs font-bold hover:bg-brand-primary transition-colors cursor-pointer"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-zinc-100 pb-4 mb-2">
                  <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-yellow" />
                    Đăng Ký Tư Vấn & Nhận Báo Giá
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Vui lòng điền thông tin bên dưới, nhân viên kỹ thuật sẽ liên hệ hỗ trợ bạn sớm nhất.
                  </p>
                </div>

                {/* Form Type Selection */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-2">
                    Mục đích liên hệ
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: "dealer", label: "Mở Đại Lý Mới" },
                      { id: "farmer", label: "Mua Thuốc Cho Vườn" },
                      { id: "urgent", label: "Cứu Vườn Sâu Bệnh" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, type: item.id })}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                          formData.type === item.id
                            ? "bg-brand-dark text-white border-brand-dark shadow-sm"
                            : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn An"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">
                      Số Điện Thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Location & Crop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">
                      Tỉnh / Thành phố
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Tiền Giang, Đắk Lắk..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">
                      Cây Trồng Cần Xử Lý
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Sầu riêng, Lúa, Cà phê..."
                      value={formData.crop}
                      onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">
                    Ghi Chú Triệu Chứng / Yêu Cầu Chi Tiết
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mô tả triệu chứng sâu bệnh trên vườn hoặc quy mô muốn mở đại lý..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-zinc-950 bg-gradient-to-r from-brand-yellow to-amber-400 hover:from-amber-400 hover:to-brand-yellow shadow-lg shadow-brand-yellow/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-zinc-950" />
                  <span>GỬI THÔNG TIN CHO KỸ SƯ HÒA TRÀM</span>
                </button>

                <p className="text-[11px] text-zinc-400 text-center">
                  Hòa Tràm cam kết bảo mật 100% số điện thoại và thông tin vườn của quý bà con.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

