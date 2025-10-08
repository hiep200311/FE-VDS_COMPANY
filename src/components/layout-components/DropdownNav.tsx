import useIsMobile from "@/libs/hook/use-is-mobile";
import { useOutsideClick } from "@/libs/hook/use-outside-click";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react"
import { Link, useLocation } from "react-router";


const DropdownNav = ({ items, children, link }: { items: { label: ReactNode, link: string }[], children: ReactNode, link: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    const isMobile = useIsMobile();

    const location = useLocation();
    const path = location.pathname;


    // const openDropdown = () => { setIsOpen(true) }
    const closeDropdown = () => { setIsOpen(false) }
    const toggleDropdown = () => { setIsOpen(!isOpen) }
    const listRef = useRef<HTMLLIElement>(null);

    useOutsideClick({
        ref: listRef,
        handler: async () => {
            await new Promise(res => setTimeout(res, 1))
            closeDropdown();
        },
        enabled: true
    })

    useEffect(() => {
        const node = listRef.current;

        if (!node) return;

        const handleMouseEnter = () => {
            if (!isMobile) setIsOpen(true);
        };
        const handleMouseExit = () => {
            if (!isMobile) setIsOpen(false);
        };

        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseExit);

        return () => {
            node.removeEventListener('mouseenter', handleMouseEnter);
            node.removeEventListener('mouseleave', handleMouseExit);
        };
    }, [listRef, isMobile])

    return (
        <li ref={listRef} className='lg:my-0 h-full my-5'>
            <span className="relative md:flex h-[100%] text-text">
                <button
                    className={`flex lg:w-auto w-full items-center ${path.startsWith(link) ? 'text-title' : 'text-text'} opacity-50 hover:opacity-100 transition-colors cursor-pointer`}
                    onClick={toggleDropdown}
                ><span className="lg:flex-none flex-1 items-start flex font-bold text-nowrap overflow-x-hidden">{children}</span><ChevronDown className={`w-4 h-4 lg:flex-none flex-[0.2] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                    <ul
                        className="lg:absolute lg:top-[70%] w-max lg:mt-0 mt-3 block left-0 bg-[#00000000] lg:bg-frontground border-0 rounded shadow-lg z-1">
                        {/* <li className="px-4 py-2 rounded cursor-pointer">Home</li> */}
                        {items.map((item) => (
                            <Link to={`${link}${item.link}`}>
                                <li className={`${path.startsWith(`${link}${item.link}`) ? 'text-title' : 'text-text'} px-4 py-2 break-all hover:bg-frontground-100 rounded cursor-pointer whitespace-nowrap`}>
                                    {item.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}

            </span>
        </li>
    )
}

export default DropdownNav