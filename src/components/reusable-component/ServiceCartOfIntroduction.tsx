import img1 from "@/assets/icon/4.png";
import img2 from "@/assets/icon/5.png";
import img3 from "@/assets/icon/6.png";
import img5 from "@/assets/icon/8.png";
import img6 from "@/assets/icon/9.png";
import ServiceSingleOfIntroduction from "../reusable-component/ServiceSingleOfIntroduction";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ServiceCartOfIntroduction = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Chỉ hiện khi thấy ít nhất 20% phần tử
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 }); // Scroll lên thì ẩn lại
    }
  }, [inView, controls]);

  return (
    <div className="bg-background m-5">
      <section className="max-w-7xl mx-auto">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-4 text-title text-center"
        >
          TƯ VẤN VÀ TRIỂN KHAI GIẢI PHÁP
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-2">
          <ServiceSingleOfIntroduction
            title="Hỗ trợ doanh nghiệp xây dựng kế hoạch hành động hướng tới mục tiêu Net Zero"
            image={img1}
          />
          <ServiceSingleOfIntroduction
            title="Tư vấn giải pháp kiểm kê và giảm nhẹ phát thải khí nhà kính"
            image={img2}
          />
          <ServiceSingleOfIntroduction
            title="Cung Cấp Tín Chỉ Carbon"
            image={img3}
          />
        </div>
        <div className="grid grid-cols-1 pt-5 md:grid-cols-2 lg:gap-6 gap-2">
          <ServiceSingleOfIntroduction
            title="Lập báo cáo phát thải khí nhà kính theo tiêu chuẩn quốc tế"
            image={img5}
          />
          <ServiceSingleOfIntroduction
            title="Tư vấn lập báo cáo ESG"
            image={img6}
          />
        </div>
      </section>
    </div>
  );
};
export default ServiceCartOfIntroduction;
