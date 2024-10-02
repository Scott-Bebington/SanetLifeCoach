"use client";

import { Typography, Fade } from "@mui/material";
import { useState } from "react";

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
        <aside className="w-3/5">
          <Typography variant="h3" className="text-primary font-bold w-full mb-small">
            What exactly is Cognitive Behavioral Therapy (CBT)?
          </Typography>
          <Typography>
            CBT is a psychology based personal growth discipline that offers thought provoking insights
            into the relationship between emotions, habits, perspectives, attitudes and behaviours of the human mind.
            <br /> <br />
            Through a process of unblocking limiting beliefs, biases and unhelpful thoughts. I help my clients
            become self-aware, to focus on their abilities and strengths, identifying where they are now, and
            where they would like to be. We concentrate on skills to help you deal with the ever-changing and
            challenging world we live in today.
          </Typography>
          <Typography variant="h4" className="text-secondary font-bold w-full my-small">
            The Purpose of CBT
          </Typography>
          <ul className="text-tertiary list-disc pl-5 space-y-2">
            <li>Understanding your mind</li>
            <li>Raise self-awareness</li>
            <li>Shape inner resilience</li>
            <li>Enhance mental well-being</li>
            <li>Stress reduction</li>
            <li>Confidence</li>
            <li>Motivation</li>
            <li>Life transitions</li>
          </ul>
        </aside>


      </section>
      <section className="px-large flex items-stretch">
        <aside className="w-7/12 flex flex-col justify-between">
          <div>
            <Typography variant="h4" className="text-secondary font-bold mb-small">
              Benefits of CBT
            </Typography>
            <Typography>
              CBT offers a solid base for self-definition where you can evaluate your outlook on life.
              The process will facilitate your personal growth as you learn to make wise decisions around
              how you allocate your time, energy, and resources.
              <br /> <br />
              I truly believe that we are all inherently good and that we all have the right to be happy
              and proud of who we are. It is only through maturing and self-growth that you can let go of
              the limiting ideas that you currently hold as valid and true.
            </Typography>
          </div>

          <Typography variant="h5" className="text-tertiary font-bold mb-small mt-large">
            Seven characteristics of a fully functioning person &mdash; Carl Rogers
          </Typography>
        </aside>

        <img
          src="/images/CBT_image_2.png"
          className="w-5/12 rounded-lg object-cover"
        />
      </section>

      <section>
        <Typography variant="h6" className="px-large py-medium font-bold">
          Growing openness to Experience | Living life Existentially | Increased trust in self | Freedom of choice | Raw creativity | Consistency and Constructiveness | A purpose orientated life
        </Typography>
      </section>
    </>

  );
}

function Tablet() {
  return (
    <>
      <section className="p-medium">
        <img src="/images/CBT_image_1.png" className="h-[400px] w-[400px] rounded-lg float-left mr-small" />

        {/* Text Content */}
        <aside className="min-h-[400px]">
          <Typography variant="h4" className="text-primary font-bold w-full mb-small">
            What exactly is Cognitive Behavioral Therapy (CBT)?
          </Typography>
          <Typography>
            CBT is a psychology based personal growth discipline that offers thought provoking insights
            into the relationship between emotions, habits, perspectives, attitudes and behaviours of the human mind.
            <br /> <br />
            Through a process of unblocking limiting beliefs, biases and unhelpful thoughts. I help my clients
            become self-aware, to focus on their abilities and strengths, identifying where they are now, and
            where they would like to be. We concentrate on skills to help you deal with the ever-changing and
            challenging world we live in today.
          </Typography>
        </aside>
      </section>

      <section className="w-full px-medium flex justify-between">
        <aside className="min-h-[400px]">
          <Typography variant="h4" className="text-secondary font-bold w-full my-small">
            The Purpose of CBT
          </Typography>
          <ul className="text-tertiary list-disc pl-5 space-y-2">
            <li>Understanding your mind</li>
            <li>Raise self-awareness</li>
            <li>Shape inner resilience</li>
            <li>Enhance mental well-being</li>
            <li>Stress reduction</li>
            <li>Confidence</li>
            <li>Motivation</li>
            <li>Life transitions</li>
          </ul>
        </aside>
        <img src="/images/CBT_image_2.png" className="h-[320px] w-[450px] rounded-lg float-left mr-small" />
      </section>


      <section className="px-medium">
        <div>
          <Typography variant="h4" className="text-secondary font-bold mb-small">
            Benefits of CBT
          </Typography>
          <Typography>
            CBT offers a solid base for self-definition where you can evaluate your outlook on life.
            The process will facilitate your personal growth as you learn to make wise decisions around
            how you allocate your time, energy, and resources.
            <br /> <br />
            I truly believe that we are all inherently good and that we all have the right to be happy
            and proud of who we are. It is only through maturing and self-growth that you can let go of
            the limiting ideas that you currently hold as valid and true.
          </Typography>
        </div>

        <Typography variant="h5" className="text-tertiary font-bold mb-small mt-large">
          Seven characteristics of a fully functioning person &mdash; Carl Rogers
        </Typography>
        <Typography variant="h6" className="font-bold">
          Growing openness to Experience | Living life Existentially | Increased trust in self | Freedom of choice | Raw creativity | Consistency and Constructiveness | A purpose orientated life
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
      <section>
        <Typography variant="h4" className="p-small text-primary font-bold w-full text-center mb-small">
          What exactly is Cognitive Behavioral Therapy (CBT)?
        </Typography>
        <Typography variant="body1" className="px-small w-full">
          CBT is a psychology based personal growth discipline that offers thought provoking insights
          into the relationship between emotions, habits, perspectives, attitudes and behaviours of the human mind.
        </Typography>
        {cbtChecked && (
          <Typography variant="body1" className="p-small w-full">
            CBT is a psychology based personal growth discipline that offers thought provoking insights
            into the relationship between emotions, habits, perspectives, attitudes and behaviours of the human mind.

            Through a process of unblocking limiting beliefs, biases and unhelpful thoughts. I help my clients
            become self-aware, to focus on their abilities and strengths, identifying where they are now, and
            where they would like to be. We concentrate on skills to help you deal with the ever-changing and
            challenging world we live in today.
          </Typography>
        )}
        <span onClick={() => setCbtChecked(!cbtChecked)} className="px-small text-blue-500">
          {cbtChecked ? "Read less." : "Read more."}
        </span>
      </section>
      <img src="/images/CBT_image_1.png" className="w-full rounded-lg px-small" />

      <section className="w-full px-small">
        <Typography variant="h4" className="text-secondary font-bold w-full my-small">
          The Purpose of CBT
        </Typography>
        <ul className="text-tertiary list-disc pl-5 space-y-2">
          <li>Understanding your mind</li>
          <li>Raise self-awareness</li>
          <li>Shape inner resilience</li>
          <li>Enhance mental well-being</li>
          <li>Stress reduction</li>
          <li>Confidence</li>
          <li>Motivation</li>
          <li>Life transitions</li>
        </ul>
      </section>

      <section className="p-small">
        <div>
          <Typography variant="h4" className="text-secondary font-bold mb-small">
            Benefits of CBT
          </Typography>
          <Typography variant="body1" className="w-full">
            CBT offers a solid base for self-definition where you can evaluate your outlook on life.
            The process will facilitate your personal growth as you learn to make wise decisions around
            how you allocate your time, energy, and resources.
          </Typography>
          {benefitsChecked && (
            <Typography variant="body1" className="w-full">
              I truly believe that we are all inherently good and that we all have the right to be happy
              and proud of who we are. It is only through maturing and self-growth that you can let go of
              the limiting ideas that you currently hold as valid and true.
            </Typography>
          )}
          <span onClick={() => setBenefitsChecked(!benefitsChecked)} className="text-blue-500">
            {benefitsChecked ? "Read less." : "Read more."}
          </span>
        </div>

        <Typography variant="h5" className="text-tertiary font-bold my-small">
          Seven characteristics of a fully functioning person &mdash; Carl Rogers
        </Typography>
        <Typography variant="body1" className="">
          Growing openness to Experience | Living life Existentially | Increased trust in self | Freedom of choice | Raw creativity | Consistency and Constructiveness | A purpose orientated life
        </Typography>
      </section>
    </>

  );
}
