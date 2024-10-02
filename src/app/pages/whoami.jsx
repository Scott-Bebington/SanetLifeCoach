"use client";

import { Typography, Fade } from "@mui/material";
import { useState } from "react";

export default function WhoAmI() {
  return (
    <main
      key="background"
      id="background"
      className="min-h-screen w-full py-12"
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
  return (
    <>
      <section className="px-large py-medium flex">


        <aside className="w-3/5">
          <Typography variant="h3" className="text-primary font-bold w-full mb-small">
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
          <Typography variant="h4" className="text-secondary font-bold w-full mt-medium">
            Industries i have been involved in
          </Typography>
          <ul className="text-tertiary list-disc pl-5 space-y-2">
            <li>Accounts and PM Trainee @ East Driefontein Gold mine</li>
            <li>Portfolio Management & accounts @Sable Holdings</li>
            <li>PR & below the line marketing (Partner)@The Publicity Workshop</li>
            <li>Charity Trust as Trustee</li>
            <li>Wild life research project with Wits University (actively)</li>
            <li>Project Manager in Residential Building (Self-employed)</li>
          </ul>
        </aside>
        {/* <img src="/images/CBT_image_1.png" className="rounded-lg w-2/5 min-w-[450px] h-[600px] mr-large" /> */}
        <div className="rounded-lg w-2/5 min-w-[450px] h-[600px] flex items-center justify-center border-2 border-blue-500 ml-small">
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
        <ul className="text-tertiary list-disc pl-5 space-y-2">
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

  const [cbtChecked, setCbtChecked] = useState(false);
  const [benefitsChecked, setBenefitsChecked] = useState(false);

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
        <ul className="text-tertiary list-disc pl-5 space-y-2">
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
