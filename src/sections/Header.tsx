import Link from "next/link";

export const Header = ({ t }: { t: { [key: string]: string }}) => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 rounded-full border border-white/50 bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">{t.home}</a>
        <a href="#about" className="nav-item">{t.about}</a>
        <a href="#projects" className="nav-item">{t.projects}</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">{t.contact}</a>
        <Link href={`/${t.dict}`} className="nav-item">
        {t.dict.toUpperCase()}
        </Link>
      </nav>
    </div>
  );
};
