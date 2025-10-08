import logoDark from "@/assets/logo/horizontal_white_transparent.png";
import logoLight from "@/assets/logo/horizontal_transparent.png";
import { Link } from "react-router";
import DropdownNav from "./DropdownNav";

import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import NavLink from "./NavLink";
import DarkModeButton from "../inmutable-components/DarkModeButton";
import Theme from "@/context/Theme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(Theme);

  return (
    <nav className="border-gray-200 bg-bg text lg:flex flex-row">
      <div className="max-w-screen-xl  flex flex-wrap items-center lg:flex-auto lg:w-full p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 w-full rtl:space-x-reverse flex-1 my-5"
        >
          <img
            src={theme === "dark" ? logoDark : logoLight}
            className="h-14 w-full object-contain"
            alt="Flowbite Logo"
          />
        </Link>

        {!isOpen ? (
          <Menu
            className="text-text lg:hidden block"
            onClick={() => {
              setIsOpen((old) => !old);
            }}
          />
        ) : (
          <X
            className="text-text lg:hidden block"
            onClick={() => {
              setIsOpen((old) => !old);
            }}
          />
        )}
      </div>

      <ul className={`items-center justify-center pl-5 space-x-8 ${isOpen ? 'block py-3' : 'hidden'} lg:flex lg:flex-auto flex-row w-full`}>
        <NavLink link='/gioi-thieu'>
          Giới thiệu
        </NavLink>
        <NavLink link='/ho-so-nang-luc'>
          Hồ sơ năng lực
        </NavLink>
        <DropdownNav link='/tu-van' items={[
          { label: 'Chuyển Đổi Số', link: '/chuyen-doi-so' },
          { label: 'Kiểm Kê Khí Nhà Kính', link: '/kiem-ke-khi-nha-kinh' },
          { label: 'Tín Chỉ Carbon', link: '/tin-chi-carbon' },
          { label: 'Truy Xuất Nguồn Gốc', link: '/truy-xuat-nguon-goc' },
          { label: 'Nhân Lực Số', link: '/nhan-luc-so' },
          { label: 'Khởi Nghiệp Và Kinh Doanh', link: '/khoi-nghiep-va-kinh-doanh' },
          { label: 'Cải Tiến Sản Xuất', link: '/cai-tien-san-xuat' },
          { label: 'POS', link: '/pos' }
        ]}>
          Tư Vấn
        </DropdownNav>
        <DropdownNav link='/dao-tao' items={[
          { label: 'Chuyển Đổi Số', link: '/chuyen-doi-so' },
          { label: 'Kiểm Kê Khí Nhà Kính', link: '/kiem-ke-nha-kinh' },
          { label: 'Nhân Lực Số', link: '/nhan-luc-so' },
          { label: 'Doanh Nghiệp', link: '/doanh-nghiep' },
        ]}>
          Đào Tạo
        </DropdownNav>
        <NavLink link='/tai-lieu'>
          Tài Liệu Tham Khảo
        </NavLink>
        <DropdownNav link='/tin-tuc' items={[
          { label: 'Tin Tức', link: '/tin-tuc' },
          { label: 'Sự Kiện', link: '/su-kien' },
          { label: 'Hội Thảo', link: '/hoi-thao' },
        ]}>
          Tin tức
        </DropdownNav>
        <NavLink link='/hub-cong-nghe'>
          Hub Công Nghệ
        </NavLink>
        <NavLink link='/chuyen-gia'>
          Chuyên Gia
        </NavLink>
      </ul>

      <div className={`max-w-screen-xl flex-row-reverse lg:w-full p-4 ml-auto lg:flex lg:my-auto ${isOpen ? 'block py-3' : 'hidden'}`}>
        <DarkModeButton />
      </div>
    </nav>
  )
}

export default Header;
