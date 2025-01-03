import grainImage from "@/assets/images/grain.jpg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import Image from "next/image";

interface Result{
    title: string
}

const Card = ({cardItem}:{cardItem: any}) => {
  return (
    <div>
      <div
        className="bg-[#4C4B6B] rounded-3xl relative z-0 pt-8 px-8 md:pt-12 md:px-10 overflow-hidden after:z-10 after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/70 after:opacity-0 hover:after:opacity-100 hover:after:outline-white/20 pointer-events-none lg:pt-16 lg:px-20"
      >
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="lg:pb-16">
            <div className="gap-2 bg-gradient-to-r from-[#62AEDD] to-[#C56183] inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
              <span>{cardItem.company}</span>
              <span>&bull;</span>
              <span>{cardItem.year}</span>
            </div>
            <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
              {cardItem.title}
            </h3>
            <hr className="border-t-2 border-white/50 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {cardItem.results.map((result: Result, index:number) => (
                <li
                  key={index}
                  className="flex gap-2 text-sm md:text-base text-white/80"
                >
                  <CheckIcon className="size-5 md:size-6" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={cardItem.link}>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-7 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                View Live Site
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
          </div>
          <div className="flex justify-center mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:ml-72 relative">
            <Image
              src={cardItem.image}
              alt={cardItem.title}
              className="lg:absolute lg:h-full lg:w-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
