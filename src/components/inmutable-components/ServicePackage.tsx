

const ServicePackage = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 py-10 bg-background">
            {/* Box 1 */}
            <div className="relative bg-frontground rounded-lg p-6 w-full md:w-1/3 text-center shadow-sm min-h-[200px] flex flex-col justify-between">
                <div>
                    <div className="rounded-lg p-3 text-title font-bold text-left text-sm md:text-base">
                            ĐÀO TẠO VÀ HƯỚNG DẪN LẬP BÁO CÁO KIỂM KÊ KHÍ NHÀ KÍNH
                    </div>
                    <ul className="mt-4 list-disc list-inside text-left text-text">
                        <li>
                            <span>Chương trình đào tạo chuyên sâu</span>
                        </li>
                        <li>
                            <span>Hướng dẫn thực hành thực tế</span>
                        </li>
                        <li>
                            <span>Tư vấn và hỗ trợ kỹ thuật</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-4">
                    <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md">
                        LIÊN HỆ
                    </button>
                </div>
            </div>

            <div className="relative bg-frontground rounded-lg p-6 w-full md:w-1/3 text-center shadow-sm min-h-[200px] flex flex-col justify-between">
                <div>
                    <div className="rounded-lg p-3 text-title font-bold text-left text-sm md:text-base">
                        TƯ VẤN VÀ KIỂM KÊ KHÍ NHÀ KÍNH THEO TIÊU CHUẨN VIỆT NAM & QUỐC TẾ
                    </div>
                    <ul className="mt-4 list-disc list-inside text-left text-text">
                        <li>
                            <span>Tư vấn tuân thủ các tiêu chuẩn quốc tế Việt Nam</span>
                        </li>
                        <li>
                            <span>Thực hiện kiểm kê và thẩm định khí nhà khí</span>
                        </li>
                        <li>
                            <span>Đề xuất các giải pháp giảm phát thải khí nhà kínhư</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-4">
                    <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md">
                        LIÊN HỆ
                    </button>
                </div>
            </div>

            {/* Box 3 */}
            <div className="relative bg-frontground rounded-lg p-6 w-full md:w-1/3 text-center shadow-sm min-h-[200px] flex flex-col justify-between">
                <div>
                    <div className="rounded-lg p-3 text-title font-bold text-left text-sm md:text-base">
                        TƯ VẤN VÀ KIỂM KÊ KHÍ NHÀ KÍNH THEO CƠ CHẾ CBAM
                    </div>
                    <ul className="mt-4 list-disc list-inside text-left text-text">
                        <li>
                            <span>Tư vấn tuân thủ Cơ chế CBAM</span>
                        </li>
                        <li>
                            <span>Thu nhập và phân tích dữ liệu</span>
                        </li>
                        <li>
                            <span>Hỗ trợ báo cáo và chứng nhận</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-4">
                    <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md">
                        LIÊN HỆ
                    </button>
                </div>
            </div>
        </div>


    )
}
export default ServicePackage