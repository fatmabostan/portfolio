import memojiComputer from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
export const HeroSection = ({t}: {t: {[key: string]: string}}) => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
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
        <HeroOrbit size={800} rotation={-65} shouldOrbit shouldSpin orbitDuration="58s" spinDuration="6s">
          <StarIcon className="size-28 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={890} rotation={110} shouldOrbit shouldSpin orbitDuration="58s" spinDuration="8s">
          <StarIcon className="size-20 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={870} rotation={-45} shouldOrbit shouldSpin orbitDuration="58s" spinDuration="6s">
          <StarIcon className="size-16 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit shouldSpin orbitDuration="48s" spinDuration="6s">
          <StarIcon className="size-12 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit shouldSpin orbitDuration="50s" spinDuration="6s">
          <StarIcon className="size-8 text-[#ffffff]" />
        </HeroOrbit>
        <HeroOrbit size={830} rotation={-14} shouldOrbit shouldSpin orbitDuration="50s" spinDuration="3s">
          <SparkleIcon className="size-8 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={840} rotation={79} shouldOrbit shouldSpin orbitDuration="42s" spinDuration="3s">
          <SparkleIcon className="size-5 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={860} rotation={165} shouldOrbit shouldSpin orbitDuration="42s" spinDuration="5s">
          <SparkleIcon className="size-10 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} shouldOrbit shouldSpin orbitDuration="50s" spinDuration="3s">
          <SparkleIcon className="size-8 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit shouldSpin orbitDuration="42s" spinDuration="3s">
          <SparkleIcon className="size-5 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={870} rotation={-85} shouldOrbit shouldSpin orbitDuration="42s" spinDuration="3s">
          <SparkleIcon className="size-10 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit shouldSpin orbitDuration="46s" spinDuration="3s">
          <SparkleIcon className="size-10 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit shouldSpin orbitDuration="54s" spinDuration="3s">
          <SparkleIcon className="size-14 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="56s">
          <div className="size-3 rounded-full bg-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={580} rotation={-41} shouldOrbit shouldSpin orbitDuration="34s" spinDuration="3s">
          <SparkleIcon className="size-5 text-[#ffffff]/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="52s">
          <div className="size-3 rounded-full bg-[#ffffff]/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiComputer}
            className="size-[100px]"
            alt={t.memojiComputerAlt}
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 rounded-full size-2.5 relative"><div className="absolute inset-0 rounded-full bg-green-500 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">{t.availability}</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide">
            {t.heroTitle}
          </h1>
          <p className="mt-4 text-center text-white/70 md:text-lg">
            {t.heroDescription}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white px-6 h-12 rounded-xl">
            <span className="font-semibold">{t.exploreButton}</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋🏻</span>
            <span className="font-semibold">{t.contactButton}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
