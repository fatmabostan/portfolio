import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

const Card = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div>
      <div
        className={twMerge(
          "bg-[#2B2D2F] rounded-3xl relative z-0 overflow-hidden after:z-10 after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/70 after:opacity-0 hover:after:opacity-100 hover:after:outline-white/20 after:pointer-events-none",
          className
        )}
      >
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {children}
      </div>
    </div>
  );
};

export default Card;
