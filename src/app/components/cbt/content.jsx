"use client";

import { Typography } from "@mui/material";
import Typewriter from 'typewriter-effect';

export function CBTHeader() {
    return (
        <>
            <Typography variant="h3" className="text-customPrimary font-bold w-full mb-small hidden lg:block">
                What exactly is Cognitive Behavioral Therapy (CBT)?
            </Typography>
            <Typography variant="h4" className="text-customPrimary font-bold w-full mb-small lg:hidden">
                What exactly is Cognitive Behavioral Therapy (CBT)?
            </Typography>
        </>
    );
}

export function CBTMainContent() {
    return (
        <>
            <Typography variant="body1" className="px-small w-full">
                CBT is a psychology based personal growth discipline that offers thought provoking insights
                into the relationship between emotions, habits, perspectives, attitudes and behaviours of the human mind.
            </Typography>
        </>
    )
}

export function CBTSubContent() {
    return (
        <>
            <Typography variant="body1" className="p-small w-full">
                CBT is a psychology based personal growth discipline that offers thought provoking insights
                into the relationship between emotions, habits, perspectives, attitudes and behaviours of the human mind.

                Through a process of unblocking limiting beliefs, biases and unhelpful thoughts. I help my clients
                become self-aware, to focus on their abilities and strengths, identifying where they are now, and
                where they would like to be. We concentrate on skills to help you deal with the ever-changing and
                challenging world we live in today.
            </Typography>
        </>
    )
}

export function CBTPurpose() {
    return (
        <div>
            <Typography variant="h4" className="text-secondary font-bold w-full mb-medium mt-large">
                The Purpose of CBT
            </Typography>
            <Typewriter
                options={{
                    strings: ['Understanding your mind', 'Raise self-awareness', 'Shape inner resilience', 'Enhance mental well-being', 'Stress reduction', 'Confidence', 'Motivation', 'Life transitions'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                }}
            />
        </div>
    )
}

export function CBTBenefitsMainContent() {
    return (
        <>
            <Typography variant="h4" className="text-secondary font-bold mb-small">
                Benefits of CBT
            </Typography>
            <Typography variant="body1" className="w-full">
                CBT offers a solid base for self-definition where you can evaluate your outlook on life.
                The process will facilitate your personal growth as you learn to make wise decisions around
                how you allocate your time, energy, and resources.
            </Typography>
            <br></br>
        </>
    )
}

export function CBTBenefitsSubContent() {
    return (
        <>
            <Typography variant="body1" className="w-full">
                I truly believe that we are all inherently good and that we all have the right to be happy
                and proud of who we are. It is only through maturing and self-growth that you can let go of
                the limiting ideas that you currently hold as valid and true.
            </Typography>
        </>
    )
}