import HeaderSection from "@/components/SectionHeader";
import Card from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";

const toolBoxItems = [
  {
    title: "React",
    icon: JavascriptIcon,
  },
  {
    title: "React",
    icon: JavascriptIcon,
  },
  {
    title: "React",
    icon: JavascriptIcon,
  },
  {
    title: "React",
    icon: JavascriptIcon,
  },
  {
    title: "React",
    icon: JavascriptIcon,
  },
  {
    title: "React",
    icon: JavascriptIcon,
  },
  {
    title: "React",
    icon: JavascriptIcon,
  },
  {
    title: "React",
    icon: JavascriptIcon,
  },
  {
    title: "React",
    icon: JavascriptIcon,
  },
  {
    title: "React",
    icon: JavascriptIcon,
  },
];

const hobbies = [
  {
    title: "Travelling",
    emoji: "🌍",
    left: "5%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "50%",
    top: "50%",
  },
  {
    title: "Coding",
    emoji: "💻",
    left: "10%",
    top: "35%",
  },
  {
    title: "Writing",
    emoji: "✍️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "70%",
    top: "45%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "65%",
  },
  {
    title: "Sleeping",
    emoji: "💤",
    left: "45%",
    top: "70%",
  },
];
export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <HeaderSection
          title="About Me"
          subtitle="About"
          text="lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure eligendi pariatur aspernatur vitae repellat velit, placeat iusto animi quia libero ducimus nobis unde soluta quam! Saepe numquam quasi eligendi. "
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1">
            <Card className="h-[320px]">
              <CardHeader
                title="My Story"
                description="ipsum dolor sit amet consectetur adipisicing elit."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            </div>
            <div className="md:col-span-3 lg:col-span-2">
            <Card className="h-[320px] p-0">
              <CardHeader
                title="My Toolbox"
                description="ipsum dolor sit amet consectetur adipisicing elit."
                className=""
              />
              <ToolBoxItems toolBoxItems={toolBoxItems} className="" />
              <ToolBoxItems
                toolBoxItems={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <div className="md:col-span-3 lg:col-span-2">
            <Card className="h-[320px] flex flex-col">
              <CardHeader
                title="My Hobbies"
                description="ipsum dolor sit amet consectetur adipisicing elit."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex gap-2 items-center px-6 bg-gradient-to-r from-[#d6446f] to-[#44d6ab] rounded-full py-1.5 absolute"
                    style={{ left: item.left, top: item.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <Card className="h-[320px] p-0 relative">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-[#d6446f] to-[#44d6ab] after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt="my memoji is smiling"
                  className="size-20"
                />
              </div>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
