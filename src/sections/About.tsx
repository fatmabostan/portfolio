'use client';
import HeaderSection from "@/components/SectionHeader";
import Card from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import React from "react";

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

export const AboutSection = ({t}: {t: {
  headerTitle: string;
  headerSubtitle: string;
  headerDesc: string;
  cardTitle: string;
  cardDesc: string;
  cardTitle2: string;
  cardDesc2: string;
  mapImageAlt: string;
  smileMemojiAlt: string;
  hobbies: { title: string; emoji: string; left: string; top: string }[];
}}) => {
  const constratinRef = React.useRef<HTMLDivElement>(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <HeaderSection
          title={t.headerTitle}
          subtitle={t.headerSubtitle}
          desc={t.headerDesc}
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1">
            <Card className="h-[320px]">
              <CardHeader
                title={t.cardTitle}
                description={t.cardDesc}
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            </div>
            <div className="md:col-span-3 lg:col-span-2">
            <Card className="h-[320px] p-0">
              <CardHeader
                title={t.cardTitle2}
                description={t.cardDesc2}
              />
              <ToolBoxItems toolBoxItems={toolBoxItems} itemsWrapperClassName="animate-move-left [animation-duration:40s]" />
              <ToolBoxItems
                toolBoxItems={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <div className="md:col-span-3 lg:col-span-2">
            <Card className="h-[320px] flex flex-col">
              <CardHeader
                title={t.cardTitle}
                description={t.cardDesc}
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constratinRef}>
                {t.hobbies.map((item, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex gap-2 items-center px-6 bg-gradient-to-r from-[#d6446f] to-[#44d6ab] rounded-full py-1.5 absolute"
                    style={{ left: item.left, top: item.top }}
                    drag
                    dragConstraints={constratinRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <Card className="h-[320px] p-0 relative">
              <Image
                src={mapImage}
                alt={t.mapImageAlt}
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d6446f] to-[#44d6ab] -z-20 animate-ping [animation-duration:3s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d6446f] to-[#44d6ab] -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt={t.smileMemojiAlt}
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
