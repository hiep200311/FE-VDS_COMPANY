import img1 from '@/assets/doingu/cb06bab40753a80df142.jpg'
import img2 from '@/assets/doingu/DSC_0002.jpg'
import img3 from '@/assets/doingu/9173e5d7d90a7854211b.jpg'
import EducationSingle from "@/components/reusable-component/EducationSingle";


const EducationCart = () => {
    return (
        <div className="bg-background  my-5">

                <h1 className="text-2xl font-bold mb-4 text-title text-center">LẬP BÁO CÁO KIỂM KÊ KHÍ NHÀ KÍNH</h1>
                <div className="grid md:grid-cols-3 xl:mx-0 grid-cols-1 lg:gap-1 gap-2">

                    <EducationSingle title="Đào tạo văn hóa doanh nghiệp"image={img1} location="TP.Hồ Chí Minh" time="Sắp diễn ra" type="Offline/Online"></EducationSingle>
                    <EducationSingle title="Đào tạo văn hóa doanh nghiệp"image={img2} location="TP.Hồ Chí Minh" time="Sắp diễn ra" type="Offline/Online"></EducationSingle>
                    <EducationSingle title="Đào tạo văn hóa doanh nghiệp"image={img3} location="TP.Hồ Chí Minh" time="Sắp diễn ra" type="Offline/Online"></EducationSingle>

                </div>



        </div>

    )
}
export default EducationCart