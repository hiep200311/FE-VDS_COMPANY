import {Clock, CalendarDays, MapPin} from 'lucide-react'
interface props {
    title: string,
    image: string,
    location: string,
    time: string,
    type: string,
}
const EventSingle = ({title, image,location,time,type}: props) => {

    return (
        <div className="w-auto  lg:h-76 h-80 xl:ml-10 xl:mr-0 md:mr-2 sm:mx-5 mx-10  my-1  bg-frontground rounded-lg transition-transform duration-300 hover:scale-110 shadow-md ">
            <div className="h-32 overflow-hidden">
                <img
                    src={image}
                    alt="Event"
                    className="w-full h-full object-cover rounded-lg bg-no-repeat  "
                />
            </div>
            <div className="pt-5 px-5">
                <div>
                    <h3 className="text-xl text-title font-semibold mb-2">{title}</h3>
                </div>
                <div className="ml-2">
                    <div className="lg:text-lg text-md text-text ">
                        <p className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-title" /> {location}
                        </p>
                        <p className="flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-title" /> {time}
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-title" /> {type}
                        </p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default EventSingle