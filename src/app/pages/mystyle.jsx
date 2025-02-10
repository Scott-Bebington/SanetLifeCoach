"use client";

import { Typography, Fade } from "@mui/material";
import { useState } from "react";
import { MyStyleHeading, MainContent, SubContent, Footer } from "../components/my-style/content";

export default function MyStyle() {
  return (
    <main
      key="my-style"
      id="my-style"
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
      <section className="p-large">
        {/* Image placeholder div */}
        <aside className="h-[377px] w-[500px] border-2 border-blue-500 rounded-lg float-left mr-large flex items-center justify-center">
          Image Placeholder maybe small video explaining what you do
        </aside>

        {/* Text Content */}
        <aside className="min-h-[400px] ">
          {/* <Typography variant="h3" className="text-customPrimary font-bold">
            My Style
          </Typography> */}

          <MyStyleHeading />
          <MainContent />
          <SubContent />
        </aside>
      </section>
      <Typography variant="h4" className="p-large text-tertiary w-full flex items-center justify-center text-center">
        DON&apos;T HOLD ONTO THINGS THAT DON&apos;T SERVE YOU
      </Typography>

    </>

  );
}

function Tablet() {
  return (
    <>
      <section className="p-medium">
        {/* Image placeholder div */}
        <aside className="h-[257px] w-[350px] bg-blue-500 rounded-lg float-left mr-small flex items-center justify-center">
          Image Placeholder
        </aside>

        {/* Text Content */}
        <aside>
          <MyStyleHeading />
          <MainContent />
          <SubContent />
        </aside>
      </section>

      <Typography variant="h4" className="p-medium text-tertiary w-full flex items-center justify-center text-center">
        DON&apos;T HOLD ONTO THINGS THAT DON&apos;T
        SERVE YOU
      </Typography>
    </>
  );
}

function Mobile() {

  const [checked, setChecked] = useState(false);

  return (
    <>
      <section className="p-small">
        <MyStyleHeading />
        {/* Image placeholder div */}
        <aside className="h-[300px] w-full bg-green-500 rounded-lg mr-small flex items-center justify-center">
          Image Placeholder
        </aside>

        {/* Text Content */}
        <aside>

          <MainContent>
            {!checked && (
              <span className="text-blue-500 cursor-pointer" onClick={() => setChecked(true)}> Read more.</span>
            )}
          </MainContent>

          {checked && (
            <SubContent>
              {checked && (
                <span className="text-blue-500 cursor-pointer" onClick={() => setChecked(false)}> Read less.</span>
              )}
            </SubContent>
          )}

        </aside>
      </section>

      <Typography variant="h6" className="p-small text-tertiary w-full flex items-center justify-center text-center">
        DON&apos;T HOLD ONTO THINGS THAT DON&apos;T SERVE YOU
      </Typography>
    </>
  )
}
