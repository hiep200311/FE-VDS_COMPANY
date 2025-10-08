import BannerofTraceability from "@/components/inmutable-components/BannerofTraceability.tsx";
import bannerImg from '@/assets/carousel/bn3.png';
import bannerImg2 from '@/assets/quytrinhtruyxuat/0_oleomac_orto_1920x600.jpg';
import  Theme  from '@/context/Theme.tsx'
import CircleFeatures from "@/components/inmutable-components/CircleFeatures";
import specialImage from '@/assets/quytrinhtruyxuat/89.png';
import vdsverifyprogress from '@/assets/quytrinhtruyxuat/88.png';
import img1 from "@/assets/quytrinhtruyxuat/employeesetting.png";
import img2 from "@/assets/quytrinhtruyxuat/dashboard.png";
import img3 from "@/assets/quytrinhtruyxuat/login_vds.png";
import img4 from "@/assets/quytrinhtruyxuat/productsetting.png";
import img5 from "@/assets/quytrinhtruyxuat/unitsetting.png";
import img6 from "@/assets/quytrinhtruyxuat/role.png";
import tracer from "@/assets/quytrinhtruyxuat/truyxuatnguongoc.png"
import imgtext4 from "@/assets/quytrinhtruyxuat/4fixed.png";
import imgtext5 from "@/assets/quytrinhtruyxuat/5fixed.png";
import imgtext6 from "@/assets/quytrinhtruyxuat/6fixed.png";
import imgtext7 from "@/assets/quytrinhtruyxuat/7fixed.png";
import SectionImageForTracibility from "@/components/reusable-component/SectionImageForTracibility.tsx";
import ImageWithTextBlock from "@/components/reusable-component/ImageWithTextBlock.tsx";
import TextLeftImageRight from "@/components/reusable-component/TextLeftImageRight.tsx";
import ImageGalleryWithTitle from "@/components/reusable-component/ImageGalleryWithTitle.tsx";
// import FocusCenterSlider from "@/components/inmutable-components/FocusCenterSlider.tsx";
import PromotionFormBlock from "@/components/inmutable-components/PromotionFormBlock.tsx";
import {useContext} from "react";
const TruyXuatNguonGoc = () => {
    const { theme } = useContext(Theme);

    const selectedImage = theme === 'dark' ? vdsverifyprogress : specialImage;
    // const focusSlides = [
    //     {
    //         image: img1,
    //         title: "BÍ MẬT CỦA ĐẤT",
    //         description: "Cuốn sách Zero to One của Peter Thiel không bị ám ảnh bởi câu hỏi cũ mà khám phá những điều chưa từng có.",
    //         date: "19/03/2025"
    //     },
    //     {
    //         image: img2,
    //         title: "Đo pH đất bằng Enfarm",
    //         description: "Hệ thống đo pH tiện lợi giúp bạn xác định độ phù hợp của đất trồng ngay tại ruộng.",
    //         date: "10/08/2024"
    //     },
    //     {
    //         image: img3,
    //         title: "Ảnh hưởng của phân bón",
    //         description: "Phân bón ảnh hưởng mạnh mẽ đến môi trường nếu không được sử dụng đúng cách.",
    //         date: "02/08/2024"
    //     },
    //     {
    //         image: img3,
    //         title: "Ảnh hưởng của phân bón",
    //         description: "Phân bón ảnh hưởng mạnh mẽ đến môi trường nếu không được sử dụng đúng cách.",
    //         date: "02/08/2024"
    //     },
    //     {
    //         image: img3,
    //         title: "Ảnh hưởng của phân bón",
    //         description: "Phân bón ảnh hưởng mạnh mẽ đến môi trường nếu không được sử dụng đúng cách.",
    //         date: "02/08/2024"
    //     } ,
    //     {
    //         image: img3,
    //         title: "Ảnh hưởng của phân bón",
    //         description: "Phân bón ảnh hưởng mạnh mẽ đến môi trường nếu không được sử dụng đúng cách.",
    //         date: "02/08/2024"
    //     }


    // ];

    return (
        <div className="bg-frontground">
            <BannerofTraceability
                title="GIẢI PHÁP TRUY XUẤT NGUỒN GỐC"
                subtitle="TIÊU CHUẨN QUỐC GIA - CÔNG NGHỆ HIỆN ĐẠI"
                description="Chúng tôi cung cấp nền tảng số ứng dụng blockchain, giúp minh bạch hóa chuỗi giá trị sản phẩm từ sản xuất đến phân phối. Sản phẩm được gắn mã QR truy xuất nguồn gốc, lưu trữ dữ liệu bất biến trên blockchain, đảm bảo tính xác thực và chống giả mạo. Chúng tôi cung cấp giải pháp hỗ trợ chuyển đổi số, nâng cao uy tín và đáp ứng tiêu chuẩn truy xuất trong nước và quốc tế."
                backgroundImage={bannerImg}

                titleColor="#1e2866"
                subtitleColor="#1e2866"
                descColor="#1e2866"

                titleSize="text-5xl"
                subtitleSize="text-2xl"
                descSize="text-lg"
                textAlign="left"

                link1="/dung-thu"
                link2="/lien-he"
                button1Text="ĐĂNG KÝ NGAY"
                button2Text="XEM CHI TIẾT"

                // Màu nút bằng mã HEX
                button1BgColor="#04b558"
                button2BgColor="#04b558"
                button1TextColor="#ffffff"
                button2TextColor="#ffffff"
            />

            <div className="container  m-auto mt-10">
                <div className="py-8 my-5">
                    <CircleFeatures
                        sectionTitle="TÍNH NĂNG NỔI BẬT CỦA VDSVERIFY"
                        sectionTitleColor="text-title-tracibility"
                        sectionTitleSize="text-3xl"
                        sectionTitleWeight="font-bold"
                        centerLogo={<img src={tracer} className="rounded-full" />}
                        features={[
                            { content: "TRIỂN KHAI TẬN NƠI ĐÀO TẠO TẬN TAY VẬN HÀNH TẬN GỐC" },
                            { content: "Chuyên sâu ,linh hoạt theo từng ngành hàng dễ triển khai" },
                            { content: "Chuẩn hóa theo quy định và thị trường quốc tế" },
                            { content: "Đội ngũ tư vấn và triển khai giàu kinh nghiệm" },
                            { content: "Công nghệ minh bạch dữ liệu xác thực với blockchain" },
                            { content: "Hỗ trợ kết nối doanh nghiệp với sàn TMĐT" }
                        ]}
                    />
                </div>

                <SectionImageForTracibility
                    image={selectedImage}
                    navTitle="CÙNG VDSVERIFY ĐỊNH HÌNH CHUẨN MỰC"
                    subTitle="TRUY XUẤT NGUỒN GỐC HIỆN ĐẠI!"
                    navTitleColor="#86C54D"
                    subTitleColor="text-title-tracibility"
                    navTitleSize="text-3xl"
                    subTitleSize="text-3xl"
                    navTitleWeight="font-bold"
                    subTitleWeight="font-bold"
                    title="VDSVerify giúp truy xuất nguồn gốc nông sản dễ dàng qua mã QR."
                    titleColor="text-title"
                    titleSize="text-2xl"
                    titleWeight="font-bold"
                    listItems={[
                        "\tNgười tiêu dùng chỉ cần quét mã QR trên tem truy xuất để mở toàn bộ thông tin sản phẩm chỉ trong vài giây, không cần cài đặt ứng dụng riêng, không tốn thời gian thao tác rườm rà, phù hợp cả với người lớn tuổi hoặc người dùng không quen công nghệ.",
                        "Mỗi sản phẩm được gắn mã duy nhất, liên kết với hồ sơ số chứa thông tin chi tiết: vùng trồng, giống cây, phân bón – thuốc BVTV đã sử dụng, phương pháp canh tác, quy trình thu hoạch, đóng gói, vận chuyển và các tiêu chuẩn chất lượng đã được chứng nhận.",
                        "\tToàn bộ dữ liệu được lưu trữ bằng công nghệ blockchain, giúp thông tin không thể bị chỉnh sửa, giả mạo hoặc thất lạc, đảm bảo tính minh bạch, tin cậy và truy xuất ngược bất kỳ thời điểm nào.",
                        "\tĐây là công cụ mạnh mẽ để doanh nghiệp xây dựng niềm tin, nâng cao giá trị sản phẩm, đáp ứng yêu cầu của thị trường xuất khẩu, đồng thời góp phần phát triển nền nông nghiệp minh bạch, bền vững và hiện đại."
                    ]}
                    listColor="text-text"
                    listSize="text-base"
                    listWeight="font-normal"
                    listIconBg="bg-green-500"
                />
                <ImageWithTextBlock
                    image={imgtext4}
                    imageLeft={true} // ← hoặc false nếu muốn hình bên phải
                    title="Lập kế hoạch và quản lý thời gian hiệu quả"
                    titleColor="text-title"
                    titleSize="text-2xl"
                    titleWeight="font-bold"
                    listItems={[
                        {
                            text:"\tGiao diện thân thiện, dễ sử dụng giúp người dùng nhanh chóng xác định mục tiêu, thiết lập công việc ưu tiên và lập lịch làm việc cá nhân hoặc theo nhóm chỉ với vài thao tác đơn giản.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium"
                        },
                        {
                            text: "\tMọi tiến độ đều được hiển thị theo thời gian thực, hỗ trợ cá nhân chủ động theo dõi tiến triển công việc và giúp quản lý dễ dàng giám sát toàn bộ dự án từ xa.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium"
                        },
                        {
                            text:"\tLịch làm việc có thể chia sẻ linh hoạt với các thành viên trong nhóm, đồng bộ trên đa thiết bị, đảm bảo mọi người luôn được cập nhật, hạn chế chồng chéo và tăng cường phối hợp nhịp nhàng.\n",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium"
                        },
                        {
                            text:"\tTính năng nhắc nhở tự động và cảnh báo thông minh giúp giảm thiểu nguy cơ quên nhiệm vụ, trễ deadline. Ngoài ra, hệ thống còn hỗ trợ ghi nhận lịch sử công việc, giúp đánh giá hiệu quả làm việc và tối ưu quy trình lập kế hoạch trong tương lai.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium"
                        }
                    ]}
                    listColor="#2C2C2C"
                    listIconBg="bg-green-500"
                />

                <TextLeftImageRight
                    image={imgtext5}
                    title="Quản lý sử dụng nông dược hiệu quả"
                    titleColor="text-title"
                    titleSize="text-2xl"
                    titleWeight="font-bold"
                    listItems={[

                        {
                            text:"\tGhi chép đầy đủ và có hệ thống về việc sử dụng nông dược (phân bón, thuốc trừ sâu, thuốc bảo vệ thực vật...) cho từng lô đất hoặc mùa vụ cụ thể, bao gồm tên sản phẩm, nồng độ, liều lượng, thời gian và cách thức sử dụng.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium",
                        },
                        {
                            text:"\tCho phép theo dõi, so sánh giữa các vụ mùa để đánh giá hiệu quả và tác động môi trường, từ đó tối ưu hóa quy trình canh tác và giảm thiểu lãng phí vật tư nông nghiệp.",

                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium",
                        },
                        {
                            text:"\tCung cấp thư viện hướng dẫn sử dụng an toàn cho từng loại nông dược, bao gồm thời gian cách ly, biện pháp bảo hộ và cảnh báo nguy cơ, nhằm đảm bảo an toàn cho người lao động và người tiêu dùng.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium",
                        },
                        {
                            text:"\tĐồng thời, hệ thống kết nối với hồ sơ truy xuất sản phẩm, đảm bảo minh bạch nguồn gốc và tuân thủ các tiêu chuẩn an toàn thực phẩm, góp phần nâng cao hình ảnh và uy tín sản phẩm nông sản của doanh nghiệp.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium",
                        },

                    ]}
                    listColor="#2C2C2C"
                    listIconBg="bg-green-500"
                />
                <ImageWithTextBlock
                    image={imgtext6}
                    imageLeft={true}
                    title="Chuỗi cung ứng minh bạch bằng Blockchain"
                    titleColor="text-title"
                    titleSize="text-2xl"
                    titleWeight="font-bold"
                    listItems={[

                        {
                            text: "\tỨng dụng công nghệ bản đồ số cho phép doanh nghiệp và nông hộ dễ dàng quản lý đất đai, cơ sở hạ tầng, kho bãi, nhà lưới, vùng canh tác ngay trên nền tảng Google Maps với độ chính xác cao và giao diện trực quan.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium",
                        },
                        {
                            text: "\tMỗi thửa đất, khu vực sản xuất đều có thể gắn thông tin về loại đất, diện tích, cây trồng, tình trạng sử dụng, kế hoạch mùa vụ, hiện trạng cải tạo… giúp xây dựng quy hoạch tổng thể khoa học và theo dõi dễ dàng theo thời gian.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium",
                        },
                        {
                            text: "\tTích hợp tính năng thêm hình ảnh, tài liệu, ghi chú trực tiếp trên bản đồ, hỗ trợ lưu trữ hồ sơ thực địa và theo dõi biến động đất đai một cách chi tiết và mạch lạc.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium"
                        },
                        {
                            text:"\tCông cụ này không chỉ giúp nhà quản lý giám sát từ xa mà còn nâng cao hiệu quả phối hợp giữa các bộ phận kỹ thuật, kế hoạch và vận hành, từ đó tăng cường khả năng ra quyết định và tối ưu hóa hiệu suất sử dụng tài nguyên đất.",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium"
                        }
                    ]}
                    listColor="#2C2C2C"
                    listIconBg="bg-green-500"
                />
                <TextLeftImageRight
                    image={imgtext7}
                    title="Quản lý đất và cơ sở hiệu quả với Google Maps"
                    titleColor="text-title"
                    titleSize="text-2xl"
                    titleWeight="font-bold"
                    listItems={[
                        {
                            text:"Tích hợp Google Maps để định vị chính xác và hiển thị sống động thông tin về đất đai, cơ sở, mang đến trải nghiệm quản lý trực quan, hiện đại và dễ tiếp cận.\n",
                            color:"text-text",
                            size:"text-base",
                            weight: "font-medium"
                        },
                        {
                            text:"Cho phép gắn thông tin về loại đất, diện tích, cây trồng và các yếu tố liên quan trực tiếp trên bản đồ, giúp tối ưu hóa quy hoạch và sử dụng tài nguyên đất một cách thông minh.\n",
                            color:"text-text",

                            size:"text-base",
                            weight: "font-medium"
                        },
                        {

                            text: "                        \"Hỗ trợ chèn ghi chú, hình ảnh và tài liệu liên quan ngay trên nền tảng, nâng cao hiệu quả quản lý, tăng cường khả năng theo dõi và ra quyết định chính xác.",
                            color:"text-text",

                            size:"text-base",
                            weight: "font-medium"
                        }

                    ]}
                    listColor="#2C2C2C"
                    listIconBg="bg-green-500"
                />
                <ImageGalleryWithTitle
                    title="THÔNG TIN MÀN HÌNH CỦA PHẦN MỀM"
                    description="VDSVerify cách mạng hóa hoạt động doanh nghiệp với công nghệ truy xuất nguồn gốc tiên tiến, đảm bảo minh bạch và nâng cao năng suất vượt trội. Hệ thống cho phép làm việc trực tuyến linh hoạt, không bị ràng buộc bởi thời gian hay địa điểm, giúp duy trì hiệu quả tối ưu trong mọi tình huống. Với giao diện thân thiện và tính năng thông minh, VDSVerify mang lại khả năng quản lý quy trình dễ dàng, chính xác và linh hoạt chưa từng có."
                    titleColor="#61B946"
                    titleSize="text-3xl"
                    titleWeight="font-bold"
                    descColor="text-text"
                    descSize="text-base"
                    descWeight="font-normal"
                    captionColor="text-black"
                    captionSize="text-md"
                    captionWeight="font-semibold"
                    items={[
                        { image: img3, caption: { text: "Đăng nhập", color: "text-text" } },
                        { image: img2, caption: { text: "Dashboard", color: "text-text" } },
                        { image: img6, caption: { text: "Phân quyền", color: "text-text" } },
                        { image: img5, caption: { text: "Thiết lập đơn vị", color: "text-text" } },
                        { image: img1, caption: { text: "Thiết lập nhân công", color: "text-text" } },
                        { image: img4, caption: { text: "Sản phẩm", color: "text-text" } }
                        ]}
                />
                {/* <FocusCenterSlider
                    title="KIẾN THỨC NÔNG NGHIỆP XANH"
                    titleColor="text-[#61B946]"
                    titleSize="text-3xl"
                    titleWeight="font-bold"
                    titleAlign="text-left md:text-center"
                    items={focusSlides}
                /> */}


            </div>
            <PromotionFormBlock
                backgroundImage={bannerImg2}
                title="Ưu đãi đặc biệt khi hợp tác với VDSVerify"
                titleColor="text-[#FFFFFF]"
                items={[
                    { title: "Hỗ trợ triển khai", subtitle: "Đội ngũ chuyên nghiệp" },
                    { title: "Chi phí hợp lý", subtitle: "Phù hợp mọi quy mô" },
                ]}
                formTitle="Đăng ký nhận tư vấn"
                formTitleColor="#0E7490"
                formTitleSize="text-2xl"
                formTitleAlign="center"
                buttonText="Liên hệ ngay"
                buttonBgColor="#06002E"
                buttonTextColor="#FFFFFF"
            />
        </div>
    );
};

export default TruyXuatNguonGoc;
