import { ReactNode } from "react";

const variants = {
  base: "flex h-32 flex-col items-center justify-center border border-borderOnbackground bg-onBackground  hover:border-primary-400",
};

interface CommonProps {
  children: ReactNode;
}

function StackItemContainer({ children }: CommonProps) {
  return <div className={variants.base}>{children}</div>;
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

const stackItems = [
  "html5",
  "css3",
  "js",
  "react",
  "figma",
  "tailwind",
  "ts",
  "chatGPT",
];

export default function Stack() {
  return (
    <section
      className="mx-auto flex min-h-screen max-w-7xl items-center justify-center "
      id="skills"
    >
      <div className="w-full">
        <h3 className="mb-4 text-center text-xl font-medium   text-primary-400">
          Stack
        </h3>

        <h1 className="mb-8 text-center text-5xl font-bold">Habilidades</h1>
        <div className="tech-grid mx-auto max-w-[584px]  scale-95 ">
          {stackItems.map((i) => {
            let currentItem = i;
            currentItem =
              currentItem.charAt(0).toUpperCase() + currentItem.slice(1);
            console.log(i);

            return (
              <StackItemContainer>
                <StackItemIcon src={`images/${i}.svg`} />
                <StackItemTitle>{currentItem}</StackItemTitle>
              </StackItemContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
