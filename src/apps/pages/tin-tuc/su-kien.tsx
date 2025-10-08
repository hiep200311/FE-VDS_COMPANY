import CountdownTimer from "@/components/reusable-component/CountdownTimer.tsx";
import EventCart from "@/components/inmutable-components/EventCart.tsx";
import EducationCart from "@/components/inmutable-components/EducationCart.tsx";
const SuKien = () => {
    return (
        <div className=" container lg:px-20 m-auto mt-5 ">
            <CountdownTimer/>
            <div className="py-5">
                <EventCart/>
            </div>
            <div>
                <EducationCart/>
            </div>

        </div>
    )
}

export default SuKien