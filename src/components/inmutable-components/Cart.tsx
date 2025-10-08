import {easeOut, motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import img1 from "@/assets/icon/1.png";
import img2 from "@/assets/icon/2.png";
import img3 from "@/assets/icon/3.png";

const Cart = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();

    const [ref1, inView1] = useInView({ threshold: 0.2 });
    const [ref2, inView2] = useInView({ threshold: 0.2 });
    const [ref3, inView3] = useInView({ threshold: 0.2 });

    useEffect(() => {
        controls1.start(inView1 ? "visible" : "hidden");
    }, [inView1]);

    useEffect(() => {
        controls2.start(inView2 ? "visible" : "hidden");
    }, [inView2]);

    useEffect(() => {
        controls3.start(inView3 ? "visible" : "hidden");
    }, [inView3]);

    const cardVariants = {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
    };

    return (
        <>
            <h1 className="text-2xl font-bold mt-4 text-title text-center">
                DỊCH VỤ KIỂM KÊ KHÍ NHÀ KÍNH
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 py-10 bg-background">
                {/* Card 1 */}
                <motion.div
                    ref={ref1}
                    variants={cardVariants}
                    initial="hidden"
                    animate={controls1}
                    className="relative bg-frontground rounded-lg p-6 w-full md:w-1/3 text-center shadow-sm min-h-[400px]"
                >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-frontground rounded-full p-6 shadow">
                        <img src={img1} alt="Tư vấn" className="w-10 h-10 text-text" />
                    </div>
                    <div className="pt-10 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-xl text-title font-semibold mb-3">Tư vấn</h3>
                            <p className="text-text text-lg text-justify">
                                Hỗ trợ doanh nghiệp hiểu rõ quy trình kiểm kê khí nhà kính và các yêu cầu liên quan, từ đó
                                phân tích hoạt động, xác định nhu cầu, lựa chọn phương pháp kiểm kê phù hợp và xây dựng
                                kế hoạch triển khai chi tiết nhằm đảm bảo hiệu quả, minh bạch và tuân thủ các tiêu chuẩn
                                trong nước và quốc tế.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    ref={ref2}
                    variants={cardVariants}
                    initial="hidden"
                    animate={controls2}
                    className="relative bg-frontground rounded-lg p-6 w-full md:w-1/3 text-center shadow-sm min-h-[400px]"
                >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-frontground rounded-full p-6 shadow">
                        <img src={img2} alt="Kiểm kê" className="w-10 h-10 text-text" />
                    </div>
                    <div className="pt-10 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-xl text-title font-semibold mb-3">Kiểm Kê Và Thẩm Định</h3>
                            <p className="text-text text-lg text-justify">
                                Thu thập dữ liệu, tiến hành kiểm kê khí nhà kính và đánh giá mức độ phát thải, đảm bảo tính
                                chính xác và đáng tin cậy của thông tin thu thập được. Từ đó, thẩm định và phân tích kết quả
                                một cách tổng quan và chi tiết, cung cấp những thông tin quan trọng để hỗ trợ quyết định và
                                đề xuất các biện pháp giảm thiểu phát thải khí nhà kính.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    ref={ref3}
                    variants={cardVariants}
                    initial="hidden"
                    animate={controls3}
                    className="relative bg-frontground rounded-lg p-6 w-full md:w-1/3 text-center shadow-sm min-h-[400px]"
                >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-frontground rounded-full p-6 shadow">
                        <img src={img3} alt="Giải pháp" className="w-10 h-10 text-text" />
                    </div>
                    <div className="pt-10 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-xl text-title font-semibold mb-3">Giải Pháp</h3>
                            <p className="text-text text-lg text-justify">
                                Dựa trên kết quả kiểm kê, đề xuất các biện pháp giảm nhẹ phát thải khí nhà kính một cách
                                chi tiết và phù hợp với tình hình cụ thể của doanh nghiệp. Đồng thời, chúng tôi không chỉ đề
                                xuất các giải pháp mà còn cung cấp sự hỗ trợ cần thiết để doanh nghiệp triển khai các biện
                                pháp này một cách hiệu quả.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Cart;
