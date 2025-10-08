import img1 from '@/assets/icon/4.png';
import img2 from '@/assets/icon/5.png';
import img3 from '@/assets/icon/6.png';
import img4 from '@/assets/icon/7.png';
import img5 from '@/assets/icon/8.png';
import img6 from '@/assets/icon/9.png';

import ServiceSingle from '../reusable-component/ServiceSingle';
import { easeOut, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ServiceCart = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true, // ✅ chỉ animate 1 lần duy nhất
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    const fadeVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeOut,
            },
        },
    };

    return (
        <div className="bg-background m-5">
            <section className="max-w-7xl mx-auto">
                <motion.h1
                    ref={ref}
                    variants={fadeVariants}
                    initial="hidden"
                    animate={controls}
                    className="text-2xl font-bold mb-4 text-title text-center"
                >
                    TƯ VẤN VÀ TRIỂN KHAI GIẢI PHÁP
                </motion.h1>

                <motion.div
                    ref={ref}
                    variants={fadeVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-2 md:grid-cols-3 lg:gap-6 gap-2"
                >
                    <ServiceSingle title="Tư Vấn Chuyển Đổi Số" image={img1}>
                        Cách mạng hóa hệ thống, quy trình và công nghệ thông tin, tối ưu hóa năng suất và tạo ra môi trường làm việc linh hoạt, đưa doanh nghiệp của bạn bứt phá giới hạn hiệu quả.
                    </ServiceSingle>
                    <ServiceSingle title="Kiểm Kê Khí Nhà Kính" image={img2}>
                        Chuyên gia kiểm kê hàng đầu, hệ thống kiểm kê tiên tiến, phân tích chuyên sâu lượng khí nhà kính, cung cấp giải pháp toàn diện giúp doanh nghiệp bạn xác định và giảm thiểu tác động môi trường.
                    </ServiceSingle>
                    <ServiceSingle title="Cung Cấp Tín Chỉ Carbon" image={img3}>
                        Chuyển đổi thương hiệu hướng đến phát triển bền vững. Đồng hành cùng doanh nghiệp trong quá trình xây dựng thương hiệu xanh thông qua giải pháp tín chỉ carbon toàn diện. Góp phần giảm thiểu tác động môi trường, nâng cao hình ảnh doanh nghiệp trong tâm trí khách hàng, đối tác và cộng đồng, đồng thời gia tăng khả năng đáp ứng các yêu cầu về phát triển bền vững và trách nhiệm xã hội.
                    </ServiceSingle>
                    <ServiceSingle title="Đào Tạo Nhân Lực Số" image={img4}>
                        Hệ thống đào tạo chuyên sâu và tư vấn chuyên nghiệp, hỗ trợ tổ chức và cá nhân vượt qua thách thức của kỷ nguyên số, bứt phá tiềm năng nguồn nhân lực và tối ưu hóa hiệu quả quản lý.
                    </ServiceSingle>
                    <ServiceSingle title="Tư Vấn Khởi Nghiệp Và Kinh Doanh" image={img5}>
                        Cung cấp giải pháp chiến lược toàn diện giúp doanh nghiệp bứt phá lợi nhuận, mở rộng thị phần, đánh bại đối thủ và kiến tạo thương hiệu vững mạnh.
                    </ServiceSingle>
                    <ServiceSingle title="Tư Vấn Cải Tiến Sản Xuất" image={img6}>
                        Chuyên môn hóa quy trình sản xuất, luân chuyển tinh gọn để quản lý hiệu quả, nâng cao chất lượng sản phẩm và trải nghiệm khách hàng, đáp ứng mọi nhu cầu và tăng trưởng vượt bậc cho doanh nghiệp của bạn.
                    </ServiceSingle>
                </motion.div>
            </section>
        </div>
    );
};

export default ServiceCart;
