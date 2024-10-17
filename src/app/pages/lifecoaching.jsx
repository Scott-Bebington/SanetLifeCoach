"use client";

import { Typography, Fade } from "@mui/material";
import { useState } from "react";

export default function LifeCoaching() {
  return (
    <main
      key="life-coaching"
      id="life-coaching"
      className="min-h-screen w-full bg-background"
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

  const items = [
    {
      title: "Improve your well-being",
      icon: "/images/well_being.png",
    },
    {
      title: "Address your stress and anxiety",
      icon: "/images/stress_anxiety.png",
    },
    {
      title: "Enhance your self-belief",
      icon: "/images/self_belief.png",
    },
    {
      title: "Feel more confident",
      icon: "/images/confidence.png",
    },
    {
      title: "Lead with authority",
      icon: "/images/authority.png",
    },
    {
      title: "Focused time and energy",
      icon: "/images/focused_time.png",
    },
    {
      title: "Get motivated",
      icon: "/images/motivated.png",
    },
    {
      title: "Improve your relationships",
      icon: "/images/relationships.png",
    },
  ]

  return (
    <>
      <section className="flex">
        {/* <img src="/images/my_approach.png" className="h-screen w-1/2" /> */}
        <div>
          <section className="px-large py-medium">
            <div className=" my-large">
              <Typography variant="h3" className="text-customPrimary font-bold w-full">Life Coaching</Typography>
            </div>
            <Typography variant="body1" className="mb-medium">
              Coaching is for every person who wants to evolve beyond traumatic experiences, discover their true purpose,
              achieve goals and improve mental wellness. Whether you&apos;re feeling stuck, overwhelmed, or simply ready for change,
              I&apos;m here to guide you through your transformation. By identifying where growth is desired, setting realistic goals
              and objectives and being accountable, you will be able to reach a place of positive self-awareness that will lead
              to fulfilment in many aspects or areas of your life.
            </Typography>

            <Typography variant="body1" className="mb-large">
              Life coaching helps you make positive changes in areas of your life in order for you to be your best self.
              It helps you to explore ideas that feel safe and aligned with your value system.
            </Typography>

          </section>
        </div>
      </section>

      <section className="w-full p-x">
        <div className="mb-large">
          <Typography variant="h4" className="text-primary font-bold text-center">
            Life Coaching for positive Change
          </Typography>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-4">

          {items.map((item, index) => (
            <div className="flex flex-col items-center justify-center w-96 h-fit rounded-[24px] bg-primary p-4" key={index}>
              <img src="/images/well_being.png" className="h-14 w-14" />
              <Typography variant="body1" className="text-white text-center">{item.title}</Typography>
            </div>
          ))}


        </div>
      </section>

      <section className="p-large">
        <div>
          <Typography variant="h4" className="text-secondary font-bold">
            Coaching provides:
          </Typography>
        </div>

        <div className="text-black pt-small">
          <ul className="list-disc pl-5 space-y-2">
            <li>Own unique time </li>
            <li>Structured support</li>
            <li>Challenges</li>
            <li>Exercises</li>
            <li>Practical tools</li>
          </ul>
        </div>
      </section>

      {/* <section className="p-large flex">
        <aside className="w-1/2 flex items-center justify-center">
          <div className="w-full">
            <div className="text-center w-full">
              <div>1. Own unique</div>
              <div>time</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div>5. Structured</div>
                <div>support</div>
              </div>
              <div className="p-large w-1/3 text-center">
                <Typography variant="h4" className="text-secondary font-bold">
                  Coaching
                </Typography>
                <Typography variant="h4" className="text-secondary font-bold">
                  provides
                </Typography>
              </div>
              <div className="">
                2. Challenges
              </div>
            </div>


            <div className="flex items-center justify-center space-x-24">
              <div>3. Exercises</div>
              <div>4. Practical tools</div>
            </div>
          </div>

        </aside>

        <aside className="w-1/2 flex items-center justify-center">
          <div className="w-full">
            <div className="text-center w-full flex justify-center">
              <div className="w-fit border-2 border-primary p-2 rounded-lg">
                <div>1. Overcoming</div>
                <div>challenges</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center w-1/3 flex justify-end">
                <div className="w-fit border-2 border-primary p-2 rounded-lg">
                  3. Achieving goals
                </div>
              </div>
              <div className="p-large w-1/3 text-center">
                <Typography variant="h4" className="text-secondary font-bold">
                  Assisting in
                </Typography>
              </div>
              <div className="w-1/3">
                <div className="w-fit border-2 border-primary p-2 rounded-lg">
                  2. Being at peace
                </div>

              </div>
            </div>


            <div className="flex justify-center">
              <div className="w-fit border-2 border-primary p-2 rounded-lg">
                <div>4. Development personally</div>
                <div>and professionally</div>
              </div>

            </div>
          </div>

        </aside>
      </section> */}





    </>
  );
}

function Tablet() {
  return (
    <>
      <section className="px-large py-medium">
        <Typography variant="h3" className="text-customPrimary font-bold w-full text-center mb-small">
          Life Coaching
        </Typography>
        <Typography>
          Coaching is for every person who wants to evolve beyond traumatic experiences, discover their true purpose,
          achieve goals and improve mental wellness. Whether you&apos;re feeling stuck, overwhelmed, or simply ready for change,
          I&apos;m here to guide you through your transformation. By identifying where growth is desired, setting realistic goals
          and objectives and being accountable, you will be able to reach a place of positive self-awareness that will lead
          to fulfilment in many aspects or areas of your life.
        </Typography>
      </section>
      <section className="px-large">
        {/* Text Content */}
        <aside className="w-full">
          <Typography variant="h4" className="text-secondary font-bold">
            Life Coaching for positive Change
          </Typography>
          <div className="flex justify-between">
            <ul className="text-black pt-small list-disc pl-5 space-y-2">
              <li>Improve your well being</li>
              <li>Address your stress and anxiety</li>
              <li>Enhance your self-belief</li>
              <li>Feel more confident</li>
              <li>Lead with authority</li>
              <li>Focused time and energy</li>
              <li>Get motivated</li>
              <li>Improve your relationships</li>
            </ul>
            <img
              src="/images/Life_Coaching_Image_1.png"
              className="h-[255px] w-7/12 rounded-lg float-left mr-4 flex items-center justify-center"
            />
          </div>
        </aside>

      </section>
      <section>
        <Typography variant="h6" className="px-large py-medium font-bold text-center">
          Life coaching helps you make positive changes in areas of your life in order for you to be your best self.
          It helps you to explore ideas that feel safe and aligned with your value system.
        </Typography>
      </section>
      <section className="px-large flex">
        {/* Image placeholder div */}
        <img
          src="/images/Life_Coaching_Image_2.png"
          className="h-[380px] w-10/12 rounded-lg float-left mr-4 flex items-center justify-center"
        />
        {/* Text Content */}
        <aside className="w-5/12">
          <Typography variant="h4" className="text-secondary font-bold">
            Coaching provides:
          </Typography>
          <div className="text-black pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Own unique time </li>
              <li>Structured support</li>
              <li>Challenges</li>
              <li>Exercises</li>
              <li>Practical tools</li>
            </ul>
          </div>
          <Typography variant="h4" className="text-secondary font-bold pt-small">
            Assisting in
          </Typography>
          <div className="text-black pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Overcoming challenges</li>
              <li>Being at peace</li>
              <li>Achieving goals</li>
              <li>Development personally and professionally</li>
            </ul>
          </div>
        </aside>

      </section>
    </>

  );
}

function Mobile() {

  const [positiveChangeChecked, setPositiveChange] = useState(false);

  return (
    <>
      <section className="p-small">
        <Typography variant="h4" className="text-customPrimary font-bold w-full text-center mb-small">
          Life Coaching
        </Typography>
        <Typography>
          Coaching is for every person who wants to evolve beyond traumatic experiences, discover their true purpose,
          achieve goals and improve mental wellness. Whether you&apos;re feeling stuck, overwhelmed, or simply ready for change,
          I&apos;m here to guide you through your transformation. By identifying where growth is desired, setting realistic goals
          and objectives and being accountable, you will be able to reach a place of positive self-awareness that will lead
          to fulfilment in many aspects or areas of your life.
        </Typography>
      </section>
      <section className="px-small">
        <div className="w-full">
          <Typography variant="h5" className="text-secondary font-bold">
            Life Coaching for positive Change
          </Typography>
          <div className="text-black pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Improve your well being</li>
              <li>Address your stress and anxiety</li>
              {positiveChangeChecked && (
                <>
                  <li>Enhance your self-belief</li>
                  <li>Feel more confident</li>
                  <li>Lead with authority</li>
                  <li>Focused time and energy</li>
                  <li>Get motivated</li>
                  <li>Improve your relationships</li>
                </>
              )}

            </ul>
          </div>
          <div className="text-blue-500 cursor-pointer" onClick={() => setPositiveChange(!positiveChangeChecked)}>
            {positiveChangeChecked ? "Read less" : "Read more"}
          </div>
        </div>
        {/* Image placeholder div */}
        <img
          src="/images/Life_Coaching_Image_1.png"
          className="h-[200px] w-full rounded-lg float-left mr-4 flex items-center justify-center"
        />
      </section>
      <section className="px-small py-small">

        {/* Text Content */}
        <div className="w-full">
          <Typography variant="h5" className="text-secondary font-bold">
            Coaching provides:
          </Typography>
          <ul className="text-black pt-small  list-disc pl-5 space-y-2">
            <li>Own unique time </li>
            <li>Structured support</li>
            <li>Challenges</li>
            <li>Exercises</li>
            <li>Practical tools</li>
          </ul>
        </div>
        {/* Image placeholder div */}
        <img
          src="/images/Life_Coaching_Image_2.png"
          className="h-[250px] w-full rounded-lg float-left mr-4 my-small flex items-center justify-center"
        />
        <Typography variant="h5" className="text-secondary font-bold pt-small">
          Assisting in
        </Typography>
        <ul className="text-black pt-small list-disc pl-5 space-y-2">
          <li>Overcoming challenges</li>
          <li>Being at peace</li>
          <li>Achieving goals</li>
          <li>Development personally and professionally</li>
        </ul>
      </section>
    </>

  );
}
