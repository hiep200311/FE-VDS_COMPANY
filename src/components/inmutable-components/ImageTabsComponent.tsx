import React, { useState } from 'react';
import GoPayLogo from "@/assets/pos/GoPayLogo.png";

interface TabItem {
    id: string;
    title: string;
    description: string;
    image: string;
    icon?: React.ReactNode;
    color?: string;
}

interface ImageTabsComponentProps {
    title?: string;
    subtitle?: string;
    tabs: TabItem[];
    buttonText?: string;
    buttonIcon?: React.ReactNode;
    onButtonClick?: () => void;

    // Styling props
    backgroundColor?: string;
    imageClassName?: string;
    titleColor?: string;
    titleSize?: string;
    subtitleColor?: string;
    subtitleSize?: string;
    tabActiveColor?: string;
    tabInactiveColor?: string;
    buttonColor?: string;
    buttonBgColor?: string;
    className?: string;

    // Animation props
    animationDuration?: string;
}

const ImageTabsComponent: React.FC<ImageTabsComponentProps> = ({
    title = "",
    subtitle,
    tabs,
    buttonText = "Dùng thử miễn phí",
    onButtonClick,

    // Styling
    titleColor = "text-title-pos",
    titleSize = "text-3xl",
    subtitleColor = "text-title-pos",
    subtitleSize = "text-3xl",
    className = "",

}) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

    const activeTabData = tabs.find(tab => tab.id === activeTab);

    const handleTabChange = (tabId: string) => {
        if (tabId !== activeTab) {
            setActiveTab(tabId);

            // Reset loading state after animation
            setTimeout(() => {

            }, 300);
        }
    };

    // Content data tương ứng với từng tab
    const contentData = {
        "check-price": {
            title: "Tính tiền tự động và chính xác",
            features: [
                "Chỉ cần một lần quét mã vạch, toàn bộ thông tin sản phẩm hiện rõ ràng trên màn hình không mất công tìm kiếm, tư vấn nhanh gọn, chốt đơn trong tích tắc",
                " Phần mềm tự động tính tiền chính xác, không cần bấm máy, không lo sai sót tiết kiệm thời gian, phục vụ nhiều khách hơn",
                "Tối ưu hóa quy trình thanh toán, đặc biệt hiệu quả trong giờ cao điểm hoặc dịp khuyến mãi"
            ]
        },
        "cashless-payment": {
            title: "Thanh toán không tiền mặt",
            features: [
                "Hỗ trợ nhiều hình thức thanh toán: Tiền mặt, thẻ ATM, VISA/Master Card hay ví điện tử Momo, VNPay,..",
                "Mỗi đơn hàng sẽ tạo mã QR thanh toán riêng biệt chứa đầy đủ thông tin, bảo mật cao, hạn chế nhầm lẫn, chuyển khoản nhanh chóng",
                "Tích hợp ngân hàng điện tử: chuyển tiền trực tuyến, tra cứu số dư, kiểm tra lịch sử giao dịch và tự động hạch toán  chỉ trong một nền tảng"
            ]
        },
        "professional-invoice": {
            title: "In hóa đơn tự động",
            features: [
                "Cho phép tùy chỉnh mẫu hóa đơn: chèn logo, thông tin liên hệ, chính sách đổi trả hoặc nội dung khuyến mãi  tăng cường nhận diện thương hiệu ngay tại điểm bán",
                "Hóa đơn được in ngay sau khi thanh toán, đảm bảo đầy đủ thông tin theo quy định, thể hiện tính minh bạch trong giao dịch",
                "Dễ dàng tra cứu và xử lý các tình huống đổi trả, khiếu nại sau bán hàng – nâng cao trải nghiệm khách hàng và quản lý hậu mãi hiệu quả"
            ]
        }
    };

    const currentContent = contentData[activeTab as keyof typeof contentData] || contentData["check-price"];

    return (
        <div className={`${className}`}>
            {/* Main Title */}
            {title && (
                <div className="text-center mb-8">
                    <h2 className={`${titleSize} font-bold ${titleColor} mb-2`}>
                        <img src={GoPayLogo} className="w-30 object-contain inline" alt=""/>
                    </h2>
                    {subtitle && (
                        <p className={`${subtitleSize} font-bold ${subtitleColor}`}>
                            {subtitle}
                        </p>
                    )}
                </div>
            )}

            {/* Mobile Layout - Ảnh đầu tiên */}
            <div className="lg:hidden">
                {/* Image Section - Mobile Only */}
                <div className="bg-[#121b30] p-4 sm:p-6 text-white flex flex-col justify-center rounded-xl relative min-h-[200px] sm:min-h-[300px] mb-6">
                    {activeTabData && (
                        <div className="w-full h-full flex items-center justify-center">
                            <img
                                src={activeTabData.image}
                                alt={activeTabData.title}
                                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                            />
                        </div>
                    )}
                </div>

                {/* Tab Navigation - Mobile */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`
                                flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 border border-gray-500
                                ${activeTab === tab.id
                                    ? 'bg-green-100 text-green-700 border-2 border-green-200 shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }
                            `}
                        >
                            {tab.icon}
                            <span className="whitespace-nowrap">{tab.title}</span>
                        </button>
                    ))}
                </div>

                {/* Content Section - Mobile */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 sm:p-6 text-white flex flex-col justify-center rounded-xl">
                    {/* Dynamic Title based on active tab */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">
                        {currentContent.title}
                    </h3>

                    {/* Feature Grid - Mobile */}
                    <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        {currentContent.features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-slate-700 bg-opacity-60 border border-slate-600 rounded-xl p-3 sm:p-4 flex flex-col"
                            >
                                {/* Icon ở trên */}
                                <div className="flex justify-center mb-2 sm:mb-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Text content */}
                                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed text-justify">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons - Mobile */}
                    <div className="flex flex-col gap-3 justify-center">
                        <button
                            onClick={onButtonClick}
                            className="px-4 sm:px-6 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                        >
                            <span>{buttonText}</span>
                        </button>
                        <button
                            onClick={onButtonClick}
                            className="px-4 sm:px-6 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                        >
                            <span>Khám phá ngay</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Layout gốc */}
            <div className="hidden lg:block relative rounded-3xl overflow-hidden h-130">
                <div className="flex flex-col absolute w-full h-full">
                    <div className="w-full flex-2/12 bg-[#00000000] z-0"></div>
                    <div className="rounded-3xl flex-9/12 h-[80%] w-full bg-[#1a263a] z-0"></div>
                </div>

                {/* Container cho Desktop */}
                <div className="w-full flex flex-row gap-0 h-full relative ">
                    {/* Tab Navigation Pills - Desktop */}
                    {/* Left Side - Content Panel */}
                    <div className="flex-1 lg:flex-7/12 p-8 text-white flex flex-col justify-center rounded-l-3xl h-full">
                        {/* Dynamic Title based on active tab */}
                        <div className='w-auto flex gap-2 mb-4 justify-center items-center'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`
                                flex items-center gap-1 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 border border-gray-500
                                ${activeTab === tab.id
                                            ? 'bg-green-100 text-green-700 border-2 border-green-200 shadow-md'
                                            : 'bg-gray-100 text-gray-600 border-2 hover:bg-gray-200'
                                        }
                            `}
                                >
                                    {tab.icon}
                                    <span className="whitespace-nowrap">{tab.title}</span>
                                </button>
                            ))}
                        </div>
                        <div className="h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-white my-8 text-center">
                                {currentContent.title}
                            </h3>

                            {/* Feature Grid - Desktop */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {currentContent.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-slate-700 bg-opacity-60 border border-slate-600 rounded-xl p-4 h-55 flex flex-col "
                                    >
                                        {/* Icon ở trên */}
                                        <div className="flex justify-center mb-3">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Text content */}
                                        <p className="text-gray-200 text-sm leading-relaxed text-center flex-1 flex items-start justify-center">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons - Desktop */}
                            <div className="flex flex-row gap-3 justify-center">
                                <button
                                    onClick={onButtonClick}
                                    className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-base"
                                >
                                    <span>{buttonText}</span>
                                </button>
                                <button
                                    onClick={onButtonClick}
                                    className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-base"
                                >
                                    <span>Khám phá ngay</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image Panel */}
                    <div className=" flex-1 lg:flex-5/12 text-white flex flex-col justify-center rounded-r-3xl relative  top-0 right-0 h-full">
                        {activeTabData && (
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={activeTabData.image}
                                    alt={activeTabData.title}
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageTabsComponent;

