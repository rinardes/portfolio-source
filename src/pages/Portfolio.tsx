import PortfolioItem from "../components/PortfolioItem";

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
        <div className=" grid grid-cols-1 gap-16 md:grid-cols-2 ">
          <PortfolioItem
            projectURL="https://rinardes-lists.netlify.app/"
            sourceURL="https://github.com/rinardes/my-lists"
            imageURL="projects/my-lists.jpg"
          />

          <PortfolioItem
            sourceURL="https://github.com/rinardes/portfolio-source"
            imageURL="projects/portfolio.jpg"
          />
        </div>
      </div>
    </section>
  );
}
