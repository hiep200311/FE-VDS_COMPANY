import type { ReactNode } from "react";


interface props {
    bg: string,
    children?: ReactNode,
    className?: string;
}

const HeroBanner = ({ bg, children, className }: props) => {
    return (
        <section className={`pt-8 pb-8 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-cover bg-center bg-no-repeat ${className}`} style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-8 sm:gap-y-12 lg:gap-x-16">
                    <div className="order-2 lg:order-1">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;