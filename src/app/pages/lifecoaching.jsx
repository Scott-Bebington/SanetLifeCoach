"use client";

import { Typography, Fade } from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function LifeCoaching() {
  return (
    <main
      key="life-coaching"
      id="life-coaching"
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
      <section className="px-large py-medium">
        <Typography variant="h4" className="text-primary font-bold w-full text-center mb-small">
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
      <section className="px-large flex">
        {/* Text Content */}
        <aside className="w-1/2">
          <Typography variant="h4" className="text-secondary font-bold">
            Life Coaching for positive Change
          </Typography>
          <Typography variant="body1" className="text-tertiary pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Improve your well being</li>
              <li>Address your stress and anxiety</li>
              <li>Enhance your self-belief</li>
              <li>Feel more confident</li>
              <li>Lead with authority</li>
              <li>Focused time and energy</li>
              <li>Get motivated</li>
              <li>Improve your relationships</li>
            </ul>
          </Typography>
        </aside>
        {/* Image placeholder div */}
        <aside className="h-[377px] w-1/2 bg-red-500 rounded-lg float-left mr-small flex items-center justify-center">
          Image Placeholder
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
        <aside className="h-[377px] w-1/2 mr-small">
          <div className="h-[380px] w-10/12 bg-red-500 rounded-lg float-left mr-small flex items-center justify-center">
            Image Placeholder
          </div>
        </aside>
        {/* Text Content */}
        <aside className="w-1/2">
          <Typography variant="h4" className="text-secondary font-bold">
            Coaching provides:
          </Typography>
          <Typography variant="body1" className="text-tertiary pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Own unique time </li>
              <li>Structured support</li>
              <li>Challenges</li>
              <li>Exercises</li>
              <li>Practical tools</li>
            </ul>
          </Typography>
          <Typography variant="h4" className="text-secondary font-bold pt-small">
            Assisting in
          </Typography>
          <Typography variant="body1" className="text-tertiary pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Overcoming challenges</li>
              <li>Being at peace</li>
              <li>Achieving goals</li>
              <li>Development personally and professionally</li>
            </ul>
          </Typography>
        </aside>

      </section>
    </>

  );
}

function Tablet() {
  return (
    <>
      <section className="px-large py-medium">
        <Typography variant="h4" className="text-primary font-bold w-full text-center mb-small">
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
      <section className="px-large flex">
        {/* Text Content */}
        <aside className="w-1/2">
          <Typography variant="h4" className="text-secondary font-bold">
            Life Coaching for positive Change
          </Typography>
          <Typography variant="body1" className="text-tertiary pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Improve your well being</li>
              <li>Address your stress and anxiety</li>
              <li>Enhance your self-belief</li>
              <li>Feel more confident</li>
              <li>Lead with authority</li>
              <li>Focused time and energy</li>
              <li>Get motivated</li>
              <li>Improve your relationships</li>
            </ul>
          </Typography>
        </aside>
        {/* Image placeholder div */}
        <aside className="h-[377px] w-1/2 bg-red-500 rounded-lg float-left mr-small flex items-center justify-center">
          Image Placeholder
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
        <aside className="h-[380px] w-7/12 bg-red-500 rounded-lg float-left mr-small flex items-center justify-center">
          Image Placeholder
        </aside>
        {/* Text Content */}
        <aside className="w-5/12">
          <Typography variant="h4" className="text-secondary font-bold">
            Coaching provides:
          </Typography>
          <Typography variant="body1" className="text-tertiary pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Own unique time </li>
              <li>Structured support</li>
              <li>Challenges</li>
              <li>Exercises</li>
              <li>Practical tools</li>
            </ul>
          </Typography>
          <Typography variant="h4" className="text-secondary font-bold pt-small">
            Assisting in
          </Typography>
          <Typography variant="body1" className="text-tertiary pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Overcoming challenges</li>
              <li>Being at peace</li>
              <li>Achieving goals</li>
              <li>Development personally and professionally</li>
            </ul>
          </Typography>
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
        <Typography variant="h4" className="text-primary font-bold w-full text-center mb-small">
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
        {/* Text Content */}
        <div className="w-full">

          <Typography variant="h5" className="text-secondary font-bold">
            Life Coaching for positive Change
          </Typography>
          <Typography variant="body1" className="text-tertiary pt-small">
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
          </Typography>
          <div className="text-blue-500 cursor-pointer" onClick={() => setPositiveChange(!positiveChangeChecked)}>
            {positiveChangeChecked ? "Read less" : "Read more"}
          </div>
        </div>
        {/* Image placeholder div */}
        <div className="h-[300px] w-full bg-red-500 rounded-lg mr-small flex items-center justify-center">
          Image Placeholder
        </div>
      </section>
      <section className="px-small py-small">

        {/* Text Content */}
        <div className="w-full">
          <Typography variant="h5" className="text-secondary font-bold">
            Coaching provides:
          </Typography>
          <Typography variant="body1" className="text-tertiary pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Own unique time </li>
              <li>Structured support</li>
              <li>Challenges</li>
              <li>Exercises</li>
              <li>Practical tools</li>
            </ul>
          </Typography>
          <Typography variant="h5" className="text-secondary font-bold pt-small">
            Assisting in
          </Typography>
          <Typography variant="body1" className="text-tertiary pt-small">
            <ul className="list-disc pl-5 space-y-2">
              <li>Overcoming challenges</li>
              <li>Being at peace</li>
              <li>Achieving goals</li>
              <li>Development personally and professionally</li>
            </ul>
          </Typography>
        </div>
        {/* Image placeholder div */}
        <div className="h-[250px] w-full bg-red-500 rounded-lg float-left mr-small flex items-center justify-center">
          Image Placeholder
        </div>
      </section>
    </>

  );
}
