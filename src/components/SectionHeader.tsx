const SectionHeader = ({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle: string;
  text: string;
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-[#D6446F] to-[#44d6ab] text-transparent bg-clip-text text-center">
          {title}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {subtitle}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/80 mt-4 max-w-md mx-auto">
        {text}
      </p>
    </div>
  );
};

export default SectionHeader;
