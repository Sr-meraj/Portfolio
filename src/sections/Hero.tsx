import ArrowDown from "@/assets/icons/arrow-down.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import MongoDBIcon from "@/assets/icons/MongoDB.svg";
import NextjsIcon from "@/assets/icons/Next.js.svg";
import NodeJsIcon from "@/assets/icons/Node.js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import SquareJsIcon from "@/assets/icons/square-js.svg";
import StarIcon from "@/assets/icons/star.svg";
import WebflowIcon from "@/assets/icons/Webflow.svg";
import WordpressIcon from "@/assets/icons/wordpress.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import HeroOrbit from "@/components/HeroOrbit";
import Image from "../../node_modules/next/image";

const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-20">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <Css3Icon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <Html5Icon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={179}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="5s"
        >
          <SquareJsIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="4s"
        >
          <NodeJsIcon className="size-8 rounded-full  bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="31s"
          shouldSpin
          spinDuration="5s"
        >
          <NextjsIcon className="size-10 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="4s"
        >
          <ReactIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <GithubIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <MongoDBIcon className="size-8 rounded-full p-1 bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <WebflowIcon className="size-14 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="7s"
        >
          <WordpressIcon className="size-14 rounded-full  bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container z-10">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex justify-center items-center rounded-lg gap-4">
            <div className="bg-green-500 rounded-full size-2.5  relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-lg"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications, Let's discuss your next project.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
