import { Mail, MessageCircle, Phone } from 'lucide-react';
import {easeOut, motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Panel = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [inView, controls]);

    const fadeInVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: easeOut
            }
        })
    };
    const controlsTitle = useAnimation();
    const [refTitle, inViewTitle] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inViewTitle) controlsTitle.start('visible');
    }, [inViewTitle, controlsTitle]);

    const fadeInTitle = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut
            }
        }
    };

    return (
        <div className="max-w pb-6 h-auto bg-background overflow-hidden">
            <div className="container m-auto mt-5">
                <motion.div
                    ref={refTitle}
                    initial="hidden"
                    animate={controlsTitle}
                    variants={fadeInTitle}
                    className="p-4 bg text-title font-bold text-2xl mx-5 text-center"
                >
                    ĐỂ NHẬN THÔNG TIN CẬP NHẬT VỀ SẢN PHẨM,DỊCH VỤ HAY CÁC CHƯƠNG TRÌNH KHUYẾN MÃI
                </motion.div>

                <div ref={ref} className="md:grid grid-cols-3 gap-3 not-md:mx-3">
                    {[{
                        icon: <Mail className="object-contain w-30 h-20 p-3 m-auto" />,
                        title: 'Gửi yêu cầu hỗ trợ',
                        desc: 'info@vds.io.vn'
                    }, {
                        icon: <MessageCircle className="object-contain w-30 h-20 p-3 m-auto" />,
                        title: 'Chat với VDS',
                        desc: 'Khi có bất cứ câu hỏi nào'
                    }, {
                        icon: <Phone className="object-contain w-30 h-20 p-3 m-auto" />,
                        title: 'Gọi hotline',
                        desc: '086 864 6332'
                    }].map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate={controls}
                            variants={fadeInVariant}
                            className="drop-shadow-2xl bg-frontground rounded-lg text-text text-xl text-center font-semibold py-4 px-4 h-60 mb-10"
                        >
                            {item.icon}
                            <article className="text-wrap h-auto mx-8">
                                <p className="font-bold text-xl">{item.title}</p>
                                <p className="font-light text-lg py-2">{item.desc}</p>
                            </article>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Panel;
