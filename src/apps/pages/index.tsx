import PartnerCarousel from "@/components/inmutable-components/PartnerCarousel";
import Panel from "@/components/inmutable-components/Panel";
import CompanyPreview from "@/components/inmutable-components/CompanyPreview";
import ServiceCart from "@/components/inmutable-components/ServiceCart";
import specialImage from '@/assets/special.jpg'
import CustomerCarousel from "@/components/inmutable-components/CustomerCarousel";
import Cart from "@/components/inmutable-components/Cart";
import ActivityArticle from "@/components/reusable-component/ActivityArticle.tsx";
import DaoTao from '@/assets/activities/daotao.jpg';
import DinhHuong from '@/assets/activities/dinhhuong.jpg';
import Farm from '@/assets/activities/farm.jpg';
import LeKy from '@/assets/activities/leky.jpg';
import Carousel from "@/components/reusable-component/Carousel";
import carouselImage from '@/assets/carousel/bannner.png';
import SectionWithImage from "@/components/reusable-component/SectionWithImage";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const Home = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2, // Chỉ hiện khi thấy ít nhất 20% phần tử
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 20 }); // Scroll lên thì ẩn lại
        }
    }, [inView, controls]);
    return (
        <>
            <Carousel images={carouselImage}/>
            <div className="container lg:px-20 m-auto mt-5">
                <CompanyPreview />
                <ServiceCart />
                <Cart />
                <SectionWithImage image={specialImage}>
                    <h1 className="text-2xl font-bold mb-4 text-title text-center">ĐIỂM KHÁC BIỆT CỦA VDS</h1>
                    <ul className="list-disc">
                        <li className="pb-3">
                            <h2 className="text-title font-semibold">DỊCH VỤ TƯ VẤN TOÀN DIỆN</h2>
                            <span>
                                Cung cấp giải pháp trọn gói bao gồm kiểm kê, lập báo cáo, thẩm định và tư vấn các phương án cân bằng carbon. Giúp doanh nghiệp hiểu rõ lượng phát thải, đánh giá tác động môi trường và xây dựng lộ trình phù hợp để hướng tới mục tiêu phát thải ròng bằng 0 (Net Zero) vào 2050.
                            </span>
                        </li>
                        <li className="pb-3">
                            <h2 className="text-title font-semibold">ĐỘI NGŨ CHUYÊN GIA UY TÍN</h2>
                            <span>
                                Đội ngũ chuyên gia chính danh đến từ Bộ Kế hoạch & Đầu tư và Trường Đại học Tài nguyên & Môi trường TP.HCM, sẵn sàng đồng hành cùng doanh nghiệp với những giải pháp thực tiễn, chất lượng và phù hợp với đặc thù từng ngành.
                            </span>
                        </li>
                        <li className="pb-3">
                            <h2 className="text-title font-semibold">HỆ SINH THÁI, TÀI NGUYÊN ĐA DẠNG</h2>
                            <span>
                                Cung cấp đa dạng tài nguyên phục vụ chuyển đổi xanh như chứng chỉ năng lượng tái tạo (REC), tín chỉ carbon rừng, và các dự án cân bằng carbon, giúp doanh nghiệp đẩy mạnh sử dụng năng lượng sạch và giảm thiểu tác động đến môi trường.
                            </span>
                        </li>
                    </ul>
                </SectionWithImage>
                <CustomerCarousel />
                <PartnerCarousel />
                <div className="w-full h-max rounded-xl p-5 mb-10">
                    <motion.h1 ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-4 text-title text-center">HOẠT ĐỘNG</motion.h1>
                    <div className="lg:grid-cols-4 grid-cols-1 gap-4 grid w-full h-max">
                        <ActivityArticle photo={LeKy} title="Lễ Ký Kết Hợp Tác Giữa UNETI TP.HCM và Công Ty Nền Tảng Số Việt Nam">
                            Lễ ký kết hợp tác giữa Trường Đại học Tài nguyên và Môi trường TP. Hồ Chí Minh và Công ty Cổ phần Giải pháp Nền tảng Số Việt Nam
                        </ActivityArticle>
                        <ActivityArticle photo={DaoTao} title="Đào Tạo Nhân Lực Số Thúc Đẩy Chuyển Đổi Số và Xanh Quốc Gia">
                            Đào tạo "Nhân lực số " tại các trường Đại học nhằm thúc đẩy Chuyển đổi số - Chuyển đổi xanh Quốc gia
                        </ActivityArticle>
                        <ActivityArticle photo={DinhHuong} title="Định Hướng Nghiên Cứu Giảm Phát Thải Carbon tại UNETI TP.HCM">
                            Định hướng Nghiên cứu Khoa học về giảm phát thải Carbon tại Trường Đại học Tài nguyên và Môi trường TPHCM
                        </ActivityArticle>
                        <ActivityArticle photo={Farm} title="Chuyển đổi số trang trại">
                            Đang cập nhật...
                        </ActivityArticle>
                    </div>
                </div>

                <Panel />
            </div>        
        </>

    )
}

export default Home;