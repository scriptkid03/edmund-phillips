"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.4;

export default function HomePage() {
  return (
    <main className='min-h-screen flex flex-col justify-center items-center text-center px-4'>
      <BlurFadeText
        delay={BLUR_FADE_DELAY}
        className='text-4xl md:text-6xl font-extrabold tracking-tight'
        yOffset={10}
        text={`Hi, I'm Edmund 👋`}
      />

      <div className='flex flex-col items-center gap-10'>
        <BlurFade delay={BLUR_FADE_DELAY + 0.2} offset={18} direction='down'>
          <TypeAnimation
            sequence={[
              2000,
              "Frontend Developer",
              1500,
              "Aspiring Mobile App Developer",
              1500,
              "UI/UX Enthusiast",
              1500,
              "Problem Solver",
              1500,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='text-xl md:text-2xl font-medium mb-8'
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY + 0.4} offset={20} direction='down'>
          <div className='flex gap-4'>
            <Link
              href={"/projects"}
              className='flex justify-center items-center py-2 px-3 rounded-full text-lg font-semibold bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 cursor-pointer transition-all'
            >
              View My Work
            </Link>
            <Link
              href={"/projects"}
              className='flex justify-center items-center py-2 px-3 rounded-full text-lg font-semibold border shadow-xs hover:bg-primary/90 cursor-pointer transition-all'
            >
              Contact Me
            </Link>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
