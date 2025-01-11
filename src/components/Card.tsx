import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

const Card = ({
  children,
  className,
  ...others
}: ComponentPropsWithoutRef<"div">) => {
  return (
      <div
        className={twMerge(
          "bg-[#2B2D2F] rounded-3xl relative z-0 overflow-hidden after:content-[' '] after:z-10 after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",
          className
        )}
        {...others}
      >
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {children}
      </div>
  );
};

export default Card;
