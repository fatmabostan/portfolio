import memojiComputer from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
export const HeroSection = () => {
  return (
    <div className="bg-sky-gradient py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-3 rounded-full bg-[#ffffff]" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiComputer}
            className="size-[100px]"
            alt="my memoji peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 rounded-full size-2.5"></div>
            <div className="text-sm font-medium">Open to new opportunities</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/70 md:text-lg">
            I spacialize in transforming designs into functional, high
            performing web applications. Let's discuss your next project!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋🏻</span>
            <span className="font-semibold">Connect with Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};