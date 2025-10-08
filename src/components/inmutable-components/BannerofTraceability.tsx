import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

type BannerProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: string;

    // Text style
    titleColor?: string;
    subtitleColor?: string;
    descColor?: string;

    titleSize?: string;
    subtitleSize?: string;
    descSize?: string;

    titleWeight?: string;
    subtitleWeight?: string;
    descWeight?: string;

    textAlign?: 'left' | 'center' | 'right';

    // Button
    link1?: string;
    link2?: string;
    button1Text?: string;
    button2Text?: string;

    button1BgColor?: string;
    button2BgColor?: string;
    button1TextColor?: string;
    button2TextColor?: string;
};

// helper
const isHexColor = (value?: string): boolean =>
    typeof value === 'string' && value.startsWith('#');

const BannerofTraceability: React.FC<BannerProps> = ({
    title = 'HỆ THỐNG TRUY XUẤT NGUỒN GỐC',
    subtitle = 'THEO TIÊU CHUẨN QUỐC GIA',
    description = 'Chúng tôi cung cấp nền tảng số ứng dụng công nghệ blockchain, giúp doanh nghiệp, hợp tác xã và nông hộ minh bạch hóa toàn bộ chuỗi giá trị sản phẩm – từ sản xuất đến phân phối. Mỗi sản phẩm được gắn mã QR duy nhất, truy xuất đầy đủ thông tin về nguồn gốc, quy trình canh tác, chứng nhận và vận chuyển. Tất cả dữ liệu được lưu trữ trên blockchain, đảm bảo tính xác thực và không thể làm giả, tạo dựng niềm tin với người tiêu dùng và thị trường. Giải pháp góp phần thúc đẩy chuyển đổi số, bảo vệ thương hiệu và đáp ứng tiêu chuẩn truy xuất ngày càng khắt khe trong nước và quốc tế.',
    backgroundImage,

    titleColor = 'text-green-700',
    subtitleColor = 'text-black',
    descColor = 'text-gray-800',

    titleSize = 'text-4xl',
    subtitleSize = 'text-2xl',
    descSize = 'text-base',

    titleWeight = 'font-bold',
    subtitleWeight = 'font-semibold',
    descWeight = 'font-normal',

    textAlign = 'left',

    link1 = '',
    link2 = '',
    button1Text = 'DÙNG THỬ MIỄN PHÍ',
    button2Text = 'TÌM HIỂU THÊM',

    button1BgColor = 'bg-red-600',
    button2BgColor = 'bg-blue-600',
    button1TextColor = 'text-white',
    button2TextColor = 'text-white',
}) => {
    const navigate = useNavigate();
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        controls.start(inView ? 'visible' : 'hidden');
    }, [controls, inView]);

    const fadeVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const alignment =
        textAlign === 'center'
            ? 'text-center'
            : textAlign === 'right'
                ? 'text-right'
                : 'text-left';

    return (
        <div
            className={`w-full py-24 sm:py-28 min-h-[400px] ${backgroundImage ? 'bg-auto' : ''}`}
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-start justify-center gap-6">
                <motion.div
                    ref={ref}
                    variants={fadeVariants}
                    initial="hidden"
                    animate={controls}
                    className={`w-full space-y-4 ${alignment}`}
                >
                    {/* Title */}
                    <h2
                        className={`${titleSize} ${titleWeight} ${!isHexColor(titleColor) ? titleColor : ''
                            }`}
                        style={isHexColor(titleColor) ? { color: titleColor } : undefined}
                    >
                        {title}
                    </h2>

                    {/* Subtitle */}
                    <h3
                        className={`${subtitleSize} ${subtitleWeight} ${!isHexColor(subtitleColor) ? subtitleColor : ''
                            } `}
                        style={isHexColor(subtitleColor) ? { color: subtitleColor } : undefined}
                    >
                        {subtitle}
                    </h3>

                    {/* Description */}
                    <p
                        className={`${descSize} ${descWeight} ${!isHexColor(descColor) ? descColor : ''
                            } max-w-4xl mx-auto pl-1 lg:mx-0`}
                        style={isHexColor(descColor) ? { color: descColor } : undefined}
                    >
                        {description}
                    </p>

                    {/* Buttons */}
                    <div
                        className={`flex flex-wrap pt-8 gap-4 ${textAlign === 'center' ? 'justify-center' : 'justify-start'
                            }`}
                    >
                        {link1 && (
                            <button
                                onClick={() => navigate(link1)}
                                className={`py-2 px-4 rounded-lg text-sm sm:text-base transition ${!isHexColor(button1BgColor) ? button1BgColor : ''
                                    } ${!isHexColor(button1TextColor) ? button1TextColor : ''}`}
                                style={{
                                    backgroundColor: isHexColor(button1BgColor) ? button1BgColor : undefined,
                                    color: isHexColor(button1TextColor) ? button1TextColor : undefined,
                                }}
                            >
                                {button1Text}
                            </button>
                        )}
                        {link2 && (
                            <button
                                onClick={() => navigate(link2)}
                                className={`py-2 px-4 rounded-lg text-sm sm:text-base transition ${!isHexColor(button2BgColor) ? button2BgColor : ''
                                    } ${!isHexColor(button2TextColor) ? button2TextColor : ''}`}
                                style={{
                                    backgroundColor: isHexColor(button2BgColor) ? button2BgColor : undefined,
                                    color: isHexColor(button2TextColor) ? button2TextColor : undefined,
                                }}
                            >
                                {button2Text}
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BannerofTraceability;
