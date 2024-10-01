import { Avatar, Button } from '@mui/material';
import backgroundImage from '../../images/Homepage_Background.png';

export default function Homepage() {
    return (
        <div
            id="home"
            key="home"
            className='HomeBackground'
        >
            <div className='hidden lg:block'>
                <LargeHomepage />
            </div>
            <div className='hidden md:block lg:hidden'>
                <MediumHomepage />
            </div>
            <div className='block md:hidden'>
                <SmallHomepage />
            </div>
        </div>
    );
}

function LargeHomepage() {
    return (
        <div className='min-h-screen w-full flex items-center justify-center'>
            <div className={[
                'lg:w-[350px] lg:h-[500px]',
                'xl:w-[400px] xl:h-[550px]',
                '2xl:w-[450px] 2xl:h-[600px]',
                'Homepage_Sanet_Image mx-large rounded-lg'
            ].join(' ')}></div>
            <div className={[
                'lg:w-[750px] lg:h-[500px]',
                'xl:w-[800px] xl:h-[550px]',
                '2xl:w-[1000px] 2xl:h-[600px]',
                'mr-large',
            ].join(' ')}>
                <div className="text-title text-primary font-bold mb-small">Transform Your Life with Expert Guidance</div>
                <div className='text-secondary mb-small'>Empowering you to overcome obstacles, achieve your goals, and find lasting fulfillment.</div>
                <div>I’m Sanet Nash, a certified Life Coach and Cognitive Behavioral Therapy Practitioner based in Bryanston, Johannesburg.
                    With years of experience in helping individuals unlock their potential and overcome challenges,
                    I’m here to guide you on your path to personal growth.
                </div>
                <CTA />
            </div>
        </div>
    );
}

function MediumHomepage() {
    return (
        <>
            <div className='min-h-screen w-full flex flex-col items-center justify-center'>
                <div className=' flex items-center justify-center mx-large'>
                    <Avatar className='Homepage_Sanet_Image text-transparent' variant='rounded' sx={{ width: 200, height: 200 }} ></Avatar>
                    <div>
                        <div className="text-title text-primary font-bold mb-small ml-small">
                            Transform Your Life with Expert Guidance
                        </div>
                        <div className='text-secondary mb-small ml-small'>
                            Empowering you to overcome obstacles, achieve your goals, and find lasting fulfillment.
                        </div>
                    </div>

                </div>

                <div className='mx-large mt-small'>
                    <div>
                        I’m Sanet Nash, a certified Life Coach and Cognitive Behavioral Therapy Practitioner based in Bryanston, Johannesburg.
                        With years of experience in helping individuals unlock their potential and overcome challenges, I’m here to guide you on
                        your path to personal growth.
                    </div>
                </div>
            </div>
        </>

    );
}

function SmallHomepage() {
    return (
        <div className='min-h-screen w-full flex flex-col justify-center px-large'>
            <div className="text-subtitle text-primary font-bold mb-small">
                Transform Your Life with Expert Guidance
            </div>
            <div className='text-secondary mb-small'>
                Empowering you to overcome obstacles, achieve your goals, and find lasting fulfillment.
            </div>

            <div className=''>
                <div>
                    I’m Sanet Nash, a certified Life Coach and Cognitive Behavioral Therapy Practitioner based in Bryanston, Johannesburg.
                    With years of experience in helping individuals unlock their potential and overcome challenges, I’m here to guide you on
                    your path to personal growth.
                </div>
            </div>
        </div>
    );
}

function CTA() {

    const handleTabClick = () => {
        const section = document.getElementById("contact");

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Button variant='contained' className='mt-medium bg-tertiary hover:bg-secondary' onClick={(e) => handleTabClick()}>Start your journey now</Button>
    );
}

