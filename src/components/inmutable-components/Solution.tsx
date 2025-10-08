import KhaiGiang from '@/assets/solution/khaigiang.jpg';
import Everyone from '@/assets/solution/everyone.jpg';
import Giang from '@/assets/solution/giang.jpg';

const Solution = () => {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4 text-title text-center mt-10">
                CÔNG TY CỔ PHẦN GIẢI PHÁP NỀN TẢNG SỐ VIỆT NAM (VDS)
            </h1>
            <p className='text-center text-text mb-3 mx-10 lg:mx-30'>
                VDS tự hào là đơn vị tiên phong trong việc cung cấp các giải pháp toàn diện nhằm giảm phát thải khí nhà kính và bảo vệ môi trường. Với cam kết tạo ra một cộng đồng doanh nghiệp hướng đến sự phát triển bền vững, chúng tôi đã hỗ trợ hơn 30 doanh nghiệp thành công triển khai kiểm kê.
            </p>
            <div className="grid lg:grid-cols-3 mx-10 lg:mx-auto gap-4">
                <div className="rounded-2xl overflow-hidden shadow-all-3xl">
                    <img src={KhaiGiang} className="aspect-square w-full object-cover" alt="..." />
                </div>

                <div className="rounded-2xl overflow-hidden shadow-all-3xl">
                    <img src={Everyone} className="aspect-square w-full object-cover" alt="..." />
                </div>

                <div className="rounded-2xl overflow-hidden shadow-all-3xl">
                    <img src={Giang} className="aspect-square w-full object-cover" alt="..." />
                </div>
            </div>
        </>

    )
}

export default Solution