import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

export const TapeSection = ({t}: {t: { words: string[] }}) => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-[#d6446f] to-[#44d6ab] -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:40s]">
            {[...new Array(2)].map((_, index) => (
              <Fragment key={index}>
                {t.words.map((word, index) => (
                  <div key={index} className="inline-flex gap-4 items-center">
                    <span className="uppercase font-extrabold text-sm text-[#141619]">{word}</span>
                    <StarIcon className="size-7 text-[#141619] -rotate-6" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
