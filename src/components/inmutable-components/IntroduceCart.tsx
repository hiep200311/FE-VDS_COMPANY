import img1 from "@/assets/icon/GTCL-1.png";
import img2 from "@/assets/icon/GTCL-2.png";
import img3 from "@/assets/icon/GTCL-3.png";
import img4 from "@/assets/icon/GTCL-4.png";





import IntroduceSingle from "@/components/reusable-component/IntroduceSingle.tsx";

const ServiceCart = () => {
    return (
        <div className="bg-background  my-5">

            <h1 className="text-2xl font-bold mb-4 text-title text-center">GIÁ TRỊ CỐT LÕI</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 xl:mx-0 grid-cols-1 lg:gap-1 gap-2">
                <IntroduceSingle title="THẤU HIỂU"image={img1} ></IntroduceSingle>
                <IntroduceSingle title="SÁNG TẠO"image={img2}></IntroduceSingle>
                <IntroduceSingle title="HIỆU QUẢ"image={img3}></IntroduceSingle>
                <IntroduceSingle title="TRÁCH NHIỆM"image={img4} ></IntroduceSingle>



            </div>



        </div>

    )
}
export default ServiceCart