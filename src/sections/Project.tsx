import internHubImg from "@/assets/images/internhub.jpg";
import appImg from "@/assets/images/app.jpg";
import petPediaImg from "@/assets/images/petpedia.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { twMerge } from "tailwind-merge";

export const ProjectSection = ({ t }: { t: { headerTitle: string; headerSubtitle: string; headerDesc: string; portfolioProjects: {title: string; desc: string; features: {feature: string}[]}[]; } }) => {
  const imgURLs = [
    { img: internHubImg, title: "InternHub", mobile: true },
    { img: appImg, title: "App", mobile: true },
    { img: petPediaImg, title: "PetPedia", mobile: false },
  ]
  return (
    <section id="projects" className="pb-16 lg:py-24 pt-12">
      <div className="container">
        <SectionHeader
          title={t.headerTitle}
          subtitle={t.headerSubtitle}
          desc={t.headerDesc}
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {t.portfolioProjects.map((project: any, index: number) => (
            <Card
              key={index}
              className="h-[850px] lg:h-fit pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${index * 60}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="gap-2 bg-gradient-to-r from-[#D6446F] to-[#6EDFBE] inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.title}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.desc}
                  </h3>
                  <hr className="border-t-2 border-white/50 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.features.map(
                      (item: { feature: string }, index: number) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm md:text-base text-white/80"
                        >
                          <CheckIcon className="size-5 md:size-6" />
                          <span>{item.feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-7 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      View Live Site
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="flex justify-center mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:ml-72 relative">
                     <Image
                     src={imgURLs[index].img}
                     alt={imgURLs[index].title}
                     className={twMerge(`lg:absolute ${imgURLs[index].mobile ? "lg:mr-36" : "lg:ml-32"} lg:h-full lg:w-auto lg:max-w-none mt-10`)}
                   />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
