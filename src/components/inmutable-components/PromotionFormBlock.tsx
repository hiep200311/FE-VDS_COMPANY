import React, { useState } from 'react';
import { motion } from "framer-motion";

export interface PromotionItem {
    icon?: React.ReactNode;
    title: string;
    subtitle: string;
}

interface FormData {
    compName: string;
    contactName: string;
    phone: string;
    employeeCount: string;
    email: string;
}

interface Props {
    backgroundImage: string;
    title: string;
    items: PromotionItem[];
    titleColor?: string;

    // Form title customization
    formTitle?: string;
    formTitleColor?: string; // HEX or class
    formTitleSize?: string;
    formTitleAlign?: 'left' | 'center' | 'right';

    // Button customization (optional)
    buttonText?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
}

// ✅ Check if color is HEX format
const isHexColor = (value: string | undefined): boolean =>
    !!value && /^#([0-9A-F]{3}){1,2}$/i.test(value);

const PromotionFormBlock: React.FC<Props> = ({
    backgroundImage,
    title,
    items,
    titleColor = "text-yellow-400",
    formTitle = "Nhận tư vấn dịch vụ Truy xuất nguồn gốc VDSVerify",
    formTitleColor = "text-blue-700",
    formTitleSize = "text-xl",
    buttonText = "Liên hệ ngay",
}) => {
    const [formData, setFormData] = useState<FormData>({
        compName: '',
        contactName: '',
        phone: '',
        employeeCount: '',
        email: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Send to API here
    };

    return (
        <div
            className="w-full bg-cover bg-center relative "
            style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "600px"}}
        >
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 justify-items-center px-4">
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center text-center md:text-left z-10 py-10 md:py-0 h-full"
                >
                    <h2 className={`text-2xl md:text-3xl font-bold ${titleColor}`}>{title}</h2>
                    <ul className="space-y-5 mt-6">
                        {items.map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                className="flex items-center gap-4 justify-center md:justify-start"
                            >
                                {item.icon && <div className="w-10 h-10 shrink-0">{item.icon}</div>}
                                <div className="text-white text-left">
                                    <p className="font-bold">{item.title}</p>
                                    <p>{item.subtitle}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* RIGHT FORM */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-lg md:m-10 p-8 space-y-4 w-full max-w-lg
                        rounded-t-xl md:rounded-t-xl md:rounded-b-xl self-end md:mr-auto z-10 h-[550px]"
                >
                    <h3
                        className={`font-bold ${formTitleSize} text-center`}
                        style={isHexColor(formTitleColor) ? { color: formTitleColor } : undefined}
                    >
                        {formTitle}
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="compName"
                            placeholder="Tên công ty / Doanh nghiệp: *"
                            value={formData.compName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="text"
                            name="contactName"
                            placeholder="Tên người liên hệ: *"
                            value={formData.contactName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Số điện thoại: *"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <input
                                type="text"
                                name="employeeCount"
                                placeholder="Số lượng nhân sự: *"
                                value={formData.employeeCount}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email: *"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <div className="text-sm text-gray-600 leading-relaxed">
                            <p className="mb-2">
                                <p>Đội ngũ chăm sóc khách hàng của chúng tôi sẽ nhanh chóng liên hệ lại với Quý khách trong vòng <strong>24 giờ</strong> để đảm bảo hỗ trợ kịp thời và đầy đủ.
</p>
                            </p>
                            <p>
                                Bằng cách nhấn vào nút <strong>Đăng ký</strong>, bạn đã đồng ý với{' '}
                                <a href="#" className="text-blue-600 hover:underline">Chính sách quyền riêng tư</a> của VDS.
                            </p>
                        </div>

                        <button
                            type="submit"
                            className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 bg-[#0E7490] hover:bg-[#34d399] text-white shadow-lg hover:shadow-xl`}
                        >
                            {buttonText}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default PromotionFormBlock;
