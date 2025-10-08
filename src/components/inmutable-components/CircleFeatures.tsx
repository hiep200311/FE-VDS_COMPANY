import React from "react";

export type FeatureItem = {
    content: string;
    color?: string;
};

type CircleFeaturesProps = {
    centerLogo?: React.ReactNode;
    features: FeatureItem[];
    radius?: number;
    bubbleOffset?: number;

    // Section Title
    sectionTitle?: string;
    sectionTitleColor?: string;
    sectionTitleSize?: string;
    sectionTitleWeight?: string;
};

// Utility check hex
const isHexColor = (value?: string): boolean => {
    return typeof value === "string" && value.startsWith("#");
};

const CircleFeatures: React.FC<CircleFeaturesProps> = ({
    centerLogo = (
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center font-bold text-2xl">
            VDS
        </div>
    ),
    features,
    radius = 180,
    bubbleOffset = 100,
    sectionTitle,
    sectionTitleColor = "text-black",
    sectionTitleSize = "text-2xl",
    sectionTitleWeight = "font-bold"
}) => {
    const total = features.length;
    const containerSize = 550;
    const center = containerSize / 2;

    const mockContent = [
        "Triển khai tận nơi – Đào tạo tận tay – Vận hành tận gốc là cam kết của VDS trong quá trình triển khai VDSVerify. Chúng tôi không chỉ bàn giao phần mềm, mà trực tiếp đến hiện trường để khảo sát, thiết lập quy trình phù hợp với thực tế. Đội ngũ kỹ thuật hướng dẫn chi tiết từng bước sử dụng cho người dân, hợp tác xã và doanh nghiệp đảm bảo ai cũng có thể vận hành được. Sau khi triển khai, VDS tiếp tục đồng hành để hệ thống vận hành hiệu quả, tạo ra giá trị thực chất chứ không dừng ở hình thức.",
        "Giải pháp được thiết kế theo đặc thù của từng ngành hàng như nông sản tươi, thủy sản, thực phẩm chế biến... với cấu trúc modul linh hoạt, dễ dàng điều chỉnh theo quy trình sản xuất thực tế tại từng địa phương. Nhờ khả năng tùy biến này, hệ thống có thể triển khai nhanh chóng mà không làm gián đoạn hoạt động của hợp tác xã hay doanh nghiệp. Giao diện thân thiện, dễ thao tác giúp người dùng ở mọi cấp độ kể cả không có nền tảng công nghệ – vẫn có thể tiếp cận và vận hành hiệu quả.",
        "Hệ thống được xây dựng trên cơ sở tuân thủ chặt chẽ các quy định pháp luật hiện hành tại Việt Nam, đặc biệt là Nghị định 13/2022/NĐ-CP về quản lý và truy xuất nguồn gốc. Đồng thời, kiến trúc dữ liệu và quy trình vận hành của VDSVerify được chuẩn hóa theo thông lệ quốc tế, đáp ứng các yêu cầu kỹ thuật của các thị trường xuất khẩu trọng điểm như Liên minh châu Âu (EU), Hoa Kỳ, Nhật Bản và Hàn Quốc. Điều này không chỉ giúp doanh nghiệp đảm bảo tính pháp lý và minh bạch trong nước, mà còn tạo lợi thế khi tham gia vào chuỗi cung ứng toàn cầu, rút ngắn thời gian tiếp cận thị trường và gia tăng độ tin cậy với đối tác quốc tế.",
        "VDS sở hữu hơn 16 năm kinh nghiệm chuyên sâu trong lĩnh vực chuyển đổi số, đặc biệt là các giải pháp ứng dụng công nghệ trong nông nghiệp, quản trị chuỗi giá trị và phát triển thị trường bền vững. Đội ngũ chuyên gia của VDS là sự kết hợp giữa các nhà tư vấn thực tiễn và chuyên gia học thuật, đến từ các Bộ, ngành trung ương, cũng như các trường đại học và viện nghiên cứu uy tín. Chính nền tảng này cho phép chúng tôi thiết kế và triển khai những giải pháp sát với nhu cầu thực tế, đồng thời đảm bảo tính chuẩn hóa, khả thi và bền vững trong từng dự án.",
        "VDSVerify sử dụng công nghệ blockchain để ghi nhận, lưu trữ và khóa cứng dữ liệu truy xuất theo từng khâu. Một khi thông tin được ghi nhận và xác thực, không thể bị chỉnh sửa hay làm giả, giúp tăng cường niềm tin cho người tiêu dùng và đối tác nhập khẩu.",
        "Hỗ trợ doanh nghiệp kết nối sàn TMĐT, tích hợp truy xuất nguồn gốc vào kênh bán hàng số, gia tăng giá trị và mở rộng thị trường tiêu thụ."
    ];

    return (
        <div className="w-full h-full py-4">
            {/* Section Title */}
            {sectionTitle && (
                <div className="text-center mb-18">
                    <h2
                        className={`${sectionTitleSize} ${!isHexColor(sectionTitleColor) ? sectionTitleColor : ""} ${sectionTitleWeight}`}
                        style={isHexColor(sectionTitleColor) ? { color: sectionTitleColor } : undefined}
                    >
                        {sectionTitle}
                    </h2>
                </div>
            )}

            {/* Circle Layout for md and up */}
            <div className="hidden md:flex relative items-center justify-center w-full h-full">
                <div
                    className="relative"
                    style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
                >
                    {/* Dotted Circle */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox={`0 0 ${containerSize} ${containerSize}`}
                    >
                        <circle
                            cx={center}
                            cy={center}
                            r={radius}
                            fill="none"
                            stroke="rgba(43,126,253, 0.3)"
                            strokeDasharray="0.1 10"
                            strokeLinecap="round"
                            strokeWidth="4"
                        />
                    </svg>

                    {/* Feature Bubbles */}
                    {features.map((item, index) => {
                        const angle = (360 / total) * index - 90;
                        const angleRad = (angle * Math.PI) / 180;
                        const bubbleX = center + (radius + bubbleOffset + 50) * Math.cos(angleRad);
                        const bubbleY = center + (radius + bubbleOffset) * Math.sin(angleRad);

                        let customTransform = "translate(-50%, -50%)";
                        if (angle === -90) customTransform = "translate(-50%, -20%)";
                        if (angle === 90) customTransform = "translate(-50%, -80%)";

                        return (
                            <div
                                key={index}
                                className="absolute group text-center z-10"
                                style={{
                                    left: `${bubbleX}px`,
                                    top: `${bubbleY}px`,
                                    transform: customTransform
                                }}
                            >
                                <div className="text-center transition-transform duration-300 ease-in-out px-10 group-hover:scale-105">
                                    <div
                                        className="px-4 py-3 text-sm font-medium rounded-xl rgb-button text-white cursor-pointer group-hover:shadow-2xl"
                                        style={{
                                            minWidth: "220px",
                                            maxWidth: "250px",
                                            wordBreak: "break-word"
                                        }}
                                    >
                                        <div className="block group-hover:hidden">
                                            {item.content}
                                        </div>
                                        <div className="hidden group-hover:block text-xs text-left leading-snug">
                                            {mockContent[index] ?? item.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Center Logo */}
                    <div
                        className="absolute bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-200"
                        style={{
                            left: `${center}px`,
                            top: `${center}px`,
                            transform: "translate(-50%, -50%)",
                            width: "300px",
                            height: "300px"
                        }}
                    >
                        {centerLogo}
                    </div>
                </div>
            </div>

            {/* Mobile stacked layout */}
            <div className="md:hidden flex flex-col items-center gap-6 px-4">
                {features.slice(0, 3).map((item, i) => (
                    <NumberedItem
                        key={i}
                        index={i + 1}
                        content={item.content}
                        detail={mockContent[i]}
                    />
                ))}

                {/* Center logo */}
                <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center text-2xl font-bold text-gray-700 my-2">
                    {centerLogo}
                </div>

                {features.slice(3).map((item, i) => (
                    <NumberedItem
                        key={i + 3}
                        index={i + 4}
                        content={item.content}
                        detail={mockContent[i + 3]}
                    />
                ))}
            </div>
        </div>
    );
};

const NumberedItem = ({
    index,
    content,
    detail
}: {
    index: number;
    content: string;
    detail: string;
}) => (
    <div className="flex items-start space-x-4 max-w-xs w-full">
        <div className="min-w-[32px] min-h-[32px] bg-green-500 text-white font-bold rounded-full flex items-center justify-center">
            {index}
        </div>
        <div className="text-sm text-gray-800 leading-snug">
            <div className="font-medium">{content}</div>
            <div className="text-xs mt-1 text-gray-600">{detail}</div>
        </div>
    </div>
);

export default CircleFeatures;
