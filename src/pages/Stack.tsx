const variants = {
  base: "flex h-32  justify-center border border-borderOnbackground bg-onBackground hover:border-primary-400",
};

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
          <div className={variants.base}>
            <img className="w-16" src="images/html5.svg" alt="" />
          </div>

          <div className={variants.base}>
            <img className="w-16" src="images/css3.svg" alt="" />
          </div>
          <div className={variants.base}>
            <img className="w-16" src="images/js.svg" alt="" />
          </div>
          <div className={variants.base}>
            <img className="w-16" src="images/react.svg" alt="" />
          </div>
          <div className={variants.base}>
            <img className="w-16" src="images/figma.svg" alt="" />
          </div>
          <div className={variants.base}>
            <img className="w-16" src="images/tailwind.svg" alt="" />
          </div>
          <div className={variants.base}>
            <img className="w-16" src="images/ts.svg" alt="" />
          </div>
          <div className={variants.base}>
            <img className="w-16" src="images/chatgpt.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
