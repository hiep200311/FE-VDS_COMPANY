import Header from "@/components/layout-components/Header"
import { Outlet } from "react-router"
import Footer from "@/components/layout-components/Footer";


const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}

export default RootLayout