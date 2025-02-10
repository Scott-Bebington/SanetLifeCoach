"use client";

import { Typography, Fade } from "@mui/material";
import { useState } from "react";

export default function LifeCoaching() {

  const items = [
    {
      title: "Improve your well-being",
      icon: "/images/well_being.png",
    },
    {
      title: "Address your stress and anxiety",
      icon: "/images/stress.png",
    },
    {
      title: "Enhance your self-belief",
      icon: "/images/self-acceptance.png",
    },
    {
      title: "Feel more confident",
      icon: "/images/confidence.png",
    },
    {
      title: "Lead with authority",
      icon: "/images/leadership.png",
    },
    {
      title: "Focused time and energy",
      icon: "/images/smart-energy.png",
    },
    {
      title: "Get motivated",
      icon: "/images/reward.png",
    },
    {
      title: "Improve your relationships",
      icon: "/images/interaction.png",
    },
  ]

  return (
    <main
      key="life-coaching"
      id="life-coaching"
      className="min-h-screen w-full "
    >
      <section className="flex">
        {/* <img src="/images/my_approach.png" className="h-screen w-1/2" /> */}
        <div>
          <section className="px-small lg:px-large py-medium">
            <div className="my-large">
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

      <section className="w-full px-small lg:px-large flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/2">
          <div className="mb-large">
            <Typography variant="h4" className="text-secondary font-bold text-center">
              Life Coaching for positive Change
            </Typography>
          </div>

          {/* <div className="flex items-center justify-center flex-wrap gap-4"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {items.map((item, index) => (
              <div className="flex items-center justify-start h-fit rounded-[24px] bg-primary p-4" key={index}>
                <img src={item.icon} className="h-14 w-14 mr-small" />
                <Typography variant="body1" className="text-white text-center">{item.title}</Typography>
              </div>
            ))}


          </div>
        </aside>

        <aside className="flex flex-col lg:items-center w-full lg:w-1/2 space-y-10 py-large lg:py-0">
          <div className="flex justify-between flex-col md:flex-row lg:flex-col">
            <section>
              <Typography variant="h4" className="text-secondary font-bold">
                Coaching provides:
              </Typography>
              <div className="text-black pt-small pb-large">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Own unique time </li>
                  <li>Structured support</li>
                  <li>Challenges</li>
                  <li>Exercises</li>
                  <li>Practical tools</li>
                </ul>
              </div>
            </section>
            <section>
              <Typography variant="h4" className="text-secondary font-bold">
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
            </section>
          </div>
        </aside>

      </section>

      <section className="p-large">
        <div>

        </div>


      </section>
    </main>
  );
}
