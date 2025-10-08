import background from '@/assets/chuyendoixanh.jpeg';
import { useEffect } from 'react';
import { easeOut, motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const CompanyPreview = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

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
        <div
            className="h-max w-full rounded-xl p-5 mb-10 bg-cover"
            style={{
                backgroundImage: `url("${background}")`,
                backgroundPosition: '50%',
            }}
        >
            <motion.div
                ref={ref}
                variants={fadeVariants}
                initial="hidden"
                animate={controls}
                className="lg:w-[50%] w-full h-max p-10 bg-frontground text-text rounded-xl shadow-all-3xl flex flex-col"
            >
                <div className="md:mb-10 bg text-title font-bold overflow-hidden pt-3 text-xl sm:text-5xl text-left flex-3 sm:flex-6">
                    THÚC ĐẨY CHUYỂN ĐỔI SỐ - CHUYỂN ĐỔI XANH QUỐC GIA
                </div>
                <p className="overflow-hidden not-sm:text-sm flex-auto">
                    VDS nổi bật với việc cung cấp những giải pháp đổi mới và bền vững, nhằm định hình tương lai của doanh nghiệp. Chúng tôi tự hào là đối tác đáng tin cậy, mang đến những dịch vụ tư vấn và giải pháp toàn diện, được hỗ trợ bởi đội ngũ chuyên gia chính danh, đến từ mạng lưới TVV Bộ Kế hoạch và Đầu tư, các ban ngành liên quan cùng các trường đại học hàng đầu tại Việt Nam.
                </p>
                <div className="mt-5 w-full h-full flex flex-3">
                    <button className="hover:bg-background hover:text-text bg-title sm:w-[30%] w-full my-auto py-3 rounded-2xl shadow-xl mr-auto text-background">
                        Xem thêm
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default CompanyPreview;