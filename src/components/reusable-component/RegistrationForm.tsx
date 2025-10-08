import React, { useState } from "react";

import bannerImage from "@/assets/pos/bannerposweb1920900.png"; // ảnh 1920x600
import GoPayLogo from "@/assets/pos/gopay-logo.png";

interface FormData {
  fullName: string;
  phone: string;
  taxCode: string;
  email: string;
  cityProvince: string;
  estimatedRevenue: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    taxCode: "",
    email: "",
    cityProvince: "",
    estimatedRevenue: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div
      className="w-full bg-cover bg-center py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `url(${bannerImage})`,
        height: "700px",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto h-full">
          {/* Left side - Form */}
          <div className="w-full lg:w-[45%] bg-white bg-opacity-90 rounded-2xl shadow-2xl p-4 sm:p-6 lg:py-3 space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 mb-2">
              Đổi mới cách thức quản lý và bán hàng của bạn cùng với{" "}
              <img
                src={GoPayLogo}
                className="w-30 object-contain inline"
                alt=""
              />
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Họ và tên: *"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại: *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
                <input
                  type="text"
                  name="taxCode"
                  placeholder="Mã số thuế: *"
                  value={formData.taxCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email: *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
                <select
                  name="cityProvince"
                  value={formData.cityProvince}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
                >
                  <option value="">Tỉnh/ Thành phố *</option>
                  <option value="hanoi">Hà Nội</option>
                  <option value="hcm">TP. Hồ Chí Minh</option>
                  <option value="danang">Đà Nẵng</option>
                  <option value="haiphong">Hải Phòng</option>
                  <option value="cantho">Cần Thơ</option>
                  {/* ... tiếp tục thêm các tỉnh khác nếu cần ... */}
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="estimatedRevenue"
                  placeholder="Ước lượng số hợp đồng phát sinh mỗi năm: *"
                  value={formData.estimatedRevenue}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="mb-2">
                  <em>
                    Nếu công ty mới thành lập và đang chờ cấp mã số thuế, bạn có
                    thể điền vào số "0" tại ô mã số thuế và ấn đăng ký như bình
                    thường.
                  </em>
                </p>
                <p>
                  Bằng cách nhấn vào nút <strong>Đăng ký</strong>, bạn đã đồng ý
                  với{" "}
                  <a href="" className="text-blue-600 hover:underline">
                    Chính sách quyền riêng tư
                  </a>{" "}
                  của GoPay.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ĐĂNG KÝ MIỄN PHÍ
              </button>
            </form>
          </div>

          {/* Right side - Optional image or remove */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            {/* Bạn có thể để trống hoặc thêm ảnh minh họa khác */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
