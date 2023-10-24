import { ReactNode, useState } from "react";

const stackItems = [
  {
    title: "html5",
    description:
      "Html5 serve para formatar o site. Indica onde vai cada elemento, o que é esse elemento, e qual é o seu conteúdo.",
  },
  {
    title: "css3",
    description:
      "CSS serve para controlar a aparência do site. Ele é quem dita coisas como: cores, fontes, espaçamentos, tamanhos.",
  },
  {
    title: "js",
    description:
      "Javascript(js) é quem controla a funcionalidade e feedback do site. Quando se clica e algo acontece, é js. Quando algo aparece ao rolar a página, é js. Quando se faz um cadastro? Js.",
  },
  {
    title: "react",
    description:
      "React é uma ferramenta, chamamos de framework, que nos permite tratar o nosso código como se fossem blocos de lego. Por exemplo: se existe um botão que se repete várias vezes, eu posso criar esse botão apenas uma vez, e encaixa-lo em todas essas páginas ao invés de o ficar recriando a cada página.",
  },
  {
    title: "figma",
    description:
      "Figma é uma ferramenta de design de interfaces. Ela serve pra fazer o nosso projeto de site, só a parte visual sem funcionalidades.",
  },
  {
    title: "tailwind",
    description:
      "Sabe o css? Então o tailwind tem uma maneira diferente de escreve-lo, algo que você levaria 10 linhas pra fazer, com tailwind você faz em uma :)",
  },
  {
    title: "ts",
    description:
      "Typescript(ts) adiciona novos elementos ao Javascript(js) o tornando mais escalável e confiável, em troca de ter que se escrever mais código e torna-lo mais complexo. É ideal para aplicações mais complexas como jogos, bancos, etc.",
  },
  {
    title: "chatGPT",
    description:
      "ChatGPT é uma ferramente de inteligência artificial. Ela agiliza o desenvolvimento ao tirar dúvidas rapidamente, criar códigos boilerplate, procurar por erros, e muito mais.",
  },
];

const variants = {
  base: "flex cursor-pointer h-32 flex-col items-center justify-center border border-borderOnbackground bg-onBackground  hover:border-primary-400",
};

interface CommonProps {
  children: ReactNode;
}

interface StackItemContainer extends CommonProps {
  clickHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function StackItemContainer({ children, clickHandler }: StackItemContainer) {
  return (
    <div onClick={clickHandler} className={variants.base}>
      {children}
    </div>
  );
}

function StackItemTitle({ children }: CommonProps) {
  return (
    <p className="font-bold tracking-wide text-primary-400 ">{children}</p>
  );
}

const StackItemIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (
  props
) => {
  return <img className="w-16" {...props} />;
};

export default function Stack() {
  const [currentModalIndex, setcurrentModalIndex] = useState(-1);

  const closeModal = () => {
    setcurrentModalIndex(-1);
  };
  return (
    <section
      className=" mx-auto flex min-h-screen max-w-7xl items-center justify-center "
      id="skills"
    >
      {currentModalIndex > -1 && (
        <div
          onClick={closeModal}
          className="fixed left-0 top-0 z-10 flex h-full-h w-full items-center justify-center backdrop-blur-sm  "
        >
          <div className="relative mx-10 max-w-[450px] border border-primary-700 bg-black px-4 py-4 ">
            {stackItems[currentModalIndex].description}
            <button
              onClick={closeModal}
              className="absolute right-0 top-0 flex  -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-[#202327] p-6 hover:bg-[#2c3035] "
            >
              <div className="absolute  h-[2px] w-5 rotate-45 bg-primary-400"></div>
              <div className="absolute  h-[2px] w-5 -rotate-45 bg-primary-400"></div>
            </button>
          </div>
        </div>
      )}
      <div className="w-full">
        <h3 className="mb-4 text-center text-xl font-medium   text-primary-400">
          Stack
        </h3>

        <h1 className="mb-0 text-center text-5xl font-bold">Habilidades</h1>
        <p className="mb-4 text-center">(click nos ícones)</p>
        <div className="tech-grid mx-auto max-w-[584px]  scale-95 ">
          {stackItems.map((i, index) => {
            let currentItem = Object.create(i);
            currentItem.title =
              currentItem.title.charAt(0).toUpperCase() +
              currentItem.title.slice(1);
            return (
              <StackItemContainer
                clickHandler={() => {
                  setcurrentModalIndex(index);
                }}
                key={index}
              >
                <StackItemIcon src={`images/${i.title}.svg`} />
                <StackItemTitle>{currentItem.title}</StackItemTitle>
              </StackItemContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
