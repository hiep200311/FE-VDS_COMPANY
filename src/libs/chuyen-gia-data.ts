// import ChuyenGiaAbout from '@/assets/template/about-img.jpg'

import LanImage from '@/assets/chuyengia/hoang-lan/about-img.jpg';

import LanCertification1 from '@/assets/chuyengia/hoang-lan/1.jpg';
import LanCertification2 from '@/assets/chuyengia/hoang-lan/2.jpg';
import LanCertification3 from '@/assets/chuyengia/hoang-lan/3.jpg';
import LanCertification4 from '@/assets/chuyengia/hoang-lan/4.jpg';
import LanCertification5 from '@/assets/chuyengia/hoang-lan/5.jpg';
import LanCertification6 from '@/assets/chuyengia/hoang-lan/6.jpg';
import LanCertification7 from '@/assets/chuyengia/hoang-lan/7.jpg';

import LanActiviy1 from '@/assets/chuyengia/hoang-lan/activity_1.jpg';
import LanActiviy2 from '@/assets/chuyengia/hoang-lan/activity_2.jpg';
import LanActiviy3 from '@/assets/chuyengia/hoang-lan/activity_3.jpg';
import LanActiviy4 from '@/assets/chuyengia/hoang-lan/activity_4.jpg';
import LanActiviy8 from '@/assets/chuyengia/hoang-lan/activity_8.jpg';
import LanActiviy9 from '@/assets/chuyengia/hoang-lan/activity_9.jpg';




// import img1 from '@/assets/icon/4.png';
// import img2 from '@/assets/icon/5.png';
// import img3 from '@/assets/icon/6.png';
// import img4 from '@/assets/icon/7.png';
// import img5 from '@/assets/icon/8.png';
// import img6 from '@/assets/icon/9.png';
// import DoanhNghiep from '@/assets/tnsm/19.png';
// import ChuyenGiaTuVan from '@/assets/tnsm/20.png';
// import DoiTac from '@/assets/tnsm/21.png';

interface Experince {
    time?: string,
    title: string,
    description: string
}

interface Activity {
    title: string,
    description: string,
    image: string
}

interface Certifications {
    title: string,
    description: string,
    image: string,
    time: string,
    location: string
}

export interface ExpertInformation {
    title?: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    description: string,
    image?: string,
    experiences?: Experince[],
    activities?: Activity[],
    certifications?: Certifications[],
    bio: string[],
    subtitle: string
}

const experts: {[name: string]: ExpertInformation} = {
    "le-vu-hoang-lan": {
        title: 'Founder và Tổng Giám Đốc VDS',
        name: 'Lê Vũ Hoàng Lân',
        email: 'lanlevh@vds.io.vn',
        phone: '0868 646 332',
        address: 'Tầng 4, Số 109 Đường số 37, Khu đô thị Vạn Phúc, Phường Hiệp Bình Phước, TP. Thủ Đức, TPHCM',
        description: `
            <p class="text-xl py-4 text-title">
                Ông Lê Vũ Hoàng Lân – Tổng Giám đốc Công ty Cổ phần Giải pháp Nền tảng Số Việt Nam.
            </p>
            <p>
                Ông Lê Vũ Hoàng Lân là một trong những chuyên gia hàng đầu trong lĩnh vực chuyển đổi số, phát triển công nghệ nền tảng và kinh tế xanh tại Việt Nam. Ông hiện là Tổng Giám đốc kiêm Nhà sáng lập của Công ty Cổ phần Giải pháp Nền tảng Số Việt Nam (VDS) – doanh nghiệp tiên phong trong việc triển khai các giải pháp số hóa toàn diện cho doanh nghiệp, đồng thời phát triển hệ sinh thái công nghệ hỗ trợ phát triển bền vững.
            </p>
            <p class="text-xl py-4 text-title">Hành trình và tầm nhìn</p>
            <p>
                Xuất thân từ lĩnh vực công nghệ thông tin và quản lý doanh nghiệp, ông Lê Vũ Hoàng Lân có hơn 20 năm kinh nghiệm làm việc trong môi trường tư vấn, phát triển nền tảng số, và thực thi các dự án có tính lan tỏa cao trên phạm vi quốc gia. Từ sớm, ông đã nhận thấy vai trò then chốt của công nghệ trong việc thay đổi mô hình sản xuất – kinh doanh truyền thống, từ đó hình thành nên tầm nhìn xây dựng một nền tảng số toàn diện “Make in Vietnam” để phục vụ cho quá trình chuyển đổi số quốc gia.
            </p>
            <p class="text-xl py-4 text-title">
                Với tầm nhìn chiến lược và khả năng điều hành xuất sắc, ông Lân đã xây dựng VDS trở thành một đơn vị uy tín, cung cấp các giải pháp như:
            </p>
            <p>
                <ul class="list-disc list-inside">
                    <li>Tư vấn chuyển đổi số cho doanh nghiệp và địa phương</li>
                    <li>Thiết kế và triển khai hệ thống truy xuất nguồn gốc</li>
                    <li>Kiểm kê khí nhà kính, xây dựng báo cáo phát thải và lộ trình trung hòa carbon</li>
                    <li>Phát triển tín chỉ carbon và hóa số tín chỉ thông qua công nghệ Blockchain</li>
                    <li>Vai trò chuyên gia và các hoạt động nổi bật</li>
                </ul>
            </p>
            <p class="pt-4">
                Ông Lân là một trong số ít doanh nhân công nghệ được Bộ Kế hoạch và Đầu tư mời làm chuyên gia tư vấn cấp quốc gia trong các chương trình hỗ trợ doanh nghiệp nhỏ và vừa chuyển đổi số. Ông đã trực tiếp tham gia thiết kế công cụ đánh giá mức độ sẵn sàng chuyển đổi số cho doanh nghiệp (DRI), hướng dẫn hàng trăm doanh nghiệp thực hiện kiểm kê khí nhà kính và lập báo cáo phát thải theo quy định của Bộ Tài nguyên và Môi trường.
            </p>

            <p class="pt-4">
                Ngoài ra, ông còn là người tiên phong trong việc số hóa quy trình phát hành và giao dịch tín chỉ carbon tại Việt Nam thông qua các ứng dụng NFT, blockchain và tài sản số xanh. Dưới sự dẫn dắt của ông, VDS đã hợp tác với nhiều khu công nghiệp, doanh nghiệp FDI lớn như First Solar, cũng như chính quyền các địa phương như Đồng Nai, Bạc Liêu, Tây Ninh… để triển khai các dự án ESG và carbon credits.
            </p>

            <p class="text-xl py-4 text-title">
                Đóng góp cho cộng đồng và đào tạo
            </p>

            <p>
                Không chỉ là một nhà quản trị, ông Lân còn dành nhiều tâm huyết cho hoạt động giáo dục – truyền cảm hứng. Ông thường xuyên được mời làm diễn giả tại các trường đại học lớn như HUTECH, UEH, và là khách mời tại nhiều diễn đàn công nghệ cấp quốc gia. Các buổi nói chuyện và huấn luyện của ông được đánh giá cao về tính thực tiễn, chiều sâu chiến lược và khả năng truyền cảm hứng cho thế hệ trẻ.
            </p>
        
        `,
        image: LanImage,
        experiences: [{
            title: 'Chuyên gia tư vấn doanh nghiệp thuộc mạng lưới TVV Bộ KH&ĐT',
            description: 'Có hơn 16 năm kinh nghiệm tư vấn kinh doanh và phát triển doanh nghiệp. Từng tư vấn cải tiến sản xuất, chuyển đổi số (bao gồm cả chuyển đổi xanh) và phát triển bền vững theo tiêu chuẩn ESG. Đảm nhiệm lập báo cáo kiểm kê khí nhà kính (KNK) và ESG.'
        },
        {
            title: 'CEO Công ty Cổ phần Giải Pháp Nền Tảng Số Việt Nam',
            description: 'Điều hành triển khai các dự án chuyển đổi số, tích hợp phần mềm ERP như Odoo, SAP B1, SAP S4/Hana. Có kinh nghiệm triển khai hệ thống eOffice, Elearning, HR/Payroll, TMS và các module quản trị doanh nghiệp. Phối hợp triển khai ERP và R&D giải pháp NFT, blockchain, Elearning, cùng các nền tảng số cho nhiều doanh nghiệp và tập đoàn. Hỗ trợ người dùng, bảo trì và quản lý hệ thống phần mềm và server.'
        },
        {
            title: 'Phát triển Nền tảng kinh doanh số thương mại điện tử',
            description: 'Hợp tác với các trường đại học như Hutech, Văn Lang để đào tạo sinh viên. Tập trung vào các lĩnh vực: marketing, thương mại điện tử, blockchain và khởi nghiệp nền tảng số.'
        },
        {
            title: 'Một số công ty đã tham gia triển khai chuyển đổi số',
            description: 'Đã triển khai chuyển đổi số tại nhiều doanh nghiệp như CQS, Weitai, Saigonship, Căn tin bệnh viện Nhi đồng 2, Gemadept, BIT, Cao Hùng, Byfas, Canbesto,… và nhiều doanh nghiệp trong các lĩnh vực sản xuất, phân phối, thủy sản, logistics, giáo dục.'
        }],
        activities: [
            {
                title: 'BUỔI PHỎNG VẤN CỦA HUTECH VỀ CHUYỂN ĐỔI SỐ',
                description: 'Đang cập nhật..',
                image: LanActiviy1
            },
            {
                title: 'SINH VIÊN HUTECH THAM QUAN CÔNG TY METADSV',
                description: 'Đang cập nhật..',
                image: LanActiviy2
            },
            {
                title: 'WORKSHOP "CƠ HỘI CHO GEN Z TRONG THỜI ĐẠI SỐ" TẠI HUTECH',
                description: 'Đang cập nhật..',
                image: LanActiviy3
            },
            {
                title: 'WORKSHOP "MARKETING & THƯƠNG MẠI SỐ" TẠI HUTECH',
                description: 'Đang cập nhật..',
                image: LanActiviy4
            },
            {
                title: 'WORKSHOP "TMĐT XU THẾ & CƠ HỘI" TẠI TRƯỜNG CAO ĐẲNG VĂN LANG SÀI GÒN',
                description: 'Đang cập nhật..',
                image: LanActiviy4
            },
            {
                title: 'WORKSHOP KHAI VẤN CHO SINH VIÊN',
                description: 'Đang cập nhật..',
                image: LanActiviy4
            },

            {
                title: 'WORKSHOP ĐÀO TẠO KỸ NĂNG XÂY THƯƠNG HIỆU CÁ NHÂN CHO SINH VIÊN',
                description: 'Đang cập nhật..',
                image: LanActiviy4
            },
            {
                title: 'ĐỒNH HÀNH CÙNG CÁC MENTOR VÀ NHÀ TÀI TRỢ CUỘC THI "WAKE UP YOUR TALENT"',
                description: 'Đang cập nhật..',
                image: LanActiviy8
            },
            {
                title: 'CƠ HỘI KINH DOANH NÀO CHO GEN Z KHI CHUYỂN ĐỔI SỐ?',
                description: 'Đang cập nhật..',
                image: LanActiviy9
            }
        ],
        certifications: [
            {
                title: 'Chuyển đồi số trong Sản xuất Công nghiệp',
                description: 'Hoàn thành chương trình đào tạo và tư vấn chuyển đổi số trong Sản xuất Công nghiệp',
                image: LanCertification1,
                time: '12/03/2024',
                location: ''
            },
            {
                title: 'Phát triển Mạng lưới Tư vấn viên về Thực hành ESG',
                description: 'Đã hoàn thành chương trình đào tạo Phát triển Mạng lưới Tư vấn viên về Thực hành ESG',
                image: LanCertification2,
                time: '20/12/2024',
                location: ''
            },
            {
                title: 'ICF APPROVED LEADERSHIP COACHING CERTIFICATION',
                description: 'Đã hoàn thành 36 giờ trong tổng số 65 giờ đào tạo của chương trình Khai Vấn Lãnh Đạo ACSTH do ICF công nhận vào ngày 29 tháng 09 năm 2023',
                image: LanCertification3,
                time: '29/09/2023',
                location: ''
            },
            {
                title: 'Chương trình đào tạo Tiền đề Shindanshi',
                description: 'Đã tham gia Chương trình đào tạo Tiền đề Shindanshi - Chuẩn Đoán Viên doanh nghiệp ngành công nghiệp chế biến, chế tạo',
                image: LanCertification4,
                time: '02/11/2023',
                location: ''
            },
            {
                title: 'Hướng dẫn lập báo cáo kiểm kê khí nhà kính cấp cơ sở',
                description: 'Đã hoàn thành khóa tập huấn hướng dẫn lập báo cáo kiểm kê khí nhà kính cấp cơ sở theo nghị định số 06/2022/NĐ-CP',
                image: LanCertification5,
                time: '24/11/2023',
                location: ''
            },
            {
                title: 'Chuyên gia tư vấn về Khởi nghiệp và Kinh doanh Mới 2023',
                description: 'Khóa đào tạo chuyên gia tư vấn về Khởi nghiệp và Kinh doanh Mới 2023',
                image: LanCertification6,
                time: '16/11/2023',
                location: ''
            },
            {
                title: 'Khoá đào tạo nâng cao năng lực cho chuyên gia chuyển đổi số Việt Nam',
                description: 'Đã hoàn thành thành công khóa học điều hành: Khoá đào tạo nâng cao năng lực cho chuyên gia chuyển đổi số Việt Nam',
                image: LanCertification7,
                time: '01/11/2024',
                location: ''
            },

        ],
        bio: [
            "1. Chuyển đổi số",
            "2. Phát triển kinh tế số",
            "3. Tư vấn trung hòa carbon"
        ],
        subtitle: "Chuyên gia tư vấn thuộc mạng lưới TVV của Bộ Kế hoạch và Đầu tư Việt Nam",
    },
}

export default experts;