"use client";

import { Typography, Fade } from "@mui/material";
import { useState } from "react";
import Typewriter from 'typewriter-effect';
import { CBTHeader, CBTMainContent, CBTSubContent, CBTPurpose, CBTBenefitsMainContent, CBTBenefitsSubContent } from "../components/cbt/content";

const characteristics = [
  'Growing openness to Experience',
  'Living life Existentially',
  'Increased trust in self',
  'Freedom of choice',
  'Raw creativity',
  'Consistency and Constructiveness',
  'A purpose orientated life',
];

export default function CBT() {
  return (
    <main
      key="cbt"
      id="cbt"
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

        <img src="/images/CBT_image_1.png" className="rounded-lg w-2/5 h-[600px] mr-large" />
        <aside className="w-3/5 flex flex-col justify-around">
          <div>
            <CBTHeader />
            <CBTMainContent />
            <CBTSubContent />
          </div>

          <CBTPurpose />

        </aside>


      </section>
      <section className="px-large flex items-stretch">
        <aside className="w-full flex flex-col justify-between">
          <div>
            <CBTBenefitsMainContent />
            <CBTBenefitsSubContent />
          </div>

          <Typography variant="h5" className="text-tertiary font-bold text-center" sx={{ marginTop: "50px", marginBottom: "10px" }}>
            Seven characteristics of a fully functioning person &mdash; Carl Rogers
          </Typography>
        </aside>
      </section>

      <section>
        <div className="flex space-x-2 w-full pb-2 px-large justify-between">
          {characteristics.map((characteristic, index) => (
            <div
              key={index}
              id={`industry-${index}`}
              className="industry h-24 bg-customPrimary p-medium flex flex-shrink-0 items-center justify-center text-center rounded-lg text-white"
              style={{ flex: "0 0 13%" }} // each characteristic takes 1/7th of the screen width
            >
              {characteristic}
            </div>
          ))}
        </div>
      </section>

    </>

  );
}

function Tablet() {
  return (
    <>
      <section className="px-medium">
        <CBTHeader />
      </section>
      <section className="p-medium flex">
        <img src="/images/CBT_image_1.png" className="h-[400px] w-[400px] rounded-lg mr-small" />
        {/* Text Content */}
        <aside className="min-h-[400px] flex flex-col justify-center">
          <CBTMainContent />
          <CBTPurpose />
        </aside>
      </section>

      <section className="px-medium">
        <div>
          <CBTBenefitsMainContent />
          <CBTBenefitsSubContent />
        </div>

        <Typography variant="h5" className="text-tertiary font-bold mb-small mt-large w-full text-center">
          Seven characteristics of a fully functioning person &mdash; Carl Rogers
        </Typography>
      </section>

      <section>
        <div className="flex space-x-2 w-full pb-2 mx-medium overflow-x-auto">
          {characteristics.map((characteristic, index) => (
            <div
              key={index}
              id={`industry-${index}`}
              className="h-24 w-56 bg-customPrimary flex items-center justify-center text-center text-white rounded-lg flex-shrink-0 flex-grow-0"
            >
              {characteristic}
            </div>
          ))}
        </div>
      </section>
    </>

  );
}

function Mobile() {

  const [cbtChecked, setCbtChecked] = useState(false);
  const [benefitsChecked, setBenefitsChecked] = useState(false);

  return (
    <>
      <section>
        <CBTHeader />
        <CBTMainContent />
        {cbtChecked && (
          <CBTSubContent />
        )}
        <span onClick={() => setCbtChecked(!cbtChecked)} className="px-small text-blue-500">
          {cbtChecked ? "Read less." : "Read more."}
        </span>
      </section>
      <section className="w-full flex items-center justify-center">
        <img src="/images/CBT_image_1.png" className="w-1/2 rounded-lg px-small" />
      </section>

      <section className="w-full px-small">
        <CBTPurpose />
      </section>

      <section className="p-small">
        <div>
          <CBTBenefitsMainContent />
          {benefitsChecked && (
            <CBTBenefitsSubContent />
          )}
          <span onClick={() => setBenefitsChecked(!benefitsChecked)} className="text-blue-500">
            {benefitsChecked ? "Read less." : "Read more."}
          </span>
        </div>

        <h4 className="text-tertiary font-bold my-small">
          Seven characteristics of a fully functioning person &mdash; Carl Rogers
        </h4>
      </section>

      <section>
        <div className="flex space-x-2 w-full pb-2 mx-small overflow-x-auto">
          {characteristics.map((characteristic, index) => (
            <div
              key={index}
              id={`industry-${index}`}
              className="h-24 w-56 bg-customPrimary flex items-center justify-center text-center text-white rounded-lg flex-shrink-0 flex-grow-0"
            >
              {characteristic}
            </div>
          ))}
        </div>
      </section>
    </>

  );
}
