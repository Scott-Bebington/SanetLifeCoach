"use client";

import { Typography, Fade } from "@mui/material";
import { useState } from "react";

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
        <aside className="h-[377px] w-[500px] bg-red-500 rounded-lg float-left mr-small flex items-center justify-center">
          Image Placeholder
        </aside>

        {/* Text Content */}
        <aside className="min-h-[400px]">
          <Typography variant="h4" className="text-primary font-bold">
            My Style
          </Typography>
          <Typography sx={{ marginTop: '5px' }}>
            I assist my clients in navigating challenges, fostering a safe, nurturing environment for self-forgiveness,
            self-awareness, self-management and self-love. My strength-based process focuses on shifting client&apos;s perspective,
            allowing exploration of new insights into the self, identifying the barriers keeping them stuck and steering them
            in the direction of their own unique potential. 
            <br /><br />
            Groundwork is laid for ongoing growth, equipped with skills for constructive change.
            My fascination and passion for people and how we think, react, and operate has brought me down a path of ongoing self-exploration
            and has helped me to develop a deep understanding, insight, and acceptance of myself. This has inspired me to follow a deep desire to
            facilitate others so that they too, may experience the peace of mind that comes from self-acceptance and self-love. Literally, “warts and all”.
            <br /><br />
            The combination of Life coaching and Cognitive Behavioral Therapy provides an in-depth approach when facilitating insight, providing supportive
            guidance as well as the encouragement to identify obstacles to self-acceptance. Thus, laying down new pathways for a more fulfilled life and goal achievement.
            I also like to invest time on working with being <span className="text-primary">PRESENT</span>, it hasn&apos;t become a buzz word for nothing.
            Due to modern technology, lifestyle, and other exterior influences, the practice of being present has become ever more challenging. A lack of or presence will hinder the most ultimate state of
            <span className="text-secondary"> MINDFULNESS.</span> By letting the past, society, or exterior influences define who we are, we often stay trapped by our own limiting beliefs.
          </Typography>
        </aside>
      </section>
      <Typography variant="h4" className="p-large text-tertiary w-full flex items-center justify-center text-center">
        DON&apos;T HOLD ONTO THINGS THAT DON&apos;T SERVE YOU &mdash; LET THEM GO!
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
          <Typography variant="h4" className="text-primary font-bold">
            My Style
          </Typography>
          <Typography sx={{ marginTop: '5px' }}>
            I assist my clients in navigating challenges, fostering a safe, nurturing environment for self-forgiveness,
            self-awareness, self-management and self-love. My strength-based process focuses on shifting client&apos;s perspective,
            allowing exploration of new insights into the self, identifying the barriers keeping them stuck and steering them
            in the direction of their own unique potential. 
            <br /><br />
            Groundwork is laid for ongoing growth, equipped with skills for constructive change.
            My fascination and passion for people and how we think, react, and operate has brought me down a path of ongoing self-exploration
            and has helped me to develop a deep understanding, insight, and acceptance of myself. This has inspired me to follow a deep desire to
            facilitate others so that they too, may experience the peace of mind that comes from self-acceptance and self-love. Literally, “warts and all”.
            <br /><br />
            The combination of Life coaching and Cognitive Behavioral Therapy provides an in-depth approach when facilitating insight, providing supportive
            guidance as well as the encouragement to identify obstacles to self-acceptance. Thus, laying down new pathways for a more fulfilled life and goal achievement.
            I also like to invest time on working with being <span className="text-primary">PRESENT</span>, it hasn&apos;t become a buzz word for nothing.
            Due to modern technology, lifestyle, and other exterior influences, the practice of being present has become ever more challenging. A lack of or presence will hinder the most ultimate state of
            <span className="text-secondary"> MINDFULNESS.</span> By letting the past, society, or exterior influences define who we are, we often stay trapped by our own limiting beliefs.
          </Typography>
        </aside>
      </section>

      <Typography variant="h4" className="p-medium text-tertiary w-full flex items-center justify-center text-center">
        DON&apos;T HOLD ONTO THINGS THAT DON&apos;T
        SERVE YOU &mdash; LET THEM GO!
      </Typography>
    </>
  );
}

function Mobile() {

  const [checked, setChecked] = useState(false);

  return (
    <>
      <section className="p-small">
        <Typography variant="h4" className="text-primary font-bold w-full text-center mb-small">
          My Style
        </Typography>
        {/* Image placeholder div */}
        <aside className="h-[300px] w-full bg-green-500 rounded-lg mr-small flex items-center justify-center">
          Image Placeholder
        </aside>

        {/* Text Content */}
        <aside>

          <Typography sx={{ marginTop: '5px' }}>
            I assist my clients in navigating challenges, fostering a safe, nurturing environment for self-forgiveness,
            self-awareness, self-management and self-love. My strength-based process focuses on shifting client&apos;s perspective,
            allowing exploration of new insights into the self, identifying the barriers keeping them stuck and steering them
            in the direction of their own unique potential.
            <br /><br />
            {!checked && (
              <span className="text-blue-500 cursor-pointer" onClick={() => setChecked(true)}> Read more.</span>
            )}

          </Typography>
          {checked && (
            <Typography>
              Groundwork is laid for ongoing growth, equipped with skills for constructive change.
              My fascination and passion for people and how we think, react, and operate has brought me down a path of ongoing self-exploration
              and has helped me to develop a deep understanding, insight, and acceptance of myself. This has inspired me to follow a deep desire to
              facilitate others so that they too, may experience the peace of mind that comes from self-acceptance and self-love. Literally, “warts and all”.
              <br /><br />
              The combination of Life coaching and Cognitive Behavioral Therapy provides an in-depth approach when facilitating insight, providing supportive
              guidance as well as the encouragement to identify obstacles to self-acceptance. Thus, laying down new pathways for a more fulfilled life and goal achievement.
              I also like to invest time on working with being <span className="text-primary">PRESENT</span>, it hasn&apos;t become a buzz word for nothing.
              Due to modern technology, lifestyle, and other exterior influences, the practice of being present has become ever more challenging. A lack of or presence will hinder the most ultimate state of
              <span className="text-secondary"> MINDFULNESS.</span> By letting the past, society, or exterior influences define who we are, we often stay trapped by our own limiting beliefs.
              {checked && (
                <span className="text-blue-500 cursor-pointer" onClick={() => setChecked(false)}> Read less.</span>
              )}
            </Typography>
          )}

        </aside>
      </section>

      <Typography variant="h4" className="p-small text-tertiary w-full flex items-center justify-center text-center">
        DON&apos;T HOLD ONTO THINGS THAT DON&apos;T
        SERVE YOU &mdash; LET THEM GO!
      </Typography>
    </>
  )
}
