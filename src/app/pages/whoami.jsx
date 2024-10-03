"use client";

import { Typography, Fade, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function WhoAmI() {
  return (
    <main
      key="background"
      id="background"
      className="min-h-screen w-full py-12 bg-background"
    >
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="hidden md:block lg:hidden">
        <Tablet />
      </div>
      <div className="block md:hidden">
        <Mobile />
      </div>
    </main>
  );
}


function Desktop() {
  const [industries, setIndustries] = useState([
    "Accounts and PM Trainee @ East Driefontein Gold mine",
    "Portfolio Management & accounts @ Sable Holdings",
    "PR & below the line marketing (Partner) @ The Publicity Workshop",
    "Charity Trust as Trustee",
    "Wild life research project with Wits University (actively)",
    "Project Manager in Residential Building (Self-employed)",
  ]);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBackClick = () => {
    if (isTransitioning) return; // Prevents double-clicking during the transition

    setIsTransitioning(true);

    document.getElementById('industry-1').classList.add('fade-out');
    document.getElementById('industry-2').classList.add('translate-left');
    document.getElementById('industry-3').classList.add('translate-left');
    document.getElementById('industry-4').classList.add('fade-in');

    setTimeout(() => {
      // Rotate industries array after animation (shift left)
      setIndustries((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });

      // Reset all animations
      document.getElementById('industry-1').classList.remove('fade-out');
      document.getElementById('industry-2').classList.remove('translate-left');
      document.getElementById('industry-3').classList.remove('translate-left');
      document.getElementById('industry-4').classList.remove('fade-in');

      setIsTransitioning(false);
    }, 700); // This timeout matches the animation duration
  };

  const handleForwardClick = () => {
    if (isTransitioning) return; // Prevents double-clicking during the transition

    setIsTransitioning(true);

    // document.getElementById('industry-4').classList.remove('hidden');

    document.getElementById('industry-4').classList.add('fade-in-right');
    document.getElementById('industry-3').classList.add('fade-out-right');
    document.getElementById('industry-2').classList.add('translate-right');
    document.getElementById('industry-1').classList.add('translate-right');

    setTimeout(() => {
      // Rotate industries array after animation (shift right)
      setIndustries((prev) => {
        const last = prev.pop();
        return [last, ...prev];
      });

      document.getElementById('industry-4').classList.remove('fade-in-right');
      document.getElementById('industry-3').classList.remove('fade-out-right');
      document.getElementById('industry-2').classList.remove('translate-right');
      document.getElementById('industry-1').classList.remove('translate-right');
      //   // 

      setIsTransitioning(false);
    }, 700); // This timeout matches the animation duration
  };

  return (
    <>
      <section className="px-large py-medium flex">
        <aside className="w-3/5">
          <Typography variant="h3" className="text-primary font-bold w-full mb-medium">
            So who am I?
          </Typography>
          <Typography>
            I am a 55 year-old divorced woman. A mother of two young men aged 21 & 23.
            I was raised in a small-town community by my parents and one of three siblings.
            I spent my Highschool career in boarding school in the quaint town of Potchefstroom,
            where I matriculated at Potchefstroom Gimnasium in 1987.
            <br /> <br />
            I started a National Diploma in Purchasing Management at the Technicon of Pretoria but soon
            realized that I had no connection with the course and decided to change to Personnel Management (HR).
            I completed my Diploma through the Vaal Technicon whilst also working for Gold Fields Mining Company.
          </Typography>
          <Typography variant="h4" className="text-secondary font-bold w-full my-medium">
            Industries i have been involved in
          </Typography>
          <div className="flex space-x-10 items-center">
            <IconButton
              className="h-fit"
              onClick={handleBackClick}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <div
              id="industry-1"
              className="industry w-56 h-40 bg-primary p-medium flex items-center justify-center text-center rounded-lg text-white"
            >
              {industries[0]}
            </div>
            <div
              id="industry-2"
              className="industry w-56 h-40 bg-primary p-medium flex items-center justify-center text-center rounded-lg text-white"
            >
              {industries[1]}
            </div>
            <div
              id="industry-3"
              className="industry w-56 h-40 bg-primary p-medium flex items-center justify-center text-center rounded-lg text-white"
            >
              {industries[2]}
            </div>
            <div
              id="industry-4"
              className="industry w-56 h-40 bg-primary p-medium items-center justify-center text-center rounded-lg text-white hidden"
            >
              {industries[3]}
            </div>
            <IconButton
              className="h-fit"
              onClick={handleForwardClick}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </aside>

        <div className="rounded-lg w-2/5 min-w-[450px] h-[600px] flex items-center justify-center border-2 border-blue-500 ml-large">
          Placeholder image for your photo
        </div>
      </section>

      <section>
        <Typography variant="h4" className="text-secondary font-bold px-large py-medium">
          My Experience
        </Typography>
        <Typography variant="body1" className="px-large">
          I achieved my Life Coaching and CBT practitioner&apos;s certifications through Archology,
          Institute for Modern Applied Psychology. I have worked in very diverse industries over
          the past 32 years and as much as I have had a multitude of rewarding careers, I have always
          had a strong desire to work in a field that assists people with personal growth. I have also
          completed various other courses in the counselling and self-development fields to better equip
          me for where I am now. I believe that my own personal journey, challenges and celebrations will
          give you a true sense of safety with no space for judgement during our time spend together.
        </Typography>
      </section>
    </>
  );
}



function Tablet() {
  return (
    <>
      <section className="p-medium">
        {/* <img src="/images/CBT_image_1.png" className="h-[400px] w-[400px] rounded-lg float-left mr-small" /> */}
        <div className="h-[300px] w-[300px] rounded-lg float-left mr-small flex items-center justify-center border-2 border-blue-500 ml-small">
          Placeholder image for your photo
        </div>

        {/* Text Content */}
        <aside className="">
          <Typography variant="h4" className="text-primary font-bold w-full mb-small">
            So who am i?
          </Typography>
          <Typography>
            I am a 55 year-old divorced woman. A mother of two young men aged 21 & 23.
            I was raised in a small-town community by my parents and one of three siblings.
            I spent my Highschool career in boarding school in the quaint town of Potchefstroom,
            where I matriculated at Potchefstroom Gimnasium in 1987.
            <br /> <br />
            I started a National Diploma in Purchasing Management at the Technicon of Pretoria but soon
            realized that I had no connection with the course and decided to change to Personnel Management (HR).
            I completed my Diploma through the Vaal Technicon whilst also working for Gold Fields Mining Company.
          </Typography>
        </aside>
      </section>

      <section className="w-full px-medium">
        <Typography variant="h4" className="text-secondary font-bold w-full mt-medium">
          Industries i have been involved in
        </Typography>
        <ul className="text-black list-disc pl-5 space-y-2">
          <li>Accounts and PM Trainee @ East Driefontein Gold mine</li>
          <li>Portfolio Management & accounts @Sable Holdings</li>
          <li>PR & below the line marketing (Partner)@The Publicity Workshop</li>
          <li>Charity Trust as Trustee</li>
          <li>Wild life research project with Wits University (actively)</li>
          <li>Project Manager in Residential Building (Self-employed)</li>
        </ul>
      </section>


      <section className="px-medium">
        <Typography variant="h4" className="text-secondary font-bold mt-medium">
          My Experience
        </Typography>
        <Typography variant="body1">
          I achieved my Life Coaching and CBT practitioner&apos;s certifications through Archology,
          Institute for Modern Applied Psychology. I have worked in very diverse industries over
          the past 32 years and as much as I have had a multitude of rewarding careers, I have always
          had a strong desire to work in a field that assists people with personal growth. I have also
          completed various other courses in the counselling and self-development fields to better equip
          me for where I am now. I believe that my own personal journey, challenges and celebrations will
          give you a true sense of safety with no space for judgement during our time spend together.
        </Typography>
      </section>
    </>

  );
}

function Mobile() {

  return (
    <>
      <section className="p-small">
        {/* <img src="/images/CBT_image_1.png" className="h-[400px] w-[400px] rounded-lg float-left mr-small" /> */}
        <div className="aspect-square w-1/3 rounded-lg float-left mr-small flex items-center justify-center border-2 border-blue-500 ml-small">
          Placeholder image for your photo
        </div>

        {/* Text Content */}
        <aside className="">
          <Typography variant="h4" className="text-primary font-bold w-full mb-small">
            So who am i?
          </Typography>
          <Typography>
            I am a 55 year-old divorced woman. A mother of two young men aged 21 & 23.
            I was raised in a small-town community by my parents and one of three siblings.
            I spent my Highschool career in boarding school in the quaint town of Potchefstroom,
            where I matriculated at Potchefstroom Gimnasium in 1987.
            <br /> <br />
            I started a National Diploma in Purchasing Management at the Technicon of Pretoria but soon
            realized that I had no connection with the course and decided to change to Personnel Management (HR).
            I completed my Diploma through the Vaal Technicon whilst also working for Gold Fields Mining Company.
          </Typography>
        </aside>
      </section>

      <section className="w-full px-small">
        <Typography variant="h4" className="text-secondary font-bold w-full mt-small">
          Industries i have been involved in
        </Typography>
        <ul className="text-black list-disc pl-5 space-y-2">
          <li>Accounts and PM Trainee @ East Driefontein Gold mine</li>
          <li>Portfolio Management & accounts @Sable Holdings</li>
          <li>PR & below the line marketing (Partner)@The Publicity Workshop</li>
          <li>Charity Trust as Trustee</li>
          <li>Wild life research project with Wits University (actively)</li>
          <li>Project Manager in Residential Building (Self-employed)</li>
        </ul>
      </section>


      <section className="px-small">
        <Typography variant="h4" className="text-secondary font-bold mt-small">
          My Experience
        </Typography>
        <Typography variant="body1">
          I achieved my Life Coaching and CBT practitioner&apos;s certifications through Archology,
          Institute for Modern Applied Psychology. I have worked in very diverse industries over
          the past 32 years and as much as I have had a multitude of rewarding careers, I have always
          had a strong desire to work in a field that assists people with personal growth. I have also
          completed various other courses in the counselling and self-development fields to better equip
          me for where I am now. I believe that my own personal journey, challenges and celebrations will
          give you a true sense of safety with no space for judgement during our time spend together.
        </Typography>
      </section>
    </>

  );
}
