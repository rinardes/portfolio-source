import SocialMedia from "../components/SocialMedia";
import scrollToElement from "../utils/scrollToElement";

function Home() {
  return (
    <section
      id="inicio"
      className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 pt-32 md:min-h-screen md:flex-row md:gap-24 lg:pt-52"
    >
      <div className=" flex flex-col justify-between text-center md:block md:text-left">
        <div className="mb-12">
          <h1 className="mb-4  text-3xl font-bold lg:text-4xl">
            Seu site disponível em qualquer lugar
          </h1>
          <p className="text-base  font-light text-paragraph lg:text-lg">
            Sou um desenvolvedor web que faz os seus sites funcionarem em
            celulares, tablets, computadores e muito mais. Aqui, nós fazemos
            parte do futuro!
          </p>
        </div>
        <div className="flex w-full justify-center md:mt-10 md:justify-start">
          <a
            href="#contact"
            className="rounded-lg bg-primary-400 px-10 py-5 text-sm capitalize text-primary-900 "
            onClick={scrollToElement}
          >
            Venha Fazer Parte Também
          </a>
        </div>
      </div>
      <div
        className={`rounded-m order-1 self-stretch md:flex lg:flex-shrink-0 lg:basis-[40%] `}
      >
        <img
          className="mb-4 hidden h-full min-h-[244px] flex-grow rounded-md object-cover min-[480px]:block md:mb-0 md:w-4/5"
          src="/images/bg4.webp"
          alt="Mulher com óculos de realidade virtual"
        />
        <SocialMedia isVertical />
      </div>
    </section>
  );
}

export default Home;
