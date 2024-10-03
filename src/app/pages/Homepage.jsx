"use client";
import { Avatar, Button, IconButton, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

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
    <>
      <div className='min-h-screen w-full flex items-center justify-evenly'>
        <aside className="h-[400px] w-3/5">
          <Typography variant='h3' className="w-full text-primary font-bold mb-small">Transform Your Life with Expert Guidance</Typography>
          <Typography variant='h5' className='w-full text-secondary mb-small'>Empowering you to overcome obstacles, achieve your goals, and find lasting fulfillment.</Typography>
          <Typography variant='body1' className='w-full'>I&apos;m Sanet Nash, a certified Life Coach and Cognitive Behavioral Therapy Practitioner based in Bryanston, Johannesburg.
            With years of experience in helping individuals unlock their potential and overcome challenges,
            I&apos;m here to guide you on your path to personal growth.
          </Typography>
          <CTA />
        </aside>
        <aside className='h-[400px] w-[400px] border-2 border-blue-500 rounded-full flex items-center justify-center'>
          Image placeholder of your choice
        </aside>
      </div>
      <div className='absolute bottom-0 left-0 pt-small pr-medium rounded-tr-[100px] bg-primary'>
        <WhatsAppIcon
          className='text-white hover:text-green-500 rounded-full p-2 h-12 w-12 cursor-pointer'
          onClick={() => { window.location.href = 'https://wa.me/27827820000'; }}
        />
        <InstagramIcon
          className='text-white hover:text-red-500 rounded-full py-2 h-12 w-12 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.instagram.com/sanetnash/'; }}
        />
        <FacebookOutlinedIcon
          className='text-white hover:text-blue-500 rounded-full py-2 h-12 w-12 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.facebook.com/SanetNashLifeCoach/'; }}
        />
        <EmailOutlinedIcon
          className='text-white hover:text-tertiary rounded-full py-2 h-12 w-12 cursor-pointer'
          onClick={() => { window.location.href = 'mailto:sanetnash"gmail.com'; }}
        />
        <LocalPhoneOutlinedIcon
          className='text-white hover:text-secondary rounded-full py-2 h-12 w-12 cursor-pointer'
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
        <section className='flex items-center justify-evenly'>
          <aside className='h-[300px] w-[300px] border-2 border-blue-500 rounded-lg flex items-center justify-center'>
            Image placeholder of your choice
          </aside>
          <aside className="h-[300px] w-3/5">
            <Typography variant='h3' className="w-full text-primary font-bold mb-small">Transform Your Life with Expert Guidance</Typography>
            <Typography variant='h5' className='w-full text-secondary mb-small'>Empowering you to overcome obstacles, achieve your goals, and find lasting fulfillment.</Typography>

            <CTA />
          </aside>
        </section>
        <section>
          <Typography variant='body1' className='w-full'>I&apos;m Sanet Nash, a certified Life Coach and Cognitive Behavioral Therapy Practitioner based in Bryanston, Johannesburg.
            With years of experience in helping individuals unlock their potential and overcome challenges,
            I&apos;m here to guide you on your path to personal growth.
          </Typography>
        </section>


      </div>
      <div className='absolute bottom-[10px] left-[10px]'>
        <WhatsAppIcon
          className='text-green-500 rounded-full p-2 h-12 w-12 cursor-pointer'
          onClick={() => { window.location.href = 'https://wa.me/27827820000'; }}
        />
        <InstagramIcon
          className='text-red-500 rounded-full py-2 h-12 w-12 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.instagram.com/sanetnash/'; }}
        />
        <FacebookOutlinedIcon
          className='text-blue-500 rounded-full py-2 h-12 w-12 cursor-pointer'
          onClick={() => { window.location.href = 'https://www.facebook.com/SanetNashLifeCoach/'; }}
        />
        <EmailOutlinedIcon
          className='text-primary rounded-full py-2 h-12 w-12 cursor-pointer'
          onClick={() => { window.location.href = 'mailto:sanetnash"gmail.com'; }}
        />
        <LocalPhoneOutlinedIcon
          className='text-secondary rounded-full py-2 h-12 w-12 cursor-pointer'
          onClick={() => { window.location.href = 'tel:+27827820000'; }}
        />
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
          I&apos;m Sanet Nash, a certified Life Coach and Cognitive Behavioral Therapy Practitioner based in Bryanston, Johannesburg.
          With years of experience in helping individuals unlock their potential and overcome challenges, I&apos;m here to guide you on
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

