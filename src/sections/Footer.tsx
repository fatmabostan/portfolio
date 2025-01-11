import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerItems = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/fatmabostan/",
  },
  {
    title: "GitHub",
    link: "https://github.com/fatmabostan",
  },
  {
    title: "Email",
    link: "mailto:fatma_bostan_@outlook.com",
  },
];
export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[300px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#d6446f]/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-white/40">Created by Fatma with ❤️</div>
            <div className="text-white/40">&copy; 2025 </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-8">
            {footerItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <span>{item.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
