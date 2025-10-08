import PeopleCard from "@/components/reusable-component/PeopleCard"
import lanImage from '@/assets/doingu/lan.png';
import ngaImage from '@/assets/doingu/nga.png';
import quynhAnhImage from '@/assets/doingu/quynh_anh.png';
import tamImage from '@/assets/doingu/tam.png';

const ChuyenGia = () => {
    return (
        <div className="container lg:px-20 m-auto mt-5">
            <h1 className="text-2xl font-bold mb-4 text-title text-center">ĐỘI NGŨ CHUYÊN GIA</h1>
            <PeopleCard link="/chuyen-gia/le-vu-hoang-lan" title="ÔNG LÊ VŨ HOÀNG LÂN" image={lanImage} description={[
                "Chuyên gia chuyển đổi số và cải tiến sản xuất Shindashi Nhật bản", 
                "Chuyên gia Tư vấn khởi nghiệp/Kinh doanh JICA", 
                "Chuyên gia Kinh nghiệm trong lĩnh vực tín chỉ Carbon, kiểm kê khí nhà kính"
            ]}/>
            <PeopleCard  link="/chuyen-gia/tran-thanh-tam" title="TS. TRẦN THANH TÂM" image={tamImage} description={[
                "Tiến sỹ Chuyên gia Công nghệ Vật liệu và Môi trường",
                "Chuyên gia Khí nhà kính có kinh nghiệm trong ISO 1064, ISO 14067, CBAM và thị trường carbon",
                "Kinh nghiệm làm việc với nhiều doanh nghiệp sản xuất thép, sơn, xi măng, kiểm kê khí nhà kính"
            ]}/>
            <PeopleCard  link="/chuyen-gia/dinh-thi-nga" title="PGS, TS. ĐINH THỊ NGA" image={ngaImage} description={[
                "Phó Giáo sư, Tiến sỹ Kỹ thuật Môi trường",
                "Chuyên Gia Khí nhà kính với kỹ năng kiểm kê khí nhà kính (ISO 14064)",
                "Định lượng dấu chân carbon sản phẩm (ISO 14067) và chứng minh tính trung hòa carbon (PAS 2060)"
            ]}/>
            <PeopleCard  link="/chuyen-gia/le-huu-quynh-anh" title="TS. LÊ HỮU QUỲNH ANH" image={quynhAnhImage} description={[
                "Tiến sĩ Công nghệ Hóa học",
                "Chuyên Gia Khí nhà kính với kỹ năng Kiểm kê khí nhà kính (ISO 14064)",
                "Định lượng dấu chân carbon sản phẩm (ISO 14067) và chứng minh tính trung hòa carbon (PAS 2060)"
            ]}/>
        </div>
    )
}

export default ChuyenGia