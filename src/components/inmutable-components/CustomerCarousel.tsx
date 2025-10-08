import {useEffect, useState, useRef} from "react";
import img1 from '@/assets/customer/600-HTP.png';
import img2 from '@/assets/customer/600-cao-hung.png';
import img3 from '@/assets/customer/600-bti.png';
import img4 from '@/assets/customer/600-first-solar.png';
import img6 from '@/assets/customer/600-DRB.png';
import img7 from '@/assets/customer/600-gemadept.png';
import img8 from '@/assets/customer/600-ha-linh.png';
import img9 from '@/assets/customer/600-itl.png';
import img10 from '@/assets/customer/600-juwon-vina.png';
import img11 from '@/assets/customer/600-jvf.png';
import img12 from '@/assets/customer/600-CME.png';
import img13 from '@/assets/customer/600-minh-long.png';
import img14 from '@/assets/customer/600-royal.png';
import img15 from '@/assets/customer/600-saigon-3-jean.png';
import img16 from '@/assets/customer/600-sheico.png';
import img17 from '@/assets/customer/600-SR-SUNTOUR.png';
import img18 from '@/assets/customer/600-TGC.png';
import img19 from '@/assets/customer/600-viglacera.png';
import img20 from '@/assets/customer/600-youl-chon.png';
const originalImages =  [img1, img2, img3, img4, img6,img7, img8, img9, img10, img11, img12,img13, img14, img15, img16,img17, img18, img19, img20];
const duplicatedImages = [...originalImages, ...originalImages];

const CustomerCarousel:React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollStart, setScrollStart] = useState(0);

    const SPEED = 1;

    const animate = () => {
        const el = scrollRef.current;
        if (el && !isDragging) {
            el.scrollLeft += SPEED;

            const scrollWidth = el.scrollWidth;
            const halfWidth = scrollWidth / 2;

            // If scroll has reached the end of the second copy, reset to same spot in first copy
            if (el.scrollLeft >= halfWidth) {
                el.scrollLeft -= halfWidth;
            }
        }

        animationRef.current = requestAnimationFrame(animate);
    };


    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        el.scrollLeft = 0; // Start at the beginning


        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isDragging]);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleMouseDown = (e: MouseEvent) => {
            setIsDragging(true);
            setStartX(e.pageX - el.offsetLeft);
            setScrollStart(el.scrollLeft);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const x = e.pageX - el.offsetLeft;
            const walk = x - startX;
            el.scrollLeft = scrollStart - walk;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        el.addEventListener('mousedown', handleMouseDown);
        el.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            el.removeEventListener('mousedown', handleMouseDown);
            el.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, scrollStart]);


    return (
        <div className="p-4 bg-background" >
            <h1 className="text-2xl font-bold mb-4 text-title text-center">KHÁCH HÀNG</h1>
            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
                style={{ scrollBehavior: 'auto', whiteSpace: 'nowrap' }}
            >
                {duplicatedImages.map((img, i) => (
                    <div key={i} className="flex-shrink-0 w-64 h-64 rounded drop-shadow">
                        <img
                            src={img}
                            alt={`Ảnh ${i + 1}`}
                            className="w-full h-full object-contain rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerCarousel;