import StarIcon from "@/assets/icons/star.svg";

const words = [
  "JavaScript",
  "React",
  "React Native",
  "Tailwind",
  "SQL",
  "Node.js",
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Responsive",
  "Python",
  "Bootstrap",
  "Cross-platform",
  "C#",
  "Modular",
  "Dynamic",
  "Fast-loading",,
];


export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-[#d6446f] to-[#44d6ab] -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word, index) => (
              <div key={index} className="inline-flex gap-4 items-center">
                <span className="uppercase font-extrabold text-sm text-[#141619]">{word}</span>
                <StarIcon className="size-7 text-[#141619] -rotate-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
