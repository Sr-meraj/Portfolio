"use client";
import ChromeIcon from "@/assets/icons/chrome.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import MongoDBIcon from "@/assets/icons/MongoDB.svg";
import MySQLIcon from "@/assets/icons/MySQL.svg";
import NextjsIcon from "@/assets/icons/Next.js.svg";
import NodeJsIcon from "@/assets/icons/Node.js.svg";
import PostmanIcon from "@/assets/icons/Postman.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TailwindCSSIcon from "@/assets/icons/TailwindCSS.svg";
import WebflowIcon from "@/assets/icons/Webflow.svg";
import WordpressIcon from "@/assets/icons/wordpress.svg";

import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindCSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "MySQL",
    iconType: MySQLIcon,
  },
  {
    title: "NodeJs",
    iconType: NodeJsIcon,
  },
  {
    title: "Nextjs",
    iconType: NextjsIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
  {
    title: "Webflow",
    iconType: WebflowIcon,
  },
  {
    title: "Wordpress",
    iconType: WordpressIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "👟",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div
      className="py-20 lg:py-28"
      id="about"
    >
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, What I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1  md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={bookImage}
                  alt="Book Cover"
                  className=""
                />
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolBoxItems}
                className=""
                itemsWrapperclassName="animate-move-left [animation-duration:15s]"
              />
              <ToolboxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperclassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px]  flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 pt-6"
              />
              <div
                className="relative flex-1"
                ref={constraintRef}
              >
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-move"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-meduim text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
              <Image
                className="h-full w-full object-cover object-left-top"
                src={mapImage}
                alt="Map"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  className="size-20"
                  src={smileMemoji}
                  alt="smiling Memoji"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
