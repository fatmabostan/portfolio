import Card from "@/components/Card";
import Image from "next/image";
import memojiAvatar from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import SectionHeader from "@/components/SectionHeader";

const experience = [
  {
    company: "TechCorp",
    year: "2023",
    image: memojiAvatar,
    position: "Frontend Developer",
    results: [
      { title: "Developed a responsive web application" },
      { title: "Integrated APIs for dynamic data exchange" },
      { title: "Collaborated with a team using Agile methodology" },
    ],
  },
  {
    company: "InnovateX",
    year: "2022",
    image: memojiAvatar2,
    position: "Backend Developer",
    results: [
      { title: "Optimized database queries, reducing latency by 30%" },
      { title: "Designed UI components using React.js" },
      { title: "Participated in daily stand-ups and sprint planning" },
    ],
  },
  {
    company: "Creative Solutions",
    year: "2021",
    image: memojiAvatar3,
    position: "UX Designer",
    results: [
      { title: "Conducted market research to identify user needs" },
      { title: "Built prototypes for a mobile application" },
      {
        title:
          "Presented findings to stakeholders, receiving positive feedback",
      },
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Internship"
          subtitle="Internship"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        iure eligendi pariatur aspernatur vitae repellat velit, placeat iusto
        animi quia libero ducimus nobis unde soluta quam! Saepe numquam quasi
        eligendi. "
        />
        <div className="mt-16 md:mt-24 flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-wrap justify-center gap-8">
          {experience.map((item, index) => (
            <Card key={index} className="max-w-xs md:max-w-md p-6 md:p-8">
              <div className="flex gap-4 items-center">
                <div className="size-14 bg-[#424446] inline-flex items-center justify-center rounded-full">
                  <Image
                    src={item.image}
                    alt={item.company}
                    className="max-h-full"
                  />
                </div>
                <div>
                  <div className="font-semibold">
                    {item.company} - {item.year}
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
          </div>
        </div>
      </div>
    </div>
  );
};