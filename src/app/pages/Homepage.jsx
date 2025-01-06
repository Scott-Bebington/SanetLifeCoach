"use client";
import { Avatar, Button, IconButton, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

// import { Dancing_Script } from "next/font/google";

// Initialize the font
// const dancingScript = Dancing_Script({
//   weight: ['400', '700'],
//   subsets: ['latin']
// });

export default function Homepage() {

  return (
    <div
      id="home"
      key="home"
      className='bg-[#ece8e8]'
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
    <>
      <div className='min-h-screen w-full flex items-center justify-evenly'>
        <aside className="w-3/5 flex">


          <div>
            <Typography
              variant='h3'
              className={`w-full text-customPrimary font-bold mb-small`}
            >
              Transform Your Life
            </Typography>
            <Typography
              variant='h5'
              className='w-full text-secondary mb-small'
            >
              Empowering you to overcome obstacles, achieve your goals, and find lasting fulfillment.
            </Typography>
            <Typography variant='body1' className='w-full' sx={{ marginTop: '10px' }}>
              I&apos;m Sanet Nash, a certified Life Coach and Cognitive Behavioral Therapy Practitioner based in Bryanston, Johannesburg. With experience in helping individuals unlock their potential and overcome challenges, I&apos;m here to guide you on your path to personal growth.
            </Typography>
            <img src='/images/Logo.jpg' className='h-[250px]' />
            <CTA />
          </div>
          {/* <div className='mt-medium space-y-5'>
            
            
          </div> */}
        </aside>



        <aside className='h-[400px] w-[400px] border-2 border-blue-500 rounded-full flex items-center justify-center'>
          Image placeholder of your choice
        </aside>
      </div>
      <div className='absolute bottom-0 left-0 pt-small pr-medium rounded-tr-[100px] bg-customPrimary z-0'>
        <WhatsAppIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-green-500 rounded-full p-2 cursor-pointer'
          onClick={() => { window.location.href = 'https://wa.me/27827820000'; }}
        />
        <InstagramIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-red-500 rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.instagram.com/sanetnash/'; }}
        />
        <FacebookOutlinedIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-blue-500 rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.facebook.com/SanetNashLifeCoach/'; }}
        />
        <EmailOutlinedIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-tertiary rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'mailto:sanetnash"gmail.com'; }}
        />
        <LocalPhoneOutlinedIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-secondary rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'tel:+27827820000'; }}
        />
      </div>
    </>

  );
}

function MediumHomepage() {
  return (
    <>
      <div className='min-h-screen w-full flex flex-col pt-24'>
        <section className='flex items-center justify-between px-medium'>
          <aside className='h-[300px] w-[300px] border-2 border-blue-500 rounded-lg flex items-center justify-center'>
            Image placeholder of your choice
          </aside>
          <aside className="h-[300px] w-3/5">
            <Typography variant='h3' className="w-full text-customPrimary font-bold mb-small">Transform Your Life with Expert Guidance</Typography>
            <Typography variant='h5' className='w-full text-secondary mb-small'>Empowering you to overcome obstacles, achieve your goals, and find lasting fulfillment.</Typography>

            <CTA />
          </aside>
        </section>
        <section>
          <Typography variant='body1' className='w-full p-medium'>I&apos;m Sanet Nash, a certified Life Coach and Cognitive Behavioral Therapy Practitioner based in Bryanston, Johannesburg.
            With years of experience in helping individuals unlock their potential and overcome challenges,
            I&apos;m here to guide you on your path to personal growth.
          </Typography>
        </section>


      </div>
      <div className='absolute bottom-0 left-0 pt-small pr-medium rounded-tr-[100px] bg-customPrimary z-0'>
        <WhatsAppIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-green-500 rounded-full p-2 cursor-pointer'
          onClick={() => { window.location.href = 'https://wa.me/27827820000'; }}
        />
        <InstagramIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-red-500 rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.instagram.com/sanetnash/'; }}
        />
        <FacebookOutlinedIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-blue-500 rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.facebook.com/SanetNashLifeCoach/'; }}
        />
        <EmailOutlinedIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-tertiary rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'mailto:sanetnash"gmail.com'; }}
        />
        <LocalPhoneOutlinedIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-secondary rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'tel:+27827820000'; }}
        />
      </div>
    </>

  );
}

function SmallHomepage() {
  return (
    <>
      <div className='min-h-screen w-full flex flex-col justify-center px-small'>
        <div className='w-full aspect-square border-2 border-blue-500 rounded-full mb-small flex items-center justify-center'>Image</div>
        <div className="text-subtitle text-customPrimary font-bold mb-small">
          Transform Your Life with Expert Guidance
        </div>
        <div className='text-secondary mb-small'>
          Empowering you to overcome obstacles, achieve your goals, and find lasting fulfillment.
        </div>
        <CTA />
      </div>
      <div className='absolute bottom-0 left-0 pt-small pr-medium rounded-tr-[100px] bg-customPrimary z-0'>
        <WhatsAppIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-green-500 rounded-full p-2 cursor-pointer'
          onClick={() => { window.location.href = 'https://wa.me/27827820000'; }}
        />
        <InstagramIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-red-500 rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.instagram.com/sanetnash/'; }}
        />
        <FacebookOutlinedIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-blue-500 rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.facebook.com/SanetNashLifeCoach/'; }}
        />
        <EmailOutlinedIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-tertiary rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'mailto:sanetnash"gmail.com'; }}
        />
        <LocalPhoneOutlinedIcon
          style={{ height: "40px", width: "40px" }}
          className='text-white hover:text-secondary rounded-full py-2 cursor-pointer'
          onClick={() => { window.location.href = 'tel:+27827820000'; }}
        />
      </div>
    </>

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
    <Button variant='contained' className='h-fit' onClick={(e) => handleTabClick()}>Start your journey now</Button>
  );
}

