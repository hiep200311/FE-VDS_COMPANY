import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";

interface props {
    link:string, 
    children: ReactNode
}



const NavLink = ({ link, children } : props) => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <li className='my-5'>
            <Link to={link} className={`${path.startsWith(link)?'text-title':'text-text'} opacity-50 hover:opacity-100 transition-colors font-bold text-nowrap overflow-x-hidden`}>{children}</Link>
        </li>
    )
}

export default NavLink