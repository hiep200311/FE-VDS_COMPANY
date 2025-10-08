import Carousel from "@/components/reusable-component/Carousel.tsx";
import carouselImage from '@/assets/carousel/bannner.png';
import specialImage from "@/assets/logo/full_transparent.png";
import SectionImageWithoutShadowAndRounded from "@/components/reusable-component/SectionImageWithoutShadowAndRounded.tsx";
import Timeline from "@/components/reusable-component/Timeline.tsx";
import TimelineItem from "@/components/reusable-component/TimelineItem.tsx";
import ServiceCartOfIntroduction from "@/components/reusable-component/ServiceCartOfIntroduction.tsx";


const GioiThieu = () => {
    return (
        <>
            <Carousel images={carouselImage} />
            <div className="container lg:px-20 m-auto mt-5">
                <SectionImageWithoutShadowAndRounded image={specialImage}>
                    <h1 className="text-3xl font-bold mb-4    text-title text-center">GIỚI THIỆU CHUNG VỀ VDS</h1>
                    <ul className="list-disc">
                        <span className="pb-3">
                            <h2 className="text-title text-xl font-semibold">Công ty Cổ phần Giải pháp Nền tảng Số Việt Nam (VDS)</h2>
                            <span className="text-md">
                                Đơn vị tiên phong cung cấp các giải pháp chuyển đổi số và phát triển bền vững tại Việt Nam. Với tầm nhìn dài hạn và cam kết đồng hành cùng doanh nghiệp trên hành trình số hóa và phát triển bền vững, VDS không ngừng đổi mới và nâng cao chất lượng dịch vụ để trở thành đối tác chiến lược tin cậy của các tổ chức, doanh nghiệp trong kỷ nguyên kinh tế số và kinh tế xanh.
                            </span>
                        </span>
                    </ul>
                </SectionImageWithoutShadowAndRounded>
                <Timeline>
                    <h1 className="text-2xl font-bold mb-4 text-title text-center">LỊCH SỬ HÌNH THÀNH</h1>
                    <TimelineItem time="2023" title="Bắt nhịp với xu thế chuyển đổi kép – kết hợp giữa chuyển đổi số và chuyển đổi xanh ">
                        VDS mở rộng lĩnh vực hoạt động sang tư vấn và triển khai các giải pháp phát triển bền vững, đặc biệt là trong lĩnh vực kiểm kê khí nhà kính. Đây là bước đi chiến lược nhằm đồng hành cùng cam kết của Việt Nam tại COP26 về mục tiêu đạt phát thải ròng bằng "0" vào năm 2050.
                    </TimelineItem>
                    <TimelineItem time="2022" title=" Công ty Cổ phần Giải pháp Nền tảng Số Việt Nam (VDS) chính thức được thành lập">
                        Đánh dấu sự hội tụ giữa kinh nghiệm thực tiễn của Loyalty và năng lực nghiên cứu chuyên sâu của VIDE. Kể từ đó, VDS đã tham gia nhiều chương trình chuyển đổi số trọng điểm cấp quốc gia, trong đó nổi bật là các dự án cung cấp giải pháp thương mại điện tử và tiếp thị trực tuyến cho các đơn vị thuộc Bộ Nông nghiệp và Phát triển Nông thôn, cùng sự hiện diện tích cực tại các sự kiện công nghệ uy tín như Techfest Việt Nam.
                    </TimelineItem>
                    <TimelineItem time="2020" title="Đánh dấu bước ngoặt quan trọng khi công ty chính thức tham gia Chiến lược Chuyển đổi số Quốc gia">
                        Trong giai đoạn này, VDS thiết lập mối quan hệ hợp tác chiến lược với Viện Phát triển Kinh tế Số (VIDE) – đơn vị tập hợp các chuyên gia hàng đầu trong lĩnh vực quản lý và công nghệ, đồng thời là nguồn lực chuyên môn cho Bộ Kế hoạch và Đầu tư.
                    </TimelineItem>
                    <TimelineItem time="2017" title="Trước sự phát triển mạnh mẽ của hạ tầng Internet và nhu cầu số hóa ngày càng gia tăng tại thị trường nội địa">
                        Công ty đã định hướng lại chiến lược phát triển, chuyển trọng tâm sang xây dựng các nền tảng phần mềm trực tuyến phục vụ nhu cầu chuyển đổi số của doanh nghiệp trong và ngoài nước.
                    </TimelineItem>
                    <TimelineItem time="2011" title="Tiền thân">
                        Với tiền thân là Công ty TNHH Loyalty được thành lập từ năm 2011, VDS bắt đầu hành trình bằng việc cung cấp các giải pháp công nghệ số như ERP, CRM, WMS và gia công phần mềm cho các doanh nghiệp FDI đến từ Đài Loan, Hàn Quốc, Trung Quốc,...
                    </TimelineItem>

                </Timeline>
                {/*<IntroduceCompany/>*/}
                <ServiceCartOfIntroduction />

            </div>
        </>
    )
}

export default GioiThieu