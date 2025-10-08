import Timeline from "@/components/reusable-component/Timeline"
import TimelineItem from "@/components/reusable-component/TimelineItem"
import CustomerCarousel from "@/components/inmutable-components/CustomerCarousel";
import PartnerCarousel from "@/components/inmutable-components/PartnerCarousel";
import Cart from "@/components/inmutable-components/Cart";
import Policy from "@/components/inmutable-components/Policy";
import ServicePackage from "@/components/inmutable-components/ServicePackage";
import DaoTaoKiemKe from "@/components/inmutable-components/DaoTaoKiemKeKhi";
import Solution from "@/components/inmutable-components/Solution";
import SectionWithImage from "@/components/reusable-component/SectionWithImage";
import FadeOnVisibility from "@/components/reusable-component/FadeOnVisibility.tsx";
import specialImage from '@/assets/special.jpg'

const KiemKeKhiNhaKinh = () => {
    return (
        <div className="container lg:px-20 m-auto mt-5">
            <FadeOnVisibility>
            <Timeline>
                <h1 className="text-2xl font-bold mb-4 text-title text-center">LỘ TRÌNH KIỂM KÊ KHÍ NHÀ KÍNH</h1>
                <TimelineItem time="31/03/2023" title="Báo cáo dữ liệu hoạt động">
                    Đang cập nhật...
                </TimelineItem>
                <TimelineItem time="31/12/2024" title="Kiểm kê và xây dựng báo cáo khí nhà kính">
                    Đang cập nhật...
                </TimelineItem>
                <TimelineItem time="31/03/2025" title="Báo cáo kết quả kiểm kê khí nhà kính">
                    Đang cập nhật...
                </TimelineItem>
                <TimelineItem time="31/12/2025" title="Xây dựng và thực hiện kế hoạch giảm nhẹ phát thải khí nhà kính">
                    Đang cập nhật...
                </TimelineItem>
                <TimelineItem time="31/03/2027" title="Báo cáo đánh giá giảm thải khí nhà kính">
                    Đang cập nhật...
                </TimelineItem>
            </Timeline>
            </FadeOnVisibility>
            <Solution />
            <FadeOnVisibility>
                <CustomerCarousel />
                <PartnerCarousel />
            </FadeOnVisibility>
            <FadeOnVisibility>
                <DaoTaoKiemKe />
                <Cart />
            </FadeOnVisibility>
            <Policy />
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
            <ServicePackage /> 
        </div>
    )
}

export default KiemKeKhiNhaKinh