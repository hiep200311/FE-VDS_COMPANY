import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { extractPagesFromPDF } from "@/utils/pdfProcessor";
import { useTranslation } from "react-i18next";

const HosoBookViewer: React.FC = () => {
    const { i18n } = useTranslation();
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        extractPagesFromPDF(
            i18n.language === "en"
                ? "/pdfs/VDS_HSNL_EN.pdf"
                : "/pdfs/VDS_HSNL_VI.pdf"
        )
            .then(setImages)
            .catch((err) => {
                console.error("Failed to load PDF:", err);
                setError("Failed to load the PDF. Please try again later.");
            })
            .finally(() => setLoading(false));
    }, [i18n.language]);

    return (
        <div className="w-full flex justify-center items-center p-4">
            {loading ? (
                <div className="text-gray-500 animate-pulse">Loading pages...</div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <HTMLFlipBook
                    width={500}
                    height={400}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1536}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="shadow-2xl rounded-xl"
                    style={{}}
                    startPage={0}
                    drawShadow={true}
                    flippingTime={800}
                    usePortrait={true}
                    startZIndex={0}
                    autoSize={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    {images.map((src, i) => (
                        <div key={i} className="bg-white">
                            <img
                                src={src}
                                alt={`Page ${i + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </HTMLFlipBook>
            )}
        </div>
    );
};

export default HosoBookViewer;