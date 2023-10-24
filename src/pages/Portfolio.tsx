export default function Portfolio() {
  return (
    <section
      id="projects"
      className="mx-auto flex  max-w-7xl flex-col items-center"
    >
      <h2 className="text-center font-primary text-xl font-medium  text-primary-400">
        Portfolio
      </h2>
      <h1 className="mb-10 font-primary text-5xl font-bold text-white">
        Projects
      </h1>
      <div className="flex w-full flex-col items-center border border-borderOnbackground bg-onBackground py-4">
        <div className="col-span-3 grid grid-cols-1 ">
          <div className="flex flex-col items-center ">
            <img className=" border-[6px]" src="projects/my-lists.jpg" />
            <button className="mt-4 w-full rounded-md border border-border py-2 hover:bg-primary-400">
              <a href="https://rinardes-lists.netlify.app/" target="_blank">
                Ver Projeto
              </a>
            </button>
            <button className="mt-4 w-full rounded-md border border-border py-2 hover:bg-primary-400">
              <a href="https://github.com/rinardes/my-lists" target="_blank">
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
