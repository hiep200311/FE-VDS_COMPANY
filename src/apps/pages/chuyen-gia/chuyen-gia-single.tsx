import SectionWithImage from '@/components/reusable-component/SectionWithImage';
import Timeline from '@/components/reusable-component/Timeline';
import TimelineItem from '@/components/reusable-component/TimelineItem';
import WorkImage from '@/assets/template/work-img.jpg';

import Certification from '@/components/reusable-component/Certification';

import experts from '@/libs/chuyen-gia-data';

import { useNavigate, useParams } from 'react-router';


import ActivityArticle from '@/components/reusable-component/ActivityArticle';
import ExpertAbout from '@/components/reusable-component/ExpertAbout';
import useTitle from '@/libs/hook/use-title';
import useFavicon from '@/libs/hook/use-favicon';


const ChuyenGiaSingle = () => {
    const {id} = useParams();
    const information = experts[id!];
    const navigate = useNavigate();

    if (information === null) {
        console.log(1);
        navigate("/chuyen-gia");
    }

    useTitle(information.name);
    useFavicon("/logo.png");

    return (
        <div className="container lg:px-20 m-auto mt-5">
            <div className="md:flex flex-row">
                <div className="w-full h-full flex-7/12 pb-5">
                    <div className="lg:text-left text-center text-text w-full text-xl lg:text-3xl uppercase pb-5">Chuyên gia</div>
                    {information.name && <div className="lg:text-left text-title font-black text-7xl lg:text-9xl w-full text-center lg:px-0 px-3 uppercase pb-5">{information.name}</div>}
                    {information.title && <div className="lg:text-left text-center text-text w-full text-xl lg:text-3xl pb-5">{information.title}</div>}
                </div>
                {/* {information.images && 
                    <div className="w-full h-full flex-5/12 lg:px-0 px-10">
                        <img src={information.images[0]} className="w-full h-full object-contain"/>
                    </div>                
                } */}

            </div>
            
            <ExpertAbout information={information} />


            {information.experiences && <SectionWithImage image={WorkImage} imageFirstDesktop={false}>
                <Timeline>
                    <h1 className="text-2xl font-bold mb-4 text-title text-center">KINH NGHIỆM LÀM VIỆC</h1>
                    {information.experiences.map(a => (
                        <TimelineItem time={a.time} title={a.title}>
                            {a.description}
                        </TimelineItem>
                    ))}
                </Timeline>
            </SectionWithImage>}
            {information.activities && 
            <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 lg:gap-6 gap-2 py-5">
                {information.activities.map(a => (
                    <ActivityArticle photo={a.image} title={a.title}>
                        {a.description}
                    </ActivityArticle>
                ))}
            </div>
            }

            {information.certifications && 
            <div className="w-full">
                {information.certifications.map(e => (
                    <Certification image={e.image} title={e.title} location={e.location} description={e.description} time={e.time}/>
                ))}    
            </div>
            }

        </div>
    )
}

export default ChuyenGiaSingle;