"use client"

import { Typography } from "@mui/material";

export function MyStyleHeading() {
    return (
        <>
            <Typography variant="h3" className="text-customPrimary font-bold hidden lg:block">
                My Style
            </Typography>
            <Typography variant="h4" className="text-customPrimary font-bold lg:hidden">
                My Style
            </Typography>
        </>
    )
}

export function MainContent({ children }) {
    return (
        <>
            <Typography variant="body1" sx={{ marginTop: '5px' }}>
                I assist my clients in navigating challenges, fostering a safe, nurturing environment for self-forgiveness,
                self-awareness, self-management and self-love. My strength-based process focuses on shifting client&apos;s perspective,
                allowing exploration of new insights into the self, identifying the barriers keeping them stuck and steering them
                in the direction of their own unique potential.
                {children}
                <br></br> <br></br>
            </Typography>
        </>
    )
}

export function SubContent({ children }) {
    return (
        <>
            <Typography variant="body1">
                Groundwork is laid for ongoing growth, equipped with skills for constructive change.
                My fascination and passion for people and how we think, react, and operate has brought me down a path of ongoing self-exploration
                and has helped me to develop a deep understanding, insight, and acceptance of myself and others. This has inspired me to follow a deep desire to
                facilitate others so that they too, may experience the peace of mind that comes from self-acceptance and self-love. Literally, “warts and all”.
                <br /><br />
                The combination of Life coaching and Cognitive Behavioral Therapy provides an in-depth approach when facilitating insight, providing supportive
                guidance as well as the encouragement to identify obstacles to self-acceptance. Thus, laying down new pathways for a more fulfilled life and goal achievement by letting the past, society, or exterior influences define who we are, we often stay trapped by our own limiting beliefs.
                I like to invest time in working with being <span className="text-customPrimary">PRESENT</span>, it hasn&apos;t become a buzz word for nothing.
                Due to modern technology, lifestyle, and other exterior influences, the practice of being present has become ever more challenging. A lack of or presence will hinder the most ultimate state of
                <span className="text-secondary"> MINDFULNESS.</span>
                <span className="md:hidden">
                    {children}
                </span>
            </Typography>
        </>
    )
}

export function Footer() {
    return (
        <>
            <Typography variant="h4" className="p-large text-tertiary w-full flex items-center justify-center text-center hidden lg:block">
                DON&apos;T HOLD ONTO THINGS THAT DON&apos;T SERVE YOU
            </Typography>
            <Typography variant="h6" className="p-large text-tertiary w-full flex items-center justify-center text-center lg:hidden">
                DON&apos;T HOLD ONTO THINGS THAT DON&apos;T SERVE YOU
            </Typography>
        </>
    )
}