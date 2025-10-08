import CayXanh from "@/assets/cayxanh.jpeg";
import HeroBanner from "@/components/reusable-component/HeroBanner";
import SectionWithImage from "@/components/reusable-component/SectionWithImage";
import { MoveUpRight, Star } from "lucide-react";
import Section1Image from "@/assets/tinchicarbon/1.avif";
import Section2Image from "@/assets/tinchicarbon/2.png";
import Section3Image from "@/assets/tinchicarbon/3.png";
import StickyImageWithScrollingText from "@/components/reusable-component/StickyImageWithScrollingText";
import Sticky1Image from "@/assets/tinchicarbon/sticky1.avif";
import Sticky2Image from "@/assets/tinchicarbon/sticky2.avif";
import Sticky3Image from "@/assets/tinchicarbon/sticky3.avif";
import FadeOnVisibility from "@/components/reusable-component/FadeOnVisibility.tsx";

// image: string;
// title?: string;
// titleColor?: string;
// titleSize?: string;
// titleWeight?: string;
// children?: ReactNode;

const stickyImageSections = [
  {
    image: Sticky1Image,
    children: (
      <h1 className="text-3xl text-text">
        VDS chính là đối tác chiến lược bạn đang tìm kiếm.
      </h1>
    ),
  },
  {
    image: Sticky2Image,
    children: (
      <span className="text-text text-xl">
        <b>Đội ngũ chuyên gia hàng đầu</b>: Đội ngũ đến từ mạng lưới chuyên gia{" "}
        <b>Bộ Tài chính, Đại học Tài nguyên và Môi trường</b>. Có kinh nghiệm
        dày dặn về tin chỉ Carbon, chuyển đổi xanh, chuyển đổi số và phát triển
        bền vững.
      </span>
    ),
  },
  {
    image: Sticky3Image,
    children: (
      <span className="text-text text-xl">
        <b>Đồng hành dài hạn:</b> VDS cam kết đồng hành cùng doanh nghiệp trong
        hành trình trung hòa carbon. Chúng tôi không “làm xong là hết”, mà liên
        tục cập nhật chính sách, cơ hội carbon và hỗ trợ doanh nghiệp thích
        nghi.
      </span>
    ),
  },
];

const TinChiCarbon = () => {
  return (
    <>
      <FadeOnVisibility>
        <HeroBanner bg={CayXanh}>
          <div className="text-center lg:text-left">
            <h5 className="text-4xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight lg:leading-tight lg:text-5xl font-pj">
              Biến tiềm năng Carbon của bạn thành lợi thế cạnh tranh bền vững
            </h5>
            <p className="mt-2 text-lg text-gray-300 sm:mt-8 font-inter">
              Dịch vụ tư vấn tín chỉ carbon toàn diện của VDS, đồng hành cùng
              doanh nghiệp tuân thủ quy định, tối ưu hóa thực hành ESG và kiến
              tạo giá trị từ các hoạt động giảm phát thải khí nhà kính.
            </p>

            <form
              action="#"
              method="POST"
              className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl"
            >
              <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:ring-1">
                <div className="flex flex-col items-start sm:flex-row">
                  <div className="flex-1 w-full min-w-0">
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                      <label className="sr-only"></label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email to get started"
                        className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-gray-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-gray-600 focus:bg-gray-600"
                  >
                    <MoveUpRight />
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
            <div className="flex items-center">
              <p className="text-3xl font-medium text-gray-300 sm:text-4xl font-pj">
                50+
              </p>
              <p className="ml-3 text-sm text-gray-300 font-pj">
                Doanh nghiệp
                <br />
                tin tưởng
              </p>
            </div>
          </div>
        </HeroBanner>
      </FadeOnVisibility>
      <div className="lg:mx-30">
        <div className="container mx-auto my-10">
          <FadeOnVisibility>
            <SectionWithImage imageClass="object-contain" image={Section1Image}>
              <div className="flex flex-col items-center justify-center h-full">
                <div>
                  Trong bối cảnh biến đổi khí hậu ngày càng phức tạp, tín chỉ
                  carbon đã trở thành cơ chế tài chính xanh được công nhận trên
                  toàn cầu. Tại Việt Nam, thị trường carbon đang chính thức định
                  hình theo Nghị định 06/2022/NĐ-CP và cập nhật mới nhất Nghị
                  định 119/2025/NĐ-CP.
                </div>
              </div>
            </SectionWithImage>

            <div className="shadow-all-3xl mx-5 rounded-2xl lg:h-100">
              <SectionWithImage
                imageFirstDesktop={true}
                imageClass="object-contain lg:h-full h-70"
                image={Section2Image}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col gap-4">
                    <p>
                      Doanh nghiệp Việt Nam, đặc biệt là các đơn vị nằm trong
                      danh sách bắt buộc kiểm kê khí nhà kính theo Nghị định
                      06/2022/NĐ-CP, đây vừa là trách nhiệm tuân thủ, vừa là cơ
                      hội chiến lược cho các doanh nghiệp tiên phong nhằm:
                    </p>
                    <ul className="list-disc">
                      <li>
                        Tối ưu hóa chi phí phát thải bằng bù trừ tín chỉ carbon
                      </li>
                      <li>Tham gia thị trường carbon nội địa và quốc tế</li>
                      <li>Tăng khả năng xuất khẩu nhờ đáp ứng CBAM, ESG</li>
                    </ul>
                  </div>
                </div>
              </SectionWithImage>
            </div>

            <div className="shadow-all-3xl mx-5 rounded-2xl lg:h-100">
              <SectionWithImage
                imageFirstMobile={true}
                imageClass="object-contain lg:h-full h-70"
                image={Section3Image}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col gap-4">
                    <div className="font-bold text-xl">
                      Thách thức của doanh nghiệp
                    </div>
                    <p>
                      Doanh nghiệp Việt Nam, đặc biệt là các đơn vị nằm trong
                      danh sách bắt buộc kiểm kê khí nhà kính theo Nghị định
                      06/2022/NĐ-CP, đây vừa là trách nhiệm tuân thủ, vừa là cơ
                      hội chiến lược cho các doanh nghiệp tiên phong nhằm:
                    </p>
                    <ul className="list-disc">
                      <li>
                        Tối ưu hóa chi phí phát thải bằng bù trừ tín chỉ carbon
                      </li>
                      <li>Tham gia thị trường carbon nội địa và quốc tế</li>
                      <li>Tăng khả năng xuất khẩu nhờ đáp ứng CBAM, ESG</li>
                    </ul>
                  </div>
                </div>
              </SectionWithImage>
            </div>
          </FadeOnVisibility>
          <StickyImageWithScrollingText
            sections={stickyImageSections}
            imagePosition="left"
            className="my-20"
          />

          <div className="w-full flex flex-col gap-4 items-center px-10 my-10 h-70">
            <div className="flex text-yellow-300">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
            <div className="text-xl text-title uppercase font-bold">
              Doanh nghiệp nào nên sử dụng dịch vụ tư vấn tín chỉ carbon?
            </div>
            <ul className="list-disc w-full md:w-[80%] text-text">
              <li>
                Doanh nghiệp nằm trong danh mục kiểm kê GHG bắt buộc (sản xuất
                xi măng, nhiệt điện, sắt thép, dệt may, logistics...)
              </li>
              <li>Doanh nghiệp thực hành ESG, hướng đến Net Zero</li>
              <li>
                Doanh nghiệp xuất khẩu cần đáp ứng CBAM (EU) hoặc tiêu chuẩn ESG
                của Mỹ, Nhật...
              </li>
            </ul>
          </div>

          <div className="lg:mx-30 mx-10 gap-2 flex flex-col">
            <h1 className="text-title text-2xl text-center uppercase font-bold">
              Lợi ích chiến lược khi hợp tác cùng VDS
            </h1>
            <h1 className="text-text text-xl">
              Xác định chính xác tiềm năng tạo tín chỉ carbon trong nội bộ doanh
              nghiệp.
            </h1>
            <hr className="text-text/25" />
            <h1 className="text-text text-xl">
              Tối ưu lộ trình Net Zero với lợi ích tài chính từ carbon bù trừ.
            </h1>
            <hr className="text-text/25" />
            <h1 className="text-text text-xl">
              Chuẩn hóa hệ thống báo cáo phát thải theo yêu cầu pháp luật & quốc
              tế.
            </h1>
            <hr className="text-text/25" />
            <h1 className="text-text text-xl">
              Nắm bắt cơ hội tham gia thị trường carbon Việt Nam và quốc tế.
            </h1>
            <hr className="text-text/25" />
            <h1 className="text-text text-xl">
              Gia tăng uy tín ESG với đối tác, nhà đầu tư và khách hàng.
            </h1>
          </div>

          {/* <ExpandableSections items={[
                        {
                            title: 'Xác định chính xác tiềm năng tạo tín chỉ carbon trong nội bộ doanh nghiệp.',
                            content: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        },
                        {
                            title: 'Tối ưu lộ trình Net Zero với lợi ích tài chính từ carbon bù trừ.',
                            content: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>

                        },
                        {
                            title: 'Chuẩn hóa hệ thống báo cáo phát thải theo yêu cầu pháp luật & quốc tế.',
                            content: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        },
                        {
                            title: 'Nắm bắt cơ hội tham gia thị trường carbon Việt Nam và quốc tế.',
                            content: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        },
                        {
                            title: 'Gia tăng uy tín ESG với đối tác, nhà đầu tư và khách hàng.',
                            content: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>

                        },
                    ]} /> */}
        </div>
      </div>
    </>
  );
};

export default TinChiCarbon;
