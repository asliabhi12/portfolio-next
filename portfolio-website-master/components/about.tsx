"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
      <p className="mb-3">
        In the dance of{" "}
        <span className="italic">
          <span className="font-medium">love</span> and{" "}
          <span className="font-medium">heartbreak</span>
        </span>
        , I found resilience and purpose. Fueled by passion, I transformed pain
        into progress, crafting a compassionate internet. From this journey
        emerged <span className="font-medium">Unicago</span>, a testament to{" "}
        <span className="italic">my love for technology</span>. Through cryptic
        yet poetic technical blogs, I unravel unconventional perspectives,
        sparking discussions and fostering a community.
        </p>
        <p>
        Mastering React and
        Next.js, I embarked on a journey of continuous learning and hands-on
        exploration. With a strong foundation in programming, I delved deep into
        crafting dynamic user interfaces and scalable web applications. My
        commitment to excellence ensures I bring innovative and proficient
        expertise to every project.
      </p>
    </motion.section>
  );
}
