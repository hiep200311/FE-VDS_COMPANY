
// import HeroBanner from "@/components/reusable-component/HeroBanner";
import bgMobile from "@/assets/pos/kk.png";
import bgTablet from "@/assets/pos/bnposipad.png";
import bgDesktop from "@/assets/pos/bnpos10.png";
import Card from "@/components/reusable-component/Card";
import CenterImageWithFeatures from "@/components/reusable-component/CenterImageWithFeatures";
import ImageWithTextBlock from "@/components/reusable-component/ImageWithTextBlock";
import ImageTabsComponent from "@/components/inmutable-components/ImageTabsComponent";
import ImageGalleryWithTitle from "@/components/reusable-component/ImageGalleryWithTitle";
import img1 from "@/assets/pos/dashboard_pos.png";
import img2 from "@/assets/pos/orders.png";
import img3 from "@/assets/pos/pos.png";
import img4 from "@/assets/pos/product.png";
import img5 from "@/assets/pos/store.png";
import img6 from "@/assets/pos/art.png";
import img7 from "@/assets/pos/1.png";
import img8 from "@/assets/pos/2.png";
import img9 from "@/assets/pos/3.png";
import img10 from "@/assets/pos/4.png";
import img11 from "@/assets/pos/5.png";
import img12 from "@/assets/pos/6.png"
// import FocusCenterSlider from "@/components/inmutable-components/FocusCenterSlider";
import RegistrationForm from "@/components/reusable-component/RegistrationForm";
import HeroBannerForPOS from "@/components/reusable-component/HeroBannerForPOS.tsx";
import FadeOnVisibility from "@/components/reusable-component/FadeOnVisibility.tsx";


// const focusSlides = [
//     {
//         image: img1,
//         title: "BÍ MẬT CỦA ĐẤT",
//         description: "Cuốn sách Zero to One của Peter Thiel không bị ám ảnh bởi câu hỏi cũ mà khám phá những điều chưa từng có",
//         date: "19/03/2025"
//     },
//     {
//         image: img2,
//         title: "Đo pH đất bằng Enfarm",
//         description: "Hệ thống đo pH tiện lợi giúp bạn xác định độ phù hợp của đất trồng ngay tại ruộng",
//         date: "10/08/2024"
//     },
//     {
//         image: img3,
//         title: "Ảnh hưởng của phân bón",
//         description: "Phân bón ảnh hưởng mạnh mẽ đến môi trường nếu không được sử dụng đúng cách",
//         date: "02/08/2024"
//     },
//     {
//         image: img3,
//         title: "Ảnh hưởng của phân bón",
//         description: "Phân bón ảnh hưởng mạnh mẽ đến môi trường nếu không được sử dụng đúng cách",
//         date: "02/08/2024"
//     },
//     {
//         image: img3,
//         title: "Ảnh hưởng của phân bón",
//         description: "Phân bón ảnh hưởng mạnh mẽ đến môi trường nếu không được sử dụng đúng cách",
//         date: "02/08/2024"
//     },
//     {
//         image: img3,
//         title: "Ảnh hưởng của phân bón",
//         description: "Phân bón ảnh hưởng mạnh mẽ đến môi trường nếu không được sử dụng đúng cách",
//         date: "02/08/2024"
//     }
//
//
// ];

const paymentTabs = [
    {
        id: "check-price",
        title: "Tối ưu thao tác",
        description: "Chỉ cần một lần quét mã vạch, toàn bộ thông tin sản phẩm hiện rõ ràng trên màn hình không mất công tìm kiếm, tư vấn nhanh gọn, chốt đơn trong tích tắc",
        image: img12,
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        ),
        color: "bg-blue-500"
    },
    {
        id: "cashless-payment",
        title: "Thanh toán linh hoạt",
        description: "Mã QR động sinh ra theo từng đơn hàng mang đầy đủ thông tin thanh toán với đó bảo mật cao giúp hạn chế sai sót",
        image: img12,
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
        ),
        color: "bg-green-500"
    },
    {
        id: "professional-invoice",
        title: "Hóa đơn thông minh",
        description: "Xác nhận thanh toán ngay trên màn hình bán hàng, người bán không cần xác nhận giao dịch từ người mua và không mất thời gian đối soát thủ công",
        image: img12,
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
        ),
        color: "bg-purple-500"
    }
];
export default function POS() {
    return (
        <>
            {/* <LoginImg /> */}
            <FadeOnVisibility>
            <div className="relative hero-banner">
                {/* <AnimatedLoginImage /> */}
                <HeroBannerForPOS
                    className="px-2 sm:px-4 h-auto min-h-120 sm:min-h-140"
                    bgSet={{
                        mobile: bgMobile,
                        tablet: bgTablet,
                        desktop: bgDesktop
                    }}
                    image={""}
                >
                    <div className="text-start mt-8 sm:mt-12 lg:mt-16 items-center justify-center flex flex-col">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 text-center lg:text-left">Giải pháp bán hàng và kế toán thông minh</h1>
                        <p className="text-base sm:text-lg text-black text-center lg:text-left">GoPay là phần mềm bán hàng tích hợp kế toán thuế, phù hợp với hộ kinh doanh và doanh nghiệp nhỏ. Chỉ với một nền tảng, bạn có thể quét mã, tính tiền, in hóa đơn, thanh toán QR và theo dõi doanh thu tức thì. GoPay còn hỗ trợ kê khai, nộp thuế, ký số HSM và xử lý hóa đơn đầu vào – dễ dùng, tiết kiệm thời gian, chuẩn theo quy định.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-6 sm:mt-8 lg:mt-12">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#3188e6] text-white text-base sm:text-lg font-bold rounded-4xl hover:bg-blue-700 transition duration-300">
                            Dùng thử miễn phí
                        </button>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#3188e6] text-white text-base sm:text-lg font-bold rounded-4xl hover:bg-blue-700 transition duration-300">
                            Khám phá ngay
                        </button>
                    </div>
                </HeroBannerForPOS>
            </div>
                </FadeOnVisibility>
            <div className="mx-auto mt-3 sm:mt-5 px-4 sm:px-6 lg:px-8">
                <FadeOnVisibility>
                <h1 className="text-2xl sm:text-3xl pt-6 sm:pt-8 lg:pt-10 font-bold mb-4 text-title-pos text-center">PHẦN MỀM QUẢN LÝ BÁN HÀNG</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full pb-4 h-auto justify-center">
                    <Card img="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/function/sapo6870/icon-solution-1.png" title={(<>
                        Dễ sử dụng <br />Thân thiện với người dùng
                    </>)} description="Với giao diện đơn giản, thao tác trực quan, chỉ cần một chiếc điện thoại là đủ để tạo đơn hàng, xuất hóa đơn điện tử và theo dõi doanh thu. Mọi thứ trở nên dễ dàng ngay cả với người mới bắt đầu không cần am hiểu công nghệ" >
                    </Card>
                    <Card img="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/function/sapo6870/icon-solution-2.png?v=2" title={(<span>
                        Ưu đãi trọn gói <br />Không phát sinh chi phí
                    </span>)} description="Khi đăng ký sử dụng hóa đơn điện tử, bạn được tặng miễn phí phần mềm quản lý bán hàng và chữ ký số HSM. Không cần đầu tư thêm thiết bị hay mua phần mềm riêng lẻ – một lựa chọn thông minh để tối ưu ngân sách và sẵn sàng vận hành ngay">
                    </Card>
                    <Card img="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/function/sapo6870/icon-solution-3.png" title={(
                        <span>
                            Tuân thủ pháp lý <br />Giảm thiểu rủi ro
                        </span>
                    )} description="Giải pháp được thiết kế để đáp ứng đúng quy định về hóa đơn điện tử theo Nghị định 70/2025/NĐ-CP. Yên tâm triển khai, hạn chế tối đa nguy cơ bị xử phạt và rút ngắn thời gian kiểm tra, đối chiếu với cơ quan thuế" >
                    </Card>
                    <Card img="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/function/sapo6870/icon-solution-4.png" title={(<span>
                        Hỗ trợ tận nơi <br />Đồng hành dài hạn
                    </span>)} description="Đội ngũ chuyên gia giàu kinh nghiệm, am hiểu nghiệp vụ kế toán – thuế luôn sẵn sàng hỗ trợ doanh nghiệp từ khâu triển khai, hướng dẫn sử dụng đến vận hành thực tế. Cam kết đồng hành lâu dài, không để khách hàng tự xoay xở. không chỉ cung cấp phần mềm, mà còn là đối tác kỹ thuật đáng tin cậy" >
                    </Card>
                </div>
                    </FadeOnVisibility>
                <FadeOnVisibility>
                <h1 className="text-3xl pt-6 font-bold mb-6 text-title-pos text-center"> TỰ ĐỘNG HOÁ QUY TRÌNH KẾ TOÁN VÀ THUẾ ĐIỆN TỬ</h1>
                <CenterImageWithFeatures
                    img={img7}
                    leftContent={
                        <>
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-500 rounded-full mt-3 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-check-icon lucide-calendar-check"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></svg>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-2xl text-title-pos mb-1 mt-2">Kê khai, nộp thuế ngay trên phần mềm</h2>
                                    <div className="flex items-start gap-2 mt-2">
                                        <div className={`w-2 h-2 rounded-full aspect-square flex items-start mt-2 justify-center bg-blue-500`}>

                                        </div>
                                        <p className="text-text">Quản lý hồ sơ thuế tập trung, đầy đủ, dễ tra cứu</p>
                                    </div >
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 rounded-full aspect-square flex items-start mt-2 justify-center bg-blue-500`}>

                                        </div>
                                        <p className="text-text">Theo dõi trạng thái tờ khai, cập nhật liên tục</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 rounded-full aspect-square flex items-start mt-2 justify-center bg-blue-500`}>

                                        </div>
                                        <p className="text-text">Tích hợp chữ ký số, ký và gửi tờ khai nhanh chóng</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 rounded-full aspect-square flex items-start mt-2 justify-center bg-blue-500`}>

                                        </div>
                                        <p className="text-text">Nhận thông báo tự động từ cơ quan Thuế trong một nơi duy nhất</p>
                                    </div>
                                </div >
                            </div >
                            <div className="flex items-start gap-3">
                                <div className="bg-green-500 mt-2 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#00c950 " stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-minus-icon lucide-shield-minus"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M9 12h6" /></svg>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-2xl text-title-pos mb-1 mt-2">Tích hợp chữ ký số HSM</h2>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 aspect-square rounded-full flex items-start mt-2 justify-center bg-green-500`}>

                                        </div>
                                        <p className="text-text">Ký trực tiếp trên điện thoại, không cần máy tính</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2  aspect-square rounded-full flex items-start mt-2 justify-center bg-green-500`}>

                                        </div>
                                        <p className="text-text">Tích hợp sẵn, không cần cài đặt thêm</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 aspect-square rounded-full flex justify-center items-start mt-2 bg-green-500`}>

                                        </div>
                                        <p className="text-text">Hợp lệ, bảo mật cao, đáp ứng đầy đủ quy định của cơ quan Thuế</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    rightContent={
                        <>
                            <div className="flex items-start gap-3">
                                <div className="bg-orange-500 mt-2 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-receipt-text-icon lucide-receipt-text"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" /><path d="M14 8H8" /><path d="M16 12H8" /><path d="M13 16H8" /></svg>                                </div>
                                <div>
                                    <h2 className="font-semibold text-2xl mt-2 mb-2 text-title-pos">Xuất hóa đơn điện tử</h2>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 aspect-square rounded-full flex items-start mt-2 justify-center bg-orange-500`}>

                                        </div>
                                        <p className="text-text">Đầy đủ nghiệp vụ hóa đơn</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 aspect-square rounded-full flex items-start mt-2 justify-center bg-orange-500`}>

                                        </div>
                                        <p className="text-text">Xuất hóa đơn điện tử ngay sau khi bán hàng</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 aspect-square rounded-full flex items-start mt-2 justify-center bg-orange-500`}>

                                        </div>
                                        <p className="text-text">Gửi hóa đơn cho khách ngay sau khi thanh toán</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-500 rounded-full mt-3 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-list-check-icon lucide-list-check"><path d="M11 18H3" /><path d="m15 18 2 2 4-4" /><path d="M16 12H3" /><path d="M16 6H3" /></svg>                                </div>
                                <div>
                                    <h2 className="font-semibold text-2xl mt-2 mb-1 text-title-pos">Xử lý hóa đơn đầu vào</h2>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 aspect-square rounded-full flex items-start mt-2 justify-center bg-purple-500`}>

                                        </div>
                                        <p className="text-text">Tự động nhận và lưu trữ hóa đơn từ nhà cung cấp</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 aspect-square rounded-full flex items-start mt-2 justify-center bg-purple-500`}>

                                        </div>
                                        <p className="text-text">Kiểm tra tính hợp lệ, phát hiện sai sót kịp thời</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 aspect-square rounded-full flex items-start mt-2 justify-center bg-purple-500`}>

                                        </div>
                                        <p className="text-text">Đối chiếu công nợ chính xác, giảm thao tác thủ công</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-2 h-2 aspect-square rounded-full flex items-start mt-2 justify-center bg-purple-500`}>

                                        </div>
                                        <p className="text-text">Cảnh báo rủi ro và lập chứng từ hàng loạt nhanh chóng</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                />
                    </FadeOnVisibility>
                <h1 className="text-2xl sm:text-3xl pt-6 sm:pt-8 lg:pt-10 font-bold mb-4 sm:mb-6 text-title-pos text-center" >GIẢI PHÁP QUẢN LÝ VÀ BÁN HÀNG TOÀN DIỆN CHO HỘ KINH DOANH</h1>

                <ImageWithTextBlock
                    image={img8}
                    imageLeft={false} // ← hoặc false nếu muốn hình bên phải
                    title="Quản lý kho thông minh"
                    titleColor="text-title-pos"
                    titleSize="text-2xl"
                    titleWeight="font-bold"
                    listItems={[
                        {
                            text: "\tCập nhật tự động với số lượng hàng hóa điều chỉnh theo thời gian thực sau mỗi giao dịch bán hoặc nhập",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                        {
                            text: "\tCảnh báo thông minh khi tồn kho xuống dưới ngưỡng tối thiểu, đảm bảo nhập hàng kịp thời và không đứt nguồn cung",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                        {
                            text: "\tKiểm kho nhanh gọn nhờ quét mã vạch và tạo phiếu kiểm kê chỉ trong vài thao tác, tiết kiệm thời gian và hạn chế sai sót so với phương pháp thủ công\n",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                    ]}
                    listColor="#2C2C2C"
                    listIconBg="bg-green-500"
                />

                <ImageWithTextBlock
                    image={img9}
                    imageLeft={true} // ← hoặc false nếu muốn hình bên phải
                    title="Bán hàng đa kênh hiệu quả"
                    titleColor="text-title-pos"
                    titleSize="text-2xl"
                    titleWeight="font-bold"
                    listItems={[
                        {
                            text: "\tNâng cao hiệu quả kinh doanh trên sàn thương mại điện tử thông qua kết nối và đồng bộ toàn diện. Mọi đơn hàng, tồn kho và thanh toán được xử lý tự động, đảm bảo vận hành liền mạch, giảm thiểu sai sót và tối ưu doanh thu",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                        {
                            text: "\tQuản lý tập trung đơn hàng và giao dịch online khi toàn bộ dữ liệu từ các kênh được đồng bộ về một hệ thống duy nhất, theo dõi và xác nhận thanh toán theo thời gian thực. Quy trình xử lý đơn hàng và đối soát ship COD được khép kín, hạn chế tối đa thất thoát tiền và hàng hóa trong suốt quá trình vận hành",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                    ]}
                    listColor="#2C2C2C"
                    listIconBg="bg-green-500"
                />
                <ImageWithTextBlock
                    image={img10}
                    imageLeft={false} // ← hoặc false nếu muốn hình bên phải
                    title="Báo cáo kinh doanh toàn diện"
                    titleColor="text-title-pos"
                    titleSize="text-2xl"
                    titleWeight="font-bold"
                    listItems={[
                        {
                            text: "\tHệ thống báo cáo kinh doanh trực quan, dễ sử dụng, cho phép theo dõi doanh thu, lợi nhuận và hiệu quả hoạt động mọi lúc, mọi nơi trên mọi thiết bị",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                        {
                            text: "\tDữ liệu được phân tích chi tiết theo mặt hàng, nhân viên, chi nhánh và từng khoảng thời gian, giúp nhà quản lý kiểm soát dòng tiền và đưa ra quyết định chính xác, kịp thời",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                        {
                            text: "\tTích hợp cơ chế phân quyền truy cập và bảo mật cao, toàn bộ công nợ, thực thu, sổ quỹ và lãi lỗ được kiểm soát tập trung trên một nền tảng duy nhất",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                    ]}
                    listColor="#2C2C2C"
                    listIconBg="bg-green-500"
                />
                <ImageWithTextBlock
                    image={img11}
                    imageLeft={true} // ← hoặc false nếu muốn hình bên phải
                    title="Tích hợp đa thiết bị"
                    titleColor="text-title-pos"
                    titleSize="text-2xl"
                    titleWeight="font-bold"
                    listItems={[
                        {
                            text: "\tGoPay vận hành linh hoạt trên mọi thiết bị từ điện thoại, laptop, PC đến máy POS mini, máy in hóa đơn, két đựng tiền và máy quét mã vạch giúp tận dụng thiết bị sẵn có tại cửa hàng và tiết kiệm chi phí đầu tư ban đầu",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                        {
                            text: "\tỨng dụng được tối ưu cho thiết bị di động miễn phí tải từ App Store và CH Play hoạt động mượt mà trên cả iOS và Android với giao diện thân thiện dễ thao tác cho phép quản lý và bán hàng nhanh chóng ngay trên điện thoại",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                        {
                            text: "\tTrong trường hợp mất kết nối Internet mọi giao dịch vẫn được ghi nhận nhờ công nghệ điện toán đám mây và sẽ tự động đồng bộ khi mạng hoạt động trở lại đảm bảo bán hàng không gián đoạn và dữ liệu luôn được bảo toàn",
                            color: "text-text",
                            size: "text-base",
                            weight: "font-medium"
                        },
                    ]}
                    listColor="#2C2C2C"
                    listIconBg="bg-green-500"
                />
                <FadeOnVisibility>
                <ImageTabsComponent
                    title="GoPay"
                    subtitle="BÁN HÀNG DỄ DÀNG - QUẢN LÝ NHẸ NHÀNG"
                    tabs={paymentTabs}
                    buttonText="Dùng thử miễn phí"
                    onButtonClick={() => console.log('Try free clicked')}
                    backgroundColor="bg-gray-50"
                    className="w-full mx-auto my-12 max-w-7xl"
                    animationDuration="duration-700"
                />
                    </FadeOnVisibility>
                <FadeOnVisibility>
                <ImageGalleryWithTitle
                    title="THÔNG TIN MÀN HÌNH CỦA PHẦN MỀM"
                    description="GoPay giải pháp số hóa toàn diện giúp hộ kinh doanh và doanh nghiệp nhỏ vận hành tinh gọn, minh bạch và tuân thủ đúng pháp luật. Từ quản lý tồn kho, đơn hàng, thanh toán đến xuất hóa đơn điện tử hợp lệ theo Nghị định 123/2020/NĐ-CP, tích hợp chữ ký số HSM và kê khai thuế trực tuyến theo Luật Quản lý thuế, mọi quy trình đều được tự động hóa và bảo mật trên một nền tảng duy nhất. GoPay giúp tiết kiệm thời gian, giảm rủi ro, tăng năng suất và đảm bảo mỗi giao dịch đều đúng chuẩn để bạn yên tâm kinh doanh, phát triển bền vững trong kỷ nguyên số."
                    titleColor="text-title-pos"
                    titleSize="text-3xl"
                    titleWeight="font-bold"
                    descColor="text-text"
                    descSize="text-base"
                    descWeight="font-normal"
                    captionColor="text-black"
                    captionSize="text-md"
                    captionWeight="font-semibold"
                    items={[
                        { image: img1, caption: { text: "Dashboard", color: "text-text" } },
                        { image: img3, caption: { text: "Trang bán hàng", color: "text-text" } },
                        { image: img2, caption: { text: "Quản lý đơn hàng", color: "text-text" } },
                        { image: img4, caption: { text: "Quản lý kho hàng", color: "text-text" } },
                        { image: img5, caption: { text: "Quản lý kênh bán hàng", color: "text-text" } },
                        { image: img6, caption: { text: "Phân tích báo cáo", color: "text-text" } }
                    ]}
                />
                    </FadeOnVisibility>
                {/*<FocusCenterSlider*/}
                {/*    title="BẢN TIN KINH TẾ XANH"*/}
                {/*    titleColor="text-[#61B946]"*/}
                {/*    titleSize="text-3xl"*/}
                {/*    titleWeight="font-bold"*/}
                {/*    titleAlign="text-left md:text-center"*/}
                {/*    items={focusSlides}*/}
                {/*/>*/}
            </div >
            <RegistrationForm />
        </>
    );
}
