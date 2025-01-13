import Card from "@/components/Card";
import Image from "next/image";
import memojiAvatar from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import SectionHeader from "@/components/SectionHeader";
import { Fragment } from "react";

const experienceLogo = [
  { logo: memojiAvatar },
  { logo: memojiAvatar2 },
  { logo: memojiAvatar3 }
]
export const ExperienceSection = ({t}: {
  t:{
    headerTitle: string;
    headerSubtitle: string;
    headerDesc: string;
    experience: { company: string; year: string; position: string; results: { title: string }[] }[]
  }
}) => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title={t.headerTitle}
          subtitle={t.headerSubtitle}
          desc={t.headerDesc}
        />
        <div className="mt-12 lg:mt-24 flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-x-clip py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:100s] hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, index) => (
              <Fragment key={index}>
                {t.experience.map((item, index) => (
            <Card key={index} className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
              <div className="flex gap-4 items-center">
                <div className="size-14 bg-[#424446] inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Image
                    src={experienceLogo[index].logo}
                    alt={item.company}
                    className="max-h-full"
                  />
                </div>
                <div>
                  <div className="font-semibold">
                    <span>{item.company}</span> 
                    <span>&bull;</span>
                    <span>{item.year}</span>
                  </div>
                  <div className="text-sm text-white/80">{item.position}</div>
                </div>
              </div>
              <div className="mt-4 md:mt-6 text-sm md:text-base">
              {item.results.map((result, index) => (
                <div key={index}>{result.title}</div>
              ))}
              </div>
            </Card>
          ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
