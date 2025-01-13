import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = ({t}: {
  t:{
    contactTitle:string;
    contactText:string;
    contactButton:string;
  }
}) => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-[#D6446F] to-[#44d6ab] text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex flex-col">
              <h2 className="font-serif text-2xl md:text-3xl">
                 {t.contactTitle}
              </h2>
              <p className="text-sm md:text-base mt-2">
                {t.contactText}
              </p>
            </div>
            <div className="w-full md:w-max">
              <a href="mailto:fatma_bostan_@outlook.com">
            <button className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 mt-8 border border-gray-900 w-full md:w-max" >
              <span className="font-semibold">{t.contactButton}</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
