import img1 from '@/assets/doingu/cb06bab40753a80df142.jpg'
import img2 from '@/assets/doingu/DSC_0002.jpg'
import img3 from '@/assets/doingu/9173e5d7d90a7854211b.jpg'
import EventSingle from "@/components/reusable-component/EventSingle.tsx";

const EventCart = () => {
    return (
        <div className="bg-background  my-5">

            <h1 className="text-2xl font-bold mb-4 text-title text-center">CHƯƠNG TRÌNH ĐÀO TẠO ĐẲNG CẮP</h1>
            <div className="grid md:grid-cols-3 xl:mx-0 grid-cols-1 lg:gap-1 gap-2">

                <EventSingle title="Đào tạo lập báo cáo kiểm kê khí nhà kính cấp cơ sở"image={img1} location="TP.Hồ Chí Minh" time="06 - 07/06/2024" type="Offline/Online"></EventSingle>
                <EventSingle title="Đào tạo lập báo cáo kiểm kê khí nhà kính cấp cơ sở"image={img2} location="TP.Hồ Chí Minh" time="25-26/01/2024" type="Offline/Online"></EventSingle>
                <EventSingle title="Đào tạo lập báo cáo kiểm kê khí nhà kính cấp cơ sở"image={img3} location="TP.Hồ Chí Minh" time="21-22/03/2024" type="Offline/Online"></EventSingle>

            </div>



        </div>

    )
}
export default EventCart