import scrollToElement from "../utils/scrollToElement";

interface NavBar {
  isSide?: boolean;
  onClick?: () => void;
}

const linkBase = "text-xs text-white";
const variants = {
  header: "flex items-center gap-x-8 2xl:gap-x-12",
  sideBar: "mb-32 flex flex-col items-center gap-12 [&>a]:w-fit [&>a]:text-xl",
};

function NavBar({ isSide = false, onClick }: NavBar) {
  return (
    <nav className={isSide ? variants.sideBar : variants.header}>
      <a
        onClick={(e) => {
          scrollToElement(e);
          if (onClick) onClick();
        }}
        className={linkBase}
        href="#inicio"
      >
        INÍCIO
      </a>
      <a
        onClick={(e) => {
          scrollToElement(e);
          if (onClick) onClick();
        }}
        className={linkBase}
        href="#sobre"
      >
        SOBRE
      </a>
      <a
        onClick={(e) => {
          scrollToElement(e);
          if (onClick) onClick();
        }}
        className={linkBase}
        href="#projetos"
      >
        PROJETOS
      </a>
      <a
        onClick={(e) => {
          scrollToElement(e);
          if (onClick) onClick();
        }}
        href="#contato"
        className="rounded-lg bg-primary-400 px-9 py-4 font-primary text-primary-800 transition-transform hover:-translate-y-2 "
      >
        Fale Comigo
      </a>
    </nav>
  );
}

export default NavBar;
