import DSC from '@/assets/DSC.jpg'


const DaoTaoKiemKe = () => {
    return (
        <div className="w-full my-10 shadow-all-3xl bg-center py-5 px-5 items-center justify-center flex min-h-125 h-max bg-cover rounded-2xl" style={{
            backgroundImage: `url(${DSC})`
        }}>
            <div className="w-full p-3 flex flex-col shadow-all-3xl max-w-120 h-full bg-frontground rounded-2xl">
                <h1 className="text-title text-lg font-black flex-3">
                    KHOÁ ĐÀO TẠO VÀ HƯỚNG DẪN LẬP BÁO CÁO KIỂM KÊ KHÍ NHÀ KÍNH CẤP CƠ SỞ THEO NGHỊ ĐỊNH 06/2022/NĐ - CP NGÀY 25-26/01/2024 & 21-22/03/2024
                </h1>
                <p className='text-text flex-7 p-3'>
                    Với cam kết mang lại giá trị cao nhất, khóa học cung cấp:
                    <ul className='list-disc list-inside'>
                        <li className="mt-3">
                            Giáo trình chuẩn theo quy định Việt Nam và tiêu chuẩn quốc tế, do giảng viên giàu kinh nghiệm biên soạn.
                        </li>
                        <li className="mt-3">
                            Kết hợp lý thuyết và thực hành, giúp học viên có thể lập báo cáo kiểm kê khí nhà kính cơ bản và ứng dụng ngay vào công việc.
                        </li>
                        <li className="mt-3">
                            Chứng chỉ có số lưu chuyển chính thức từ Trường Đại học Tài nguyên và Môi trường, bảo đảm tính chuyên nghiệp và uy tín.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default DaoTaoKiemKe;