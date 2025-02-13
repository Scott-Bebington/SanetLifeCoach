"use client";

import { Typography, Fade, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function WhoAmI() {
  const industries = [
    "Accounts and PM Trainee @ East Driefontein Gold mine",
    "Portfolio Management & accounts @ Sable Holdings",
    "PR & below the line marketing (Partner) @ The Publicity Workshop",
    "Charity Trust as Trustee",
    "Wild life research project with Wits University (actively)",
    "Project Manager in Residential Building (Self-employed)",
  ];

  return (
    <main
      key="background"
      id="background"
      className="min-h-screen w-full py-12"
    >

      <Typography variant="h4" className="text-customPrimary font-bold w-full md:hidden">
        So who am I?
      </Typography>

      <section className="p-small md:p-medium lg:p-large">
        {/* <img src="/images/CBT_image_1.png" className="h-[400px] w-[400px] rounded-lg float-left mr-small" /> */}
        <div className="hidden md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-lg mr-large md:mr-medium md:float-left sm:mr-0 md:flex md:items-center md:justify-center border-2 border-blue-500">
          Placeholder image for your photo
        </div>

        <div className="md:hidden w-1/3 aspect-square border-2 border-blue-500 rounded-lg float-left mr-small">

        </div>

        {/* Text Content */}
        <aside className="sm:min-h-[200px] md:min-h-[300px] lg:min-h-[400px]">
          <div className="md:mb-small">
            <Typography variant="h3" className="text-customPrimary font-bold w-full hidden md:block">
              So who am I?
            </Typography>
          </div>

          <Typography variant="body1">
            I am a mature divorced woman. A mother of two young men.
            I was raised in a small-town community by my parents and one of three siblings.
            I spent my Highschool career in boarding school in the quaint town of Potchefstroom,
            where I matriculated at Potchefstroom Gimnasium in 1987.
            <br /> <br />
            I started a National Diploma in Purchasing Management at the Technicon of Pretoria but soon
            realized that I had no connection with the course and decided to change to Personnel Management (HR).
            I completed my Diploma through the Vaal Technicon whilst also working for Gold Fields Mining Company.
          </Typography>
          <Typography variant="h3" className="text-secondary font-bold py-medium">
            My Experience
          </Typography>
          <Typography variant="body1" className="">
            I achieved my Life Coaching and CBT practitioner&apos;s certifications through Archology,
            Institute for Modern Applied Psychology. I have worked in very diverse industries over
            the past 32 years and as much as I have had a multitude of rewarding careers, I have always
            had a strong desire to work in a field that assists people with personal growth. I have also
            completed various other courses in the counselling and self-development fields to better equip
            me for where I am now. I believe that my own personal journey, challenges and celebrations will
            give you a true sense of safety with no space for judgement during our time spend together.
          </Typography>
        </aside>
      </section>

      <section className="px-small md:px-medium lg:px-large">
        <Typography variant="h4" className="text-secondary font-bold w-full my-medium">
          Industries i have been involved in
        </Typography>
        <div className="flex overflow-x-auto space-x-10 w-full pb-2 scrollbar-hide">
          <ul className="list-disc pl-5 space-y-2">
            {industries.map((industry, index) => (
              <li key={index}>{industry}</li>
            ))}
          </ul>

        </div>
      </section>

      <section className="px-small md:px-medium lg:px-large">

      </section>
    </main>
  );
}